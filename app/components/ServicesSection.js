'use client';
import React from 'react';



export const data ={
    "items": [
      {
        "id": "music-production",
        "titleLine1": "MUSIC",
        "titleLine2": "PRODUCTION",
        "description": "Recording to the highest international standards, strong and experienced A&R team and the most relevant music producers of the moment.",
        "icon": "studio",
        "tilt": "left"
      },
      {
        "id": "song-writing",
        "titleLine1": "SONG",
        "titleLine2": "WRITING",
        "description": "The most appreciated songwriters in Romania, authors of many hits with billions of views and success all over the world.",
        "icon": "note",
        "tilt": "right"
      },{
        "id": "studio-rental",
        "titleLine1": "STUDIO",
        "titleLine2": "RENTAL",
        "description": "9 state-of-the-art music studios, fully equipped to match international standards, placed in the heart of Bucharest.",
        "icon": "studio",
        "tilt": "left"
      },
      {
        "id": "event-planning",
        "titleLine1": "EVENT",
        "titleLine2": "PLANNING",
        "description": "Being home to the largest group of artists, we also plan and organise over 700 concerts, music awards and parties, each year, worldwide.",
        "icon": "note",
        "tilt": "right"
      }
    ]
  }
  

function GoldIcon({ name, className = '' }) {
  // simple inline SVGs (muted, decorative)
  if (name === 'studio') {
    return (
      <svg viewBox="0 0 48 48" className={`w-16 h-16 opacity-20 ${className}`}>
        <rect x="3" y="12" width="30" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="39" cy="22" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="39" y1="16" x2="39" y2="28" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="36" x2="27" y2="36" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  // 'note'
  return (
    <svg viewBox="0 0 48 48" className={`w-16 h-16 opacity-20 ${className}`}>
      <rect x="4" y="10" width="40" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M26 18v12a5 5 0 1 1-2-4v-8l14-3v10a5 5 0 1 1-2-4v-7l-10 2z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative bg-[#0f0f0f] text-white px-5 sm:px-8 pt-24 pb-28">
      {/* Heading */}
      <h2 className="uppercase font-black tracking-tight leading-[0.85]
                     text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[6vw] mb-10 ml-20">
        Services
      </h2>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24
                        justify-items-center lg:justify-items-stretch ">
        {data.items.map((item) => {
          const outerTilt =
            item.tilt === 'left' ? '-rotate-2' : item.tilt === 'right' ? 'rotate-2' : '';
          const innerTilt =
            item.tilt === 'left' ? 'rotate-2' : item.tilt === 'right' ? '-rotate-2' : '';

          return (
            <div key={item.id} className={`relative ${outerTilt}`}>
              {/* gradient "gold" frame */}
              <div className="bg-gradient-to-r from-[#b79c64] via-[#c8b07a] to-[#b79c64] p-[3px] rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
                {/* content box (counter-tilt to look straight) */}
                <div className={`relative ${innerTilt} bg-[#0c0c0c] p-8 md:p-12`}>
                  <GoldIcon name={item.icon} className="absolute right-6 top-6 text-white/70" />

                  <div className="relative z-10">
                    <h3 className="text-[#bfbfbf] font-extrabold uppercase tracking-wide
                                   text-2xl md:text-3xl leading-[1.05]">
                      {item.titleLine1}
                      <br />
                      <span className="text-white/90">{item.titleLine2}</span>
                    </h3>

                    <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-[48ch]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}</div>
      </div>
    </section>
  );
}
