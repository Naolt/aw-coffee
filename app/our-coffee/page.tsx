import Image from "next/image";

export default function OurCoffeePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6">
              OUR COFFEE
            </h1>
            <p className="text-xl md:text-2xl text-brown font-light max-w-4xl mx-auto leading-relaxed">
              We produce premium 100% Arabica specialty coffee that meets international standards and roaster expectations.
            </p>
          </div>

          {/* Coffee Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Natural Card */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square overflow-hidden group cursor-pointer mb-6" style={{ borderRadius: '30px' }}>
                <Image
                  src="/our-farm/natural.webp"
                  alt="Natural Process Coffee"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-3">
                Natural
              </h3>
              <p className="text-lg text-brown/80 font-light leading-relaxed">
                Fruity, sweet, and intense aromas
              </p>
            </div>

            {/* Washed Card */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square overflow-hidden group cursor-pointer mb-6" style={{ borderRadius: '30px' }}>
                <Image
                  src="/our-farm/washed.jpg"
                  alt="Washed Process Coffee"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-3">
                Washed
              </h3>
              <p className="text-lg text-brown/80 font-light leading-relaxed">
                Fruity, sweet, and aromatic, with pronounced body.
              </p>
            </div>

            {/* Anaerobic Card */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square overflow-hidden group cursor-pointer mb-6" style={{ borderRadius: '30px' }}>
                <Image
                  src="/our-farm/anaerobic.webp"
                  alt="Anaerobic Process Coffee"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-3">
                Anaerobic
              </h3>
              <p className="text-lg text-brown/80 font-light leading-relaxed">
                Lots designed for specialty roasters seeking distinctive flavor experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Farms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Our Farms</h2>
            <p className="text-xl md:text-2xl text-brown font-light max-w-4xl mx-auto leading-relaxed">
              We manage the full journey of the bean—from farm to export—so every lot you receive is traceable, consistent, and true to its origin.
            </p>
          </div>

          {/* Large Feature Image */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="relative w-full aspect-[16/9] overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
              <Image
                src="/our-farm/farm.jpg"
                alt="Tuga Farm"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Three Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tuga Farm Card */}
            <div className="bg-white border border-brown/10 p-8 transition-all duration-300 hover:shadow-lg hover:border-brown/20 hover:-translate-y-1" style={{ borderRadius: '30px' }}>
              <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-semibold text-brown mb-4">Tuga Farm</h3>
              <p className="text-brown/80 font-light leading-relaxed mb-4">
                Our Tuga Farm, located in Bitta Woreda, Kaffa, is a forest coffee farm where trees grow under native shade, surrounded by diverse plant life.
              </p>
              <div className="pt-4 border-t border-brown/10">
                <p className="text-brown font-semibold mb-2">High Elevation</p>
                <p className="text-brown/80 font-light text-sm leading-relaxed">
                  Above 2,000m for dense beans and complex flavor.
                </p>
              </div>
            </div>

            {/* Our People Card */}
            <div className="bg-white border border-brown/10 p-8 transition-all duration-300 hover:shadow-lg hover:border-brown/20 hover:-translate-y-1" style={{ borderRadius: '30px' }}>
              <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-semibold text-brown mb-6">Our People</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-brown font-semibold mb-2">100+ Permanent Workers</p>
                  <p className="text-brown/80 font-light text-sm leading-relaxed">
                    Year-round professionals responsible for farm management, processing, quality control, and operations.
                  </p>
                </div>
                <div>
                  <p className="text-brown font-semibold mb-2">200+ Seasonal Workers</p>
                  <p className="text-brown/80 font-light text-sm leading-relaxed">
                    Employed during harvest and peak processing seasons, providing essential support and benefiting from fair wages and community programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="bg-white border border-brown/10 p-8 transition-all duration-300 hover:shadow-lg hover:border-brown/20 hover:-translate-y-1" style={{ borderRadius: '30px' }}>
              <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-2xl font-semibold text-brown mb-6">Infrastructure</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-brown font-semibold mb-2">10+ Washing Stations</p>
                  <p className="text-brown/80 font-light text-sm leading-relaxed">
                    Strategically located near our farms and partner farmers to process cherries quickly after harvest, preserving sweetness and acidity.
                  </p>
                </div>
                <div>
                  <p className="text-brown font-semibold mb-2">5 Drying Stations</p>
                  <p className="text-brown/80 font-light text-sm leading-relaxed">
                    Raised African beds and carefully managed drying conditions for clean, uniform lots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
