import { useState } from "react";

export default function FilterBar({ onSearch, onSort }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="border p-2 rounded w-1/2 dark:bg-gray-700 dark:text-black"
      />
      <select
        onChange={(e) => onSort(e.target.value)}
        className="border p-2 rounded dark:bg-gray-700 dark:text-black"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </div>
  );
}