'use client'

import { Blog } from "@/components/BlogCard";
import ContentHeader from "@/components/ContentHeader";
import { blogs } from "@/lib/data";

const BlogsPage = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-full lg:w-2/3 items-center justify-center ">
            <ContentHeader title="Blog" url="" />
            <div className="flex gap-4 flex-col pb-0 min-w-[296px] max-w-[408px]">
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>

    );
};

export default BlogsPage;