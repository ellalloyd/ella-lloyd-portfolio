'use client'

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-fit items-center justify-center ">
            <div className="relative flex flex-row items-center justify-center w-full text-white">
                <Link href="/">
                    <ArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 hover:size-8" />
                </Link>
                <h1 className="text-2xl">Projects</h1>
            </div>
            <div className="flex gap-4 flex-col pb-0 ">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

    );
};

export default ProjectsPage;