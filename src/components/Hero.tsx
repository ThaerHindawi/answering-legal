import Image from "next/image";
import { Button } from "./common/Button";

export default function Hero() {
  return (
    <section className="flex flex-col relative h-auto lg:h-750 lg:min-w-400 text-neutral-white lg:py-16 bg-brand-dark">
      {/* Background Image for desktop */}
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/landing-hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Image for mobile */}
      <div className="relative lg:hidden w-full h-353px xsmd:h-456px lg:h-full">
        <Image
          src="/landing-hero-mobile.jpg"
          alt="Hero"
          fill
          className="object-cover object-top lg:object-center"
        />
      </div>
      {/* Content */}
      <div className="relative md:max-w-1120 px-4 xl:px-0 lg:mx-auto py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-8 lg:w-650">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <h1 className="text-32 text-center lg:text-left lg:text-5xl font-bold">
                We’re more than an answering service
              </h1>
              <p className="text-2xl text-center lg:text-left font-semibold leading-12">
                Answering Legal has everything you need to make sure your firm
                never misses another opportunity.
              </p>
              <Button variant="primary" size="md" fullWidth={true} className="!block lg:!hidden !shadow-custom-3 lg:!shadow-none">
                See our pricing
              </Button>
            </div>

            {/* Rating */}
            <div className="w-full lg:w-fit flex flex-col gap-8 order-1 lg:order-2">
              <div className="flex items-center align-middle">
                <div className="flex flex-row gap-4 justify-center w-full lg:w-fit items-center lg:gap-0 lg:flex-col leading-12">
                  <h2 className="text-base xms:text-2xl leading-none lg:text-32 font-bold">Excellent 4.84</h2>
                  <div className="flex flex-col">
                    <h1 className="text-neutral-yellow text-32 lg:text-5xl font-semibold flex justify-center lg:justify-start gap-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </h1>
                    <span className="text-base lg:text-xl font-semibold">
                      based &#8201;on &#8201;230 &#8201;reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="primary" size="md" fullWidth={true} className="!hidden lg:!block">
                See our pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
