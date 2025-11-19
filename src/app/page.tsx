import { ProjectGrid } from "@/components/Projects";
import { AnimatedHeader } from "@/components/AnimatedHeader";
import { Spotify } from "@/components/Spotify";
import { Name } from "@/components/Name";
import { Bio } from "@/components/Bio";
import { SocialLinks } from "@/components/SocialLinks";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-8 auto-rows-[200px] auto-cols-[200px] place-items-start gap-4 max-h-screen p-6">

      {/* Name Section */}
      <section id="home" className="col-start-1 row-start-1 col-span-3 row-span-1">
        <Name />
      </section>

      {/* Bio Section */}
      <section id="home" className="col-start-1 row-start-2 col-span-3 row-span-3">
        <Bio />
      </section>

      <section id="spotify" className="col-start-1 col-span-2 row-start-8 p-2 row-span-1 w-full h-full place-self-center">
        <Spotify />
      </section>

      {/* Projects Preview */}
      <section id="projects" className="col-start-7 col-span-6 row-start-1 row-span-7 w-full h-full overflow-y-auto pr-4">
        <ProjectGrid fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="col-start-1 col-span-2 row-start-3 row-span-1">
        <div className="bg-teal-400"></div>
      </section>

      {/* Social Media */}
      <section id="socials" className="col-start-11 col-span-2 row-start-8 row-span-1 p-2 w-full h-full place-self-center">
        <SocialLinks />
      </section>


    </div>
  );
};

export default Home;
