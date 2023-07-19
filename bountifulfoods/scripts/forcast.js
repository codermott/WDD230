document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '9c0bee6f434d831ee24ba541b382e9d4'; 
    const latitude = 32.7153; // Replace with your desired location latitude
    const longitude = -117.1573; // Replace with your desired location longitude
      
        const weatherForecastElement = document.getElementById('weatherForecast');
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
      
        // Function to display the weather forecast in a table
        function displayWeatherForecast(data) {
          weatherForecastElement.innerHTML = '';
      
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
      
          const table = document.createElement('table');
          table.classList.add('weather-table');
      
          // Create the title row
          const titleRow = table.insertRow();
          const titleCell = titleRow.insertCell();
          //titleCell.textContent = '5-Day Weather Forecast';
          titleCell.colSpan = 3;
          titleCell.classList.add('title-cell');
      
          let displayedDays = 0;
          const dataRow = table.insertRow();
      
          for (const [date, forecast] of Object.entries(forecastByDay)) {
            if (displayedDays >= maxDisplayedDays) {
              break;
            }
      
            const dateCell = dataRow.insertCell();
            dateCell.textContent = date;
      
            const weatherIcon = document.createElement('img');
            weatherIcon.src = `http://openweathermap.org/img/w/${forecast.icon}.png`;
            weatherIcon.alt = forecast.description;
            dateCell.appendChild(weatherIcon);
      
            const tempCell = dataRow.insertCell();
            tempCell.textContent = `${forecast.temperature} °C`;
      
            displayedDays++;
          }
      
          weatherForecastElement.appendChild(table);
        }
      
        // Fetch weather data and display the forecast
        fetchWeatherForecast().then(displayWeatherForecast);
      });
      