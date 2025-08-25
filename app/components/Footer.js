"use client";

export default function Footer() {
  return (
    <footer className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/footer.jpg)' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 py-16">
        <div className=" mx-auto">
          {/* Main heading */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
              Don't be shy,
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              say hi!
            </h2>
          </div>

          {/* Three column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
              <div className="space-y-2 text-white/90">
                <p>Bucharest</p>
                <p>36 Putul Lui Zamfir,</p>
                <p>Sector 1, Bucharest</p>
              </div>
            </div>

            {/* Email Contacts */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/90 mb-1">Start a conversation</p>
                  <a 
                    href="mailto:office@globalrecords.com" 
                    className="text-[#c4b183] hover:text-white transition-colors"
                  >
                    office@globalrecords.com
                  </a>
                </div>
                <div>
                  <p className="text-white/90 mb-1">For concerts</p>
                  <a 
                    href="mailto:booking@globalrecords.com" 
                    className="text-[#c4b183] hover:text-white transition-colors"
                  >
                    booking@globalrecords.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="block text-white/90 hover:text-[#c4b183] transition-colors">TikTok</a>
                <a href="#" className="block text-white/90 hover:text-[#c4b183] transition-colors">Instagram</a>
                <a href="#" className="block text-white/90 hover:text-[#c4b183] transition-colors">Facebook</a>
                <a href="#" className="block text-white/90 hover:text-[#c4b183] transition-colors">Youtube</a>
                <a href="#" className="block text-white/90 hover:text-[#c4b183] transition-colors">Linkedin</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-white/70 text-sm">
            <p>© 2025 Global Records</p>
            <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
              <a href="#" className="hover:text-white transition-colors">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
