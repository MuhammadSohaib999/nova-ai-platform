"use client";

import { useState } from "react";
import { ArrowRight, Mail, CheckCircle, Loader2 } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="absolute inset-0 glass-strong" />

          {/* Content */}
          <div className="relative p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <Mail className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-neutral-400">Get in touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                supercharge
              </span>{" "}
              your workflow?
            </h2>

            <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
              Join 50,000+ professionals who are already using Nova AI to work smarter,
              not harder. Start your free trial today.
            </p>

            {/* Email form */}
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 text-green-400 animate-fade-in">
                <CheckCircle className="w-5 h-5" />
                <span className="text-lg">{message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 rounded-xl glass text-white placeholder:text-neutral-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="relative px-6 py-4 rounded-xl text-base font-semibold text-white overflow-hidden group shrink-0 disabled:opacity-70"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500 to-cyan-500" />
                  <span className="relative flex items-center gap-2">
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm mt-4 animate-fade-in">{message}</p>
            )}

            <p className="text-xs text-neutral-600 mt-4">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
