import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Forex Trader",
      quote:
        "The forex course at DataPoint Academy gave me the confidence and knowledge to start trading professionally. Within three months of completing the course, I was able to quit my 9-5 job.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Web Developer",
      quote:
        "I had zero programming experience before joining DataPoint. Their step-by-step curriculum made learning to code accessible and fun. Now I work as a full-stack developer at a tech startup.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
    },
    {
      id: 3,
      name: "Olivia Williams",
      role: "E-commerce Entrepreneur",
      quote:
        "The dropshipping program taught me everything I needed to launch my own online store. The instructors were always available to answer questions and provide guidance.",
      avatar: "/api/placeholder/60/60",
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our successful graduates who have transformed their
            careers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 relative">
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-700 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
            </div>

            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={
                    index < testimonials[currentTestimonial].rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                <ChevronUp size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
