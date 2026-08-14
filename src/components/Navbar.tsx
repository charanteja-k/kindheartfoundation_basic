import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/kindheartfoundation.jpg" 
            alt="Kind Heart Foundation Logo" 
            width={40} 
            height={40} 
            className="rounded-lg object-cover group-hover:opacity-90 transition-opacity"
          />
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
