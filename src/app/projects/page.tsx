'use client'

import { ProjectCard } from "@/components/ProjectCard";
import ContentHeader from "@/components/ContentHeader";
import { projects } from "@/lib/data";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto my-8 p-4 rounded-4xl w-full lg:w-2/3 items-center justify-center">
            <ContentHeader title="Projects" url="" />
            <div className="flex gap-4 flex-col pb-0 w-fit">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

    );
};

export default ProjectsPage;