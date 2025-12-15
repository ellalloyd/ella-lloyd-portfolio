import { ArrowBigRight } from "lucide-react";

function SectionHeader({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between w-full">
            <p className="text-white text-[24px]">{title}</p>
            <ArrowBigRight />
        </div>
    );
}

export { SectionHeader };
