"use client";

import { useState } from "react";

import WeatherCardDemo from "@/components/WeatherCardDemo";
import WeatherSearchBar from "@/components/WeatherSearchBar";
import Weather from "@/types/Weather";

export default function Home() {
  const [weatherList, setWeatherList] = useState<number[]>([1, 2, 3]);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (city: string) => {
    // TODO: Logic to retrieve data from API
    // try {
    //   const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    //   if (!response.ok) {
    //   throw new Error("Failed to fetch weather data");
    //   }
    //   const data = await response.json();
    //   // How to confirm that data asserts to Weather type
    //   data.x.map((item: WeatherAPIResponse): Weather => {
    //     return {
    //     }
    //   })
    //   setWeatherList((prevData) => [...prevData, data]);
    // } catch (err) {
    //   setError((err as Error).message);
    // }
  };

  return (
    <div className="flex flex-col min-h-[100vh] py-[5rem] space-y-10 justify-center items-center bg-slate-100">
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
        {/* Providing a unique key prop to each component in a list is crucial
        for React's reconciliation process. The key helps React identify which
        items have changed, been added, or removed, allowing it to update the UI
        efficiently. */}
        {weatherList.map((_, index) => (
          <WeatherCardDemo key={index} id={index} />
        ))}
      </div>
    </div>
  );
}
