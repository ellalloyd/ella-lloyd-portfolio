import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { BlogData } from "@/lib/types"


function BlogCard({ blogPost }: { blogPost: BlogData }) {
    return (
        <div>
            <SectionHeader title="Blog" url="/blog" />
            <div className="flex flex-col gap-2 text-white">
                <p className="font-semibold">{blogPost.title}</p>
                <p className="text-[#d9d9d9]">{blogPost.date}</p>
                <p className="">{blogPost.summary}</p>
            </div>
        </div>
    )
}

function Blog({ blog }: { blog: BlogData }) {

    return (
        <Link href={`/blog/${blog.id}`}>
            <div className="content-card">
                <p className="font-semibold">{blog.title}</p>
                <p className="text-secondary">{blog.date}</p>
                <p className="">{blog.summary}</p>
            </div>
        </Link>
    )
}

export { BlogCard, Blog };