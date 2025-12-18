
import { Project } from "@/lib/types";
import Link from "next/link";

function ProjectCard({ project }: { project: Project }) {

    return (
        <Link href={`/projects/${project.id}`}>
            <div className="content-card">
                <p className="font-semibold">{project.name}</p>
                <p className="text-secondary">{project.tools}</p>
                <p className="">{project.description}</p>
            </div>
        </Link>
    );
}

export { ProjectCard };