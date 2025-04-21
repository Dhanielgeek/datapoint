import { ArrowRight, BookOpen, ShoppingBag, TrendingUp } from "lucide-react";

const CourseCategories: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Forex Trading Mastery",
      category: "forex",
      description:
        "Learn professional forex trading strategies from experienced traders. Master market analysis and risk management.",
      icon: <TrendingUp size={48} className="text-blue-600" />,
    },
    {
      id: 2,
      title: "Tech Development",
      category: "tech",
      description:
        "Build in-demand tech skills from web development to data science and AI with hands-on projects.",
      icon: <BookOpen size={48} className="text-purple-600" />,
    },
    {
      id: 3,
      title: "Management",
      category: "dropshipping",
      description:
        "Start your own e-commerce business with proven dropshipping models, supplier networks, and marketing techniques.",
      icon: <ShoppingBag size={48} className="text-green-600" />,
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Learning Tracks
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose your path and start your journey to becoming an expert in
            your field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-6">{course.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
