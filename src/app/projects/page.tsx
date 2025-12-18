'use client'

import { ProjectCard } from "@/components/ProjectCard";
import ContentHeader from "@/components/ContentHeader";
import { projects } from "@/lib/data";

const ProjectsPage = () => {
    return (
        <div className="content-page">
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