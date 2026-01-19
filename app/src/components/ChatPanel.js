import React, { useState } from 'react';
import './ChatPanel.css';
import { IoMdClose } from 'react-icons/io';
import { BsArrowUp } from 'react-icons/bs';

export default function ChatPanel({ isOpen, onClose }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m EmekaLLM. How can I help you today?' }
  ]);

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

  return (
    <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h3>EMEKALLM</h3>
        <button className="close-btn" onClick={onClose} aria-label="Close chat">
          <IoMdClose />
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
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
