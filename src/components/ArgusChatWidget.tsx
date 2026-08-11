import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  RotateCcw, 
  Play, 
  CheckCircle2, 
  Calendar, 
  Bot, 
  User, 
  ChevronDown,
  ShieldCheck,
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
  const [isOpen, setIsOpen] = useState<boolean>(true); // Default open to show prototype immediately
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

  // Replay exact prompt-required demo conversation step by step for video recording
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

  // Handle user typing live messages to ARGUS
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
          className="group relative px-4 py-3.5 rounded-full bg-neutral-900 border border-amber-500/50 hover:border-amber-400 text-white shadow-2xl hover:shadow-amber-500/20 transition-all flex items-center gap-3 backdrop-blur-xl animate-pulse-subtle"
          id="argus-widget-trigger"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-900"></span>
          </div>

          <div className="text-left hidden sm:block">
            <span className="block text-xs font-semibold text-white tracking-wide">
              ARGUS AI Assistant
            </span>
            <span className="block text-[10px] font-mono text-amber-400">
              24/7 Live Broker Concierge
            </span>
          </div>
        </button>
      )}

      {/* Embedded Chat Window */}
      {isOpen && (
        <div 
          className="w-[360px] sm:w-[420px] h-[580px] max-h-[85vh] rounded-2xl bg-neutral-950 border border-amber-500/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-300"
          id="argus-chat-window"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-neutral-950 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-inner">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-900"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-white tracking-wide font-serif">
                    ARGUS AI Assistant
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    24/7 LIVE
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 font-light block">
                  The Yorkville Luxury Group Concierge
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReplayDemo}
                title="Replay Video Demo Conversation"
                className="p-1.5 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-amber-300 text-xs transition-colors flex items-center gap-1"
                id="replay-demo-btn"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono hidden sm:inline">Demo Replay</span>
              </button>

              <button
                onClick={toggleWidget}
                className="p-1.5 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                id="close-chat-widget-btn"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subheader Status */}
          <div className="bg-neutral-900/60 px-4 py-1.5 border-b border-neutral-800/60 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              Listing: Suite 5200 ($4.5M CAD)
            </span>
            <span className="text-emerald-400 font-semibold">Broker Calendar Synced</span>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans bg-neutral-950/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1 text-[10px] text-neutral-400 font-mono">
                  {msg.sender === 'user' ? (
                    <>
                      <span>You</span>
                      <User className="w-3 h-3 text-neutral-400" />
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span className="text-amber-400 font-semibold">ARGUS AI</span>
                    </>
                  )}
                  <span>· {msg.timestamp}</span>
                </div>

                <div
                  className={`p-3.5 rounded-2xl max-w-[88%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-500 text-neutral-950 font-medium rounded-tr-xs shadow-md'
                      : 'bg-neutral-900 border border-neutral-800/90 text-neutral-200 rounded-tl-xs shadow-lg'
                  }`}
                >
                  <p>{msg.content}</p>

                  {/* Calendar Confirmation Action Card inside ARGUS AI message */}
                  {msg.actionCard && (
                    <div className="mt-3 p-3 rounded-xl bg-neutral-950 border border-emerald-500/40 text-neutral-200 space-y-2">
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          VIP VIEWING CONFIRMED
                        </span>
                        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                          CALENDAR SYNCED
                        </span>
                      </div>

                      <div className="space-y-1 text-[11px]">
                        <div className="flex items-center gap-2 text-white font-medium">
                          <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{msg.actionCard.slot}</span>
                        </div>
                        <div className="text-neutral-400 text-[10px]">
                          Senior Broker: {msg.actionCard.broker}
                        </div>
                        <div className="text-neutral-400 text-[10px] font-mono">
                          Location: {msg.actionCard.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono p-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>ARGUS AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Quick Prompts */}
          <div className="p-2 bg-neutral-900/80 border-t border-neutral-800 flex gap-2 overflow-x-auto text-[10px]">
            <button
              onClick={() => {
                setInputValue("Can I view the penthouse this Saturday?");
              }}
              className="px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-white shrink-0"
            >
              📅 Schedule Saturday
            </button>
            <button
              onClick={() => {
                setInputValue("What are the HOA maintenance fees?");
              }}
              className="px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-white shrink-0"
            >
              💰 Maintenance Specs
            </button>
            <button
              onClick={() => {
                setInputValue("Tell me about the private elevator & wine vault.");
              }}
              className="px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-white shrink-0"
            >
              🍷 Private Features
            </button>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-neutral-900 border-t border-neutral-800 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask ARGUS about Bay St Penthouse..."
              className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 placeholder-neutral-500"
              id="argus-chat-input"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-neutral-950 font-semibold transition-all"
              id="argus-send-btn"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
