import { ChangeEvent } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-bar">
    <label htmlFor="search" className="search-label">
      Search by mantra or yantra
    </label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Try Om, Sri Yantra"
      className="search-input"
    />
  </div>
);
}