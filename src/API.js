import axios from "axios";
const key = process.env.REACT_APP_WEATHER_API_KEY;

export async function getWeatherData(location, setLocations) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`
    );
    setLocations((e) => [...e, response]);
  } catch (error) {
    console.error(error);
  }
}

export async function getCities(location, setCities) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`
    );
    setCities((e) => [...e, response.data.name]);
  } catch (error) {
    console.error(error);
  }
}
