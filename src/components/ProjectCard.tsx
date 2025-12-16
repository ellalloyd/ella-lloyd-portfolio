import { Project } from "@/lib/types";

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-2 min-w-[296px] lg:min-w-0 border border-background/50 rounded-2xl p-6 text-white  hover:bg-white hover:text-background cursor-pointer">
            <p className="font-semibold">{project.name}</p>
            <p className="text-[#d9d9d9]">{project.tools}</p>
            <p className="">{project.description}</p>
        </div>
    );
}

export { ProjectCard };