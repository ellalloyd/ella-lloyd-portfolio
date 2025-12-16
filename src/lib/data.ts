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

export const blogs = [{
    id: 1,
    title: "Why You’re Never Satisfied!",
    author: "Ella Lloyd",
    date: "Dec 15, 2025",
    summary: "Thoughts on the podcast episode DOAC: Why You’re Never Satisfied! with Arthur C. Brooks, Harvard Professor & Social Scientist.",
    content: "I often feel like I’m not doing enough. I’m not up to date on the news enough; I’m not learning fast enough; I’m not socializing enough; I’m not spending enough time on my hobbies. The list goes on, and it always feels unfinished.\nBut why do we feel this way?\nIn a recent episode of *Diary of a CEO*, guest Arthur C. Brooks—a Harvard professor and social scientist—discusses the hedonic treadmill and what it means to live a meaningful life. The hedonic treadmill is the psychological phenomenon where humans quickly adapt to improvements in their circumstances, raising their baseline expectations and, in turn, their desires. In other words, we will always want more because we adapt to what we already have. Brooks argues that instead of constantly trying to increase what we have, we should learn to better manage what we want.\nOne line that particularly stuck with me was: “We need struggle and suffering for us to actually get the joy we seek.” Nothing deeply satisfying comes easily. The effort, frustration, and discomfort are what make the outcome feel earned—and meaningful.\nWhile this idea can sound grim, it ultimately feels grounding. It reframes dissatisfaction not as a personal failure, but as part of being human. More than anything, it serves as a reminder to practice gratitude, slow the chase for “more,” and focus on the deeper meaning behind what we’re striving for in the first place.",
}];

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