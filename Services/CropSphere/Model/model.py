import pandas as pd
import joblib
import datetime
from collections import defaultdict
import numpy as np
import requests

def get_lat_lon_from_zip(zip_code, api_key):
    url = f"http://api.openweathermap.org/geo/1.0/zip?zip={zip_code},IN&appid={api_key}"
    response = requests.get(url)
    data = response.json()

    if response.status_code != 200 or 'lat' not in data or 'lon' not in data:
        print("Error fetching coordinates:", data)
        return None, None
    
    print(f"Latitude: {data['lat']}, Longitude: {data['lon']}, City: {data.get('name')}")
    return data['lat'], data['lon'], data.get('name')


def get_weather_forecast(lat, lon, api_key):
    # CORRECTED ENDPOINT (5-day forecast)
    url = f"http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={api_key}&units=metric"

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Weather API Error: {str(e)}")
        return None
    
    try:
        data = response.json()
    except Exception as e:
        print("JSON parsing failed:", e)
        return None
        
    if response.status_code != 200:
        print(f"API Error {response.status_code}: {data.get('message')}")
        return None
        
    return data


def preprocess_weather_data(weather_data):
    if not weather_data or 'list' not in weather_data:
        return None

    total_temp = 0
    total_humidity = 0
    total_rain = 0
    count = len(weather_data['list'])  # Number of 3-hour intervals

    for entry in weather_data['list']:
        # Extract data from the CORRECT structure
        total_temp += entry['main']['temp']
        total_humidity += entry['main']['humidity']
        
        # Safely get rainfall (3h window)
        rain_data = entry.get('rain', {})
        total_rain += rain_data.get('3h', 0)

    # Calculate averages
    return {
        'avg_temp': total_temp / count,
        'humidity': total_humidity / count,
        'rainfall': (total_rain / count) * 8  # Convert 3h avg to daily
    }

def get_daily_average_forecast(weather_data):
    """
    Convert 3-hourly forecast data into a list of daily averages for temperature, humidity, and rainfall.
    """
    if not weather_data or 'list' not in weather_data:
        return []

    # Group by date (YYYY-MM-DD), collecting temps, humidity, and rainfall
    from collections import defaultdict
    daily_data = defaultdict(lambda: {
        'temps': [],
        'humidity': [],
        'rainfall': [],
        'icons': []
    })

    for entry in weather_data['list']:
        dt_txt = entry['dt_txt']  # e.g. '2025-03-13 03:00:00'
        date_str = dt_txt.split(' ')[0]  # '2025-03-13'

        # Extract temperature and humidity
        temp = entry['main']['temp']
        hum = entry['main']['humidity']

        # Extract rainfall from the 'rain' field (3h rainfall)
        rain_data = entry.get('rain', {})
        rain = rain_data.get('3h', 0)

        # Extract weather icon if present
        weather_info = entry.get('weather', [])
        icon = weather_info[0]['icon'] if weather_info else None

        # Append to daily_data
        daily_data[date_str]['temps'].append(temp)
        daily_data[date_str]['humidity'].append(hum)
        daily_data[date_str]['rainfall'].append(rain)
        if icon:
            daily_data[date_str]['icons'].append(icon)

    # Build the result list with daily averages
    results = []

    for date_str, info in daily_data.items():
        day_date = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
        day_name = day_date.strftime('%a')  # e.g. 'Mon', 'Tue', etc.

        avg_temp = sum(info['temps']) / len(info['temps'])
        avg_hum = sum(info['humidity']) / len(info['humidity'])
        avg_rainfall = sum(info['rainfall']) / len(info['rainfall'])

        # Optional: pick the first icon or the most frequent
        icon = info['icons'][0] if info['icons'] else None

        results.append({
            'date': date_str,
            'day': day_name,
            'avg_temp': round(avg_temp, 1),
            'avg_humidity': round(avg_hum, 1),
            'avg_rainfall': round(avg_rainfall, 1),
            'icon': icon
        })

    # Sort by date and limit to 6 days if you want (the original code had :6)
    results.sort(key=lambda x: x['date'])
    return results[:6]


crops_data = pd.read_csv('dataset/200_specific_crops_data.csv')


def filter_and_rank_crops(features, top_k=5):
    """
    Filters and ranks crops based on weather features.
    Expects features dict with keys: 'avg_temp', 'humidity', 'rainfall'.
    """
    # First, try to filter crops that exactly match the criteria.
    filtered = crops_data[
        (crops_data['min_temp'] <= features['avg_temp']) & (crops_data['max_temp'] >= features['avg_temp']) &
        (crops_data['min_humidity'] <= features['humidity']) & (crops_data['max_humidity'] >= features['humidity']) &
        (crops_data['min_rainfall'] <= features['rainfall']) & (crops_data['max_rainfall'] >= features['rainfall'])
    ]
    
    # If no exact match is found, relax the criteria by considering all crops.
    if filtered.empty:
        filtered = crops_data.copy()
    
    # Define a simple matching score based on the deviation from the midpoint of each crop's ideal range.
    def match_score(row):
        mid_temp = (row['min_temp'] + row['max_temp']) / 2
        mid_humidity = (row['min_humidity'] + row['max_humidity']) / 2
        mid_rainfall = (row['min_rainfall'] + row['max_rainfall']) / 2
        score = (
            1 / (1 + abs(features['avg_temp'] - mid_temp)) +
            1 / (1 + abs(features['humidity'] - mid_humidity)) +
            1 / (1 + abs(features['rainfall'] - mid_rainfall))
        )
        return score

    # Calculate scores for each crop.
    filtered['score'] = filtered.apply(match_score, axis=1)
    filtered = filtered.sort_values(by='score', ascending=False)

    # Prepare and return the top-k results.
    top_crops = filtered.head(top_k)
    crops = []
    for _, row in top_crops.iterrows():
        crops.append({
            'crop': row['crop'],
            'score': row['score']  # You can later convert this score into a percentage or probability
        })
    return crops
