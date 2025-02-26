"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import Weather from "@/types/Weather";

// Create context with a default value
const WeatherContext = createContext<{
  weather: Weather[]; // Change to list of Weather
  setWeather: (weather: Weather[]) => void; // Change to list of Weather
}>({
  weather: [],
  setWeather: () => {},
});

// Provider component
export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<Weather[]>([]); // Change to list of Weather

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

// Custom hook for using the weather context
export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
