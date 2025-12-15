import { ArrowRight } from "lucide-react";

function SectionHeader({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between w-full text-white pb-4">
            <p className="text-[24px]">{title}</p>
            <ArrowRight />
        </div>
    );
}

export { SectionHeader };
