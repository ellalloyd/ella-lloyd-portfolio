import { ArrowRight } from "lucide-react";
import Link from "next/link";

function SectionHeader({ title, url }: { title: string, url: string }) {
    return (
        <div className="flex items-center justify-between w-full text-white pb-4">
            <p className="text-[24px]">{title}</p>
            <Link href={url}>
                <ArrowRight />
            </Link>
        </div>
    );
}

export { SectionHeader };
