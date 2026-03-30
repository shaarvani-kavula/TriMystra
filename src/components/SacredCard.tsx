import type { SacredItem } from '../types/sacred';

type SacredCardProps = {
  item: SacredItem;
  isSelected: boolean;
  onSelect: (item: SacredItem) => void;
};

export default function SacredCard({ item, isSelected, onSelect }: SacredCardProps) {
  return (
    <button
      type="button"
      className={`sacred-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(item)}
    >
      <div className="sacred-card-header">
        <span className="type-badge">{item.type}</span>
        <h3>{item.name}</h3>
      </div>
      <p>{item.description}</p>
      <div className="sacred-card-footer">
        <span>Category: {item.category}</span>
      </div>
    </button>
  );
}