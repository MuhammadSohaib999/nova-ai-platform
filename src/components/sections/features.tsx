"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  Zap,
  Brain,
  Shield,
  BarChart3,
  Workflow,
  Globe,
} from "lucide-react";

const features = [
  {
    Icon: Brain,
    name: "AI-Powered Intelligence",
    description:
      "Harness GPT-4 level AI capabilities built directly into your workflow. Generate, analyze, and transform content with a single click.",
    className: "col-span-3 md:col-span-2",
  },
  {
    Icon: Zap,
    name: "Lightning Fast",
    description:
      "Sub-100ms response times powered by edge computing. Your AI assistant is always ready, always fast.",
    className: "col-span-3 md:col-span-1",
  },
  {
    Icon: Workflow,
    name: "Smart Automations",
    description:
      "Create complex workflows with our visual builder. Connect 200+ integrations and let AI optimize your processes.",
    className: "col-span-3 md:col-span-1",
  },
  {
    Icon: BarChart3,
    name: "Deep Analytics",
    description:
      "Real-time dashboards with AI-generated insights. Understand your data without writing a single query.",
    className: "col-span-3 md:col-span-1",
  },
  {
    Icon: Shield,
    name: "Enterprise Security",
    description:
      "SOC 2 Type II certified. End-to-end encryption, SSO, and granular access controls keep your data safe.",
    className: "col-span-3 md:col-span-1",
  },
  {
    Icon: Globe,
    name: "Global Infrastructure",
    description:
      "Deployed across 12 regions worldwide. Automatic failover and 99.99% uptime SLA guaranteed.",
    className: "col-span-3 md:col-span-3",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-violet-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-neutral-400">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              move faster
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive suite of AI-powered tools designed to transform how you work,
            collaborate, and grow your business.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="grid-cols-3 gap-4 md:gap-6">
          {features.map((feature) => (
            <BentoCard
              key={feature.name}
              {...feature}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
