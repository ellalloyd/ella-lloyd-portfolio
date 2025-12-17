
import { Project } from "@/lib/types";
import Link from "next/link";

function ProjectCard({ project }: { project: Project }) {

    return (
        <Link href={`/projects/${project.id}`}>
            <div className="flex flex-col gap-2 min-w-[296px] max-w-[408px] lg:min-w-0 border border-background/50 rounded-2xl p-6 text-white inset-shadow-background-500 inset-shadow-sm hover:bg-foreground transition-colors delay-150 duration-300 ease-in-out cursor-pointer">
                <p className="font-semibold">{project.name}</p>
                <p className="text-[#d9d9d9]">{project.tools}</p>
                <p className="">{project.description}</p>
            </div>
        </Link>
    );
}

export { ProjectCard };