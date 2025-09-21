import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing - 24/7 Legal Answering Service - Specialized Law Firm Answering",
    description:
      "Answering Legal Provides The Highest Quality 24/7 Answering Service for Attorneys. Trusted By Thousands of Law Firms! Over 300 5-Star Testimonials!",
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
  };

export default function PricingPage() {
  return (
    <main className="bg-neutral-bg">

      <section className="max-w-1228 mx-auto px-4 lg:px-0 py-16 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark">Simple, transparent pricing</h1>
          <p className="mt-3 text-brand-dark/70 text-lg">
            Pick a plan that fits your firm. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}



