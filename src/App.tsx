import { useMemo, useState } from 'react';
import SearchBar from './components/SearchBar';
import SacredCard from './components/SacredCard';
import DetailPanel from './components/DetailPanel';
import { sacredData } from './data/sacredData';
import type { SacredItem } from './types/sacred';
import './styles.css';

function matchesQuery(item: SacredItem, query: string): boolean {
  const q = query.trim().toLowerCase();

  if (!q) {
    return true;
  }

  const searchable = [
    item.name,
    item.type,
    item.meaning,
    item.description,
    item.associatedMantra,
    item.associatedYantra,
    item.category,
    ...(item.alternateNames ?? []),
    item.transliteration ?? '',
  ]
    .join(' ')
    .toLowerCase();

  return searchable.includes(q);
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<SacredItem | null>(
    sacredData[0] ?? null
  );

  const filteredItems = useMemo(() => {
    return sacredData.filter((item) => matchesQuery(item, query));
  }, [query]);

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">Sound • Form • Breath</p>
        <h1>TriMystra</h1>
        <p className="hero-copy">
          Explore mantras, yantras, and breathing techniques in one calm space.
        </p>
      </header>

      <main className="main-layout">
        <aside className="sidebar">
          <SearchBar value={query} onChange={setQuery} />

          <div className="results-header">
            <h2>Results</h2>
            <span>{filteredItems.length}</span>
          </div>

          <div className="results-list">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <SacredCard
                  key={item.id}
                  item={item}
                  isSelected={selectedItem?.id === item.id}
                  onSelect={setSelectedItem}
                />
              ))
            ) : (
              <div className="no-results">
                <h3>No match found</h3>
                <p>Try Om, Sri Yantra, or Lakshmi Yantra.</p>
              </div>
            )}
          </div>
        </aside>

        <DetailPanel item={selectedItem} />
      </main>
    </div>
  );
}