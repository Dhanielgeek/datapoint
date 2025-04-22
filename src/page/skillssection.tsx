import { BsArrowRight } from "react-icons/bs";
import {
  FaChartLine,
  FaCheckCircle,
  FaLaptopCode,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Forex & Trading",
      icon: <FaChartLine className="text-blue-500" size={28} />,
      description:
        "Master market analysis and profitable trading strategies across multiple assets.",
      skills: [
        "Technical Analysis & Chart Patterns",
        "Risk Management Strategies",
        "Fundamental Analysis",
        "Market Psychology",
        "Swing & Day Trading Techniques",
        "Cryptocurrency Trading",
        "Forex Pairs Analysis",
        "Trading Automation",
        "Algorithmic Trading",
        "Options & Futures Trading",
      ],
    },
    {
      title: "Tech Development",
      icon: <FaLaptopCode className="text-green-500" size={28} />,
      description:
        "Build cutting-edge applications and systems with modern technology stacks.",
      skills: [
        "Full-Stack Web Development",
        "Mobile App Development",
        "Blockchain Technology",
        "Smart Contract Development",
        "UI/UX Design",
        "API Integration",
        "Cloud Computing",
        "Database Management",
        "DevOps Practices",
        "AI & Machine Learning",
      ],
    },
    {
      title: "Business Management",
      icon: <FaUserTie className="text-amber-500" size={28} />,
      description:
        "Develop entrepreneurial skills to create and scale successful businesses.",
      skills: [
        "Business Strategy & Planning",
        "E-commerce Management",
        "Dropshipping Business Models",
        "Supply Chain Management",
        "Project Management",
        "Financial Analysis",
        "Team Leadership",
        "Sales & Negotiation",
        "Customer Relationship Management",
        "Business Scaling Strategies",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Skills You'll Master
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Our academy provides in-depth training across multiple disciplines
            to prepare you for success in today's competitive markets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-blue-500/30 transition-all h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 rounded-lg bg-gray-700/50">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6">{category.description}</p>

              <div className="flex-grow">
                <ul className="space-y-3 text-gray-300">
                  {category.skills.slice(0, 5).map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                {category.skills.length > 5 && (
                  <div className="mt-4 mb-6">
                    <details className="group">
                      <summary className="text-blue-400 hover:text-blue-300 cursor-pointer flex items-center font-medium">
                        <span>View More Skills</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <ul className="space-y-3 text-gray-300 mt-3 pl-1 border-l-2 border-blue-500/30">
                        {category.skills.slice(5).map((skill, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-700">
                <a
                  href="#courses"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center font-medium group"
                >
                  View Related Courses
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
