import { SocialLink } from "@/lib/types";

function LinksCard({ socialLinks }: { socialLinks: SocialLink[] }) {
    return (
        <div className="flex items-center justify-between gap-2 w-full h-full">
            {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                    <a
                        key={index}
                        href={link.url}
                        className="bg-secondary rounded-2xl size-[50px] flex items-center justify-center inset-shadow-background/50 inset-shadow-xs hover:bg-white transition-colors"
                        aria-label={link.label}
                    >
                        <Icon className="w-6 h-6 text-[#210534]" />
                    </a>
                );
            })}
        </div>
    )
}

export { LinksCard };