import datapointceo from "../assets/datapointceo.jpg";
import happylearning from "../assets/happylearner.jpg";
import happytech from "../assets/happtech.jpg";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const slides = useMemo(
    () => [
      {
        id: 1,
        title: "Transform Your Future with DataPoint Academy",
        description:
          "Unlock professional mastery in Forex trading, cutting-edge tech development, and profitable e-commerce strategies.",
        image: datapointceo,
        cta: "Start Learning Today",
        overlay: "from-blue-600/60 to-black/80",
      },
      {
        id: 2,
        title: "Forex Trading Mastery with Industry Experts",
        description:
          "Learn proven strategies from pro traders with live market insights and mentorship to build real profitability.",
        image: happylearning,
        cta: "Join Trading Program",
        overlay: "from-emerald-500/60 to-black/80",
      },
      {
        id: 3,
        title: "Tech Skills for the Digital Economy",
        description:
          "From coding fundamentals to blockchain mastery, become job-ready in months, not years.",
        image: happytech,
        cta: "Explore Tech Courses",
        overlay: "from-sky-500/60 to-black/80",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={current.image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${current.overlay}`}
        />
      </div>

      <div className="relative z-10 px-6 text-center max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              {current.title}
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
              {current.description}
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-indigo-600 hover:bg-indigo-100 font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 flex items-center justify-center mx-auto text-lg shadow-md"
            >
              {current.cta}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-10 space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
