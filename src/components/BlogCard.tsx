import { SectionHeader } from "./SectionHeader";
import { BlogData } from "@/lib/types"


function BlogCard({ blogPost }: { blogPost: BlogData }) {
    return (
        <div >
            <SectionHeader title="Blog" url="/blog" />
            <div className="flex flex-col gap-[8px]">
                <p className="text-white text-[16px] font-semibold">{blogPost.title}</p>
                <p className="text-[#d9d9d9] text-[16px]">{blogPost.author} | {blogPost.date}</p>
                <p className="text-white text-[16px]">{blogPost.summary}</p>
            </div>
        </div>
    )
}

export { BlogCard };