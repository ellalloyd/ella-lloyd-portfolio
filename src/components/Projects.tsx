import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, ExternalLink, Github, University, ListCheck, Network } from "lucide-react";
import { motion } from "motion/react";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const projects = [
    {
        title: "Connectogen",
        description: "A full-stack academic networking platform with profile creation, messaging, and discovery features.",
        tech: ["React", "TypeScript", "MongoDB"],
        github: "https://github.com/connectogen-project",
        icon: <Network className="h-6 w-6 text-primary" ></Network>
    },
    {
        title: "Lemur Casa",
        description: "Household task management tool with real-time updates, drag-and-drop interface, and team features.",
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

const Projects = () => {
    return (
        <motion.div
            className="py-20"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <div className="">
                <motion.h1
                    className="font-serif text-5xl sm:text-5xl font-bold mb-4 text-primary"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h1>
                <motion.p
                    className="text-lg text-primary/90 mx-auto mb-6"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A showcase of my recent work and side projects
                </motion.p>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                        >
                            <Card
                                className="group hover:shadow-(--shadow-medium) transition-all duration-300 bg-linear-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/30 h-full flex flex-col"
                            >


                                <CardHeader className="relative z-10 pb-4">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="h-12 w-12 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {project.icon}
                                        </div>
                                        {project.github &&
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="ghost"
                                                className="hover:bg-primary/10 hover:text-primary"
                                            >
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="View source code on GitHub"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        }
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="relative z-10 flex-1 flex flex-col">
                                    <CardDescription className="text-foreground/70 mb-4 flex-1">
                                        {project.description}
                                    </CardDescription>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;
