const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather?.[0]?.main}</p>
      <p>Temp: {main?.temp}°C</p>
      <p>Humidity: {main?.humidity}%</p>
      <p>Wind: {wind?.speed} m/s</p>

      {weather && (
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      )}
    </div>
  );
};

export default WeatherCard;
