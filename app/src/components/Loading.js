import React, { useEffect, useRef, useState } from 'react';
import './Loading.css';
import Emeka from '../assets/Emeka.png';
import { useTheme } from '../context/ThemeContext';

export default function Loading() {
  // Image diameter: 90px, so SVG should be 90x90, ring radius = 45 - (strokeWidth/2)
  const size = 90;
  const stroke = 6;
  const radius = (size / 2) - (stroke / 2); // 42
  const circumference = 2 * Math.PI * radius;

  // Progress state (0 to 1)
  const [progress, setProgress] = useState(0);
  const requestRef = useRef();
  const startRef = useRef();
  const duration = 3000; // 3 seconds

  useEffect(() => {
    function animate(now) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);
      if (pct < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
      startRef.current = null;
    };
  }, []);

  // Progress ring offset — positive offset with vertical flip in CSS
  // yields anticlockwise draw from the top
  const offset = circumference * (1 - progress);
  const { theme } = useTheme();
  const isDark = (theme === 'dark') || (theme === 'system' && typeof window !== 'undefined' && document.documentElement.classList.contains('theme-dark')) || document.documentElement.classList.contains('theme-dark');

  return (
    <div className={`loading-overlay ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <div className="loading-center">
        <div className="image-wrap">
          <img src={Emeka} alt="Emeka" className="avatar" />
          <svg
            className="progress-ring"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            aria-hidden
          >
            <circle
              className="ring-bg"
              cx={size/2}
              cy={size/2}
              r={radius}
              fill="none"
              strokeWidth={stroke}
            />
            <circle
              className="ring"
              cx={size/2}
              cy={size/2}
              r={radius}
              fill="none"
              strokeWidth={stroke}
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                transition: 'stroke-dashoffset 0.12s linear',
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
