import hero1 from '@public/videos/hero-1.mp4';
import aboutImg from '@public/img/about.webp';
import gridVideo1 from '@public/videos/feature-1.mp4';
import gridVideo2 from '@public/videos/feature-2.mp4';
import gridVideo3 from '@public/videos/feature-3.mp4';
import gridVideo4 from '@public/videos/feature-4.mp4';
import gridVideo5 from '@public/videos/feature-5.mp4';

/** Ordered for browser preload hints: hero first, then about, then bento. */
export const CRITICAL_ASSETS_IN_ORDER = [
  { url: hero1, as: 'video' as const },
  { url: aboutImg, as: 'image' as const },
  { url: gridVideo1, as: 'video' as const },
  { url: gridVideo2, as: 'video' as const },
  { url: gridVideo3, as: 'video' as const },
  { url: gridVideo4, as: 'video' as const },
  { url: gridVideo5, as: 'video' as const },
] as const;

let priorityPreloadsInjected = false;

function injectPriorityPreloads() {
  if (priorityPreloadsInjected) return;
  priorityPreloadsInjected = true;
  CRITICAL_ASSETS_IN_ORDER.forEach(({ url, as }, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    if (index < 3) {
      link.setAttribute('fetchpriority', 'high');
    }
    document.head.appendChild(link);
  });
}

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    const done = () => resolve();
    img.onload = done;
    img.onerror = done;
    img.src = url;
  });
}

function preloadVideo(url: string): Promise<void> {
  return new Promise((resolve) => {
    const v = document.createElement('video');
    v.preload = 'auto';
    v.muted = true;
    v.playsInline = true;
    v.src = url;

    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      v.oncanplaythrough = null;
      v.onloadeddata = null;
      v.onerror = null;
      v.removeAttribute('src');
      v.load();
      v.remove();
      resolve();
    };

    v.oncanplaythrough = done;
    v.onloadeddata = done;
    v.onerror = done;
    setTimeout(done, 60000);
  });
}

let preloadOnce: Promise<void> | null = null;

/**
 * Injects `<link rel="preload">` in priority order, then waits for all
 * critical media so the browser can prioritize them over other page assets.
 */
export function preloadCriticalAssets(): Promise<void> {
  injectPriorityPreloads();

  preloadOnce ??= (async () => {
    const uniqueUrls = [
      ...new Map(CRITICAL_ASSETS_IN_ORDER.map((a) => [a.url, a])).values(),
    ];

    await Promise.all(
      uniqueUrls.map(({ url, as }) =>
        as === 'image' ? preloadImage(url) : preloadVideo(url),
      ),
    );
  })();

  return preloadOnce;
}
