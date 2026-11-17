import type { Metadata } from 'next';
import Services from '@/components/Services';
import Process from '@/components/Process';

export const metadata: Metadata = {
  title: 'Our Services | Shree Tech',
  description: 'Enterprise software development, web & mobile applications, cloud architecture, and automation services.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pt-16 sm:pt-20">
      <Services />
      <Process />
    </div>
  );
}
