import type { Metadata } from 'next';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'Portfolio & Projects | Shree Tech',
  description: 'Explore our recent case studies and enterprise client projects delivered with high performance and reliability.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full pt-16 sm:pt-20">
      <Projects />
    </div>
  );
}
