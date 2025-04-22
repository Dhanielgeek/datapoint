import { useState } from "react";
import { BsArrowRight, BsChevronDown, BsChevronUp } from "react-icons/bs";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know which course is right for me?",
      answer:
        "We offer a free course selection consultation to help you identify the best path based on your current skills, goals, and available time. Our advisors will help you choose the right program and create a learning plan that fits your needs.",
    },
    {
      question: "Do I need prior experience in trading or technology?",
      answer:
        "No, our courses are designed for various skill levels, from complete beginners to advanced practitioners. Each program clearly indicates the prerequisite knowledge, and we offer foundational courses to help you build the necessary skills before advancing to more complex topics.",
    },
    {
      question: "How much time do I need to commit to see results?",
      answer:
        "The time commitment varies by program, but most students see meaningful results by dedicating 5-10 hours per week to their studies. Our flexible learning approach allows you to progress at your own pace while still maintaining accountability through regular check-ins with mentors.",
    },
    {
      question:
        "What makes your trading courses different from free resources online?",
      answer:
        "While free resources can provide basic information, our comprehensive curriculum offers structured learning paths, practical experience with live trading environments, personalized feedback, and proven strategies developed by successful traders. Our mentors provide insights from years of market experience that you won't find in free tutorials.",
    },
    {
      question: "Do you offer job placement assistance for tech students?",
      answer:
        "Yes, our tech program includes career services such as portfolio development, interview preparation, and connections to our industry partners. Many of our graduates have secured positions through our network of employers who specifically seek out DataPoint Academy alumni.",
    },
    {
      question: "Can I access course materials after graduation?",
      answer:
        "Absolutely! Once you complete a course, you'll have lifetime access to the course materials, updates, and our alumni community. We regularly refresh our content to reflect market changes and new technologies, and as an alumnus, you'll continue to benefit from these updates.",
    },
    {
      question: "Do you offer payment plans or scholarships?",
      answer:
        "Yes, we offer flexible payment plans to make our education accessible. We also have a limited number of scholarships available for promising students who demonstrate exceptional potential. Contact our admissions team to learn more about financial options.",
    },
    {
      question: "How interactive are the online courses?",
      answer:
        "Our online courses are highly interactive, featuring live sessions, discussion forums, collaborative projects, and one-on-one coaching calls. You'll engage directly with instructors and fellow students, creating a dynamic learning environment despite the digital format.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-gray-300">
            Find answers to the most frequently asked questions about our
            programs, methods, and results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-800 rounded-lg overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <BsChevronUp className="text-blue-400" />
                ) : (
                  <BsChevronDown className="text-blue-400" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Still have questions? Contact us directly and we'll be happy to
            help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
          >
            Get In Touch
            <BsArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
