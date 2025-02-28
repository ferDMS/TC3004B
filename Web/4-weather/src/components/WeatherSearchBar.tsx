"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function WeatherSearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", query);
    onSearch(query); // Logic to get weather data from API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex text-2xl h-[3rem] max-w-[50rem] space-x-5"
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        className="px-[0.5rem] rounded-md text-slate-600 placeholder-slate-400  bg-slate-200"
      />
      <button type="submit" className="p-2 bg-slate-600 text-slate-200 rounded">
        Search
      </button>
    </form>
  );
}
