import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 md:py-20 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-500">

        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
             <Image 
                src="/kindheartfoundation.jpg" 
                alt="Kind Heart Foundation Logo" 
                width={32} 
                height={32} 
                className="rounded-md object-cover"
              />
              <span className="font-semibold text-gray-900 text-base">
                Kind Heart Foundation
              </span>
          </div>
          <p className="max-w-xs leading-relaxed">
            Providing essential services and care to people in need in Indukurpet and beyond. Building a better, kinder future together.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Our Services</a></li>
            <li><a href="/gallery" className="text-gray-600 hover:text-orange-600 transition-colors">Gallery</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="https://youtube.com/@kindheartfoundations?si=3dyPTNRL9nlGbe64" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all transform hover:scale-110" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="https://www.instagram.com/_kind_heart_foundation?igsh=MThhMm85cDc3YzExdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all transform hover:scale-110" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66v.01"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1DFB6qJdvg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all transform hover:scale-110" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kind Heart Foundation. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Design with ❤️ by <a href='https://github.com/charanteja-k' target='_blank' className='hover:text-orange-600 transition-colors'>Charanteja K</a> </p>
      </div>
    </footer>
  );
}
