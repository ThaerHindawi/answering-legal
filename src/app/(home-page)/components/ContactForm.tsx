"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/common/Button";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.email("Please enter a valid email address"),
  cellPhone: z.string().min(10, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Hide success message after 8 seconds
    setTimeout(() => setIsSubmitted(false), 8000);
  };
  return (
    <section className="py-16 bg-brand-dark">
      <div className="max-w-1120px mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-neutral-white flex flex-col gap-8">
            <h1 className="text-32px leading-none lg:text-5xl font-bold">
              24/7 coverage at a fraction of the cost of in-house receptionists.
            </h1>
            <p className="text-2xl font-semibold leading-none">
              Don’t believe us? Fill out the form on the right, and we’ll take
              you to our pricing page, where you can find out just how little
              24/7 legal intake will cost you.
            </p>
          </div>

          {/* Right content - Form */}
          <div className="flex flex-col gap-8 bg-neutral-white text-brand-dark rounded-20px p-8 shadow-custom-2">
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-8px mb-4">
                <strong>Success!</strong> Thank you for your submission. We&apos;ll be in touch soon!
              </div>
            )}
            
            <div className="">
              <p className="text-2xl font-semibold">
                Tell us about yourself. We&apos;ll show you all of our pricing
                information on the next page.
              </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
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
                    placeholder="First Name*"
                    {...register("firstName")}
                    className={`w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8px focus:outline-none focus:border-brand-primary ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                  )}
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
                    placeholder="Last Name*"
                    {...register("lastName")}
                    className={`w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8px focus:outline-none focus:border-brand-primary ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                  )}
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
                    placeholder="Company Name*"
                    {...register("companyName")}
                    className={`w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8px focus:outline-none focus:border-brand-primary ${
                      errors.companyName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.companyName && (
                    <span className="text-red-500 text-sm">{errors.companyName.message}</span>
                  )}
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
                    placeholder="Email*"
                    {...register("email")}
                    className={`w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8px focus:outline-none focus:border-brand-primary ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
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
                    placeholder="Cell Phone*"
                    {...register("cellPhone")}
                    className={`w-full px-4 py-2 h-27px border bg-neutral-bg rounded-8px focus:outline-none focus:border-brand-primary ${
                      errors.cellPhone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.cellPhone && (
                    <span className="text-red-500 text-sm">{errors.cellPhone.message}</span>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="rounded-12px !p-4 h-49px w-fit self-center"
                fullWidth={false}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "See plans & pricing"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
