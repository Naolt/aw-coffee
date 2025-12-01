import Image from "next/image";

export default function GalleryPage() {
  // Array of gallery images - you can add more as needed
  const galleryImages = [
    {
      src: "/home/hero.jpg",
      alt: "Tuga Farm landscape",
      span: "md:col-span-2 md:row-span-2", // Large featured image
    },
    {
      src: "/home/hero.jpg",
      alt: "Coffee processing",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/home/hero.jpg",
      alt: "Drying beds",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/home/hero.jpg",
      alt: "Fresh coffee cherries",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: "/home/hero.jpg",
      alt: "Washing station",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/home/hero.jpg",
      alt: "Quality control",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/home/hero.jpg",
      alt: "Farm workers",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/home/hero.jpg",
      alt: "Coffee beans drying",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6">
              GALLERY
            </h1>
            <p className="text-xl md:text-2xl text-brown font-light max-w-3xl mx-auto leading-relaxed">
              A Visual Journey from Farm to Cup
            </p>
          </div>

          {/* Masonry Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${image.span}`}
                style={{ borderRadius: '30px' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay with Caption */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                  <p className="text-white font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
