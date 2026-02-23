import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import profileImage from "../assets/profile_vi.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center px-6 py-20 md:py-0 overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left max-w-2xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                         font-extrabold tracking-tight leading-tight mb-6"
            >
              Hello,
              <br />
              My Name is{" "}

              {/* First Name */}
              <motion.span
                animate={{ rotate: [0, -3, 3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative inline-block text-white"
                style={{
                  WebkitTextStroke: "1px #ff4da6",
                  textShadow: `
                    0 0 5px rgba(255, 77, 166, 0.8),
                    0 0 15px rgba(255, 77, 166, 0.6),
                    0 0 30px rgba(255, 77, 166, 0.4)
                  `,
                }}
              >
                Sem
              </motion.span>{" "}

              {/* Last Name */}
              <motion.span
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative inline-block text-white"
                style={{
                  WebkitTextStroke: "1px #ff4da6",
                  textShadow: `
                    0 0 5px rgba(255, 77, 166, 0.8),
                    0 0 15px rgba(255, 77, 166, 0.6),
                    0 0 30px rgba(255, 77, 166, 0.4)
                  `,
                }}
              >
                Sreyleak
              </motion.span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10"
            >
              <Typewriter
                text="Graphic Designer & Visual Artist"
                speed={80}
                delay={2500}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <a
                href="#about"
                className="w-full sm:w-auto inline-block px-8 py-4 
                           bg-gray-900 hover:bg-gray-800 
                           border border-gray-700 
                           rounded-full text-base sm:text-lg font-medium 
                           transition-all hover:scale-105 
                           shadow-lg shadow-black/40"
              >
                About Me
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-block px-8 py-4 
                           bg-indigo-600 hover:bg-indigo-500 
                           rounded-full text-base sm:text-lg font-semibold 
                           transition-all hover:scale-105 
                           shadow-lg shadow-indigo-900/40"
              >
                See Projects
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <img
              src={profileImage}
              alt="Sem Sreyleak - Graphic Designer"
              className="
                w-48 h-60
                sm:w-64 sm:h-80
                md:w-80 md:h-96
                lg:w-96 lg:h-[28rem]
                object-cover rounded-3xl shadow-xl
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}