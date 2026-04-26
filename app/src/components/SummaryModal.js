import React from 'react';
import ReactMarkdown from 'react-markdown';
import './SummaryModal.css';

export default function SummaryModal({ isOpen, onClose, summary, isLoading }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="summary-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Case Study Summary</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {isLoading ? (
            <div className="shimmer-container">
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line short"></div>
            </div>
          ) : (
            <div className="summary-content">
              <ReactMarkdown>{summary}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
