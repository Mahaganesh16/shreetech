import type { Metadata } from 'next';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'About Us | Shree Tech',
  description: 'Learn about Shree Tech, our engineering values, team methodology, and why clients trust us.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pt-16 sm:pt-20">
      <About />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
