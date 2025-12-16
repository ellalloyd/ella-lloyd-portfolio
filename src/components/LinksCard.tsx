import { SocialLink } from "@/lib/types";

function LinksCard({ socialLinks }: { socialLinks: SocialLink[] }) {
    return (
        <div className="flex items-center justify-between gap-2 w-full">
            {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                    <a
                        key={index}
                        href={link.url}
                        className="bg-[#d9d9d9] rounded-[16px] w-[50px] h-[50px] flex items-center justify-center hover:bg-white transition-colors"
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