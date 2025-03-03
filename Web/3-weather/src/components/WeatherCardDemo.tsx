"use client";

import React from "react";

import Weather from "@/types/Weather";
import WeatherCard from "@/components/WeatherCard";

// Main component with sample data
const WeatherCardDemo: React.FC = () => {
  // Sample data for the weather card
  const weatherData: Weather = {
    header: {
      city: "Mexico City",
      country: "Mexico",
      temperature: 26.6,
      unit: "°C",
    },
    stats: [
      {
        iconUrl: "weather/stats/wind.png",
        title: "Wind",
        value: "80",
        unit: "m/s",
      },
      {
        iconUrl: "weather/stats/eye.png",
        title: "Visibility",
        value: "2",
        unit: "km",
      },
      {
        iconUrl: "weather/stats/rays.png",
        title: "UV",
        value: "3",
        unit: "",
      },
      {
        iconUrl: "weather/stats/sunrise.png",
        title: "Sunrise",
        value: "07:00",
        unit: "",
      },
      {
        iconUrl: "weather/stats/sunset.png",
        title: "Sunset",
        value: "19:00",
        unit: "",
      },
      {
        iconUrl: "weather/stats/clock.png",
        title: "Daylight",
        value: "12:00",
        unit: "",
      },
    ],
    forecast: [
      {
        day: "FRI",
        iconUrl: "/weather/forecast/cloudy.png",
        highTemp: "27°C",
        lowTemp: "13°C",
        precipitation: "0 mm",
      },
      {
        day: "SAT",
        iconUrl: "/weather/forecast/sunny.png",
        highTemp: "27°C",
        lowTemp: "13°C",
        precipitation: "0 mm",
      },
      {
        day: "SUN",
        iconUrl: "/weather/forecast/vcloudy.png",
        highTemp: "27°C",
        lowTemp: "14°C",
        precipitation: "0 mm",
      },
      {
        day: "MON",
        iconUrl: "/weather/forecast/vrainy.png",
        highTemp: "28°C",
        lowTemp: "13°C",
        precipitation: "0 mm",
      },
      {
        day: "TUE",
        iconUrl: "/weather/forecast/snowy.png",
        highTemp: "28°C",
        lowTemp: "12°C",
        precipitation: "0 mm",
      },
    ],
  };

  return <WeatherCard weather={weatherData} />;
};

export default WeatherCardDemo;
