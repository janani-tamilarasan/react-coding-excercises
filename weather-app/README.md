# Weather Application in React

1. Fetch real-time weather data from a public API (like OpenWeatherMap).
2. Display weather for user’s current location (via Geolocation API) or search by city.

# Features
1. Get weather for user’s current location
2. Search by city


# API Key Setup

C1. reate an account at https://openweathermap.org/

2. Generate an API key from My API Keys

3. Create a .env file at the root:

4. API_KEY=your_api_key_here


# Use it in code:

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

Latitude and Longitude
`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}lat=${latitude}&lon=${longitude}`;

City:
'https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}'

# Project Structure
src/
│── components/
│      ├── WeatherCard.jsx
│      └── SearchBar.jsx
│
│── server/
│      └── api.js
│
│── App.jsx
│── main.jsx
│── App.css

🧠 H
##  How It Works
✔ Get Weather by Location

Uses navigator.geolocation

- Passes coordinates 
	→ get longitude and latitude from navigator.geolocation.getCurrentPosition(showPosition)
	- showPosition -> pos.coord.longitude, pos.coord.latitude
	→ calls fetchWeatherApi()

- Renders WeatherCard with API response

	✔ Get Weather by City

- User types a city

	Calls fetchWeatherApi({ city })

- Updates weather data
