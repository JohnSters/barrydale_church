import { component$, $, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import type { Sermon } from "~/lib/supabase";
import { AudioPlayer } from "~/components/audio-player";

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "—";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDuration(interval: string | null): string | null {
  if (!interval) return null;
  // ISO 8601: PT1H2M3S
  const iso = interval.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?/);
  if (iso) {
    const h = parseInt(iso[1] ?? "0");
    const m = parseInt(iso[2] ?? "0");
    const s = Math.floor(parseFloat(iso[3] ?? "0"));
    if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
  // HH:MM:SS
  const parts = interval.split(":").map(Number);
  if (parts.length === 3) {
    const [h, m, s] = parts;
    if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${Math.floor(s).toString().padStart(2, "0")}`;
    return `${m}:${Math.floor(s).toString().padStart(2, "0")}`;
  }
  return interval;
}

function formatFileSize(bytes: number | null): string {
  if (!bytes) return "";
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  if (bytes >= 1_000) return `${(bytes / 1_000).toFixed(0)} KB`;
  return `${bytes} B`;
}

const SermonCard = component$((sermon: Sermon) => {
  const shareOpen = useSignal(false);
  const copied = useSignal(false);

  const download = $(async (event: MouseEvent) => {
    const url = sermon.sermon_mp3_url!;
    const btn = event.currentTarget as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = "Downloading…";
    btn.disabled = true;

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = url.split("/").pop() ?? "sermon.mp3";
      anchor.click();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.log("DEBUG::SermonCard download", err);
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });

  const shareText = `Sermon by ${sermon.preacher ?? "Barrydale Christian Fellowship"} — ${formatDate(sermon.sermon_date)}`;

  const openShare = $(async () => {
    const url = window.location.origin + "/sermons";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: shareText, url });
        return;
      } catch {
        return;
      }
    }
    shareOpen.value = !shareOpen.value;
  });

  const copyLink = $(async () => {
    await navigator.clipboard.writeText(window.location.origin + "/sermons");
    copied.value = true;
    shareOpen.value = false;
    setTimeout(() => { copied.value = false; }, 2000);
  });

  const siteUrl = typeof window !== "undefined" ? window.location.origin + "/sermons" : "/sermons";
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + siteUrl)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`;

  return (
    <div class="sermon-card">
      <div class="sermon-info">
        <span class="sermon-date">{formatDate(sermon.sermon_date)}</span>
        <span class="sermon-preacher">By: {sermon.preacher ?? "Unknown Preacher"}</span>
        <div class="sermon-meta">
          {formatDuration(sermon.duration) && (
            <span class="sermon-duration">⏱ {formatDuration(sermon.duration)}</span>
          )}
          {sermon.file_size && (
            <span class="sermon-size">{formatFileSize(sermon.file_size)}</span>
          )}
        </div>
      </div>
      {sermon.sermon_mp3_url && (
        <div class="sermon-actions">
          <AudioPlayer src={sermon.sermon_mp3_url} />
          <div class="sermon-buttons">
            <button class="btn sermon-btn" title="Download sermon" onClick$={download}>
              Download
            </button>
            <div class="share-wrapper">
              <button class="btn sermon-btn sermon-share-btn" title="Share sermon" onClick$={openShare}>
                {copied.value ? "Copied!" : "Share"}
              </button>
              {shareOpen.value && (
                <div class="share-popover">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="share-option share-whatsapp" onClick$={() => { shareOpen.value = false; }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a href={telegramUrl} target="_blank" rel="noopener noreferrer" class="share-option share-telegram" onClick$={() => { shareOpen.value = false; }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Telegram
                  </a>
                  <button class="share-option share-copy" onClick$={copyLink}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Copy link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default component$(() => {
  const sermons = useSignal<Sermon[]>([]);
  const loading = useSignal(true);
  const errorMessage = useSignal<string | null>(null);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    try {
      const { supabase } = await import("~/lib/supabase");

      const { data, error } = await supabase
        .from("bcf_sermon")
        .select("*")
        .order("sermon_date", { ascending: false });

      if (error) {
        console.log("DEBUG::sermons/index", error);
        const isNetworkError = /NetworkError|Failed to fetch/i.test(error.message);
        errorMessage.value = isNetworkError
          ? `Failed to load sermons: ${error.message}. Check your PUBLIC_SUPABASE_URL, browser network/privacy blocking, and restart the dev server after any .env changes.`
          : `Failed to load sermons: ${error.message}`;
      } else {
        sermons.value = data ?? [];
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.log("DEBUG::sermons/index", err);
      errorMessage.value = `An unexpected error occurred: ${message}`;
    } finally {
      loading.value = false;
    }
  });

  return (
    <>
      <section
        class="hero"
        style={{
          background: "linear-gradient(rgba(44, 62, 80, 0.65), rgba(44, 62, 80, 0.75))",
          backgroundImage: "url(/images/cross-on-hill.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div class="container">
          <h1>Sermons</h1>
          <p>Listen to and download messages from our Sunday services.</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          {loading.value ? (
            <p class="sermons-empty">Loading sermons…</p>
          ) : errorMessage.value ? (
            <p class="sermons-empty">{errorMessage.value}</p>
          ) : sermons.value.length === 0 ? (
            <p class="sermons-empty">No sermons have been uploaded yet. Check back soon.</p>
          ) : (
            <div class="sermons-list">
              {sermons.value.map((sermon) => (
                <SermonCard key={sermon.id} {...sermon} />
              ))}
            </div>
          )}
        </div>
      </section>

      <footer>
        <div class="container">
          <p>© {new Date().getFullYear()} Barrydale Christian Fellowship. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sermons - Barrydale Christian Fellowship",
  meta: [
    {
      name: "description",
      content: "Listen to and download sermon recordings from Barrydale Christian Fellowship.",
    },
  ],
};
