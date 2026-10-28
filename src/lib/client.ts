/** Perilaku global di browser: ukuran teks, toast, salin tautan, dan pelacakan event. */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Kirim event KPI (brief bagian 2) ke dataLayer bila alat analitik dipasang. */
export function track(event: string, data: Record<string, unknown> = {}) {
  window.dataLayer?.push({ event, ...data });
}

let toastTimer: number | undefined;
export function toast(message: string) {
  const region = document.getElementById('toast');
  if (!region) return;
  region.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'rounded-xl bg-night px-4 py-3 text-sm font-bold text-white shadow-soft';
  el.textContent = message;
  region.append(el);
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.remove(), 3200);
}

function setTextSize(size: 'md' | 'lg') {
  if (size === 'lg') document.documentElement.dataset.text = 'lg';
  else delete document.documentElement.dataset.text;
  try {
    localStorage.setItem('tsl-text', size);
  } catch {}
  syncTextButtons();
}

function syncTextButtons() {
  const current = document.documentElement.dataset.text === 'lg' ? 'lg' : 'md';
  document.querySelectorAll<HTMLButtonElement>('[data-text-size]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.textSize === current));
  });
}

export function initGlobal() {
  syncTextButtons();
  document.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;

    const sizeBtn = target.closest<HTMLButtonElement>('[data-text-size]');
    if (sizeBtn) {
      setTextSize(sizeBtn.dataset.textSize as 'md' | 'lg');
      toast(sizeBtn.dataset.textSize === 'lg' ? 'Teks diperbesar' : 'Ukuran teks standar');
    }

    const share = target.closest<HTMLElement>('[data-share]');
    if (share) {
      const url = share.dataset.share || location.href;
      const title = share.dataset.shareTitle || document.title;
      try {
        if (navigator.share && matchMedia('(pointer: coarse)').matches) await navigator.share({ title, url });
        else {
          await navigator.clipboard.writeText(url);
          toast('Tautan disalin');
        }
      } catch {}
    }

    const tracked = target.closest<HTMLElement>('[data-track]');
    if (tracked) track(tracked.dataset.track!, { label: tracked.dataset.trackLabel ?? tracked.textContent?.trim() });
  });
}
