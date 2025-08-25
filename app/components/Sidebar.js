"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Hamburger menu button component that can be used independently
export function MenuButton({ onClick, className = "" }) {
  return (
    <button
      aria-label="Open Menu"
      onClick={onClick}
      className={`group relative h-10 w-10 flex flex-col justify-center items-center gap-1 cursor-pointer ${className}`}
    >
      <span className="h-[2px] w-7 bg-white" />
      <span className="h-[2px] w-7 bg-white" />
      <span className="h-[2px] w-7 bg-white" />
    </button>
  );
}

export default function Sidebar({ open, onClose }) {
  const router = useRouter();

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
    { label: "HOME", href: "/", isRoute: true },
    { label: "ABOUT", href: "/about", isRoute: true },
    { label: "OUR ARTISTS", href: "/our-artists", isRoute: true },
    { label: "SHOP", href: "/shop", isRoute: true },
    { label: "CAREERS", href: "/careers", isRoute: true },
    { label: "CONTACT", href: "/contact", isRoute: true },
  ];

  const handleNavigation = (item) => {
    if (item.isRoute) {
      router.push(item.href);
    }
    onClose();
  };

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
                <button
                  onClick={() => handleNavigation(item)}
                  className={`block text-2xl sm:text-2xl md:text-3xl tracking-widest uppercase w-full text-left cursor-pointer ${
                    idx === 0 ? "text-[#c4b183]" : "text-white"
                  } hover:text-[#c4b183] transition-colors`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
