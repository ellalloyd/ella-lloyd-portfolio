import { socialLinks, liftingData, blogPost } from "@/lib/data";
import { LinksCard } from "@/components/LinksCard";
import { PowerliftingCard } from "@/components/PowerliftingCard";
import { BlogCard } from "@/components/BlogCard"
import { LocationCard } from "./LocationCard";
import { ProjectsBento } from "@/components/Projects"

function DesktopLayout() {
    return (
        <div className="bg-[#210534] w-full h-screen p-[24px]">
            <div className="grid grid-cols-6 grid-rows-6 gap-[24px] h-full">
                {/* Projects Card - spans 2 columns, 5 rows */}
                <div className="col-start-5 col-span-2 row-start-1 row-span-5 bg-[#b8abc1] rounded-[32px] p-[32px] flex flex-col gap-[16px]">
                    <ProjectsBento />
                </div>

                {/* Links Card - bottom right */}
                <div className="col-start-5 col-span-2 row-start-6 bg-[#b8abc1] rounded-[32px] p-[32px]">
                    <LinksCard socialLinks={socialLinks} />
                </div>

                {/* Powerlifting Card - left side, bottom 4 rows */}
                <div className="col-start-1 col-span-2 row-start-3 row-span-4 bg-[#b8abc1] rounded-[32px] p-[32px] flex flex-col gap-2">
                    <PowerliftingCard data={liftingData} />
                </div>

                {/* Spotify Card - top left */}
                <div className="col-start-1 row-start-1 bg-[#b8abc1] rounded-[32px] p-[32px] flex items-center gap-[16px] overflow-hidden">

                </div>

                {/* Blog Card - top middle, spans 3 columns, 2 rows */}
                <div className="col-start-2 col-span-3 row-start-1 row-span-2 bg-[#b8abc1] rounded-[32px] p-[32px] flex flex-col gap-[16px]">
                    <BlogCard blogPost={blogPost} />
                </div>

                {/* Name Card - middle, spans 2 columns, 2 rows */}
                <div className="col-start-3 col-span-2 row-start-3 row-span-2 bg-[#6d597a] rounded-[32px] p-[32px] flex flex-col justify-center gap-[16px]">
                    <p className="text-white text-[24px]">hi, I'm</p>
                    <p className="text-white text-[48px]">Ella Lloyd</p>
                    <p className="text-white text-[24px]">welcome to my world</p>
                </div>

                {/* About Me Card - middle bottom */}
                <div className="col-start-3 col-span-2 row-start-5 row-span-2 bg-[#b8abc1] rounded-[32px] p-[32px] flex flex-col gap-[16px] overflow-hidden">
                    <p className="text-white text-[24px]">About Me</p>
                    <p className="text-white text-[16px] overflow-y-auto">
                        I'm a passionate developer and designer who loves creating beautiful, functional web experiences.
                        When I'm not coding, you'll find me lifting weights or exploring new cities.
                    </p>
                </div>

                {/* Location Card - second row left */}
                <div className="col-start-1 row-start-2 bg-[#b8abc1] rounded-[32px] p-[32px] flex flex-col justify-center gap-[8px] overflow-hidden">
                    <LocationCard />
                </div>
            </div>
        </div>
    );
}

export { DesktopLayout };
