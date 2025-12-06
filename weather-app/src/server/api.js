  const API_KEY = 'bf909b4a90c47e810fc156dc73c0ed75';

export const fetchWeatherApi = async ({ latitude, longitude, city }) => {

  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

  if (latitude && longitude) {
    url += `&lat=${latitude}&lon=${longitude}`;
  }

  if (city) {
    url += `&q=${city}`;
  }

  const response = await fetch(url);
  return response.json();
};
