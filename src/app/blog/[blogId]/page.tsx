'use server'

import { blogs } from "@/lib/data"
import { BlogData } from "@/lib/types"
import ContentHeader from "@/components/ContentHeader"
import BlogDOAC from "../../../../content/blog-doac.mdx"
import { cacheLife } from "next/cache"
import { Suspense } from "react"

function findBlogById(blogId: string | undefined): BlogData | undefined {
    const blog = blogs.find(blog => blog.id.toString() === blogId);
    return blog;
}

async function BlogContent({ paramsPromise }: { paramsPromise: Promise<{ [key: string]: string | undefined }> }) {
    'use cache'
    cacheLife('hours')

    const params = await paramsPromise
    const blogId = params.blogId
    const blog = findBlogById(blogId);

    return (
        <>
            <ContentHeader title={blog?.title} url="blog" />
            <div className="flex gap-4 flex-col pb-0 w-full text-white">
                <p className="text-[#d9d9d9]">{blog?.date}</p>
                <article className="prose prose-invert">
                    <BlogDOAC />
                </article>
            </div>
        </>
    )
}

export default async function Page({
    params,
}: {
    params: Promise<{ [key: string]: string | undefined }>
}) {
    return (
        <div className="content-page">
            <Suspense fallback={<p>Loading...</p>}>
                <BlogContent paramsPromise={params} />
            </Suspense>
        </div>
    )

}