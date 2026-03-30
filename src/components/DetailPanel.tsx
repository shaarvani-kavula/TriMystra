import type { SacredItem } from '../types/sacred';
import AudioPlayer from './AudioPlayer';
import BreathingGuide from './BreathingGuide';

type DetailPanelProps = {
  item: SacredItem | null;
};

export default function DetailPanel({ item }: DetailPanelProps) {
  if (!item) {
    return (
      <section className="detail-panel empty-state">
        <h2>Pick a mantra or yantra</h2>
        <p>Select an item from the left to view details.</p>
      </section>
    );
  }

  return (
    <section className="detail-panel">
      <div className="detail-header">
        <span className="type-badge large">{item.type}</span>
        <h2>{item.name}</h2>
        <p className="meaning">{item.meaning}</p>
      </div>

      <div className="detail-grid">
        <div className="detail-image-block">
          <img src={item.image} alt={item.name} className="detail-image" />
        </div>

        <div className="detail-content">
          <div className="info-card">
            <h3>Description</h3>
            <p>{item.description}</p>
          </div>

          <div className="info-card">
            <h3>Association</h3>
            <p><strong>Mantra:</strong> {item.associatedMantra}</p>
            <p><strong>Yantra:</strong> {item.associatedYantra}</p>
            <p><strong>Category:</strong> {item.category}</p>
          </div>

          <AudioPlayer src={item.audio} title={item.associatedMantra} />
          <BreathingGuide breathing={item.breathing} />
        </div>
      </div>
    </section>
  );
}