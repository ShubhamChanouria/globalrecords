'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import ServicesSection from '@/app/components/ServicesSection';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Artist data in JSON format
  const artists = [
    {
      id: 1,
      name: "Artist Name 1",
      genre: "Pop",
      location: "Los Angeles",
      image: "/ar1.jpg"
    },
    {
      id: 2,
      name: "Artist Name 2",
      genre: "Electronic",
      location: "Berlin",
      image: "/ar2.jpg"
    },
    {
      id: 3,
      name: "Artist Name 3",
      genre: "Rock",
      location: "London",
      image: "/ar3.jpg"
    },
    {
      id: 4,
      name: "Artist Name 4",
      genre: "Hip Hop",
      location: "New York",
      image: "/ar4.jpg"
    },
    {
      id: 5,
      name: "Artist Name 5",
      genre: "Alternative",
      location: "Toronto",
      image: "/ar5.png"
    }
  ];

  // When the paragraph first enters the viewport - reduced to make text visible
  const COPY_START_VH = 100; // Changed from 118 to 100

  return (
    <main className="relative w-full overflow-x-hidden text-white">
      {/* ===== FIXED BACKGROUND (never scrolls) ===== */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/artist.jpg)' }}
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
          Global
          <span className="font-black"> Records</span>
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
            <span className="block">OUR</span>
            <span className="block">ARTISTS</span>
          </h1>
        </div>
      </section>

      {/* ===== SPACER: Controls how long content rides over the image ===== */}
   

      {/* ===== ABSOLUTE COPY (rides over fixed bg, starts after headline) ===== */}
      <div
        className="relative z-20 px-5 sm:px-8 bg-[#0f0f0f]"
      >
        <div className="mx-auto max-w-[50rem] py-10 sm:py-24">
          <div className="max-h-[300px] overflow-y-auto">
            <p className="font-medium leading-[1.22] tracking-wide text-white/95
                          text-[8vw] sm:text-[6vw] md:text-[3.2vw] lg:text-[2.2vw]">
              Global Records is the most prominent independent record label in Eastern Europe, its music being enjoyed by hundreds of millions of people all over the world, live, on digital and on radios and TV stations. It produces, distributes, and promotes over 150 annual releases for top artists such as INNA, Antonia, Carla&apos;s Dreams, The Motans, Irina Rimes, Minelli, Gran Error, SICKOTOY, and many others. Global Records&apos; mission is to work with the best talents who develop valuable content, products & services, aiming to always be one step ahead in a landscape where the only constant is change. Global Records is committed to social responsibility through support for people in having a better today and tomorrow. It is an integrated part of Global Platform, which also includes Global Booking, booking and events agency and Global Talent United, talent and influencers agency.
            </p>
          </div>
        </div>

        {/* Artist Cards - moved outside the constrained container */}
        <div className="px-5 sm:px-8 sm:py-20">
          {/* First Row of Artist Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[3px] max-w-7xl mx-auto">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-[#1a1a1a] overflow-hidden relative group cursor-pointer">
                {/* Image covers the entire card with zoom effect on hover */}
                <div className="w-full h-80 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                     style={{ backgroundImage: `url(${artist.image})` }}>
                </div>
                
                {/* Overlay with artist name at bottom - only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {artist.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of Artist Cards */}
          <div className="mt-[3px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[3px] max-w-7xl mx-auto">
            {artists.map((artist, index) => (
              <div key={`second-${artist.id}`} className="bg-[#1a1a1a] overflow-hidden relative group cursor-pointer">
                {/* Image covers the entire card with zoom effect on hover */}
                <div className="w-full h-80 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                     style={{ backgroundImage: `url(${artist.image})` }}>
                </div>
                
                {/* Overlay with artist name at bottom - only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {artist.name} {index + 1}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row of Artist Cards */}
          <div className="mt-[3px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[3px] max-w-7xl mx-auto">
            {artists.map((artist, index) => (
              <div key={`third-${artist.id}`} className="bg-[#1a1a1a] overflow-hidden relative group cursor-pointer">
                {/* Image covers the entire card with zoom effect on hover */}
                <div className="w-full h-80 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                     style={{ backgroundImage: `url(${artist.image})` }}>
                </div>
                
                {/* Overlay with artist name at bottom - only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {artist.name} {index + 1}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Fourth Row of Artist Cards - Only 2 images */}
          <div className="mt-[3px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[3px] max-w-7xl mx-auto">
            {artists.slice(0, 2).map((artist, index) => (
              <div key={`fourth-${artist.id}`} className="bg-[#1a1a1a] overflow-hidden relative group cursor-pointer">
                {/* Image covers the entire card with zoom effect on hover */}
                <div className="w-full h-80 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                     style={{ backgroundImage: `url(${artist.image})` }}>
                </div>
                
                {/* Overlay with artist name at bottom - only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {artist.name} {index + 1}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
