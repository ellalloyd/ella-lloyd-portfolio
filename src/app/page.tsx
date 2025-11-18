import { ProjectGrid } from "@/components/Projects";
import { AnimatedHeader } from "@/components/AnimatedHeader";

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
    <div className="my-10">
      {/* Hero Section */}
      <section id="home">
        <AnimatedHeader fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      </section>

      {/* Projects Preview */}
      <section id="projects" className="mt-4">
        <ProjectGrid fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      </section>
    </div>
  );
};

export default Home;
