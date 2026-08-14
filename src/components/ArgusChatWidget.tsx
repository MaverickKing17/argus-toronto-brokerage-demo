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
  Minimize2,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { ChatMessage } from '../types';
import { askArgusAI } from '../services/geminiService';

interface ArgusChatWidgetProps {
  isOpenExternal?: boolean;
  onToggleExternal?: () => void;
}

export const ArgusChatWidget: React.FC<ArgusChatWidgetProps> = ({
  isOpenExternal,
  onToggleExternal
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Default open to showcase prototype layout
  const [sessionId, setSessionId] = useState<string>(() => 
    typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'session_' + Date.now()
  );
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "intro_init",
      sender: "agent",
      content: "Good afternoon. I am ARGUS, a custom-engineered AI Sales Closer built for Toronto luxury real estate brokerages and top-producing teams. Explore Suite 5200 penthouse specs, schedule private viewings, calculate carry costs, or test how this AI converts high-net-worth buyer traffic.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as user types to comfortably view longer inquiries
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollH = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(Math.max(scrollH, 56), 160)}px`;
    }
  }, [inputValue]);

  const handleScrollInput = (direction: 'up' | 'down') => {
    if (textareaRef.current) {
      const scrollAmount = direction === 'up' ? -50 : 50;
      textareaRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  // Sync external open state if controlled from header/hero buttons
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  // Continuously ensure Botpress's native blue launcher button outside our app is hidden
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
        'div[data-testid="webchat-container"]'
      ];

      selectors.forEach((sel) => {
        const els = document.querySelectorAll(sel);
        els.forEach((el) => {
          if (el instanceof HTMLElement && !el.closest('#root')) {
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
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (onToggleExternal) onToggleExternal();
  };

  // Proper Session Reset ("Demo Replay" button handler)
  const handleDemoReplay = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (err) {
      console.warn("Storage clearance notice:", err);
    }

    const freshSessionId = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : 'session_' + Date.now();

    setSessionId(freshSessionId);
    setMessages([
      {
        id: "intro_" + Date.now(),
        sender: "agent",
        content: "Good afternoon. I am ARGUS, private AI Concierge for The Yorkville Luxury Group. How may I assist with your Toronto luxury property acquisition or private viewing schedule?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputValue('');
    setIsTyping(false);
  };

  // Handle sending all prompts dynamically to the AI API endpoint
  const handleSendMessage = async (e?: React.FormEvent, customPrompt?: string) => {
    if (e) e.preventDefault();
    const textToSend = (customPrompt !== undefined ? customPrompt : inputValue).trim();
    if (!textToSend || isTyping) return;

    const newUserMsg: ChatMessage = {
      id: "user_" + Date.now(),
      sender: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const nextMessages = [...messages, newUserMsg];
    setMessages(nextMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      const replyText = await askArgusAI(nextMessages, textToSend, sessionId);

      const newAgentMsg: ChatMessage = {
        id: "agent_" + Date.now(),
        sender: "agent",
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, newAgentMsg]);
    } catch (err: any) {
      console.error("[ARGUS AI Assistant] Response error:", err);
      const fallbackMsg: ChatMessage = {
        id: "agent_" + Date.now(),
        sender: "agent",
        content: "Thank you for contacting The Yorkville Luxury Group. Our Managing Partner Victoria Sterling and our advisory team are available for immediate confidential consultation regarding our off-market estates and private penthouses.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
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
                onClick={handleDemoReplay}
                title="Reset session & clear storage"
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-amber-300 text-xs transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                id="replay-demo-btn"
              >
                <RotateCcw className="w-3.5 h-3.5 text-zinc-300" />
                <span className="text-[11px] font-mono font-medium">Demo Replay</span>
              </button>

              <button
                onClick={toggleWidget}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white transition-colors cursor-pointer"
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
              AI Sales Closer Demo Mode
            </span>
            <span className="text-amber-400 font-bold tracking-tight">Suite 5200 ($4.5M CAD)</span>
          </div>

          {/* Messages Body */}
          <div 
            ref={messagesContainerRef}
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
                  className={`p-4 rounded-2xl max-w-[90%] leading-relaxed chat-message-bubble ${
                    msg.sender === 'user'
                      ? 'chat-user-bubble bg-amber-500 text-zinc-950 font-bold rounded-tr-xs shadow-md text-xs sm:text-sm'
                      : 'chat-bot-bubble bg-zinc-900 border border-zinc-700/80 text-[#FFFFFF] font-normal rounded-tl-xs shadow-xl text-xs sm:text-sm'
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
                    overflowWrap: 'break-word',
                    color: msg.sender === 'user' ? '#09090b' : '#FFFFFF',
                    backgroundColor: msg.sender === 'user' ? '#f59e0b' : '#18181b',
                    opacity: 1,
                    visibility: 'visible'
                  }}
                >
                  <p 
                    className="whitespace-pre-wrap break-words overflow-visible leading-relaxed"
                    style={{ 
                      maxHeight: 'none', 
                      height: 'auto', 
                      overflow: 'visible',
                      color: msg.sender === 'user' ? '#09090b' : '#FFFFFF',
                      opacity: 1,
                      visibility: 'visible'
                    }}
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
              type="button"
              onClick={() => handleSendMessage(undefined, "Can I view the penthouse this Saturday?")}
              className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 hover:text-white shrink-0 font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              📅 Schedule Saturday
            </button>
            <button
              type="button"
              onClick={() => handleSendMessage(undefined, "What are the HOA maintenance specs for Suite 5200?")}
              className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 hover:text-white shrink-0 font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              💰 Maintenance Specs
            </button>
            <button
              type="button"
              onClick={() => handleSendMessage(undefined, "How does this AI Sales Closer integrate into my luxury real estate team or brokerage?")}
              className="px-3 py-1.5 rounded-full bg-amber-950/80 hover:bg-amber-900/90 border border-amber-500/60 text-amber-300 hover:text-white shrink-0 font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              ⚡ Deploy For My Brokerage
            </button>
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3.5 bg-zinc-950 border-t border-zinc-800 flex items-end gap-2.5">
            <div className="flex-1 relative bg-zinc-900 border border-zinc-700/80 rounded-xl focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all flex items-center">
              <textarea
                ref={textareaRef}
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
                className="w-full bg-transparent pl-4 pr-10 py-3 text-sm text-white placeholder-zinc-400 font-medium focus:outline-none resize-none leading-relaxed min-h-[56px] max-h-[160px] overflow-y-auto scrollbar-thin"
                id="argus-chat-input"
              />

              {/* Dedicated UX Scroll Up / Down Controls for long messages */}
              <div className="absolute right-2 top-2 bottom-2 flex flex-col justify-between items-center py-1 z-10">
                <button
                  type="button"
                  onClick={() => handleScrollInput('up')}
                  className="p-1 rounded-md bg-zinc-800/90 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
                  title="Scroll message up"
                  aria-label="Scroll message up"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScrollInput('down')}
                  className="p-1 rounded-md bg-zinc-800/90 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
                  title="Scroll message down"
                  aria-label="Scroll message down"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
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

