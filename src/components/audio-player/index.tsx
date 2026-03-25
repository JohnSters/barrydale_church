import { component$, useSignal, $, type Signal } from "@builder.io/qwik";

interface AudioPlayerProps {
  src: string;
  durationSignal?: Signal<number>;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export const AudioPlayer = component$(({ src, durationSignal }: AudioPlayerProps) => {
  const audioRef = useSignal<HTMLAudioElement>();
  const isPlaying = useSignal(false);
  const currentTime = useSignal(0);
  const duration = useSignal(0);
  const isLoading = useSignal(false);

  const togglePlay = $(async () => {
    const audio = audioRef.value;
    if (!audio) return;
    if (isPlaying.value) {
      audio.pause();
    } else {
      isLoading.value = true;
      await audio.play();
      isLoading.value = false;
    }
  });

  const onTimeUpdate = $(() => {
    const audio = audioRef.value;
    if (!audio) return;
    currentTime.value = audio.currentTime;
  });

  const onLoadedMetadata = $(() => {
    const audio = audioRef.value;
    if (!audio) return;
    duration.value = audio.duration;
    if (durationSignal) durationSignal.value = audio.duration;
  });

  const onPlay = $(() => { isPlaying.value = true; });
  const onPause = $(() => { isPlaying.value = false; });
  const onEnded = $(() => {
    isPlaying.value = false;
    currentTime.value = 0;
  });

  const onSeek = $((e: Event) => {
    const audio = audioRef.value;
    if (!audio) return;
    audio.currentTime = Number((e.target as HTMLInputElement).value);
  });

  const progress = duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0;

  return (
    <div class="audio-player">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate$={onTimeUpdate}
        onLoadedMetadata$={onLoadedMetadata}
        onPlay$={onPlay}
        onPause$={onPause}
        onEnded$={onEnded}
      />

      <button
        class={`ap-play-btn ${isLoading.value ? "ap-loading" : ""}`}
        onClick$={togglePlay}
        aria-label={isPlaying.value ? "Pause" : "Play"}
      >
        {isLoading.value ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10" stroke-dasharray="40" stroke-dashoffset="10" class="ap-spinner" />
          </svg>
        ) : isPlaying.value ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        )}
      </button>

      <div class="ap-body">
        <div class="ap-times">
          <span class="ap-current">{formatTime(currentTime.value)}</span>
          <span class="ap-duration">{duration.value > 0 ? formatTime(duration.value) : "--:--"}</span>
        </div>
        <div class="ap-track">
          <div class="ap-track-fill" style={{ width: `${progress}%` }} />
          <input
            type="range"
            class="ap-seek"
            min={0}
            max={duration.value || 100}
            value={currentTime.value}
            step={0.1}
            aria-label="Seek"
            onInput$={onSeek}
          />
        </div>
      </div>
    </div>
  );
});
