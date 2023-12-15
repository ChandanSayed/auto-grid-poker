import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Features />
        <Pricing />
        <FAQ />
      </main>
    </>
  );
}
