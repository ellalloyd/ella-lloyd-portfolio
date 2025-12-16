import { SectionHeader } from "./SectionHeader";
import { BlogData } from "@/lib/types"


function BlogCard({ blogPost }: { blogPost: BlogData }) {
    return (
        <div className="">
            <SectionHeader title="Blog" url="/blog" />
            <div className="flex flex-col gap-2 text-white">
                <p className="font-semibold">{blogPost.title}</p>
                <p className="text-[#d9d9d9]">{blogPost.date}</p>
                <p className="">{blogPost.summary}</p>
            </div>
        </div>
    )
}

export { BlogCard };