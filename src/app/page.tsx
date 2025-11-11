'use client'
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { ProjectGrid } from "./projects";
import { useEffect } from "react";

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

const Home = () => {
  return (
    <div className="my-10">
      {/* Hero Section */}
      <section id="home" className="relative flex items-center pt-10">

        <motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.h1
              className="font-serif text-5xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ella Lloyd
            </motion.h1>
            <motion.p
              className="text-lg text-primary/90 mb-6"
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
                className="text-primary hover:text-accent transition-colors hover:scale-110 duration-200"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/ella-lloyd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:elloyd116@gmail.com"
                className="text-primary hover:text-accent transition-colors hover:scale-110 duration-200"
                aria-label="Email"
              >
                <Mail />
              </a>
            </motion.div>
          </div>


        </motion.div>
      </section>

      <section id="bio" className="flex items-center pt-10">
        <motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.h1
              className="font-serif text-3xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bio
            </motion.h1>
            <motion.p
              className="text-lg text-primary/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-stack Software Engineer with owner mentality, quick learning ability, and experience delivering features from
              UI/UX design through deployment. Passionate about crafting intuitive user experiences customers will love.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="pt-10">
        <motion.div
          className=""
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="font-serif text-3xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          > Projects </motion.h2>
          <ProjectGrid />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
