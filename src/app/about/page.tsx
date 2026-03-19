import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import EducationTimeline from '@/components/about/EducationTimeline';

export const metadata: Metadata = {
    title: 'About | Zeeshan Arif Ahmad',
    description: 'Learn more about my journey, education, and background.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-start w-full relative z-10 animate-fade-in-up">
            <AboutHero />
            <EducationTimeline />
        </div>
    );
}
