import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Placeholder for Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold tracking-tighter group-hover:bg-orange-700 transition-colors">
            KH
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">
            Kind Heart Foundation
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#about" className="hover:text-orange-600 transition-colors">About Us</Link>
          <Link href="#services" className="hover:text-orange-600 transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full transition-all transform hover:scale-105 active:scale-95 font-medium shadow-sm shadow-orange-600/20">
            Donate Now
          </button>
        </nav>
      </div>
    </header>
  );
}
