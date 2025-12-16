'use client'

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl lg:max-w-3xl items-center justify-center ">
            <h1 className="text-white text-2xl">Projects</h1>
            <div className="flex gap-4 flex-col pb-0 ">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

    );
};

export default ProjectsPage;