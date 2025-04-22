import { BiCheck } from "react-icons/bi";
import studentin from "../assets/studentinclass.jpg";

const Features: React.FC = () => {
  const features = [
    "Expert instructors with real-world experience",
    "Hands-on projects and practical assignments",
    "Flexible learning schedule for busy professionals",
    "Community support and networking opportunities",
    "Job placement assistance and career guidance",
    "Lifetime access to course materials and updates",
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <img
                src={studentin}
                alt="Students in classroom"
                className="rounded-md w-full"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose DataPoint Academy?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              DataPoint Academy is dedicated to providing high-quality education
              that's practical, relevant, and designed to help you succeed in
              the real world.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BiCheck size={20} className="text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
