import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { LiftingData } from "./types";


// Portfolio data
export const projects = [
    {
        id: 1,
        name: "ellalloyd.xyz 2.0",
        tools: "Figma, React, Cursor",
        description: "A personal portfolio website designed as a bento-style playground for experimentation.",
        content: "A personal portfolio is more than a resume—it is a playground for experimentation. It is a space where I can test ideas, showcase what I am building, and express my personal design sensibilities. Drawing inspiration from my hobby of bullet journaling, I designed the site using a bento-style grid that mirrors how I structure and organize a physical journal page. This approach allowed me to combine visual hierarchy with flexibility and intentional whitespace. I began by wireframing the experience in Figma, focusing on reusable components and responsive behavior across desktop and mobile. Using Figma Make, I generated an initial code draft from the wireframes, which served as a helpful starting point but required significant refinement. I addressed issues with Tailwind implementation, text overflow responsiveness, and inconsistent spacing, then iteratively improved the site using Cursor to accelerate development and polish interactions. Building **ellalloyd.xyz 2.0** strengthened my end-to-end design-to-development workflow, sharpened my Figma skills, and pushed me to work more efficiently while exploring a more creative, personal visual direction.",
    }
];

export const blogPost = {
    title: "Building Scalable Web Applications",
    author: "Ella Lloyd",
    date: "Dec 10, 2024",
    summary: "Exploring modern architecture patterns and best practices for creating maintainable, scalable web applications."
};

const locations = [
    { city: "San Diego", years: "2002 - 2021", description: "Grew up exploring beaches and started coding journey" },
    { city: "San Francisco", years: "2021 - Present", description: "Working in tech and building amazing products" }
];

const currentTrack = {
    title: "Blinding Lights",
    artist: "The Weeknd"
};

export const socialLinks = [
    { icon: Github, url: "https://github.com/ellalloyd", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/ella-lloyd", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/lalloydcodes", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com/ellallifts", label: "Instagram" },
    { icon: Mail, url: "mailto:elloyd116@gmail.com", label: "Email" }
];

// Powerlifting data
export const liftingData: LiftingData[] = [
    { month: "Jan", squat: 225, bench: 155, deadlift: 275 },
    { month: "Feb", squat: 235, bench: 160, deadlift: 285 },
    { month: "Mar", squat: 245, bench: 165, deadlift: 295 },
    { month: "Apr", squat: 255, bench: 170, deadlift: 305 },
    { month: "May", squat: 265, bench: 175, deadlift: 315 },
    { month: "Jun", squat: 275, bench: 180, deadlift: 325 }
];