'use client'
import { cn } from "@/lib/utils";
import { Apple, University, ListCheck, Network } from "lucide-react";
import { useEffect, useRef, useState, type JSX } from "react";
import { motion } from "motion/react";


const projects = [
    {
        title: "Connectogen",
        description: "A full-stack academic networking platform with profile creation, messaging, and discovery features.",
        tech: ["Next.js", "React", "TypeScript", "MongoDB"],
        github: "https://github.com/connectogen-project",
        icon: <Network className="h-6 w-6 text-primary" ></Network>
    },
    {
        title: "Lemur.casa",
        description: "A real-time home coordination app that streamlines routines, assigns tasks, and keeps everyone aligned.",
        tech: ["Next.js", "Convex", "Tailwind CSS", "Shadcn"],
        github: "https://github.com/ellalloyd/lemur-casa",
        icon: <ListCheck className="h-6 w-6 text-primary" ></ListCheck>
    },
    {
        title: "University Hacks",
        description: "Community platform that enables students to share advice, discover resources, and engage in peer support.",
        tech: ["UX Research", "Figma", "Iterative Design"],
        icon: <University className="h-6 w-6 text-primary"></University>
    },
    {
        title: "GT Dining",
        description: "A Figma-driven redesign of the Georgia Tech dining app, built through user research, iterative wireframing, and usability testing to improve clarity, accessibility, and overall student experience.",
        tech: ["Wireframing", "Figma", "Usability Testing"],
        icon: <Apple className="h-6 w-6 text-primary" ></Apple>
    },

];

interface ProjectCardProps {
    title: string
    description: string;
    tech: string[]
    icon: JSX.Element
    className?: string
}

function ProjectCard({ title, description, tech, icon, className }: ProjectCardProps) {

    const [isSelected, setIsSelected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsSelected(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cn("@container relative h-full border rounded-lg overflow-hidden p-6 group", className)}
            ref={ref}
            onClick={() => setIsSelected((prev) => (!prev))}>
            <div className="h-full flex flex-col justify-end">
                <span className=" text-white/80 py-2">{tech.join(' | ')}</span>
                <div className="flex flex-row items-center @sm:[&_svg]:text-3xl [&_svg]:text-lg [&_svg]:stroke-white gap-x-2">
                    {icon}
                    <h3 className="font-serif text-white @sm:text-3xl text-lg">{title}</h3>
                </div>
            </div>
            <div data-active={isSelected} className="opacity-0 group-hover:opacity-100 data-[active=true]:opacity-100 transition-opacity absolute inset-0 p-4 bg-black/50 backdrop-blur-sm">
                <p className="text-white font-sans">{description}</p>

            </div>
        </div>
    )
}

interface AnimatedProjectsProps {
    fadeInUp: {
        initial: { opacity: number; y: number };
        animate: { opacity: number; y: number };
    };
    staggerContainer: { animate: { transition: { staggerChildren: number } } };
}


export function ProjectGrid({ fadeInUp, staggerContainer }: AnimatedProjectsProps) {

    return (
        // <motion.div
        //     className=""
        //     variants={staggerContainer}
        //     initial="initial"
        //     animate="animate"
        // >
        //     <motion.h2
        //         className="font-serif text-3xl font-bold text-primary mb-4"
        //         initial={{ opacity: 0, y: 30 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.8, delay: 0.2 }}
        //     > Projects </motion.h2>
        //     <motion.div
        //         className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-4 w-full max-md:[&>div]:aspect-square"
        //         initial={{ opacity: 0, y: 30 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.8, delay: 0.4 }}
        //     >
        //         <div className="md:row-span-2 aspect-square md:col-span-3">
        //             <ProjectCard className="bg-linear-to-br from-yellow-400 to-red-400" {...projects[0]} />
        //         </div>
        //         <div className="md:col-start-4 md:row-span-1 md:col-span-2  ">
        //             <ProjectCard className="bg-linear-to-br from-violet-400 to-orange-400" {...projects[1]} />
        //         </div>
        //         <div className="md:col-start-4  md:row-start-2 md:row-span-1 md:col-span-2">
        //             <ProjectCard className="bg-linear-to-br from-blue-400 to-rose-400" {...projects[2]} />
        //         </div>
        //         <div className="md:row-start-3 md:col-span-5">
        //             <ProjectCard className="bg-linear-to-br from-pink-400 to-emerald-400" {...projects[3]} />
        //         </div>

        //     </motion.div>
        // </motion.div>
        <div className="flex flex-col gap-2">
            <h2 className="font-serif text-3xl font-bold text-primary"> Projects </h2>
            <div className="flex flex-col gap-4 w-full py-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard {...project} className="bg-linear-to-br from-pink-400 to-emerald-400" />
                    </div>
                ))}
            </div>
        </div>
    )
}