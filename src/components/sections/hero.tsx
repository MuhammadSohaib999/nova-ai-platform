"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora background */}
      <div className="aurora-bg" />

      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        color="#7c3aed"
        size={0.5}
        staticity={30}
        ease={80}
      />

      {/* Radial glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="glass rounded-full px-5 py-2 flex items-center gap-2 group cursor-pointer hover:border-violet-500/30 transition-colors">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <AnimatedShinyText className="text-sm">
              Introducing Nova AI Platform
            </AnimatedShinyText>
            <ArrowRight className="w-3 h-3 text-violet-400 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Animated Logo */}
        <div className="mb-8 flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-28 h-28 animate-float">
            <Image
              src="/logo.png"
              alt="Nova AI"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Build the Future
          <br />
          with{" "}
          <AnimatedGradientText className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            Nova AI
          </AnimatedGradientText>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          The next-generation AI platform that supercharges your productivity.
          Automate workflows, generate content, and unlock insights — all in one beautiful interface.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <Link
            href="#pricing"
            className="relative px-8 py-4 rounded-2xl text-base font-semibold text-white overflow-hidden group w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-violet-400 to-cyan-400 blur-xl" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="#features"
            className="glass px-8 py-4 rounded-2xl text-base font-semibold text-neutral-300 hover:text-white hover:border-white/20 transition-all duration-300 w-full sm:w-auto text-center"
          >
            See How It Works
          </Link>
        </div>

        {/* Metrics */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          {[
            { value: "50K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "2.5x", label: "Faster Workflows" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
    </section>
  );
}
