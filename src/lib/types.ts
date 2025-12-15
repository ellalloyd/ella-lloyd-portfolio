import { JSX, ReactNode } from "react"
import { LucideIcon } from "lucide-react"

export type Project = {
    id: number,
    name: string,
    tools: string,
    description: string,
}

export type SocialLink = {
    icon: LucideIcon,
    url: string,
    label: string,
}

export type LiftingData = {
    month: string,
    bench: number,
    squat: number,
    deadlift: number,
}

export type BlogData = {
    author: string,
    date: string,
    title: string,
    summary: string,
}