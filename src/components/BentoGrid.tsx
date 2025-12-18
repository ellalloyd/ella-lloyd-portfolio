import { socialLinks, liftingData, blogs } from "@/lib/data";
import { LinksCard } from "@/components/LinksCard";
import { PowerliftingCard } from "@/components/PowerliftingCard";
import { BlogCard } from "@/components/BlogCard"
import { LocationCard } from "./LocationCard";
import { ProjectsBento } from "@/components/Projects"
import { Spotify } from "./SpotifyWrapper";

function BentoGrid() {
    return (
        <div className="bg-background w-full min-h-screen p-4 py-8 lg:p-6 lg:h-screen">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-6 lg:grid-rows-6 lg:gap-6 lg:h-full">
                {/* Name Card - middle, spans 2 columns, 2 rows */}
                <div className="lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-2 lg:min-h-0 bento-card flex flex-col justify-center gap-4 text-white">
                    <p className="text-2xl">hi, I'm</p>
                    <p className="text-5xl">Ella Lloyd</p>
                    <p className="text-2xl">welcome to my world</p>
                </div>

                {/* About Me Card - middle bottom */}
                <div className="lg:col-start-3 lg:col-span-2 lg:row-start-5 lg:row-span-2 bento-card flex flex-col gap-4 overflow-hidden text-white">
                    <p className="text-2xl">About Me</p>
                    <p className="overflow-y-auto text-pretty">
                        I'm a software engineer passionate about creating intuitive experiences users will love.
                        When I'm not coding, you'll find me in the gym, crafting at home or exploring new cities.
                    </p>
                </div>

                {/* Projects Card - spans 2 columns, 5 rows */}
                <div className="lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-5 bento-card">
                    <ProjectsBento />
                </div>

                <div className="flex flex-row lg:flex-col gap-3 lg:contents w-full min-w-0">
                    {/* Spotify Card - top left */}
                    <div className="lg:col-start-1 lg:row-start-1 lg:flex lg:min-h-0 flex-1 min-w-0 bento-card flex items-center">
                        <Spotify />
                    </div>
                    {/* Location Card - second row left */}
                    <div className="lg:col-start-1 lg:row-start-2 lg:flex-none lg:min-h-0 flex-1 min-w-0 bento-card flex items-center">
                        <LocationCard />
                    </div>
                </div>

                {/* Powerlifting Card - left side, bottom 4 rows */}
                <div className="lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-4 bento-card h-full">
                    <PowerliftingCard data={liftingData} />
                </div>

                {/* Blog Card - top middle, spans 3 columns, 2 rows */}
                <div className="lg:col-start-2 lg:col-span-3 lg:row-start-1 lg:row-span-2 bento-card">
                    <BlogCard blogPost={blogs[0]} />
                </div>

                {/* Links Card - bottom right */}
                <div className="lg:col-start-5 lg:col-span-2 lg:row-start-6 bento-card flex items-center">
                    <LinksCard socialLinks={socialLinks} />
                </div>

            </div>
        </div>
    );
}

export { BentoGrid };
