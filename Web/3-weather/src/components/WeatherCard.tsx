"use client";

import React from "react";

import { Weather } from "@/types/Weather";

// Card = Header + Stats + Forecast
interface WeatherCardProps {
  weather: Weather;
}

// Header
interface WeatherHeaderProps {
  city: string;
  country: string;
  temperature: number;
  unit: string;
}

// Stats
interface StatProps {
  iconUrl: string;
  title: string;
  value: string;
  unit: string;
}
interface WeatherStatsProps {
  leftStats: StatProps[];
  rightStats: StatProps[];
}

// Forecast
interface WeatherForecastProps {
  forecast: ForecastDayProps[];
}
interface ForecastDayProps {
  day: string;
  iconUrl: string;
  highTemp: string;
  lowTemp: string;
  precipitation: string;
}

// Sub-components
const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  city,
  country,
  temperature,
  unit,
}) => {
  return (
    <header className="flex justify-between items-start">
      <div className="text-orange-300">
        <h1 className="mb-0.5 text-2xl font-bold leading-7">{city}</h1>
        <p className="text-base italic font-medium leading-4">{country}</p>
      </div>
      <div className="flex items-start">
        <span className="text-4xl font-bold leading-10 text-orange-300">
          {temperature}
        </span>
        <span className="ml-0.5 text-base font-bold leading-4 text-orange-300">
          {unit}
        </span>
      </div>
    </header>
  );
};

const StatItem: React.FC<StatProps> = ({ iconUrl, title, value, unit }) => {
  return (
    <div className="flex gap-1 items-center">
      <img
        src={iconUrl}
        alt=""
        className="flex max-w-[1.5rem] max-h-[1.2rem]"
      />
      <span className="ml-2 leading-relaxed text-stone-300">
        <span className="text-xs">{title}: </span>
        <span className="text-sm font-bold">{value}</span>
        <span className="text-xs font-light"> {unit}</span>
      </span>
    </div>
  );
};

const WeatherStats: React.FC<WeatherStatsProps> = ({
  leftStats,
  rightStats,
}) => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-1.5">
        {leftStats.map((stat, index) => (
          <StatItem
            key={`left-stat-${index}`}
            iconUrl={stat.iconUrl}
            title={stat.title}
            value={stat.value}
            unit={stat.unit}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        {rightStats.map((stat, index) => (
          <StatItem
            key={`right-stat-${index}`}
            iconUrl={stat.iconUrl}
            title={stat.title}
            value={stat.value}
            unit={stat.unit}
          />
        ))}
      </div>
      <div /> {/*To center the second column*/}
    </section>
  );
};

const Divider: React.FC = () => {
  return (
    <div className="mt-4 w-0.5 bg-orange-200 rounded-2xl opacity-50 h-[6rem]" />
  );
};

const ForecastDay: React.FC<ForecastDayProps> = ({
  day,
  iconUrl,
  highTemp,
  lowTemp,
  precipitation,
}) => {
  return (
    <div className="flex flex-col justify-between w-[5rem]">
      <div className="flex flex-col items-center justify-between h-[5rem]">
        <h3 className="text-sm font-bold leading-3 text-orange-200">{day}</h3>
        <img src={iconUrl} alt="" className="h-[2rem] w-[2rem]" />
        <p className="text-sm font-bold leading-3 text-stone-300">{highTemp}</p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-xs leading-loose text-stone-300">{lowTemp}</p>
        <p className="text-xs leading-loose text-stone-300">{precipitation}</p>
      </div>
    </div>
  );
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  return (
    <section className="flex justify-between items-start space-x-2 py-1.5">
      {forecast.map((day, index) => (
        <React.Fragment key={`forecast-day-${index}`}>
          <ForecastDay
            day={day.day}
            iconUrl={day.iconUrl}
            highTemp={day.highTemp}
            lowTemp={day.lowTemp}
            precipitation={day.precipitation}
          />
          {index < forecast.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default function WeatherCard({ weather }: WeatherCardProps) {
  // Split stats into left and right columns
  const midpoint = Math.ceil(weather.stats.length / 2);
  const leftStats = weather.stats.slice(0, midpoint);
  const rightStats = weather.stats.slice(midpoint);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <article className="flex flex-col p-[1rem] space-y-[1rem] bg-slate-600 h-auto w-auto max-md:scale-90 max-sm:scale-[0.8] font-['Inter'] rounded-lg">
        <WeatherHeader
          city={weather.header.city}
          country={weather.header.country}
          temperature={weather.header.temperature}
          unit={weather.header.unit}
        />
        <WeatherStats leftStats={leftStats} rightStats={rightStats} />
        <WeatherForecast forecast={weather.forecast} />
      </article>
    </>
  );
}
