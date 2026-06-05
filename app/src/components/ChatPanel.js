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
  const [bookingOpen, setBookingOpen] = useState(false);
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
    if (prompt.kind === 'book') {
      setBookingOpen(true);
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
    { label: 'wanna chat?', kind: 'book', icon: 'calendar' },
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
            <div className="typing-indicator">
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
                {prompt.icon === 'calendar' && (
                  <svg className="prompt-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
        {bookingOpen && <BookingFlow onClose={() => setBookingOpen(false)} />}
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

// --- In-chat Cal.com booking flow -----------------------------------------
// Talks only to our own /api/cal/* proxy; the Cal.com key never reaches here.
const localDate = (d) => {
  // YYYY-MM-DD in the user's local time (avoids UTC off-by-one from toISOString).
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
};

function BookingFlow({ onClose }) {
  const TZ = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  const [phase, setPhase] = useState('loading'); // loading | pick | form | booking | done | error
  const [slotsByDay, setSlotsByDay] = useState({}); // { 'YYYY-MM-DD': [{start}] }
  const [errorMsg, setErrorMsg] = useState('');
  const [selected, setSelected] = useState(null); // ISO start string
  const [selectedDay, setSelectedDay] = useState(null); // 'YYYY-MM-DD' shown in the slots column
  const [viewMonth, setViewMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const start = localDate(new Date());
        const end = localDate(new Date(Date.now() + 14 * 86400000));
        const res = await apiFetch(
          `/api/cal/slots?start=${start}&end=${end}&timeZone=${encodeURIComponent(TZ)}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load times');
        if (cancelled) return;
        const slots = data.slots || {};
        setSlotsByDay(slots);
        // Default the calendar + slots column to the first day that has availability.
        const firstDay = Object.keys(slots).filter((d) => slots[d]?.length).sort()[0];
        if (firstDay) {
          setSelectedDay(firstDay);
          const fd = new Date(firstDay + 'T00:00:00');
          setViewMonth(new Date(fd.getFullYear(), fd.getMonth(), 1));
        }
        setPhase('pick');
      } catch (e) {
        if (cancelled) return;
        setErrorMsg(e.message || 'Could not load available times.');
        setPhase('error');
      }
    })();
    return () => { cancelled = true; };
  }, [TZ]);

  const fmtDay = (d) =>
    new Date(d + 'T00:00:00').toLocaleDateString(undefined, {
      weekday: 'short', month: 'short', day: 'numeric',
    });
  const fmtTime = (iso) =>
    new Date(iso).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

  // A day has availability if the slots map has a non-empty array for it.
  const hasSlots = (ymd) => Boolean(slotsByDay[ymd]?.length);

  // Build the weeks (rows of 7) for the month currently in view, padded with
  // leading/trailing nulls so the first column is Sunday.
  const buildMonthGrid = (monthStart) => {
    const year = monthStart.getFullYear();
    const month = monthStart.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstWeekday; i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
    while (cells.length % 7 !== 0) cells.push(null);
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  };

  // Limit month navigation to the window we actually fetched slots for.
  const today = new Date();
  const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayWithSlots = Object.keys(slotsByDay).filter(hasSlots).sort().pop();
  const maxMonth = lastDayWithSlots
    ? (() => { const d = new Date(lastDayWithSlots + 'T00:00:00'); return new Date(d.getFullYear(), d.getMonth(), 1); })()
    : thisMonth;
  const canPrevMonth = viewMonth > thisMonth;
  const canNextMonth = viewMonth < maxMonth;
  const shiftMonth = (n) => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1));
  const weeks = buildMonthGrid(viewMonth);
  const dayTimes = selectedDay ? (slotsByDay[selectedDay] || []) : [];

  const submit = async (e) => {
    e.preventDefault();
    if (phase === 'booking') return;
    setPhase('booking');
    setErrorMsg('');
    try {
      const res = await apiFetch('/api/cal/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start: selected, name, email, timeZone: TZ, notes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Booking failed');
      setConfirmed(data);
      setPhase('done');
    } catch (err) {
      setErrorMsg(err.message || 'Could not complete the booking.');
      // If the slot was taken, send them back to re-pick.
      setPhase(/no longer available/i.test(err.message) ? 'pick' : 'form');
    }
  };

  return (
    <div className="booking-card">
      {phase === 'loading' && (
        <div className="booking-status">Loading available times…</div>
      )}

      {phase === 'error' && (
        <div className="booking-status">
          {errorMsg}
          <button className="booking-retry" onClick={onClose}>Close</button>
        </div>
      )}

      {(phase === 'pick') && (
        !lastDayWithSlots ? (
          <div className="booking-status">No open times in the next two weeks.</div>
        ) : (
          <div className="booking-picker">
            {errorMsg && <div className="booking-inline-error">{errorMsg}</div>}

            {/* Event details strip on top */}
            <div className="booking-details">
              <img src={emekaAvatar} alt="Emeka" className="booking-details-avatar" />
              <div className="booking-details-text">
                <span className="booking-details-title">30 min chat</span>
                <span className="booking-details-sub">with Emeka</span>
              </div>
              <span className="booking-details-row" title="30 minutes">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
                30m
              </span>
            </div>

            {/* Calendar + time slots side by side */}
            <div className="booking-row">
            {/* Month calendar */}
            <div className="booking-calendar">
              <div className="booking-cal-head">
                <span className="booking-cal-month">
                  {viewMonth.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
                </span>
                <div className="booking-cal-navs">
                  <button
                    type="button" className="booking-cal-nav"
                    onClick={() => shiftMonth(-1)} disabled={!canPrevMonth}
                    aria-label="Previous month"
                  >‹</button>
                  <button
                    type="button" className="booking-cal-nav"
                    onClick={() => shiftMonth(1)} disabled={!canNextMonth}
                    aria-label="Next month"
                  >›</button>
                </div>
              </div>
              <div className="booking-cal-grid">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((w) => (
                  <span key={`wd-${w}`} className="booking-cal-weekday">{w}</span>
                ))}
                {weeks.flat().map((date, i) => {
                  if (!date) return <span key={`e-${i}`} className="booking-cal-day is-empty" />;
                  const ymd = localDate(date);
                  const available = hasSlots(ymd);
                  const isSelected = ymd === selectedDay;
                  return (
                    <button
                      key={ymd}
                      type="button"
                      className={`booking-cal-day${available ? ' is-available' : ''}${isSelected ? ' is-selected' : ''}`}
                      disabled={!available}
                      onClick={() => { setSelectedDay(ymd); setSelected(null); }}
                    >
                      <span className="booking-cal-num">{date.getDate()}</span>
                      {available && <span className="booking-cal-dot" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots for the selected day */}
            <div className="booking-times">
              <div className="booking-times-label">
                {selectedDay ? fmtDay(selectedDay) : 'Pick a day'}
              </div>
              <div className="booking-times-list">
                {dayTimes.length === 0 ? (
                  <div className="booking-times-empty">No times available.</div>
                ) : (
                  dayTimes.map((s) => (
                    <button
                      key={s.start}
                      className={`booking-slot ${selected === s.start ? 'is-selected' : ''}`}
                      onClick={() => { setSelected(s.start); setPhase('form'); }}
                    >
                      {fmtTime(s.start)}
                    </button>
                  ))
                )}
              </div>
            </div>
            </div>
          </div>
        )
      )}

      {(phase === 'form' || phase === 'booking') && (
        <form className="booking-form" onSubmit={submit}>
          <div className="booking-selected-time">
            {fmtDay(localDate(new Date(selected)))} · {fmtTime(selected)}
            <button type="button" className="booking-change" onClick={() => setPhase('pick')}>
              change
            </button>
          </div>
          {errorMsg && <div className="booking-inline-error">{errorMsg}</div>}
          <input
            type="text" placeholder="Your name" value={name}
            onChange={(e) => setName(e.target.value)} required maxLength={100}
          />
          <input
            type="email" placeholder="Your email" value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
          <textarea
            placeholder="What would you like to chat about? (optional)" value={notes}
            onChange={(e) => setNotes(e.target.value)} rows={2} maxLength={500}
          />
          <button type="submit" className="booking-submit" disabled={phase === 'booking'}>
            {phase === 'booking' ? 'Booking…' : 'Confirm booking'}
          </button>
        </form>
      )}

      {phase === 'done' && (
        <div className="booking-status booking-done">
          <p>Confirmed for <strong>{fmtDay(localDate(new Date(confirmed.start)))} · {fmtTime(confirmed.start)}</strong>. A calendar invite is on its way to {email}.</p>
          {confirmed.meetingUrl && (
            <a href={confirmed.meetingUrl} target="_blank" rel="noopener noreferrer" className="booking-meeting-link">
              Join link
            </a>
          )}
          <button className="booking-retry" onClick={onClose}>Done</button>
        </div>
      )}
    </div>
  );
}
