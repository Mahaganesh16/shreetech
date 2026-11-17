import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Shree Tech',
  description: 'Get in touch with Shree Tech for software consulting, project estimates, and engineering partnerships.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pt-16 sm:pt-20">
      <Contact />
    </div>
  );
}
