import { Button } from "./common/Button";

export default function ContactForm() {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="max-w-1120 mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-neutral-white flex flex-col gap-8">
            <h1 className="text-32 leading-none lg:text-5xl font-bold">
              24/7 coverage at a fraction of the cost of in-house receptionists.
            </h1>
            <p className="text-2xl font-semibold leading-none">
              Don’t believe us? Fill out the form on the right, and we’ll take
              you to our pricing page, where you can find out just how little
              24/7 legal intake will cost you.
            </p>
          </div>

          {/* Right content - Form */}
          <div className="flex flex-col gap-8 bg-neutral-white text-brand-dark rounded-20 p-8 shadow-custom-2">
            <div className="">
              <p className="text-2xl font-semibold">
                Tell us about yourself. We’ll show you all of our pricing
                information on the next page.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-7px">
                  <label
                    htmlFor="firstName"
                    className="text-base font-semibold leading-none"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="First Name*"
                    className="w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col gap-7px">
                  <label
                    htmlFor="lastName"
                    className="text-base font-semibold leading-none"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Last Name*"
                    className="w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col gap-7px">
                  <label
                    htmlFor="companyName"
                    className="text-base font-semibold leading-none"
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    placeholder="Company Name*"
                    className="w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col gap-7px">
                  <label
                    htmlFor="email"
                    className="text-base font-semibold leading-none"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email*"
                    className="w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col gap-7px">
                  <label
                    htmlFor="cellPhone"
                    className="text-base font-semibold leading-none"
                  >
                    Cell Phone*
                  </label>
                  <input
                    type="tel"
                    id="cellPhone"
                    name="cellPhone"
                    required
                    placeholder="Cell Phone*"
                    className="w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8 focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="rounded-12 !p-4 h-49px w-fit self-center"
                fullWidth={false}
              >
                See plans & pricing
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
