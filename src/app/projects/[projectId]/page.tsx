'use server'

import { projects } from "@/lib/data"
import { Project } from "@/lib/types"
import ContentHeader from "@/components/ProjectHeader"
import PortfolioContent from "../../../../content/portfolio.mdx";
import { Suspense } from 'react';
import { cacheLife } from "next/cache";

function findProjectById(projectId: string | undefined): Project | undefined {
    const project = projects.find(project => project.id.toString() === projectId);
    return project;
}

export default async function Page({
    params,
}: {
    params: Promise<{ [key: string]: string | undefined }>
}) {
    'use cache'
    cacheLife('hours')
    const projectId = (await params).projectId
    const project = findProjectById(projectId);

    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-full lg:w-2/3 items-center justify-center">
            <Suspense fallback={<p>"Loading..."</p>}>
                <ContentHeader title={project?.name} url="projects" />
                <div className="flex gap-4 flex-col pb-0  w-full text-white">
                    <p className="text-[#d9d9d9]">{project?.tools}</p>
                    <article className="prose prose-invert">
                        <PortfolioContent />
                    </article>

                </div>
            </Suspense>
        </div>
    )

}