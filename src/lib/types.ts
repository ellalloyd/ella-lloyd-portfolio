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