"use client";

import React from "react";

// Type definitions
interface WeatherCardProps {
  city: string;
  country: string;
  temperature: number;
  unit: string;
  stats: StatProps[];
  forecast: ForecastDayProps[];
}

interface WeatherHeaderProps {
  city: string;
  country: string;
  temperature: number;
  unit: string;
}

interface StatProps {
  iconUrl: string;
  value: string;
}

interface WeatherStatsProps {
  leftStats: StatProps[];
  rightStats: StatProps[];
}

interface ForecastDayProps {
  day: string;
  iconUrl: string;
  highTemp: string;
  lowTemp: string;
  precipitation: string;
}

interface WeatherForecastProps {
  forecast: ForecastDayProps[];
}

// Sub-components
const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  city,
  country,
  temperature,
  unit,
}) => {
  return (
    <header className="flex justify-between items-start mb-2.5">
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

const StatItem: React.FC<StatProps> = ({ iconUrl, value }) => {
  return (
    <div className="flex gap-1 items-center">
      <img src={iconUrl} alt="" className="h-[0.563rem] w-[0.688rem]" />
      <span className="text-xs font-bold leading-relaxed text-stone-300">
        {value}
      </span>
    </div>
  );
};

const WeatherStats: React.FC<WeatherStatsProps> = ({
  leftStats,
  rightStats,
}) => {
  return (
    <section className="flex justify-between mb-2.5">
      <div className="flex flex-col gap-1.5">
        {leftStats.map((stat, index) => (
          <StatItem
            key={`left-stat-${index}`}
            iconUrl={stat.iconUrl}
            value={stat.value}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        {rightStats.map((stat, index) => (
          <StatItem
            key={`right-stat-${index}`}
            iconUrl={stat.iconUrl}
            value={stat.value}
          />
        ))}
      </div>
      <div />
    </section>
  );
};

const Divider: React.FC = () => {
  return (
    <div className="mx-2 mt-4 mb-0 w-0.5 bg-orange-200 rounded-2xl opacity-50 h-[6rem]" />
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
    <div className="flex flex-col items-center w-11">
      <h3 className="mb-0.5 text-xs font-bold leading-3 text-orange-200">
        {day}
      </h3>
      <img
        src={iconUrl}
        alt=""
        className="mx-0 my-0.5 h-[1.563rem] w-1.563rem]"
      />
      <p className="mb-3.5 text-xs font-bold leading-3 text-stone-300">
        {highTemp}
      </p>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-[0.6rem] leading-loose text-stone-300">{lowTemp}</p>
        <p className="text-[0.6rem] leading-loose text-stone-300">
          {precipitation}
        </p>
      </div>
    </div>
  );
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  return (
    <section className="flex justify-between items-start px-0 py-1.5">
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

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  country,
  temperature,
  unit,
  stats,
  forecast,
}) => {
  // Split stats into left and right columns
  const midpoint = Math.ceil(stats.length / 2);
  const leftStats = stats.slice(0, midpoint);
  const rightStats = stats.slice(midpoint);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <article className="p-2.5 bg-slate-600 h-auto w-auto max-md:scale-90 max-sm:scale-[0.8] font-['Inter'] rounded-lg">
        <WeatherHeader
          city={city}
          country={country}
          temperature={temperature}
          unit={unit}
        />
        <WeatherStats leftStats={leftStats} rightStats={rightStats} />
        <WeatherForecast forecast={forecast} />
      </article>
    </>
  );
};

// Main component with sample data
const WeatherCardDemo: React.FC = () => {
  // Sample data for the weather card
  const weatherData = {
    city: "Mexico City",
    country: "Mexico",
    temperature: 26.6,
    unit: "°C",
    stats: [
      {
        iconUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/82c466c3d10b67fa57d2a11863e91c2d2a18ccce",
        value: "80%",
      },
      {
        iconUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/82c466c3d10b67fa57d2a11863e91c2d2a18ccce",
        value: "80%",
      },
      {
        iconUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/82c466c3d10b67fa57d2a11863e91c2d2a18ccce",
        value: "80%",
      },
      {
        iconUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/fd8c28769f4dbfaee6028e168c189ef50b6985b2",
        value: "80%",
      },
      {
        iconUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/fd8c28769f4dbfaee6028e168c189ef50b6985b2",
        value: "80%",
      },
      {
        iconUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/fd8c28769f4dbfaee6028e168c189ef50b6985b2",
        value: "80%",
      },
    ],
    forecast: [
      {
        day: "FRI",
        iconUrl: "/weather/cloudy.png",
        highTemp: "5.7°C",
        lowTemp: "0°C",
        precipitation: "0 mm",
      },
      {
        day: "FRI",
        iconUrl: "/weather/sunny.png",
        highTemp: "5.7°C",
        lowTemp: "0°C",
        precipitation: "0 mm",
      },
      {
        day: "FRI",
        iconUrl: "/weather/vcloudy.png",
        highTemp: "5.7°C",
        lowTemp: "0°C",
        precipitation: "0 mm",
      },
      {
        day: "FRI",
        iconUrl: "/weather/vrainy.png",
        highTemp: "5.7°C",
        lowTemp: "0°C",
        precipitation: "0 mm",
      },
      {
        day: "FRI",
        iconUrl: "/weather/snowy.png",
        highTemp: "35.7°C",
        lowTemp: "0°C",
        precipitation: "0 mm",
      },
    ],
  };

  return (
    <WeatherCard
      city={weatherData.city}
      country={weatherData.country}
      temperature={weatherData.temperature}
      unit={weatherData.unit}
      stats={weatherData.stats}
      forecast={weatherData.forecast}
    />
  );
};

export default WeatherCardDemo;
