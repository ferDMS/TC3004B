export interface GeolocationAPIResponse {
  results: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
  }[];
}

export interface WeatherAPIResponse {
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
