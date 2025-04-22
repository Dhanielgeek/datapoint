import ContactSection from "./contact";
import CourseCategories from "./courses";
// import CTASection from "./cta";
import FAQSection from "./faq";
import Features from "./features";
import Hero from "./hero";
import MentorshipSection from "./mentorship";
import SkillsSection from "./skillssection";
import Testimonials from "./testimonals";
import WhyChooseUsSection from "./whychoseus";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <CourseCategories />
      <SkillsSection />
      <MentorshipSection />
      <WhyChooseUsSection />
      <Testimonials />
      <FAQSection />
      {/* <CTASection /> */}
      <ContactSection />
    </div>
  );
};

export default Home;
