import React from 'react';
import { useAudio } from '../context/AudioContext';
import { IoPlay, IoPause, IoClose } from "react-icons/io5";
import './FloatingAudioPlayer.css';

export default function FloatingAudioPlayer() {
  const { audioUrl, isPlaying, title, duration, currentTime, togglePlay, seek, playAudio } = useAudio();

  if (!audioUrl) return null;

  const progress = (currentTime / duration) * 100 || 0;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`floating-audio-pill ${isPlaying ? 'playing' : ''}`}>
      <div className="pill-content">
        <button className="play-pause-btn" onClick={togglePlay}>
          {isPlaying ? <IoPause /> : <IoPlay />}
        </button>
        
        <div className="track-info">
          <span className="track-label">Listening to Project Deep Dive</span>
          <span className="track-title">{title}</span>
        </div>

        <div className="progress-container">
          <div className="time-display">{formatTime(currentTime)}</div>
          <div className="progress-bar-wrapper">
            <input 
              type="range" 
              min="0" 
              max={duration || 0} 
              value={currentTime} 
              onChange={(e) => seek(Number(e.target.value))}
              className="progress-slider"
            />
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="time-display">{formatTime(duration)}</div>
        </div>

        <button className="close-pill" onClick={() => playAudio(null, '')}>
          <IoClose />
        </button>
      </div>
    </div>
  );
}
