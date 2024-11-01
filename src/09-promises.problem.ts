interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  description: string;
}

export const fetchMoscowWeather = async (): WeatherData => {
  const data = await fetch("https://api.weather.example/moscow").then((res) => {
    return res.json();
  });

  return data;
};