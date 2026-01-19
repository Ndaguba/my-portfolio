import React, { useState } from 'react';
import './ChatPanel.css';
import { LuPanelLeftOpen } from 'react-icons/lu';
import { BsArrowUp } from 'react-icons/bs';
import { PiSparkleBold } from 'react-icons/pi';

export default function ChatPanel({ isOpen, onClose }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { role: 'user', content: message }]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'This is a demo response. Connect your AI backend here!' 
      }]);
    }, 500);
  };

  const handlePromptClick = (prompt) => {
    setMessage(prompt);
  };

  const suggestedPrompts = [
    "Tell me about your design process",
    "What projects have you worked on?",
    "How do you approach problem-solving?"
  ];

  return (
    <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h3>EMEKALLM</h3>
        <button className="close-btn" onClick={onClose} aria-label="Close chat">
          <LuPanelLeftOpen />
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className={`empty-state ${isOpen ? 'fade-in' : ''}`}>
            <h2 className="empty-state-title">What would you like to know?</h2>
            <div className="suggested-prompts">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  className="prompt-button"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  onClick={() => handlePromptClick(prompt)}
                >
                  <PiSparkleBold className="prompt-icon" />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask about Emeka..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} aria-label="Send message">
          <BsArrowUp />
        </button>
      </div>
    </div>
  );
}
