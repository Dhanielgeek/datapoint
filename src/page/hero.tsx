const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Master New Skills at{" "}
              <span className="text-blue-600">DataPoint</span> Academy
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Your gateway to professional expertise in Forex trading, tech
              development, and dropshipping business models.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition duration-300">
                Explore Courses
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <img
                src="/api/placeholder/600/400"
                alt="Students learning"
                className="rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
