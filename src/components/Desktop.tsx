import { socialLinks, liftingData, blogs } from "@/lib/data";
import { LinksCard } from "@/components/LinksCard";
import { PowerliftingCard } from "@/components/PowerliftingCard";
import { BlogCard } from "@/components/BlogCard"
import { LocationCard } from "./LocationCard";
import { ProjectsBento } from "@/components/Projects"
import { Spotify } from "./SpotifyWrapper";

function DesktopLayout() {
    return (
        <div className="bg-background w-full min-h-screen p-4 py-8 lg:p-6 lg:h-screen">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-6 lg:grid-rows-6 lg:gap-6 lg:h-full">
                {/* Projects Card - spans 2 columns, 5 rows */}
                <div className="lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-5 bg-card rounded-4xl p-8">
                    <ProjectsBento />
                </div>

                {/* Links Card - bottom right */}
                <div className="lg:col-start-5 lg:col-span-2 lg:row-start-6 bg-card rounded-4xl p-8 flex items-center">
                    <LinksCard socialLinks={socialLinks} />
                </div>

                <div className="flex flex-row lg:flex-col gap-3 lg:contents">
                    {/* Spotify Card - top left */}
                    <div className="lg:col-start-1 lg:row-start-1 lg:flex lg:min-h-0 flex-1 bg-card rounded-4xl p-8 flex items-center">
                        <Spotify />
                    </div>
                    {/* Location Card - second row left */}
                    <div className="lg:col-start-1 lg:row-start-2 lg:flex-none lg:min-h-0 flex-1 bg-card rounded-4xl p-8 flex items-center">
                        <LocationCard />
                    </div>
                </div>

                {/* Powerlifting Card - left side, bottom 4 rows */}
                <div className="lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-4 bg-card rounded-4xl p-8 h-full">
                    <PowerliftingCard data={liftingData} />
                </div>



                {/* Blog Card - top middle, spans 3 columns, 2 rows */}
                <div className="lg:col-start-2 lg:col-span-3 lg:row-start-1 lg:row-span-2 bg-card rounded-4xl p-8">
                    <BlogCard blogPost={blogs[0]} />
                </div>

                {/* Name Card - middle, spans 2 columns, 2 rows */}
                <div className="col-start-3 col-span-2 row-start-3 row-span-2 bg-foreground rounded-[32px] p-[32px] flex flex-col justify-center gap-[16px]">
                    <p className="text-white text-[24px]">hi, I'm</p>
                    <p className="text-white text-[48px]">Ella Lloyd</p>
                    <p className="text-white text-[24px]">welcome to my world</p>
                </div>

                {/* About Me Card - middle bottom */}
                <div className="col-start-3 col-span-2 row-start-5 row-span-2 bg-card rounded-[32px] p-[32px] flex flex-col gap-[16px] overflow-hidden">
                    <p className="text-white text-[24px]">About Me</p>
                    <p className="text-white text-[16px] overflow-y-auto">
                        I'm a software engineer passionate about creating intuitive experiences users will love.
                        When I'm not coding, you'll find me in the gym, crafting at home or exploring new cities.
                    </p>
                </div>


            </div>
        </div>
    );
}

export { DesktopLayout };
