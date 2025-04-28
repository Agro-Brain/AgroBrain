import { cropCareInstructions } from './object.js';

// Global variable to store forecast data for later use
window.forecastData = null;


// Function to generate a care plan based on the selected crop and forecast data
function generateCarePlan(cropName, forecast) {
  let planHTML = `<h3>Daily Care Plan for ${cropName}</h3>`;
  planHTML += '<ul>';
  
  const getInstruction = cropCareInstructions[cropName] || ((day) => "Maintain standard care.");

  forecast.forEach(day => {
      const instruction = getInstruction(day);  // Call the function from cropCareInstructions
      planHTML += `<li><strong>${day.day}:</strong> ${instruction}</li>`;
  });
  
  planHTML += '</ul>';
  return planHTML;
}

// Function called when a crop is selected
function selectCrop(cropName) {
    // Check if forecast data is available
    if (!window.forecastData || !Array.isArray(window.forecastData)) {
      document.getElementById('carePlan').innerHTML =
        '<p>No forecast data available to generate care plan.</p>';
      return;
    }
    
    // Generate the care plan HTML using the crop-specific logic
    const planHTML = generateCarePlan(cropName, window.forecastData);
    
    // Display the generated care plan in the carePlan container
    document.getElementById('carePlan').innerHTML = planHTML;
  }


document.getElementById('cropForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const pincode = document.getElementById('pincode').value;
    const resultDiv = document.getElementById('result');
    const chartContainer = document.getElementById('chartContainer');

    // If there's an old chart instance, destroy it
    if (window.myWeatherChart) {
        window.myWeatherChart.destroy();
        window.myWeatherChart = null;
    }

    resultDiv.innerHTML = '<div class="loading">Analyzing weather data...</div>';

    // Clear the container's content and reinsert a fresh canvas,
    // then reassign chartCanvas to the new canvas element.
    chartContainer.innerHTML = '<canvas id="weatherChart"></canvas>';
    const chartCanvas = document.getElementById('weatherChart');

    // Reset result content
    resultDiv.innerHTML = '';

    // Basic PIN validation
    if (!/^\d{6}$/.test(pincode)) {
        resultDiv.innerHTML = '<div class="error">Please enter a 6-digit PIN code</div>';
        return;
    }

    resultDiv.innerHTML = '<div class="loading">Analyzing weather data...</div>';

    try {
        const response = await fetch('/predict-crop', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pincode })
        });
        
        const data = await response.json();
        console.log("Forecast data:", data.forecast);

        if (data.error) {
            resultDiv.innerHTML = `<div class="error"><h2>Error: ${data.error}</h2></div>`;
            chartContainer.style.display = 'none';
            return;
        }

        window.forecastData = data.forecast;
        
        // Display recommended crops
        if (data.crops && data.crops.length > 0) {
            let html = `
                <div class="result-card">
                    <h2>Recommended Crops for ${data.city}</h2>
                    <p class="location">(Latitude: ${data.lat}, Longitude: ${data.lon})</p>
                    <div class="crop-list">
            `;
        
            data.crops.forEach((crop, index) => {
                html += `
                    <div class="crop-item" onclick="selectCrop('${crop.crop}')">
                        <span class="rank">${index + 1}.</span>
                        <span class="crop-name">${crop.crop}</span>
                        <span class="probability">${(crop.score * 100).toFixed(1)}%</span>
                    </div>
                `;
            });
        
            html += '</div></div>';
            resultDiv.innerHTML = html;
        } else {
            resultDiv.innerHTML = `<div class="error"><h2>No crops found for this location</h2></div>`;
        }

        // Build multi-axis chart for daily forecast
        if (data.forecast && data.forecast.length > 0) {
            // Show the chart container
            chartContainer.style.display = 'block';
            chartCanvas.style.display = 'block';
            const ctx = chartCanvas.getContext('2d');

            // Prepare data for Chart.js
            const labels = data.forecast.map(item => item.day);  // e.g. ['Thu','Fri','Sat','Sun','Mon','Tue']
            const avgTemps = data.forecast.map(item => item.avg_temp);
            const avgRainfall = data.forecast.map(item => item.avg_rainfall || 0);
            const avgHumidity = data.forecast.map(item => item.avg_humidity || 0);
            
            // Calculate dynamic min and max for the rainfall axis
            const minRain = Math.min(...avgRainfall);
            const maxRain = Math.max(...avgRainfall);

            window.myWeatherChart = new Chart(ctx, {
                data: {
                  labels: labels,
                  datasets: [
                    {
                      // Temperature (line on top x-axis)
                      type: 'line',
                      label: 'Avg Temp (°C)',
                      data: avgTemps,
                      borderColor: 'orange',
                      backgroundColor: 'rgba(255, 165, 0, 0.2)',
                      fill: true,
                      tension: 0.2,
                      yAxisID: 'tempAxis',
                      xAxisID: 'xTop'
                    },
                    {
                      // Rainfall (bar on bottom x-axis)
                      type: 'bar',
                      label: 'Rainfall (mm)',
                      data: avgRainfall,
                      backgroundColor: 'rgba(54, 162, 235, 0.5)',
                      borderColor: 'rgba(54, 162, 235, 1)',
                      borderWidth: 1,
                      xAxisID: 'rainAxis',
                      yAxisID: 'yHidden'
                    },
                    {
                      // Humidity (line on top x-axis)
                      type: 'line',
                      label: 'Humidity (%)',
                      data: avgHumidity,
                      borderColor: 'green',
                      backgroundColor: 'rgba(0, 255, 0, 0.2)',
                      fill: true,
                      tension: 0.2,
                      yAxisID: 'humidityAxis',
                      xAxisID: 'xTop'
                    }
                  ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,  
                    scales: {
                        tempAxis: {
                            type: 'linear',
                            position: 'left',
                            reverse: true,
                            max : Math.max(...avgTemps) + 10,
                            title: {
                                display: true,
                                text: 'Temperature (°C)'
                            }
                        },
                        rainAxis: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Rainfall (mm)'
                            },
                            grid: {
                                drawOnChartArea: false
                            },
                            min: minRain - 10,
                            max: maxRain + 10
                        },
                        humidityAxis: {
                            type: 'linear',           
                            position: 'right',
                            reverse: true,
                            min: 0,              
                            max: 100,            // Force scale to end at 100%
                            title: {
                                display: true,
                                text: 'Humidity (%)'
                            },
                            grid: {
                                drawOnChartArea: false
                            }
                        },
                        yHidden: {
                            type: 'linear',
                            display: false,
                            min: -1,  // Arbitrary values
                            max: 1
                        },
                        xTop: {
                            type: 'category',
                            position: 'top',
                            title: {
                                display: true,
                                text: 'Day'
                            }
                        }
                  }
                }
            });
              
        } else {
            chartContainer.style.display = 'none';
        }

    } catch (error) {
        resultDiv.innerHTML = `<div class="error"><h2>Error: ${error.message}</h2></div>`;
    }
});

window.selectCrop = selectCrop;  