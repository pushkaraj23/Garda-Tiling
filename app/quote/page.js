"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InstantQuote() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I’m the Garda Tiling Quote Assistant. Let’s get you an accurate estimate. What type of area needs tiling?",
    },
  ]);

  const [input, setInput] = useState("");

  const quote = {
    areaType: "Bathroom",
    size: "Medium (6–10 sqm)",
    waterproofing: "Yes",
    tileType: "Porcelain",
    estimatedPrice: "$3,200 – $3,800",
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "bot",
        text: "Got it. Thanks! I’ll update the estimate based on this. Any waterproofing required?",
      },
    ]);

    setInput("");
  };

  return (
    <main className="w-full min-h-screen pt-28 bg-background px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ================= LEFT : QUOTE SUMMARY ================= */}
        <aside className="lg:col-span-4 order-2 lg:order-1">
          <div className="sticky top-24 bg-card border border-border rounded-3xl p-8 shadow-lg">
            <h2 className="font-bebas text-3xl text-primary tracking-tight">
              Your Quote Summary
            </h2>

            <p className="mt-2 text-sm font-manrope text-text-muted">
              Live estimate based on your inputs
            </p>

            <div className="mt-8 space-y-5 text-sm font-manrope">
              <QuoteRow label="Area Type" value={quote.areaType} />
              <QuoteRow label="Project Size" value={quote.size} />
              <QuoteRow label="Waterproofing" value={quote.waterproofing} />
              <QuoteRow label="Tile Type" value={quote.tileType} />
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs uppercase text-text-muted tracking-wide">
                Estimated Range
              </p>
              <p className="mt-2 text-2xl font-bebas text-primary">
                {quote.estimatedPrice}
              </p>
              <p className="mt-2 text-xs text-text-muted">
                Final pricing confirmed after site inspection.
              </p>
            </div>

            <button
              className="
                mt-8 w-full py-3 rounded-full
                bg-accent text-white
                font-manrope text-sm font-semibold
                hover:scale-[1.02] transition
              "
            >
              Request Final Quote
            </button>
          </div>
        </aside>

        {/* ================= RIGHT : CHAT ================= */}
        <section className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-card border border-border rounded-3xl shadow-lg flex flex-col h-[75vh]">
            {/* HEADER */}
            <div className="px-6 py-4 border-b border-border">
              <h1 className="font-bebas text-2xl text-primary">
                Instant Tiling Quote
              </h1>
              <p className="text-xs font-manrope text-text-muted">
                Answer a few questions to receive a tailored estimate
              </p>
            </div>

            {/* CHAT BODY */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`max-w-[75%] ${
                    msg.role === "user" ? "ml-auto text-right" : "mr-auto"
                  }`}
                >
                  <div
                    className={`
                      px-4 py-3 rounded-2xl text-sm leading-relaxed
                      ${
                        msg.role === "user"
                          ? "bg-linear-to-br from-accent-secondary to-accent/75 text-white rounded-br-sm"
                          : "bg-primary/5 text-text-primary rounded-bl-sm"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* INPUT */}
            <div className="px-4 py-4 border-t border-border flex gap-3">
              <input
                type="text"
                placeholder="Type your answer..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="
                  flex-1 rounded-full px-5 py-3
                  border border-border
                  font-manrope text-sm
                  focus:outline-none focus:border-accent
                "
              />
              <button
                onClick={sendMessage}
                className="
                  px-6 py-3 rounded-full
                  bg-primary text-white
                  font-manrope text-sm font-semibold
                  hover:scale-105 transition
                "
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= HELPER ================= */

function QuoteRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-text-muted">{label}</span>
      <span className="text-text-primary font-medium">{value}</span>
    </div>
  );
}
