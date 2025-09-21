import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DataSecurity from '@/components/DataSecurity';
import IntakeProcess from '@/components/IntakeProcess';
import Articles from '@/components/Articles';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <DataSecurity />
        <IntakeProcess />
        <Articles />
        <ContactForm />
      </main>
    </div>
  );
}
