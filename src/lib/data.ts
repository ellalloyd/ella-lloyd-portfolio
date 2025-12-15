import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";


// Portfolio data
const projects = [
    {
        id: 1,
        name: "E-Commerce Platform",
        tools: "React, Node.js, MongoDB",
        description: "Full-stack shopping experience with cart and checkout"
    },
    {
        id: 2,
        name: "Task Management App",
        tools: "Vue.js, Firebase, Tailwind",
        description: "Collaborative task tracking with real-time updates"
    },
    {
        id: 3,
        name: "Weather Dashboard",
        tools: "React, OpenWeather API, Charts",
        description: "Interactive weather visualization and forecasting"
    },
    {
        id: 4,
        name: "Portfolio Generator",
        tools: "Next.js, TypeScript, MDX",
        description: "Dynamic portfolio builder for developers"
    }
];

const blogPost = {
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
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Mail, url: "#", label: "Email" }
];

// Powerlifting data
const liftingData = [
    { month: "Jan", squat: 225, bench: 155, deadlift: 275 },
    { month: "Feb", squat: 235, bench: 160, deadlift: 285 },
    { month: "Mar", squat: 245, bench: 165, deadlift: 295 },
    { month: "Apr", squat: 255, bench: 170, deadlift: 305 },
    { month: "May", squat: 265, bench: 175, deadlift: 315 },
    { month: "Jun", squat: 275, bench: 180, deadlift: 325 }
];