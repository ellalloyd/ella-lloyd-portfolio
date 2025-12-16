import { ArrowRight } from "lucide-react";
import Link from "next/link";

function SectionHeader({ title, url }: { title: string, url: string }) {
    return (
        <div className="flex items-center justify-between w-full text-white pb-4">
            <p className="text-2xl">{title}</p>
            <Link href={url} >
                <ArrowRight className="hover:size-8" />
            </Link>
        </div>
    );
}

export { SectionHeader };
