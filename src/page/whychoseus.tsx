import { AiOutlineFieldTime, AiOutlineStock } from "react-icons/ai";
import { FaHeadset, FaUsers } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <HiOutlineLightBulb size={36} className="text-blue-500" />,
      title: "Practical Approach",
      description:
        "Our curriculum focuses on real-world application, not just theory. You'll work on actual projects and scenarios that simulate market conditions.",
    },
    {
      icon: <FaUsers size={36} className="text-blue-500" />,
      title: "Industry Expert Instructors",
      description:
        "Learn from professionals who have achieved success in their fields with decades of combined experience in trading, tech, and business.",
    },
    {
      icon: <AiOutlineFieldTime size={36} className="text-blue-500" />,
      title: "Flexible Learning",
      description:
        "Our courses are designed to fit your schedule with a blend of live sessions, recorded content, and self-paced learning materials.",
    },
    {
      icon: <GiTakeMyMoney size={36} className="text-blue-500" />,
      title: "Proven Results",
      description:
        "Our students consistently achieve their goals, with 85% reporting significant improvements in their trading, tech, or business performance.",
    },
    {
      icon: <AiOutlineStock size={36} className="text-blue-500" />,
      title: "Comprehensive Resources",
      description:
        "Access to proprietary tools, software, analytics platforms, and extensive libraries of resources not available elsewhere.",
    },
    {
      icon: <FaHeadset size={36} className="text-blue-500" />,
      title: "Ongoing Support",
      description:
        "Your learning doesn't end when the course does. Get continuous support and updates as markets evolve and technologies change.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Why Choose DataPoint Academy
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            The DataPoint Difference
          </h2>
          <p className="text-xl text-gray-300">
            We stand apart from other educational programs through our
            commitment to excellence, practicality, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all h-full"
            >
              <div className="bg-blue-500/10 p-4 rounded-lg inline-block mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#courses"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            Explore Our Programs
            <BsArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
