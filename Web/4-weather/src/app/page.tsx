"use client";

import { useState } from "react";

import WeatherCardDemo from "@/components/WeatherCardDemo";
import WeatherCard from "@/components/WeatherCard";
import WeatherSearchBar from "@/components/WeatherSearchBar";
import Weather from "@/types/Weather";

interface GeolocationAPIResponse {
  results: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
  }[];
}

interface WeatherAPIResponse {
  current_units: {
    temperature_2m: string;
    wind_speed_10m: string;
    visibility: string;
    uv_index: string;
  };
  current: {
    time: Date;
    temperature_2m: number;
    wind_speed_10m: number;
    visibility: number;
    uv_index: number;
  };
  daily_units: {
    daylight_duration: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
  };
  daily: {
    sunrise: Date[];
    sunset: Date[];
    daylight_duration: number[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
  };
}

const getTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0"); // Ensure two-digit format
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two-digit format
  return `${hours}:${minutes}`;
};

const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} h ${minutes} min`;
};

export default function Home() {
  const [weatherList, setWeatherList] = useState<Weather[]>([]);
  const [error, setError] = useState<string>("");

  const fetchGeolocation = async (city: string) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch city's geolocation");
      }

      // This way, you only extract the properties you need and can use them directly in your code.
      const geolocationData: GeolocationAPIResponse = await response.json();
      if (geolocationData.results.length > 0) {
        return geolocationData;
      } else {
        throw new Error("City not found");
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,visibility,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=America%2FDenver`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch city's geolocation");
      }

      // This way, you only extract the properties you need and can use them directly in your code.
      const weatherData: WeatherAPIResponse = await response.json();
      if (weatherData) {
        return weatherData;
      } else {
        throw new Error("Weather data not found");
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const fetchInfo = async (city: string) => {
    // Fetch geolocation from API
    const geolocationData = await fetchGeolocation(city);
    if (!geolocationData) {
      return;
    }

    // Fetch weather data from API
    const { latitude, longitude, country } = geolocationData.results[0];
    const weatherData = await fetchWeather(latitude, longitude);
    if (!weatherData) {
      return;
    }

    // Build weather object
    const weather: Weather = {
      header: {
        city: geolocationData.results[0].name,
        country: country,
        temperature: Math.round(weatherData.current.temperature_2m),
        unit: weatherData.current_units.temperature_2m,
      },
      stats: [
        {
          iconUrl: "weather/stats/wind.png",
          title: "Wind",
          value: weatherData.current.wind_speed_10m.toString(),
          unit: weatherData.current_units.wind_speed_10m,
        },
        {
          iconUrl: "weather/stats/eye.png",
          title: "Visibility",
          value: (weatherData.current.visibility / 1000).toString(),
          unit: "km",
        },
        {
          iconUrl: "weather/stats/rays.png",
          title: "UV",
          value: weatherData.current.uv_index.toString(),
          unit: weatherData.current_units.uv_index,
        },
        {
          iconUrl: "weather/stats/sunrise.png",
          title: "Sunrise",
          value: getTime(new Date(weatherData.daily.sunrise[0])),
          unit: "",
        },
        {
          iconUrl: "weather/stats/sunset.png",
          title: "Sunset",
          value: getTime(new Date(weatherData.daily.sunset[0])),
          unit: "",
        },
        {
          iconUrl: "weather/stats/clock.png",
          title: "Daylight",
          value: formatDuration(weatherData.daily.daylight_duration[0]),
          unit: "",
        },
      ],
      forecast: [],
    };

    // Add forecasts to weather object
    if (weatherData.daily.temperature_2m_max.length > 0) {
      const temp_max_units = weatherData.daily_units.temperature_2m_max;
      const temp_min_units = weatherData.daily_units.temperature_2m_min;
      const prec_units = weatherData.daily_units.precipitation_sum;
      for (let i = 0; i < 5; i++) {
        weather.forecast.push({
          day: "XXX",
          iconUrl: "/weather/forecast/sunny.png",
          highTemp: `${Math.round(
            weatherData.daily.temperature_2m_max[i]
          )} ${temp_max_units}`,
          lowTemp: `${Math.round(
            weatherData.daily.temperature_2m_min[i]
          )} ${temp_min_units}`,
          precipitation: `${weatherData.daily.precipitation_sum[i]} ${prec_units}`,
        });
      }
    }

    // Push weather object to weatherList
    setWeatherList((prev) => [...prev, weather]);
  };

  return (
    <main className="flex flex-col min-h-[100vh] py-[5rem] px-[5rem] space-y-10 justify-center items-center bg-slate-100 text-black">
      <h1 className="text-5xl text-slate-600 font-bold">☀️ Weather Scope ❄️</h1>
      <h2 className="text-xl">Stay updated with real-time weather reports!</h2>
      <p className="text-center">
        Simply enter a city name in the search bar below to get the latest
        temperature, conditions, and forecasts at a glance.
      </p>

      <div className="flex">
        <WeatherSearchBar onSearch={fetchInfo} />
      </div>

      <div className="grid grid-cols-2 w-[80%] gap-8">
        {/* Providing a unique key prop to each component in a list is crucial
        for React's reconciliation process. The key helps React identify which
        items have changed, been added, or removed, allowing it to update the UI
        efficiently. */}
        {weatherList.map((weather, index) => (
          <WeatherCard key={index} weather={weather} />
        ))}
      </div>
    </main>
  );
}
