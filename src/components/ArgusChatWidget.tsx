import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  RotateCcw, 
  CheckCircle2, 
  Calendar, 
  User, 
  ShieldCheck,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { REQUIRED_DEMO_SCRIPT } from '../data/propertyData';
import { ChatMessage } from '../types';

interface ArgusChatWidgetProps {
  isOpenExternal?: boolean;
  onToggleExternal?: () => void;
}

export const ArgusChatWidget: React.FC<ArgusChatWidgetProps> = ({
  isOpenExternal,
  onToggleExternal
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Default open to showcase prototype layout
  const [messages, setMessages] = useState<ChatMessage[]>(REQUIRED_DEMO_SCRIPT);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState<number>(-1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync external open state if controlled from header/hero buttons
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  // Continuously ensure Botpress's native blue launcher button is hidden so ONLY the dark custom ARGUS widget appears
  useEffect(() => {
    const hideBotpressNativeButton = () => {
      try {
        if ((window as any).botpressWebChat?.hide) {
          (window as any).botpressWebChat.hide();
        } else if ((window as any).botpress?.hide) {
          (window as any).botpress.hide();
        }
      } catch (e) {
        // ignore
      }

      const selectors = [
        '#bp-webchat-container',
        '.bpw-widget-container',
        '.bpw-floating-button',
        '#bp-webchat-container-iframe',
        'iframe[src*="botpress"]',
        'iframe[title*="botpress"]',
        'iframe[title*="webchat"]',
        'iframe[id*="bp-"]',
        'div[class*="bpw-"]',
        'div[id*="bp-webchat"]',
        'button[class*="bpw-"]',
        'div[data-testid="webchat-container"]'
      ];

      selectors.forEach((sel) => {
        const els = document.querySelectorAll(sel);
        els.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.setProperty('display', 'none', 'important');
            el.style.setProperty('visibility', 'hidden', 'important');
            el.style.setProperty('opacity', '0', 'important');
            el.style.setProperty('pointer-events', 'none', 'important');
            el.style.setProperty('width', '0', 'important');
            el.style.setProperty('height', '0', 'important');
            el.style.setProperty('position', 'absolute', 'important');
            el.style.setProperty('left', '-9999px', 'important');
          }
        });
      });
    };

    hideBotpressNativeButton();
    const interval = setInterval(hideBotpressNativeButton, 400);
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (onToggleExternal) onToggleExternal();
  };

  // Replay exact prompt-required demo conversation step by step
  const handleReplayDemo = () => {
    setMessages([]);
    setAutoPlayIndex(0);
  };

  useEffect(() => {
    if (autoPlayIndex >= 0 && autoPlayIndex < REQUIRED_DEMO_SCRIPT.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, REQUIRED_DEMO_SCRIPT[autoPlayIndex]]);
        setIsTyping(false);
        setAutoPlayIndex((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (autoPlayIndex >= REQUIRED_DEMO_SCRIPT.length) {
      setAutoPlayIndex(-1);
    }
  }, [autoPlayIndex]);

  // Handle user sending live messages to ARGUS AI + Botpress Webchat
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newUserMsg: ChatMessage = {
      id: "user_" + Date.now(),
      sender: "user",
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Send event to Botpress if Botpress Webchat is loaded in window
    try {
      if ((window as any).botpressWebChat) {
        (window as any).botpressWebChat.sendPayload({ type: 'text', text: userText });
      } else if ((window as any).botpress) {
        (window as any).botpress.sendMessage(userText);
      }
    } catch (bpErr) {
      console.warn("Botpress trigger note:", bpErr);
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newUserMsg].map(m => ({ role: m.sender, content: m.content })),
          userIntent: userText
        })
      });

      const data = await res.json();
      
      const newAgentMsg: ChatMessage = {
        id: "agent_" + Date.now(),
        sender: "agent",
        content: data.reply || "I am pleased to assist you with the Yorkville Penthouse Collection.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, newAgentMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      // Local fallback
      const newAgentMsg: ChatMessage = {
        id: "agent_" + Date.now(),
        sender: "agent",
        content: "Thank you. Our senior broker Victoria Sterling has noted your inquiry regarding the $4.5M Yorkville Penthouse and will reach out shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, newAgentMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <button
          onClick={toggleWidget}
          className="group relative px-5 py-3.5 rounded-full bg-zinc-950 border-2 border-amber-400 text-white shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all flex items-center gap-3 backdrop-blur-xl animate-pulse-subtle"
          id="argus-widget-trigger"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-300 flex items-center justify-center text-zinc-950 shadow-lg">
              <Sparkles className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-zinc-950"></span>
          </div>

          <div className="text-left hidden sm:block">
            <span className="block text-xs font-bold text-white tracking-wide font-serif">
              ARGUS AI Assistant
            </span>
            <span className="block text-[10px] font-mono text-amber-400 font-bold">
              24/7 Live Concierge
            </span>
          </div>
        </button>
      )}

      {/* Embedded Chat Window (Matches exact screenshot layout) */}
      {isOpen && (
        <div 
          className="w-[390px] sm:w-[480px] h-[640px] max-h-[88vh] rounded-2xl bg-[#121212] border-2 border-amber-500/70 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-300 ring-1 ring-amber-500/30"
          id="argus-chat-window"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-3.5 sm:p-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-300 flex items-center justify-center text-zinc-950 shadow-md">
                  <Sparkles className="w-5 h-5 text-zinc-950" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-zinc-950"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide font-serif">
                    ARGUS AI Assistant
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-400/50 font-bold uppercase tracking-wider">
                    24/7 LIVE
                  </span>
                </div>
                <span className="text-[11px] text-zinc-300 font-medium block mt-0.5">
                  The Yorkville Luxury Group Concierge
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReplayDemo}
                title="Replay Video Demo Conversation"
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-amber-300 text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                id="replay-demo-btn"
              >
                <RotateCcw className="w-3.5 h-3.5 text-zinc-300" />
                <span className="text-[11px] font-mono font-medium">Demo Replay</span>
              </button>

              <button
                onClick={toggleWidget}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white transition-colors"
                id="close-chat-widget-btn"
                title="Minimize Window"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Subheader Status */}
          <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800/80 text-[11px] font-mono text-zinc-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Listing: Suite 5200 ($4.5M CAD)
            </span>
            <span className="text-emerald-400 font-bold tracking-tight">Broker Calendar Synced</span>
          </div>

          {/* Messages Body */}
          <div 
            className="flex-1 p-4 overflow-y-auto overflow-x-hidden space-y-4 text-xs font-sans bg-[#121212] scrollbar-thin messages-scroll-area min-h-0"
            style={{ overflowY: 'auto', overflowX: 'hidden' }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col w-full ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
                style={{ maxHeight: 'none', height: 'auto', overflow: 'visible' }}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-zinc-400 font-mono">
                  {msg.sender === 'user' ? (
                    <>
                      <span className="text-zinc-300 font-semibold">You</span>
                      <User className="w-3 h-3 text-zinc-400" />
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 font-bold">ARGUS AI</span>
                    </>
                  )}
                  <span>· {msg.timestamp}</span>
                </div>

                <div
                  className={`p-4 rounded-2xl max-w-[90%] leading-relaxed chat-message-bubble bpw-chat-bubble bpw-message-content ${
                    msg.sender === 'user'
                      ? 'bg-amber-500 text-zinc-950 font-bold rounded-tr-xs shadow-md text-xs sm:text-sm'
                      : 'bg-zinc-900/90 border border-zinc-800 text-zinc-100 font-normal rounded-tl-xs shadow-xl text-xs sm:text-sm'
                  }`}
                  style={{
                    maxHeight: 'none',
                    height: 'auto',
                    minHeight: 'fit-content',
                    overflow: 'visible',
                    overflowY: 'visible',
                    overflowX: 'visible',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  <p 
                    className="whitespace-pre-wrap break-words overflow-visible leading-relaxed"
                    style={{ maxHeight: 'none', height: 'auto', overflow: 'visible' }}
                  >
                    {msg.content}
                  </p>

                  {/* Calendar Confirmation Action Card inside ARGUS AI message */}
                  {msg.actionCard && (
                    <div 
                      className="mt-3.5 p-3.5 rounded-xl bg-zinc-950 border border-emerald-500/50 text-zinc-100 space-y-2.5 shadow-inner"
                      style={{ maxHeight: 'none', height: 'auto', overflow: 'visible' }}
                    >
                      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          VIP VIEWING CONFIRMED
                        </span>
                        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold uppercase border border-emerald-500/30">
                          CALENDAR SYNCED
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                          <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{msg.actionCard.slot}</span>
                        </div>
                        <div className="text-zinc-300 text-[11px] font-medium">
                          Senior Broker: <span className="text-white font-semibold">{msg.actionCard.broker}</span>
                        </div>
                        <div className="text-zinc-300 text-[11px] font-mono">
                          Location: <span className="text-zinc-200">{msg.actionCard.location}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono p-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>ARGUS AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Quick Prompts Chips */}
          <div className="p-2.5 bg-zinc-950 border-t border-zinc-800/80 flex gap-2 overflow-x-auto text-xs scrollbar-none">
            <button
              onClick={() => {
                setInputValue("Can I view the penthouse this Saturday?");
              }}
              className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 hover:text-white shrink-0 font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              📅 Schedule Saturday
            </button>
            <button
              onClick={() => {
                setInputValue("What are the HOA maintenance specs?");
              }}
              className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 hover:text-white shrink-0 font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              💰 Maintenance Specs
            </button>
            <button
              onClick={() => {
                setInputValue("Tell me about the private elevator & wine vault.");
              }}
              className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 hover:text-white shrink-0 font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              🍷 Private Features
            </button>
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3.5 bg-zinc-950 border-t border-zinc-800 flex items-end gap-2.5">
            <div className="flex-1 relative bg-zinc-900 border border-zinc-700/80 rounded-xl focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (inputValue.trim()) {
                      handleSendMessage();
                    }
                  }
                }}
                placeholder="Ask ARGUS anything about Suite 5200..."
                rows={2}
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-zinc-400 font-medium focus:outline-none resize-none leading-relaxed min-h-[56px] max-h-[140px] overflow-y-auto scrollbar-thin"
                id="argus-chat-input"
              />
            </div>
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 disabled:opacity-40 text-zinc-950 font-bold transition-all shadow-lg hover:shadow-amber-500/25 shrink-0 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
              id="argus-send-btn"
              title="Send Message (Enter)"
            >
              <Send className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};

