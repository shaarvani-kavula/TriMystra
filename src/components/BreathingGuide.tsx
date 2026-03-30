import type { BreathingTechnique } from '../types/sacred';

type BreathingGuideProps = {
  breathing: BreathingTechnique;
};

export default function BreathingGuide({ breathing }: BreathingGuideProps) {
  return (
    <section className="breathing-guide">
      <h4>Breathing Technique</h4>
      <div className="breathing-meta">
        <p>
          <strong>Name:</strong> {breathing.name}
        </p>
        <p>
          <strong>Pattern:</strong> {breathing.pattern}
        </p>
        <p>
          <strong>Duration:</strong> {breathing.duration}
        </p>
        <p>
          <strong>Purpose:</strong> {breathing.purpose}
        </p>
      </div>
      <ol>{breathing.steps.map((step, index) => (
          <li key={`${breathing.id}-${index}`}>{step}</li>
        ))}
      </ol>
    </section>
  );
}