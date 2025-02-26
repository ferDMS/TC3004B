export default interface Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string; // e.g., "sunny", "cloudy", etc.
  location: {
    city: string;
    country: string;
  };
  pressure: number;
  visibility: number;
  sunrise: string;
  sunset: string;
}
