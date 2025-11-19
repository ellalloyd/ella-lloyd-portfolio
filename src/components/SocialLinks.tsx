import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    {
        url: "https://github.com/ellalloyd",
        label: "GitHub",
        icon: <Github />
    },
    {
        url: "https://linkedin.com/in/ella-lloyd",
        label: "LinkedIn",
        icon: <Linkedin />
    },
    {
        url: "mailto:elloyd116@gmail.com",
        label: "Email",
        icon: <Mail />
    }
];

export function SocialLinks() {
    return (
        <div className="flex flex-row justify-evenly [&_svg]:size-5 w-full h-full bg-purple-300/20 p-2 rounded-lg hover:bg-purple-300/50 transition-colors">
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-center text-primary/70 hover:text-accent transition-colors hover:scale-110 duration-200"
                    aria-label={link.label}
                >
                    {link.icon}
                </a>
            ))
            }
        </div >
    );
}