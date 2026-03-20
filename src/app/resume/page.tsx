import type { Metadata } from 'next';
import ResumeViewer from '@/components/resume/ResumeViewer';

export const metadata: Metadata = {
    title: 'Resume | Zeeshan Arif Ahmad',
    description: 'View and download my professional software engineering curriculum vitae.',
};

export default function ResumePage() {
    return (
        <div className="flex flex-col items-center justify-start w-full relative z-10 pt-24 pb-16 px-4 animate-fade-in-up">
            <ResumeViewer />
        </div>
    );
}
