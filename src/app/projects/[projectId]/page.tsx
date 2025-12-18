'use server'

import { projects } from "@/lib/data"
import { Project } from "@/lib/types"
import ContentHeader from "@/components/ContentHeader"
import PortfolioContent from "../../../../content/portfolio.mdx";
import { Suspense } from 'react';
import { cacheLife } from "next/cache";

function findProjectById(projectId: string | undefined): Project | undefined {
    const project = projects.find(project => project.id.toString() === projectId);
    return project;
}

async function ProjectContent({ paramsPromise }: { paramsPromise: Promise<{ [key: string]: string | undefined }> }) {
    'use cache'
    cacheLife('hours')

    const params = await paramsPromise
    const projectId = params.projectId
    const project = findProjectById(projectId);

    return (
        <>
            <ContentHeader title={project?.name} url="projects" />
            <div className="flex gap-4 flex-col pb-0  w-full text-white">
                <p className="text-[#d9d9d9]">{project?.tools}</p>
                <article className="prose prose-invert">
                    <PortfolioContent />
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
                <ProjectContent paramsPromise={params} />
            </Suspense>
        </div>
    )

}