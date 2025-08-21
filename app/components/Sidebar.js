"use client"
import { useEffect } from "react";

export default function Sidebar({ open, onClose }) {
  // lock scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  const items = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "OUR ARTISTS", href: "#artists" },
    { label: "SHOP", href: "#shop" },
    { label: "CAREERS", href: "#careers" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300  cursor-pointer ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Panel (slide from right) */}
      <aside
        className={`fixed top-0 right-0 h-full w-[78vw] max-w-[449px] bg-[#111] text-white shadow-2xl transition-transform duration-300 ease-out will-change-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Main menu"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-6 top-6 h-10 w-10 grid place-items-center group"
        >
          <span className="relative block h-6 w-6 before:content-[''] after:content-[''] before:absolute before:inset-0 after:absolute after:inset-0 before:rotate-45 after:-rotate-45 before:bg-[#c4b183] after:bg-[#c4b183] before:h-[2px] after:h-[2px] before:top-1/2 after:top-1/2 before:w-full after:w-full" />
        </button>

        {/* Menu list */}
        <nav className="h-full overflow-y-auto">
          <ul className="mt-24 px-12 pb-16 space-y-8">
            {items.map((item, idx) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`block text-2xl sm:text-2xl md:text-3xl tracking-widest uppercase ${
                    idx === 0 ? "text-[#c4b183]" : "text-white"
                  } hover:text-[#c4b183] transition-colors`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
