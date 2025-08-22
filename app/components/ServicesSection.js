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
  if (name === 'studio') {
    return (
      <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  // &apos;note&apos;
  if (name === 'note') {
    return (
      <svg viewBox="0 0 48 48" className={`w-16 h-16 opacity-20 ${className}`}>
        <rect x="4" y="10" width="40" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M26 18v12a5 5 0 1 1-2-4v-8l14-3v10a5 5 0 1 1-2-4v-7l-10 2z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
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
          return (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 transition-all duration-500 hover:scale-105 ${
                item.tilt === 'left' ? '-rotate-2' : item.tilt === 'right' ? 'rotate-2' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#c4b183]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                item.tilt === 'left' ? 'rotate-2' : item.tilt === 'right' ? '-rotate-2' : ''
              }`} />

              {/* gradient "gold" frame */}
              <div className="bg-gradient-to-r from-[#b79c64] via-[#c8b07a] to-[#b79c64] p-[3px] rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
                <div className="bg-[#1a1a1a] rounded-sm p-6">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <GoldIcon name={item.icon} className="w-16 h-16 text-[#c4b183]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}</div>
      </div>
    </section>
  );
}
