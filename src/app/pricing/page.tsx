import { Button } from "@/components/common/Button";
import { Metadata } from "next";

const plans = [
  {
    name: "Starter",
    price: "$49/mo",
    description: "Great for solo attorneys getting started.",
    features: [
      "24/7 call answering",
      "Basic intake",
      "Voicemail to email",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$99/mo",
    description: "Best for growing firms that need more support.",
    features: [
      "Everything in Starter",
      "Advanced intake & scheduling",
      "Bilingual receptionists",
    ],
    cta: "Choose Professional",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$199/mo",
    description: "For established firms with higher call volume.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "CRM integrations",
    ],
    cta: "Contact Sales",
  },
];

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



