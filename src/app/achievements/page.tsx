import type { Metadata } from 'next';
import Certificates from '@/components/achievements/Certificates';
import AchievementsList from '@/components/achievements/AchievementsList';
import ProgrammingPlatforms from '@/components/achievements/ProgrammingPlatforms';

export const metadata: Metadata = {
    title: 'Achievements | Zeeshan Arif Ahmad',
    description: 'A showcase of my professional certifications and key milestones.',
};

export default function AchievementsPage() {
    return (
        <div className="flex flex-col items-center justify-start w-full relative z-10 pt-16 animate-fade-in-up">
            <Certificates />
            <AchievementsList />
            <ProgrammingPlatforms />
        </div>
    );
}
