import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/lib/data"

function ProjectsBento() {
    return (
        <div>
            <SectionHeader title="Projects" />
            <div className="flex flex-col gap-[16px] overflow-y-auto">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
export { ProjectsBento };
