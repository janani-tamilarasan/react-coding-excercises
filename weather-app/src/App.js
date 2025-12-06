import { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { fetchWeatherApi } from './server/api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateWeatherData = (response) => {
    if (response.cod == 200) {
      setWeatherData(response);
      setIsLoading(false);
    } else {
      alert("City not found!");
      setWeatherData(null);
      setIsLoading(false);
    }
  };

  const showPosition = async (pos) => {
    const { latitude, longitude } = pos.coords;
    const response = await fetchWeatherApi({ latitude, longitude });
    updateWeatherData(response);
  };

  const showByCity = async (city) => {
    setIsLoading(true);
    const response = await fetchWeatherApi({ city });
    updateWeatherData(response);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation not supported");
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <SearchBar showByCity={showByCity} />
      {isLoading ? <p>Loading...</p> : <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
