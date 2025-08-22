'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import ServicesSection from '@/app/components/ServicesSection';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // When the paragraph first enters the viewport - reduced to make text visible
  const COPY_START_VH = 100; // Changed from 118 to 100

  return (
    <main className="relative w-full overflow-x-hidden text-white">
      {/* ===== FIXED BACKGROUND (never scrolls) ===== */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/about.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ===== TOP BAR (scrolls with page) ===== */}
      <header className="relative z-30 flex items-start justify-between px-5 sm:px-8 pt-6">
        <button 
          onClick={() => router.push('/')}
          className="flex flex-col select-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-[26px] font-extrabold tracking-wider leading-none uppercase">
            GLOBAL <span className="font-black">RECORDS</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] mt-1 opacity-80">
            Sounds Different
          </span>
        </button>

        <button
          aria-label="Open Menu"
          onClick={() => setMenuOpen(true)}
          className="group relative h-10 w-10 flex flex-col justify-center items-center gap-1"
        >
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
        </button>
      </header>

      {/* ===== SECTION 1: headline scrolls with content ===== */}
      <section className="relative z-20 min-h-screen flex items-end">
        <div className="px-5 sm:px-8 pb-6 sm:pb-10">
          <h1 className="font-extrabold uppercase leading-[0.85] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                         text-[16vw] sm:text-[14vw] md:text-[11vw] lg:text-[6.5vw] mb-[40px]">
            <span className="block">SOUNDS</span>
            <span className="block">DIFFERENT</span>
          </h1>
        </div>
      </section>

      {/* ===== SPACER: Controls how long content rides over the image ===== */}
   

      {/* ===== ABSOLUTE COPY (rides over fixed bg, starts after headline) ===== */}
      <div
        className="relative z-20 px-5 sm:px-8 bg-[#0f0f0f]"
      >
        <div className="mx-auto max-w-[68rem] py-10 sm:py-24">
          <p className="font-medium leading-[1.22] tracking-wide text-white/95
                        text-[8vw] sm:text-[6vw] md:text-[3.2vw] lg:text-[2.2vw]">
            Great music doesn't just happen, it needs to be discovered and brought to
            people. Music is a state of mind, it lives in each of us, it changes
            mentalities and helps no matter what. It represents creativity and joy.
          </p>

          {/* Big block below */}
          <h2 className="mt-[20vh] font-black uppercase leading-[0.85] tracking-tight
                         text-[20vw] sm:text-[14vw] md:text-[7vw]">
            EST.<br />SINCE 2008
          </h2>

          {/* Our Artists button - fixed positioning */}
          <div className="mt-[40vh] flex justify-end">
            <a
              href="#artists"
              className="inline-flex items-center justify-center h-16 px-10
                         bg-[#b79c64] text-black font-extrabold uppercase tracking-[0.3em]"
            >
              Our Artists
            </a>
          </div>

          {/* Headline */}
          <div className="mt-[8rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text */}
            <div>
              <h2 className="font-medium leading-tight
                             text-[9vw] sm:text-[7.5vw] md:text-6xl lg:text-2xl">
                Global Records is an
                independent, full-service
                record label
              </h2>

              {/* Body copy */}
              <div className="mt-10">
                <p className="text-white/90 leading-relaxed
                             text-[4.6vw] sm:text-1rem md:text-xl lg:text-2xl">
                  Global Records, one of the biggest independent labels in Central and Eastern Europe, captivates millions worldwide with its diverse music enjoyed through live performances, digital platforms, and media outlets. With a main label roster of 50 artists and over 25 across its seven sublabels, Global Records is a dynamic ecosystem championing Pop, Electronic, Dance, Urban, and local music scenes. This extensive talent pool solidifies its status as a music powerhouse, shaping the industry and resonating with fans across the world.
                </p>
                <p className="mt-8 text-white/90 leading-relaxed
                             text-[4.6vw] sm:text-1rem md:text-xl lg:text-2xl">
                  With over 700 releases per year, more than 150 video productions, and an impressive 6 billion streams and views in 2024 alone, Global Records continues to break new ground and raise the bar. Its catalogue has surpassed 25 billion streams and views to date, a testament to its lasting appeal and creative strength. Through innovation, authenticity, and a deep connection to both global and local cultures, Global Records remains at the forefront of the music scene - nurturing talent and delivering unforgettable musical experiences to audiences everywhere.
                </p>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="hidden lg:block">
              <div className="w-full h-[600px] bg-cover bg-center bg-no-repeat rounded-lg"
                   style={{ backgroundImage: 'url(/about2.jpg)' }}>
              </div>
            </div>
          </div>
        </div>
      </div>
<ServicesSection/>
      {/* ===== BLACK SECTION (covers the fixed bg below) ===== */}
      <section className="relative z-20 bg-black">
        <div className="px-5 sm:px-8 pb-28 max-w-[68rem] mx-auto">
          {/* next sections go here */}
        </div>
      </section>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}
