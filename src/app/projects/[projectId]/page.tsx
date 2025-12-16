'use server'

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Project } from "@/lib/types"

function findProjectById(projectId: string | undefined): Project | undefined {
    const project = projects.find(project => project.id.toString() === projectId);
    return project;
}

export default async function Page({
    params,
}: {
    params: Promise<{ [key: string]: string | undefined }>
}) {
    const projectId = (await params).projectId
    const project = findProjectById(projectId);

    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-fit items-center justify-center ">
            <div className="relative flex flex-row items-center justify-center w-full text-white">
                <Link href="/projects">
                    <ArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 hover:size-8" />
                </Link>
                <h1 className="text-2xl">{project?.name}</h1>
            </div>
            <div className="flex gap-4 flex-col pb-0  min-w-[296px] max-w-[408px] text-white">
                <p className="text-[#d9d9d9]">{project?.tools}</p>
                <p className="">{project?.content}</p>
            </div>
        </div>
    )

}