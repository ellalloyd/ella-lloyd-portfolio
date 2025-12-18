import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { LiftingData } from "./types";


// Portfolio data
export const projects = [
    {
        id: 1,
        name: "ellalloyd.xyz 2.0",
        tools: "Figma, React, Cursor",
        description: "A personal portfolio website designed as a bento-style playground for experimentation.",
    }
];

export const blogs = [{
    id: 1,
    title: "Why You’re Never Satisfied!",
    author: "Ella Lloyd",
    date: "Dec 15, 2025",
    summary: "Thoughts on the podcast episode DOAC: Why You’re Never Satisfied! with Arthur C. Brooks, Harvard Professor & Social Scientist.",
}];

export const locations = [
    { city: "San Diego", years: "2002 - 2021", description: "Grew up in the best city" },
    { city: "Atlanta", years: "2021 - 2025", description: "Studying at Georgia Tech" },
    { city: "Charlotte", years: "2025 - ", description: "Currently adulting" },
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
    { date: "Mar 2024", squat: 145, bench: 90, deadlift: 155 },
    { date: "Apr 2024", squat: 160, bench: 100, deadlift: 175 },
    { date: "May 2024", squat: 175, bench: 115, deadlift: 200 },
    { date: "Jun 2024", squat: 193, bench: 115, deadlift: 200 },
    { date: "Jul 2024", squat: 220, bench: 121, deadlift: 210 },
    { date: "Aug 2024", squat: 225, bench: 130, deadlift: 220 },
    { date: "Sep 2024", squat: 226, bench: 130, deadlift: 230 },
    { date: "Oct 2024", squat: 237, bench: 132, deadlift: 245 },
    { date: "Nov 2024", squat: 248, bench: 143, deadlift: 259 },
    { date: "Dec 2024", squat: 248, bench: 145, deadlift: 259 },
    { date: "Jan 2025", squat: 248, bench: 145, deadlift: 259 },
    { date: "Feb 2025", squat: 248, bench: 149, deadlift: 259 },
    { date: "Mar 2025", squat: 253, bench: 155, deadlift: 259 },
    { date: "Apr 2025", squat: 259, bench: 155, deadlift: 265 },
    { date: "May 2025", squat: 259, bench: 155, deadlift: 265 },
    { date: "Jun 2025", squat: 259, bench: 155, deadlift: 265 },
    { date: "Jul 2025", squat: 259, bench: 155, deadlift: 265 },
    { date: "Aug 2025", squat: 259, bench: 155, deadlift: 265 },
    { date: "Sep 2025", squat: 259, bench: 155, deadlift: 265 },
    { date: "Oct 2025", squat: 265, bench: 171, deadlift: 265 },
    { date: "Nov 2025", squat: 281, bench: 176, deadlift: 297 },
    { date: "Dec 2025", squat: 281, bench: 176, deadlift: 297 },
];