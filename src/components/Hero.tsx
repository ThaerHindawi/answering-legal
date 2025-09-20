export default function Hero() {
  return (
    <section
      className="flex relative h-750 min-w-400 text-neutral-white py-16"
      style={{
        backgroundImage: "url('/landing-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative max-w-1120 mx-4 lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-8 w-650">
            <h1 className="text-32 lg:text-5xl font-bold">
              We’re more than an answering service
            </h1>
            <p className="text-2xl font-semibold leading-12">
              Answering Legal has everything you need to make sure your firm
              never misses another opportunity.
            </p>

            {/* Rating */}
            <div className="w-fit flex flex-col gap-8">
              <div className="flex items-center align-middle">
                <div className="flex flex-col leading-12">
                  <h2 className="text-32 font-bold">Excellent 4.84</h2>
                  <div className="flex flex-col">
                    <h1 className="text-neutral-yellow text-5xl font-semibold flex gap-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </h1>
                    <span className="text-xl font-semibold">
                      based &#8201;on &#8201;230 &#8201;reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="bg-brand-primary hover:bg-brand-dark text-neutral-white text-xl
             font-semibold py-3 px-8 rounded-12 transition-colors w-full"
              >
                See our pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
