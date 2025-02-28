"use client";

import { useState } from "react";

import WeatherCardDemo from "@/components/WeatherCardDemo";
import WeatherSearchBar from "@/components/WeatherSearchBar";
import Weather from "@/types/Weather";

export default function Home() {
  const [weatherData, setWeatherData] = useState<Weather[]>([]);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (city: string) => {
    // TODO: Logic to retrieve data from API
  };

  return (
    <div className="flex flex-col py-[5rem] space-y-10 justify-center items-center bg-slate-100">
      <h1 className="text-5xl text-slate-600 font-bold">Weather Scope</h1>
      <p>Stay updated with real-time weather reports!</p>
      <p>
        🌤️ Simply enter a city name in the search bar below to get the latest
        temperature, conditions, and forecasts at a glance.
      </p>

      <div className="flex">
        <WeatherSearchBar onSearch={fetchWeather} />
      </div>

      <div className="grid grid-cols-3 w-[80%] gap-8">
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
        <WeatherCardDemo />
      </div>
    </div>
  );
}
