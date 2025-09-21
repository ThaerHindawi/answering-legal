import Image from "next/image";
import { Button } from "./common/Button";
import Divider from "./common/Divider";

export default function IntakeProcess() {
  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-1100 mx-auto px-8 lg:px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <h2 className="text-32 font-bold leading-none">
                Design your perfect legal intake process
              </h2>
              <Divider className="rounded-8" />
              <p className="text-xl leading-32">
                Get everything you need out of every new client call. The
                virtual receptionists at our legal intake call center will use
                your unique specifications to perform a legal intake for every
                new client caller.
              </p>
            </div>
            {/* CTA Button */}
            <Button variant="primary" size="lg" fullWidth={false}>
              See our pricing
            </Button>
          </div>

          {/* Right content - Image with checkmarks */}
          <div className="relative order-1 lg:order-2">
            <Image
              src="/Receptionist_IMG.png"
              alt="Intake Process"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
