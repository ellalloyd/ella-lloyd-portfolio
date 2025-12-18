'use client'

import { Blog } from "@/components/BlogCard";
import ContentHeader from "@/components/ContentHeader";
import { blogs } from "@/lib/data";

const BlogsPage = () => {
    return (
        <div className="content-page">
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