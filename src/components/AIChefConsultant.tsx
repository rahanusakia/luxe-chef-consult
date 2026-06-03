import { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "assistant";
  content: string;
}

interface QuickPrompt {
  label: string;
  prompt: string;
  icon: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Chef Lumière, an elite personal chef consultant with 20+ years of experience in Michelin-starred restaurants across Paris, Tokyo, and New York. You specialize in:

- Crafting personalized luxury dining experiences and custom menus
- Pairing ingredients, wines, and flavors with expert precision  
- Recommending private chef services for events (intimate dinners, corporate galas, weddings)
- Providing haute cuisine recipes with professional techniques
- Dietary accommodations (vegan, gluten-free, kosher, halal) without sacrificing luxury
- Sourcing premium, seasonal, and artisanal ingredients

Your tone is warm yet refined — like a trusted friend who happens to hold a Michelin star. Be specific, practical, and inspire culinary confidence. When recommending services, naturally mention Luxe Chef Consult's private chef booking feature. Keep responses elegant but not overly verbose.`;

const QUICK_PROMPTS: QuickPrompt[] = [
  { icon: "🍽️", label: "Design my dinner menu", prompt: "I need a luxurious 5-course dinner menu for an intimate dinner party of 8 guests. Make it impressive but achievable." },
  { icon: "👨‍🍳", label: "Book a private chef", prompt: "I want to book a private chef for a special occasion. What should I consider, and what does Luxe Chef Consult offer?" },
  { icon: "🥂", label: "Wine pairing advice", prompt: "I'm serving duck confit and pan-seared foie gras — recommend the perfect wine pairings for each course." },
  { icon: "🌿", label: "Vegan luxury menu", prompt: "Create a stunning plant-based tasting menu that feels genuinely luxurious and would impress non-vegan guests." },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function callOpenAI(messages: Message[]): Promise<string> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text ?? "I apologize, I couldn't generate a response. Please try again.";
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "8px 0" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#c9a96e",
            display: "inline-block",
            animation: `typingBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AIChefConsultant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setError(null);

    const userMsg: Message = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const reply = await callOpenAI(next);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (err) {
      setError("Connection issue. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const isWelcome = messages.length === 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .chef-container * { box-sizing: border-box; }
        .chef-container { font-family: 'Jost', sans-serif; }

        .chef-msg-user   { animation: fadeUp 0.3s ease forwards; }
        .chef-msg-assist { animation: fadeUp 0.35s ease forwards; }

        .chef-input:focus { outline: none; }
        .chef-input::placeholder { color: #8a7a6a; }

        .chef-send-btn:hover  { background: #b8923a !important; }
        .chef-send-btn:active { transform: scale(0.97); }

        .chef-quick:hover {
          background: rgba(201,169,110,0.15) !important;
          border-color: #c9a96e !important;
          color: #c9a96e !important;
        }

        .chef-scrollbar::-webkit-scrollbar       { width: 4px; }
        .chef-scrollbar::-webkit-scrollbar-track  { background: transparent; }
        .chef-scrollbar::-webkit-scrollbar-thumb  { background: #3a2e22; border-radius: 2px; }

        .chef-logo-text {
          background: linear-gradient(135deg, #c9a96e 0%, #f0d898 50%, #c9a96e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .chef-prose p  { margin: 0 0 10px 0; }
        .chef-prose p:last-child { margin-bottom: 0; }
        .chef-prose ul { margin: 8px 0; padding-left: 20px; }
        .chef-prose li { margin: 4px 0; }
        .chef-prose strong { color: #e8d4a0; }
      `}</style>

      <div
        className="chef-container"
        style={{
          background: "linear-gradient(160deg, #1a1208 0%, #0f0b06 60%, #14100a 100%)",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #2e2416",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,169,110,0.1)",
          display: "flex",
          flexDirection: "column",
          height: 680,
          maxWidth: 720,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(201,169,110,0.15)",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a96e, #8a6030)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              flexShrink: 0,
              boxShadow: "0 0 20px rgba(201,169,110,0.3)",
            }}
          >
            👨‍🍳
          </div>
          <div>
            <div
              className="chef-logo-text"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.05em" }}
            >
              Chef Lumière
            </div>
            <div style={{ fontSize: 11, color: "#6b5a42", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 1 }}>
              AI Culinary Consultant · Luxe Chef Consult
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.2)",
              padding: "4px 10px",
              borderRadius: 20,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "block" }} />
            <span style={{ fontSize: 11, color: "#8a7a6a", letterSpacing: "0.08em" }}>Online</span>
          </div>
        </div>

        {/* Messages */}
        <div
          className="chef-scrollbar"
          style={{ flex: 1, overflowY: "auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}
        >
          {isWelcome && (
            <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#c9a96e",
                  marginBottom: 8,
                  letterSpacing: "0.02em",
                }}
              >
                Bonjour, je suis Chef Lumière
              </div>
              <p style={{ color: "#6b5a42", fontSize: 13, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 28px" }}>
                Your personal AI culinary consultant. Ask me anything — from curating a bespoke dinner menu to finding the perfect private chef for your next event.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 500, margin: "0 auto" }}>
                {QUICK_PROMPTS.map((qp) => (
                  <button
                    key={qp.label}
                    className="chef-quick"
                    onClick={() => sendMessage(qp.prompt)}
                    style={{
                      background: "rgba(201,169,110,0.06)",
                      border: "1px solid rgba(201,169,110,0.2)",
                      borderRadius: 10,
                      padding: "12px 14px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                      color: "#8a7a6a",
                      fontSize: 12,
                      fontFamily: "'Jost', sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{qp.icon}</div>
                    <div>{qp.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.role === "user" ? "chef-msg-user" : "chef-msg-assist"}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              {msg.role === "assistant" && (
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #c9a96e, #8a6030)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  👨‍🍳
                </div>
              )}
              <div
                className={msg.role === "assistant" ? "chef-prose" : ""}
                style={{
                  maxWidth: "75%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                  background:
                    msg.role === "user"
                      ? "linear-gradient(135deg, #c9a96e, #a07840)"
                      : "rgba(255,255,255,0.04)",
                  border: msg.role === "user" ? "none" : "1px solid rgba(201,169,110,0.1)",
                  color: msg.role === "user" ? "#1a1208" : "#c4b49a",
                  fontSize: 13.5,
                  lineHeight: 1.75,
                  fontWeight: msg.role === "user" ? 500 : 300,
                }}
                dangerouslySetInnerHTML={{
                  __html: msg.content
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\n\n/g, "</p><p>")
                    .replace(/\n- /g, "</p><ul><li>")
                    .replace(/\n/g, "<br/>")
                    .replace(/^/, "<p>")
                    .replace(/$/, "</p>"),
                }}
              />
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a96e, #8a6030)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                👨‍🍳
              </div>
              <div
                style={{
                  padding: "10px 16px",
                  borderRadius: "4px 16px 16px 16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,169,110,0.1)",
                }}
              >
                <TypingIndicator />
              </div>
            </div>
          )}

          {error && (
            <div
              style={{
                textAlign: "center",
                color: "#c0715a",
                fontSize: 12,
                background: "rgba(192,113,90,0.08)",
                border: "1px solid rgba(192,113,90,0.2)",
                borderRadius: 8,
                padding: "8px 16px",
              }}
            >
              {error}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div
          style={{
            padding: "14px 16px",
            borderTop: "1px solid rgba(201,169,110,0.1)",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            gap: 10,
            alignItems: "flex-end",
            flexShrink: 0,
          }}
        >
          <textarea
            ref={textareaRef}
            className="chef-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask Chef Lumière anything…"
            rows={1}
            disabled={loading}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: 10,
              padding: "10px 14px",
              color: "#e8d4a0",
              fontSize: 13.5,
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              resize: "none",
              lineHeight: 1.6,
              transition: "border-color 0.2s",
              maxHeight: 120,
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
          />
          <button
            className="chef-send-btn"
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: input.trim() && !loading ? "#c9a96e" : "#2e2416",
              border: "none",
              cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke={input.trim() && !loading ? "#1a1208" : "#6b5a42"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
