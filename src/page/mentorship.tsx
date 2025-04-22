import { AiOutlineTeam } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaCheckCircle, FaUsers, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const MentorshipSection = () => {
  const mentorshipPrograms = [
    {
      title: "1-on-1 Elite Mentorship",
      description:
        "Work directly with industry professionals in personalized sessions tailored to your specific needs and goals.",
      features: [
        "Weekly private coaching calls",
        "Personalized learning path",
        "Direct access to mentor via messaging",
        "Custom strategy development",
        "Portfolio/project reviews",
      ],
      icon: <AiOutlineTeam size={48} className="text-blue-500" />,
      highlight: true,
    },
    {
      title: "Group Mentorship",
      description:
        "Join a small group of like-minded individuals for collaborative learning and networking opportunities.",
      features: [
        "Bi-weekly group coaching calls",
        "Collaborative projects",
        "Peer networking opportunities",
        "Shared resources and tools",
        "Community forum access",
      ],
      icon: <FaUsers size={48} className="text-green-500" />,
    },
    {
      title: "Corporate Training",
      description:
        "Custom training programs for teams and organizations looking to upskill their workforce.",
      features: [
        "Tailored curriculum for your team",
        "Flexible scheduling options",
        "Progress tracking and reporting",
        "Custom certification options",
        "Ongoing support for implementation",
      ],
      icon: <FaUserTie size={48} className="text-amber-500" />,
    },
  ];

  return (
    <section
      id="mentorship"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Expert Guidance
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Mentorship Programs
          </h2>
          <p className="text-xl text-gray-300">
            Accelerate your learning and growth with guided mentorship from
            industry veterans who've achieved what you're aiming for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentorshipPrograms.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${
                program.highlight
                  ? "from-blue-900/40 to-gray-900"
                  : "from-gray-800 to-gray-900"
              } p-8 rounded-2xl shadow-xl ${
                program.highlight
                  ? "border-2 border-blue-500/30"
                  : "border border-gray-800"
              } flex flex-col h-full relative overflow-hidden`}
            >
              {program.highlight && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-2 rotate-45">
                  POPULAR
                </div>
              )}

              <div className="mb-6 flex justify-center">{program.icon}</div>

              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {program.title}
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                {program.description}
              </p>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FaCheckCircle className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-lg font-medium transition-all ${
                    program.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">
                Not sure which mentorship program is right for you?
              </h3>
              <p className="text-gray-300">
                Schedule a free consultation call with our team to discuss your
                goals and find the perfect fit for your learning journey.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all w-full md:w-auto justify-center"
              >
                Book Free Consultation
                <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
