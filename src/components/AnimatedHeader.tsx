'use client'

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";


interface AnimatedHeaderProps {
    fadeInUp: {
        initial: { opacity: number; y: number };
        animate: { opacity: number; y: number };
    };
    staggerContainer: { animate: { transition: { staggerChildren: number } } };
}
export function AnimatedHeader({ fadeInUp, staggerContainer }: AnimatedHeaderProps) {

    return (
        <div>
            <motion.div
                className="relative z-10 mb-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <motion.h1
                    className="font-serif text-5xl font-bold text-primary mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Ella Lloyd
                </motion.h1>
                <motion.p
                    className="text-lg text-primary/70 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Software Engineer | Frontend | Product-Minded
                </motion.p>

                {/* Social Links */}
                <motion.div
                    className="flex gap-6 [&_svg]:size-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="https://github.com/ellalloyd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/70 hover:text-accent transition-colors hover:scale-110 duration-200"
                        aria-label="GitHub"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://linkedin.com/in/ella-lloyd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/70 hover:text-accent transition-colors hover:scale-110 duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="mailto:elloyd116@gmail.com"
                        className="text-primary/70 hover:text-accent transition-colors hover:scale-110 duration-200"
                        aria-label="Email"
                    >
                        <Mail />
                    </a>
                </motion.div>
            </motion.div>
            <motion.div
                className="relative z-10"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <motion.h1
                    className="font-serif text-3xl font-bold text-primary mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Bio
                </motion.h1>
                <motion.p
                    className="text-lg text-primary/70"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Full-stack Software Engineer with owner mentality, quick learning ability, and experience delivering features from
                    UI/UX design through deployment. Passionate about crafting intuitive user experiences customers will love.
                </motion.p>
            </motion.div>
        </div>

    )
}