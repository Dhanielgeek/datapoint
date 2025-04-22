const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">DataPoint</h3>
            <p className="mb-4">
              Empowering students with practical skills for the modern economy.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Courses</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Forex Trading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Dropshipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Free Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Career Guidance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>datapointmicrosystems@gmail.com</li>
              <li>+234 805 657 4122</li>
              <li>
                138, Kirikiri rd opposite Fuadem Hotel by 2nd benue B/stop ,
                olodi Apapa , Lagos
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between">
          <p>
            &copy; {new Date().getFullYear()} DataPoint Academy. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
