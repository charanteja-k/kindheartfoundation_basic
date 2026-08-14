export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 md:py-20 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-500">
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-orange-600 rounded-md flex items-center justify-center text-white font-bold tracking-tighter">
                KH
              </div>
              <span className="font-semibold text-gray-900">
                Kind Heart Foundation
              </span>
          </div>
          <p className="max-w-xs leading-relaxed">
            Providing essential services and care to people in need. Building a better, kinder future together.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-orange-600 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-600 transition-colors">Our Services</a></li>
            <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-600 transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kind Heart Foundation. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Design with clean aesthetics.</p>
      </div>
    </footer>
  );
}
