import Services from "@/app/(home-page)/components/Services";
import DataSecurity from "@/app/(home-page)/components/DataSecurity";
import IntakeProcess from "@/app/(home-page)/components/IntakeProcess";
import Articles from "@/app/(home-page)/components/Articles";
import ContactForm from "@/app/(home-page)/components/ContactForm";
import Hero from "@/app/(home-page)/components/Hero";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <DataSecurity />
      <IntakeProcess />
      <Articles />
      <ContactForm />
    </main>
  );
}
