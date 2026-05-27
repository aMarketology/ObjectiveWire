import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'England vs France Creator Match 2026 | Eleven All-Stars 2 at Parc des Princes';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY ?? '-QnuCnH9-8EQpkZafUFroTi6AUVuHR1A5u4FFb66vrQ';

export default async function Image() {
  // Fetch a relevant football stadium photo from Unsplash
  let photoUrl: string | null = null;
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=football+stadium+night+crowd&orientation=landscape&per_page=1&client_id=${UNSPLASH_KEY}`,
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      const raw = data?.results?.[0]?.urls?.regular as string | undefined;
      if (raw) photoUrl = raw;
    }
  } catch {
    // fallback to solid background
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Georgia, "Times New Roman", serif',
          overflow: 'hidden',
        }}
      >
        {/* Layer 1 — background photo or solid fallback */}
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }}
          />
        )}

        {/* Layer 2 — dark gradient overlay, bottom-heavy */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.25) 100%)',
          }}
        />

        {/* Layer 3 — content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '52px 60px',
          }}
        >
          {/* Top-right: brand wordmark */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '56px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ef4444',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.18em',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
              }}
            >
              objectivewire.org
            </span>
          </div>

          {/* Category badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '18px',
            }}
          >
            <div
              style={{
                background: '#ef4444',
                color: 'white',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              YOUTUBE
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                fontFamily: 'Arial, sans-serif',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              MAY 24, 2026 · 7PM BST
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: '66px',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              maxWidth: '960px',
            }}
          >
            England vs France
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.3,
              marginBottom: '24px',
              maxWidth: '820px',
            }}
          >
            Eleven All-Stars 2 at Parc des Princes, Paris
          </div>

          {/* Bottom row — two team tags */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(29, 78, 216, 0.7)',
                border: '1px solid rgba(93,173,226,0.6)',
                padding: '8px 18px',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'Arial, sans-serif',
              }}
            >
              🏴󠁧󠁢󠁥󠁮󠁧󠁿  Team England — KSI (Captain)
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '20px',
                fontWeight: 900,
              }}
            >
              VS
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(185, 28, 28, 0.7)',
                border: '1px solid rgba(252,129,129,0.6)',
                padding: '8px 18px',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'Arial, sans-serif',
              }}
            >
              🇫🇷  Team France — AmineMaTue (Captain)
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
