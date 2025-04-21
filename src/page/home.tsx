import CourseCategories from "./courses";
import CTASection from "./cta";
import Features from "./features";
import Hero from "./hero";
import Testimonials from "./testimonals";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <CourseCategories />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
