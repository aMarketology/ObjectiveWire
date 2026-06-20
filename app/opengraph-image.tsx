import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Objective Wire | Sports, Creators, Cars & Culture Network';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #1c1c1e 0%, #2d2d2d 60%, #3d2b00 100%)',
          padding: '64px',
          fontFamily: 'Georgia, "Times New Roman", serif',
          position: 'relative',
        }}
      >
        {/* Amber accent bar — top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #d97706 0%, #f59e0b 50%, #d97706 100%)',
          }}
        />

        {/* PI badge — top right */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '4px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(217, 119, 6, 0.15)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              borderRadius: '6px',
              padding: '6px 14px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d97706' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#d97706', letterSpacing: '0.15em', fontFamily: 'monospace' }}>
              INDEPENDENT NEWSROOM
            </span>
          </div>
          <span style={{ fontSize: '11px', color: '#6b6b6b', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
              SPORTS · CREATORS · CARS · CULTURE
            </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0px',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#d97706',
              fontStyle: 'italic',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            objective
          </span>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#f5f0e8',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            Wire
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 400,
            color: '#a3a3a3',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            marginBottom: '36px',
          }}
        >
          World Cup · Premier League · Supercars · Creators
        </div>

        {/* Bottom descriptor row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              color: '#d97706',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
            }}
          >
            objectivewire.com
          </span>
          <span style={{ color: '#4b4b4b', fontSize: '18px' }}>|</span>
          <span style={{ fontSize: '16px', color: '#6b6b6b', fontFamily: 'monospace' }}>
            Austin, Texas
          </span>
        </div>

        {/* Amber accent bar — bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #d97706 0%, #f59e0b 50%, #d97706 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
