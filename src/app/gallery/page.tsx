import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const images = [
    "Image-24898.jpg",
    "Image-25753.jpg",
    "Image-3993.jpg",
    "Image-42999.jpg",
    "Image-49465.jpg",
    "Image-55019.jpg",
    "Image-57822.jpg",
    "Image-69795.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A visual journey of our efforts, medical camps, and the smiles we've helped create in Indukurpet and beyond.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer
                ${i % 4 === 0 ? "aspect-square" : i % 3 === 0 ? "aspect-video" : "aspect-[3/4]"}
              `}
            >
              <Image 
                src={`/gallery/${img}`} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
