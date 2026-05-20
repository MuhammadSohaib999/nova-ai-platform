"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, MessageCircle, Briefcase } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "API Docs"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Community", "Templates", "Tutorials", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                <Image src="/logo.png" alt="Nova" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Nova
              </span>
            </Link>
            <p className="text-neutral-500 text-sm max-w-xs mb-6 leading-relaxed">
              The next-generation AI platform that supercharges your productivity and transforms the way you work.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Briefcase].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Nova AI. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Built with ❤️ using Next.js, Tailwind CSS, and MagicUI
          </p>
        </div>
      </div>
    </footer>
  );
}
