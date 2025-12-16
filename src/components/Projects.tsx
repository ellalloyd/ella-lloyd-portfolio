import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/lib/data"

function ProjectsBento() {
    return (
        <div className="flex flex-col h-full">
            <SectionHeader title="Projects" url="/projects" />
            <div className="flex flex-1 flex-col gap-[16px] min-h-0 overflow-y-auto">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div >
    )
}
export { ProjectsBento };
