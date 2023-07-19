// weather.js

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '9c0bee6f434d831ee24ba541b382e9d4';
const latitude = 32.715736; // Latitude of San Diego, California
const longitude = -117.161087; // Longitude of San Diego, California

// Function to fetch weather data
async function fetchWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

// Function to update weather information in the HTML
function updateWeatherInfo(data) {
  const tempPlaceholder = document.getElementById('temp-placeholder');
  const humidityPlaceholder = document.getElementById('humidity-placeholder');
  const weatherPlaceholder = document.getElementById('weather-placeholder');

  if (!data) {
    tempPlaceholder.textContent = 'N/A';
    humidityPlaceholder.textContent = 'N/A';
    weatherPlaceholder.textContent = 'N/A';
    return;
  }

  const { main, weather } = data;
  const { temp, humidity } = main;
  const description = weather[0].description;

  tempPlaceholder.textContent = `${temp}°C`;
  humidityPlaceholder.textContent = `${humidity}%`;
  weatherPlaceholder.textContent = description;
}

// Function to fetch weather data and update the HTML
async function getWeatherInfo() {
  const data = await fetchWeatherData();
  updateWeatherInfo(data);
}

// Call the function to get weather data and update the HTML on page load
window.addEventListener('load', getWeatherInfo);
