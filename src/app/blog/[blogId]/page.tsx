'use server'

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/lib/data"
import { BlogData } from "@/lib/types"

function findBlogById(blogId: string | undefined): BlogData | undefined {
    const blog = blogs.find(blog => blog.id.toString() === blogId);
    return blog;
}

export default async function Page({
    params,
}: {
    params: Promise<{ [key: string]: string | undefined }>
}) {
    const blogId = (await params).blogId
    const blog = findBlogById(blogId);

    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-fit items-center justify-center ">
            <div className="relative flex flex-row items-center justify-center w-full text-white">
                <Link href="/blog">
                    <ArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 hover:size-8" />
                </Link>
                <h1 className="text-2xl">{blog?.title}</h1>
            </div>
            <div className="flex gap-4 flex-col pb-0 min-w-[296px] max-w-[408px] text-white">
                <p className="text-[#d9d9d9]">{blog?.date}</p>
                <p className="whitespace-pre-line">{blog?.content}</p>
            </div>
        </div>
    )

}