import React, { useState, useRef, useEffect } from 'react';
import './ChatPanel.css';
import { LuPanelLeftOpen } from 'react-icons/lu';
import { BsArrowUp } from 'react-icons/bs';
import { LiaRedoAltSolid } from 'react-icons/lia';
import ReactMarkdown from 'react-markdown';
import { apiFetch } from '../lib/api';
import emekaAvatar from '../assets/Emeka.png';

export default function ChatPanel({ isOpen, onClose, initialMessage, onInitialMessageConsumed, seedText, onSeedConsumed, variant = 'panel' }) {
  const GREETING = "I'm Emeka and I'm a senior product designer and design engineer based in Canada";
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Auto-send a message handed in from the home "ask" bar
  useEffect(() => {
    if (initialMessage && initialMessage.trim()) {
      handleSend(initialMessage);
      onInitialMessageConsumed?.();
    }
  }, [initialMessage]); // eslint-disable-line

  // Seed the input (without sending) when the user starts typing in the hero bar
  useEffect(() => {
    if (seedText) {
      setMessage(seedText);
      onSeedConsumed?.();
      // focus + place cursor at the end on the next frame
      requestAnimationFrame(() => {
        const el = inputRef.current;
        if (el) {
          el.focus();
          const len = el.value.length;
          el.setSelectionRange(len, len);
        }
      });
    }
  }, [seedText]); // eslint-disable-line

  const handleNewChat = () => {
    setMessages([{ role: 'assistant', content: GREETING }]);
    setMessage('');
  };

  const handleSend = async (overrideText) => {
    const text = (typeof overrideText === 'string' ? overrideText : message).trim();
    if (!text || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await apiFetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Add an empty assistant message to append chunks to
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;
      let remainder = ''; // Buffer for partial lines

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = (remainder + chunk).split('\n');
          remainder = lines.pop() || '';

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine || trimmedLine === 'data: [DONE]') continue;
            
            if (trimmedLine.startsWith('data: ')) {
              try {
                const jsonStr = trimmedLine.replace('data: ', '');
                const data = JSON.parse(jsonStr);
                if (data.content) {
                  setMessages(prev => {
                    const updated = [...prev];
                    const lastMsg = updated[updated.length - 1];
                    if (lastMsg && lastMsg.role === 'assistant') {
                      return [
                        ...updated.slice(0, -1),
                        { ...lastMsg, content: lastMsg.content + data.content }
                      ];
                    }
                    return updated;
                  });
                }
              } catch (e) {
                console.warn("Partial or invalid JSON chunk:", trimmedLine);
              }
            }
          }
        }
      }

    } catch (error) {
      console.error("OpenAI API Error:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Oops! Something went wrong connecting to my AI brain." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = (prompt) => {
    if (prompt.kind === 'link') {
      window.open(prompt.href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (prompt.kind === 'scroll') {
      onClose?.();
      requestAnimationFrame(() => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    handleSend(prompt.query || prompt.label);
  };

  const suggestedPrompts = [
    { label: 'see my work', kind: 'scroll', icon: 'down' },
    { label: 'how do you ship?', kind: 'ask', query: 'How do you ship products?' },
    { label: 'what designer are you?', kind: 'ask', query: 'What kind of designer are you?' },
    { label: "what's your availability?", kind: 'ask', query: "What's your availability?" },
    { label: 'wanna chat?', kind: 'link', icon: 'out', href: 'https://cal.com/ndaguba-nnaemeka-s5lfaw/30min' },
    { label: 'resume', kind: 'link', icon: 'out', href: 'https://docs.google.com/document/d/1iJj-DzZBh493NrEzz_oyp5eKeDDIDJy65WbonwRHjpI/edit?usp=sharing' },
    { label: 'linkedin', kind: 'link', icon: 'out', href: 'https://www.linkedin.com/in/emeka-ndaguba' },
    { label: 'github', kind: 'link', icon: 'out', href: 'https://github.com/' }
  ];

  return (
    <div className={`chat-panel chat-panel--${variant} ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <button className="action-btn" onClick={handleNewChat} aria-label="New chat">
          <LiaRedoAltSolid />
          <span>New</span>
        </button>
        <button className="close-btn" onClick={onClose} aria-label="Close chat">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            {msg.role === 'assistant' && (
              <img src={emekaAvatar} alt="Emeka" className="message-avatar" />
            )}
            <div className="message-content">
              {msg.role === 'assistant' ? (
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (!messages.length || messages[messages.length - 1].role !== 'assistant' || !messages[messages.length - 1].content) && (
          <div className="message assistant">
            <div className="message-content typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        {messages.length === 1 && !isLoading && (
          <div className="suggested-prompts">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="prompt-button"
                onClick={() => handlePromptClick(prompt)}
              >
                <span>{prompt.label}</span>
                {prompt.icon === 'down' && (
                  <svg className="prompt-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                )}
                {prompt.icon === 'out' && (
                  <svg className="prompt-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask about Emeka..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={() => handleSend()} aria-label="Send message">
          <BsArrowUp />
        </button>
      </div>
    </div>
  );
}
