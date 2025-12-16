import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/lib/data"

function ProjectsBento() {
    return (
        <div className="flex flex-col gap-4 lg:h-full">
            <SectionHeader title="Projects" url="/projects" />
            <div className="overflow-x-auto -mx-[32px] px-[32px] lg:overflow-x-visible lg:overflow-y-auto lg:mx-0 lg:px-0">
                <div className="flex gap-[16px] pb-2 lg:flex-col lg:pb-0 ">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </div >
    )
}
export { ProjectsBento };
