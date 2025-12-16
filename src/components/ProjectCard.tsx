import { Project } from "@/lib/types";

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="border border-[#210534]/50 rounded-[16px] p-[24px] flex flex-col gap-[8px]">
            <p className="text-white text-[16px] font-semibold">{project.name}</p>
            <p className="text-[#d9d9d9] text-[16px]">{project.tools}</p>
            <p className="text-white text-[16px]">{project.description}</p>
        </div>
    );
}

export { ProjectCard };