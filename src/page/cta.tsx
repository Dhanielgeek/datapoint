const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of students who have transformed their careers with
          DataPoint Academy's comprehensive courses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition duration-300">
            Browse Courses
          </button>
          <button className="border border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium text-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
