import { ArrowLeft } from "lucide-react";
import Link from "next/link";


function ContentHeader({ title, url }: { title: string | undefined, url: string }) {
    return (
        <div className="relative flex flex-row items-center justify-center w-full text-white">
            <Link href={`/${url}`}>
                <ArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 size-6 transition-transform duration-200 hover:scale-125" />
            </Link>
            <h1 className="text-2xl">{title}</h1>
        </div>
    )
}

export default ContentHeader;