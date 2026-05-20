"use client";

import { Marquee } from "@/components/ui/marquee";
import { Star, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Quantum Labs",
    content: "Nova AI has completely transformed our development workflow. We ship 3x faster now with their intelligent automation tools.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Product Manager at ScaleUp",
    content: "The analytics dashboard alone is worth the subscription. Being able to ask AI questions about our data has been a game-changer.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder at Bright Studio",
    content: "I replaced 4 separate tools with Nova. The all-in-one approach saves us thousands per month and the AI features are incredible.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Engineering Lead at Nexus",
    content: "Enterprise-grade security with consumer-grade UX. Nova is what we've been waiting for. Our team adopted it in days.",
    rating: 5,
  },
  {
    name: "Alicia Torres",
    role: "Head of Ops at Vortex",
    content: "The smart automations have saved our ops team 20+ hours per week. Nova pays for itself within the first month of use.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Director at CloudBridge",
    content: "Onboarding was seamless. The AI understood our existing workflows and suggested optimizations we hadn't even thought of.",
    rating: 5,
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

function TestimonialCard({
  name,
  role,
  content,
  rating,
}: {
  name: string;
  role: string;
  content: string;
  rating: number;
}) {
  return (
    <div className="glass rounded-2xl p-6 w-[350px] shrink-0 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] group">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-violet-400 text-violet-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-neutral-300 text-sm leading-relaxed mb-6">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-neutral-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-neutral-400">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join the growing community of teams and individuals who&apos;ve transformed
            their productivity with Nova AI.
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:35s] mb-4">
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#030014] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#030014] to-transparent" />
      </div>
    </section>
  );
}
