document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '9c0bee6f434d831ee24ba541b382e9d4'; 
    const latitude = 32.7153; // Replace with your desired location latitude
    const longitude = -117.1573; // Replace with your desired location longitude
      
        const column1Element = document.getElementById('column1');
        const column2Element = document.getElementById('column2');
        const column3Element = document.getElementById('column3');
        const maxDisplayedDays = 3;
      
        // Function to fetch weather data from OpenWeatherMap API
        async function fetchWeatherForecast() {
          try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        }
      
        // Function to convert temperature from Kelvin to Celsius
        function kelvinToCelsius(kelvin) {
          return (kelvin - 273.15).toFixed(1);
        }
      
        // Function to display the weather forecast
        function displayWeatherForecast(data) {
          column1Element.innerHTML = '';
          column2Element.innerHTML = '';
          column3Element.innerHTML = '';
      
          const forecastByDay = {};
      
          for (const forecast of data.list) {
            const dateTime = new Date(forecast.dt_txt);
            const date = dateTime.toDateString();
      
            if (!forecastByDay[date]) {
              forecastByDay[date] = {
                temperature: kelvinToCelsius(forecast.main.temp),
                description: forecast.weather[0].description,
                icon: forecast.weather[0].icon
              };
            }
          }
      
          let displayedDays = 0;
      
          for (const [date, forecast] of Object.entries(forecastByDay)) {
            if (displayedDays >= maxDisplayedDays) {
              break;
            }
      
            const weatherCard = document.createElement('div');
            weatherCard.classList.add('weather-card');
      
            const weatherIcon = document.createElement('img');
            weatherIcon.src = `http://openweathermap.org/img/w/${forecast.icon}.png`;
            weatherIcon.alt = forecast.description;
            weatherCard.appendChild(weatherIcon);
      
            const dateElement = document.createElement('p');
            dateElement.textContent = date;
            weatherCard.appendChild(dateElement);
      
            const temperatureElement = document.createElement('p');
            temperatureElement.classList.add('temperature');
            temperatureElement.textContent = `${forecast.temperature} °C`;
            weatherCard.appendChild(temperatureElement);
      
            const descriptionElement = document.createElement('p');
            descriptionElement.classList.add('description');
            descriptionElement.textContent = forecast.description;
            weatherCard.appendChild(descriptionElement);
      
            if (displayedDays === 0) {
              column1Element.appendChild(weatherCard);
            } else if (displayedDays === 1) {
              column2Element.appendChild(weatherCard);
            } else {
              column3Element.appendChild(weatherCard);
            }
      
            displayedDays++;
          }
        }
      
        // Fetch weather data and display the forecast
        fetchWeatherForecast().then(displayWeatherForecast);
      });
      