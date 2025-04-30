import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";

const HeroSection = () => {
  return (
    <div className="overflow-hidden relative w-[90%] sm:w-[95%] md:w-full mx-auto h-[35vh] sm:h-[80vh] md:h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/video-poster.jpg"
        >
          <source src="/agrobrain.mp4" type="video/mp4" />
          <source src="/agrobrain.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Content */}
      <div className="flex relative z-10 flex-col justify-center items-center h-full bg-black/25 px-4">
        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <motion.div
            className="flex flex-col items-center space-y-1 sm:space-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <ChevronDown
              className="text-[#5DB996] w-8 h-8 sm:w-10 sm:h-10 animate-bounce"
              strokeWidth={1.5}
            />
            <motion.div
              className="h-10 sm:h-12 w-0.5 bg-gradient-to-b from-[#5DB996]/80 to-transparent rounded-full"
              animate={{
                y: [0, 15, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-xs sm:text-sm font-medium text-[#5DB996] opacity-70 hover:opacity-100 transition-opacity duration-300">
              Explore Solutions
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
