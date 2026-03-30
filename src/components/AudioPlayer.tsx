type AudioPlayerProps = {
    src: string;
    title: string;
  };
  
  export default function AudioPlayer({ src, title }: AudioPlayerProps) {
    return (
      <div className="audio-player">
        <h4>Mantra Audio</h4>
        <p className="audio-label">Listen to: {title}</p>
        <audio controls preload="none" className="audio-control">
          <source src={src} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }