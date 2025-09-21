import Image from "next/image";
import Divider from "@/components/common/Divider";
import { Button } from "@/components/common/Button";

export default function DataSecurity() {
  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-1100px mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
          {/* Left content - Image */}
          <div className="relative w-full h-full">
            <Image
              src="/CRM-Graphic.png"
              alt="Data Security"
              width={500}
              height={500}
              className="object-contain lg:object-cover min-h-300px"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-32px font-bold leading-none">
              Your data’s in good hands
            </h2>
            <Divider className="rounded-8px" />
            <p className="text-xl leading-32px">
              Our partnership with your CRM enables a seamless flow of
              information.
            </p>

            {/* Features list */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41995 11.4633C7.03763 11.4633 6.65531 11.3257 6.36475 11.0428L1.18052 6.08791C0.568811 5.50679 0.545872 4.5357 1.13464 3.92399C1.72341 3.31228 2.68685 3.28934 3.29856 3.87811L7.39701 7.8007L14.6916 0.513718C15.288 -0.0826977 16.2591 -0.0826977 16.8556 0.513718C17.452 1.11013 17.452 2.08122 16.8556 2.67764L8.50573 11.0275C8.20752 11.3257 7.81756 11.4786 7.42759 11.4786L7.41995 11.4633Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base leading-none">
                  Answering Legal’s receptionists take down exactly the
                  information you need.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41995 11.4633C7.03763 11.4633 6.65531 11.3257 6.36475 11.0428L1.18052 6.08791C0.568811 5.50679 0.545872 4.5357 1.13464 3.92399C1.72341 3.31228 2.68685 3.28934 3.29856 3.87811L7.39701 7.8007L14.6916 0.513718C15.288 -0.0826977 16.2591 -0.0826977 16.8556 0.513718C17.452 1.11013 17.452 2.08122 16.8556 2.67764L8.50573 11.0275C8.20752 11.3257 7.81756 11.4786 7.42759 11.4786L7.41995 11.4633Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base leading-none">
                  Through native API integrations with our proprietary software,
                  we make sure it’s immediately where you need it to be.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41995 11.4633C7.03763 11.4633 6.65531 11.3257 6.36475 11.0428L1.18052 6.08791C0.568811 5.50679 0.545872 4.5357 1.13464 3.92399C1.72341 3.31228 2.68685 3.28934 3.29856 3.87811L7.39701 7.8007L14.6916 0.513718C15.288 -0.0826977 16.2591 -0.0826977 16.8556 0.513718C17.452 1.11013 17.452 2.08122 16.8556 2.67764L8.50573 11.0275C8.20752 11.3257 7.81756 11.4786 7.42759 11.4786L7.41995 11.4633Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base leading-none">
                  All you’ll have to do is open your CRM and follow up to secure
                  your new client’s business.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="">
              <Button variant="primary" size="lg" fullWidth={false}>
                See our pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
