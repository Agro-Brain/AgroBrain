from flask import Flask, request, jsonify, render_template
from Model.model import ( 
  get_lat_lon_from_zip, 
  get_weather_forecast, 
  preprocess_weather_data,
  filter_and_rank_crops, 
  get_daily_average_forecast
)
from flask_limiter import Limiter
from dotenv import load_dotenv
from flask_cors import CORS
import joblib
import os
import re

load_dotenv() 
app = Flask(__name__)
CORS(app)
# CORS(app, resources={r"/predict-crop": {"origins": ["http://127.0.0.1:5000"]}})

limiter = Limiter(
    app=app,
    key_func=lambda: request.remote_addr  # Rate limit by IP
)


# Replace with your actual API key
api_key = os.getenv('OWM_API_KEY')

# Serve the HTML form
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict-crop', methods=['POST'])
@limiter.limit("10 per minute")
def predict():
    data = request.get_json()
    pincode = data.get('pincode')

    if not re.match(r'^\d{6}$', pincode):
      return jsonify({'error': 'Invalid Indian PIN code format'}), 400

    # Convert PIN code to coordinates
    try:
      lat, lon, city = get_lat_lon_from_zip(pincode, api_key)
      print(f"Latitude: {lat}, Longitude: {lon}, City: {city}")
    except Exception as e:
      return jsonify({'error': str(e)}), 500

    if lat is None or lon is None:
      return jsonify({'error': 'Invalid PIN code'}), 400


    # Fetch weather forecast
    try:
      weather_data = get_weather_forecast(lat, lon, api_key)
    except Exception as e:
      return jsonify({'error': str(e)}), 500

    # Generate daily averages
    daily_forecast = get_daily_average_forecast(weather_data)  

    # Process weather data for model input
    features = preprocess_weather_data(weather_data)
    if not features:
        return jsonify({ 'error': 'Failed to process weather data' }), 500

    # Predict the crop
    try:
      crops = filter_and_rank_crops(features, top_k=5)
    except Exception as e:
      return jsonify({'error': str(e)}), 500

    return jsonify({
      'crops': crops, 
      'lat': lat, 
      'lon': lon, 
      'city': city,
      'forecast': daily_forecast
})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5002)))
