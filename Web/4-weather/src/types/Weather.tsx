export default interface Weather {
  id: number;
  header: {
    city: string;
    country: string;
    temperature: number;
    unit: string;
  };
  stats: {
    iconUrl: string;
    title: string;
    value: string;
    unit: string;
  }[];
  forecast: {
    day: string;
    iconUrl: string;
    highTemp: string;
    lowTemp: string;
    precipitation: string;
  }[];
}
