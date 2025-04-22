import { FaCalendarAlt, FaHeadset } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#1E40AF_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                Get Started
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Skills?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're looking to begin your journey in forex trading,
                master new tech skills, or elevate your business expertise, our
                team is here to guide you every step of the way.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <FaHeadset className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Support Team
                    </h3>
                    <p className="text-gray-400">
                      Our dedicated support team is available 24/7 to answer
                      your questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <FaCalendarAlt className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Free Consultation
                    </h3>
                    <p className="text-gray-400">
                      Schedule a free 30-minute consultation with one of our
                      expert advisors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <MdEmail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <p className="text-gray-400">
                      Send us an email at contact@datapointacademy.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      I'm interested in:
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500">
                      <option>Forex & Trading Programs</option>
                      <option>Tech Development Courses</option>
                      <option>Digital Marketing Training</option>
                      <option>Business Management Courses</option>
                      <option>1-on-1 Mentorship</option>
                      <option>Corporate Training</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 h-32"
                      placeholder="Tell us about your goals and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
