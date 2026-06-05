import React, { useEffect, useState, useRef, useCallback } from 'react';
import './AboutCanvas.css';
import { BookingFlow } from './ChatPanel';
import emekaProfile from '../assets/Emeka.png';
import albumArt from '../assets/album.jpeg';
import spotifyLogo from '../assets/spotify.png';
import bookCover from '../assets/Promise-land.jpg';
import boboLogo from '../assets/bobo_app_logo.jpeg';
import intuitionPayLogo from '../assets/Intuitionpay.jpeg';
import skipLogo from '../assets/Skip-badge.jpeg';
import typescriptLogo from '../assets/Typescript.png';
import reactLogo from '../assets/React.svg';
import javascriptLogo from '../assets/Javascript.png';
import sanityLogo from '../assets/sanity.webp';
import afterEffectsLogo from '../assets/AE.svg';
import uWinnipegLogo from '../assets/uwx1.png';

const COMPANIES = [
  { name: 'bobo Health', logo: boboLogo },
  { name: 'InTuitionPay', logo: intuitionPayLogo },
  { name: 'SkipTheDishes', logo: skipLogo },
];

const TECHNOLOGIES = [
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'Sanity CMS', logo: sanityLogo },
];

const RESUME_URL = 'https://docs.google.com/document/d/1iJj-DzZBh493NrEzz_oyp5eKeDDIDJy65WbonwRHjpI/edit?usp=sharing';
const LINKEDIN_URL = 'https://www.linkedin.com/in/emeka-ndaguba';
const FIGMA_URL = 'https://www.figma.com/';
const GITHUB_URL = 'https://github.com/';
const ICEMAN_URL = 'https://pitchfork.com/reviews/albums/drake-iceman/';

// Deterministic mini contribution grid (7 rows x ~14 weeks), varied by index
// so it reads like a GitHub heatmap without needing live data.
const CONTRIB_WEEKS = 30;
const CONTRIB_DAYS = 7;
function contribLevel(week, day) {
  const seed = (week * 7 + day) * 2654435761;
  const v = (seed ^ (seed >>> 13)) >>> 0;
  const r = (v % 100) / 100;
  if (r < 0.45) return 0;
  if (r < 0.7) return 1;
  if (r < 0.86) return 2;
  if (r < 0.96) return 3;
  return 4;
}

/**
 * Wraps a card so the user can drag it around the canvas.
 * - Works with mouse + touch via Pointer Events.
 * - Tracks a translate offset on top of the card's CSS resting position.
 * - Suppresses the click that follows a real drag, so dragging a link card
 *   doesn't navigate.
 * Renders `as` (default div); pass `href`/`target`/`rel` for anchor cards.
 */
function Draggable({ as = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const state = useRef({ active: false, startX: 0, startY: 0, baseX: 0, baseY: 0, moved: false });

  const onPointerDown = useCallback((e) => {
    // No dragging on touch devices — let the page scroll normally.
    if (e.pointerType !== 'mouse') return;
    // Don't hijack interactions with the star buttons inside a card.
    if (e.target.closest('button')) return;
    e.preventDefault();
    const s = state.current;
    s.active = true;
    s.moved = false;
    s.startX = e.clientX;
    s.startY = e.clientY;
    s.baseX = offset.x;
    s.baseY = offset.y;
    setDragging(true);
    document.body.classList.add('ac-drag-active');
    ref.current?.setPointerCapture?.(e.pointerId);
  }, [offset]);

  const onPointerMove = useCallback((e) => {
    const s = state.current;
    if (!s.active) return;
    const dx = e.clientX - s.startX;
    const dy = e.clientY - s.startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) s.moved = true;
    setOffset({ x: s.baseX + dx, y: s.baseY + dy });
  }, []);

  const endDrag = useCallback((e) => {
    const s = state.current;
    if (!s.active) return;
    s.active = false;
    setDragging(false);
    document.body.classList.remove('ac-drag-active');
    ref.current?.releasePointerCapture?.(e.pointerId);
  }, []);

  // If the card moved, swallow the click that the browser fires next.
  const onClickCapture = useCallback((e) => {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      state.current.moved = false;
    }
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`${className} ac-draggable${dragging ? ' ac-dragging' : ''}${(offset.x !== 0 || offset.y !== 0) ? ' ac-has-offset' : ''}`}
      style={{ '--dragX': `${offset.x}px`, '--dragY': `${offset.y}px` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
      onDragStart={(e) => e.preventDefault()}
      draggable={false}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Live local time in Winnipeg (handles CST/CDT automatically).
function useWinnipegTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Winnipeg',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).formatToParts(now);

  const get = (t) => parts.find((p) => p.type === t)?.value || '';
  const time = `${get('hour')}:${get('minute')}:${get('second')}`;
  const meridiem = get('dayPeriod');

  // Offset label (CST = UTC-6, CDT = UTC-5)
  const offsetName = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Winnipeg',
    timeZoneName: 'short',
  })
    .formatToParts(now)
    .find((p) => p.type === 'timeZoneName')?.value || 'CST';

  return { time, meridiem, offsetName };
}

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Draggable className="ac-card ac-rating" aria-label="Rate this portfolio">
      <span className="ac-eyebrow">Rate this portfolio</span>
      <div className="ac-stars" role="radiogroup">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`ac-star ${(hover || rating) >= n ? 'filled' : ''}`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(n)}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            aria-pressed={rating === n}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path
                d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 20.84l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z"
                fill={(hover || rating) >= n ? '#f5b301' : 'none'}
                stroke="#f5b301"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </Draggable>
  );
}

// Drives a faux "now playing" elapsed time that loops, in sync with the
// 12s CSS progress-bar animation, mapped onto a 5:52 track.
function useTrackElapsed(durationSec = 352, loopSec = 12) {
  const [elapsed, setElapsed] = useState(0);
  const start = useRef(null);
  useEffect(() => {
    let raf;
    const tick = (t) => {
      if (start.current == null) start.current = t;
      const frac = (((t - start.current) / 1000) % loopSec) / loopSec;
      setElapsed(Math.floor(frac * durationSec));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationSec, loopSec]);
  const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  return { current: mmss(elapsed), total: mmss(durationSec) };
}

export default function AboutCanvas() {
  const { time, meridiem, offsetName } = useWinnipegTime();
  const track = useTrackElapsed(352, 40);

  // Reveal: cards start clustered in the center, then spread out the first
  // time the section scrolls into view.
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-canvas${revealed ? ' ac-revealed' : ' ac-prereveal'}`}
    >
      <div className="ac-stage">
        <h2 className="ac-headline">
          Where design <em>meets</em> code.
        </h2>

        {/* Profile photo (polaroid) */}
        <Draggable className="ac-card ac-photo">
          <img src={emekaProfile} alt="Emeka Ndaguba" draggable="false" />
          <span className="ac-photo-caption">Emeka Ndaguba 🇳🇬</span>
        </Draggable>

        {/* Companies I've worked for */}
        <Draggable className="ac-card ac-companies">
          <span className="ac-eyebrow">Worked with</span>
          <ul className="ac-companies-list">
            {COMPANIES.map((c) => (
              <li key={c.name} className="ac-companies-item">
                <img src={c.logo} alt={c.name} draggable="false" />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </Draggable>

        {/* Developer technologies */}
        <Draggable className="ac-card ac-technologies">
          <span className="ac-eyebrow">Developer Technologies</span>
          <ul className="ac-companies-list">
            {TECHNOLOGIES.map((t) => (
              <li key={t.name} className="ac-companies-item">
                <img src={t.logo} alt={t.name} draggable="false" />
                <span>{t.name}</span>
              </li>
            ))}
          </ul>
        </Draggable>

        {/* Now playing */}
        <Draggable
          as="a"
          className="ac-card ac-player"
          href={ICEMAN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="ac-player-top">
            <img className="ac-player-art" src={albumArt} alt="" aria-hidden="true" draggable="false" />
            <div className="ac-player-meta">
              <span className="ac-player-title">ICEMAN</span>
              <span className="ac-player-artist">Drake</span>
            </div>
            <img className="ac-player-spotify" src={spotifyLogo} alt="Spotify" draggable="false" />
          </div>
          <div className="ac-player-times">
            <span>{track.current}</span>
            <span>{track.total}</span>
          </div>
          <div className="ac-player-bar"><span /></div>
          <div className="ac-player-controls" aria-hidden="true">
            <span className="ac-pc">⏮</span>
            <span className="ac-pc ac-pc-main">▶</span>
            <span className="ac-pc">⏭</span>
          </div>
        </Draggable>

        {/* Open to work / book a call */}
        <Draggable
          className="ac-card ac-booking"
          role="button"
          tabIndex={0}
          onClick={() => setBookingOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setBookingOpen(true);
            }
          }}
        >
          <span className="ac-eyebrow">Open to work</span>
          <span className="ac-booking-title">Book a call</span>
          <span className="ac-booking-sub">📅 Schedule 30 min</span>
        </Draggable>

        {/* Available now role */}
        <Draggable className="ac-card ac-available">
          <span className="ac-available-head">
            <span className="ac-dot" /> AVAILABLE NOW
          </span>
          <span className="ac-available-role">Product Designer &amp; Design Engineer</span>
          <ul className="ac-available-list">
            <li>→ Winnipeg</li>
            <li>→ Remote Canada</li>
            <li>→ US remote</li>
          </ul>
        </Draggable>

        {/* Local time */}
        <Draggable className="ac-card ac-clock">
          <span className="ac-eyebrow">Winnipeg, MB</span>
          <span className="ac-clock-time">
            {time} <em>{meridiem}</em>
          </span>
          <span className="ac-clock-zone">{offsetName}</span>
        </Draggable>

        {/* Currently learning */}
        <Draggable className="ac-card ac-learning">
          <span className="ac-learning-label">Currently learning</span>
          <span className="ac-learning-value">
            <img className="ac-learning-icon" src={afterEffectsLogo} alt="" aria-hidden="true" draggable="false" />
            Motion design
          </span>
        </Draggable>

        {/* Rate this portfolio */}
        <StarRating />

        {/* Currently reading */}
        <Draggable className="ac-card ac-reading">
          <span className="ac-eyebrow">Currently reading</span>
          <div className="ac-book">
            <img className="ac-book-cover" src={bookCover} alt="Promised Land" draggable="false" />
          </div>
          <div className="ac-reading-bar"><span style={{ width: '38%' }} /><b>38%</b></div>
        </Draggable>

        {/* Find me online */}
        <Draggable
          as="a"
          className="ac-card ac-online"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ac-eyebrow ac-eyebrow-light">Find me online</span>
          <span className="ac-online-row">
            <span className="ac-li" aria-hidden="true">in</span>
            <span className="ac-online-handle">LinkedIn</span>
          </span>
        </Draggable>

        {/* Resume */}
        <Draggable
          as="a"
          className="ac-card ac-resume"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ac-eyebrow">CV</span>
          <span className="ac-resume-row">
            <span aria-hidden="true">📄</span>
            <span className="ac-resume-title">Resume</span>
          </span>
          <span className="ac-resume-sub">PDF · 1 page</span>
        </Draggable>

        {/* Education */}
        <Draggable className="ac-card ac-education">
          <span className="ac-eyebrow">Education</span>
          <span className="ac-education-row">
            <img className="ac-education-logo" src={uWinnipegLogo} alt="University of Winnipeg" draggable="false" />
            <span className="ac-education-info">
              <span className="ac-education-degree">BSc Computer Science ’22</span>
              <span className="ac-education-school">University of Winnipeg</span>
            </span>
          </span>
          <span className="ac-education-sub">Software engineering</span>
        </Draggable>

        {/* Figma */}
        <Draggable
          as="a"
          className="ac-card ac-figma"
          href={FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ac-eyebrow">Designing in</span>
          <span className="ac-figma-row">
            <svg className="ac-figma-logo" viewBox="0 0 38 57" width="22" height="22" aria-hidden="true">
              <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
              <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
              <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
              <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
              <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
            </svg>
            <span className="ac-figma-name">Figma</span>
          </span>
        </Draggable>

        {/* GitHub contributions */}
        <Draggable
          as="a"
          className="ac-card ac-github"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ac-github-head">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            <span>GitHub</span>
          </span>
          <div className="ac-github-grid" aria-hidden="true">
            {Array.from({ length: CONTRIB_WEEKS }).map((_, w) => (
              <div key={w} className="ac-github-col">
                {Array.from({ length: CONTRIB_DAYS }).map((__, d) => (
                  <span key={d} className={`ac-github-cell lvl-${contribLevel(w, d)}`} />
                ))}
              </div>
            ))}
          </div>
          <span className="ac-github-sub">Contributions this year</span>
        </Draggable>
      </div>

      {bookingOpen && (
        <div className="ac-booking-overlay" onClick={() => setBookingOpen(false)}>
          <div className="ac-booking-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ac-booking-close"
              onClick={() => setBookingOpen(false)}
              aria-label="Close booking"
            >
              &times;
            </button>
            <BookingFlow onClose={() => setBookingOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
}
