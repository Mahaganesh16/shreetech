import type { Metadata } from 'next';
import Technologies from '@/components/Technologies';

export const metadata: Metadata = {
  title: 'Technologies | Shree Tech',
  description: 'Our battle-tested modern technology stack across frontend, backend, databases, mobile, and cloud engineering.',
};

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col w-full pt-16 sm:pt-20">
      <Technologies />
    </div>
  );
}
