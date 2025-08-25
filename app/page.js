'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar, { MenuButton } from './components/Sidebar';
import {
  Apple,
  Spotify,
  Youtube,
  Instagram,
  Music2 as Tiktok, // Lucide doesn&apos;t have TikTok, so we&apos;ll alias Music2
  Linkedin,
  Facebook,
  ShoppingCart
} from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background video (bottom layer) */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay (middle layer) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Top bar (top layer) */}
      <header className="relative z-30 flex items-start justify-between px-5 sm:px-8 pt-6">
        <button 
          onClick={() => router.push('/')}
          className="flex flex-col select-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-[26px] font-extrabold tracking-wider leading-none">
            GLOBAL <span className="font-black">RECORDS</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] mt-1 opacity-80">
            Sounds Different
          </span>
        </button>

        <MenuButton onClick={() => setMenuOpen(true)} />
      </header>

      {/* Footer made absolute (top layer) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 pointer-events-none">
        {/* Social icons */}
        <div className="absolute left-4 sm:left-6 bottom-10 flex items-center gap-6 opacity-95 text-white pointer-events-auto">
          <Apple className="w-8 h-8 stroke-[2.5]" />
          <Youtube className="w-8 h-8 stroke-[2.5]" />
          <Instagram className="w-8 h-8 stroke-[2.5]" />
          <Tiktok className="w-8 h-8 stroke-[2.5]" />
          <Linkedin className="w-8 h-8 stroke-[2.5]" />
          <Facebook className="w-8 h-8 stroke-[2.5]" />
        </div>

        {/* Shop CTA */}
        <a
          href="#shop"
          className="absolute right-6 bottom-10 inline-flex items-center gap-3 text-lg tracking-widest uppercase text-white pointer-events-auto"
        >
          <span className="opacity-90">Shop</span>
          <ShoppingCart className="w-7 h-7 stroke-[2.5]" />
        </a>
      </footer>

      {/* Slide-in sidebar */}
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}

