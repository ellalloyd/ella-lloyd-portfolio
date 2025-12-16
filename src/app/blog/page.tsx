'use client'

import { Blog } from "@/components/BlogCard";
import { blogs } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BlogsPage = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-fit items-center justify-center ">
            <div className="relative flex flex-row items-center justify-center w-full text-white">
                <Link href="/">
                    <ArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 hover:size-8" />
                </Link>
                <h1 className="text-2xl">Blog</h1>
            </div>
            <div className="flex gap-4 flex-col pb-0 min-w-[296px] max-w-[408px]">
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>

    );
};

export default BlogsPage;