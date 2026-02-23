import { motion } from "framer-motion";

const introText = 
  "I’m an entry-level graphic designer who enjoys creating clean and bold designs that attract attention and leave an impression. I specialize in posters, branding, packaging, and layout using Illustrator, Photoshop, and InDesign. I competed at the National Level Competition in Graphic Design Technology. I’m now focused on improving my skills and growing as a professional designer.";

export default function About() {
  // Split text into words for staggered wipe animation
  const words = introText.split(" ");

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        
        {/* <div className="grid md:grid-cols-2 gap-12 items-start mb-20"> */}
        <div className="max-w-3xl mx-auto mb-20">
          {/* Left: Animated Introduction Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <div className="overflow-hidden">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { clipPath: "inset(0 100% 0 0)" },
                  visible: {
                    clipPath: "inset(0 0% 0 0)",
                    transition: { duration: 1.2, ease: "easeOut" },
                  },
                }}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + i * 0.08, // staggered wipe from left
                      ease: "easeOut",
                    }}
                    className="inline-block mr-1"
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            {/* Highlight key tools */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="mt-6 text-indigo-300 font-medium"
            >
              Tools I love: Illustrator, Photoshop, InDesign
            </motion.p>
          </motion.div>

        
        </div>

        {/* Focus Areas Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Visual Design */}
          <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Visual Design</h3>
            <p className="text-gray-300 mb-6">
              I design for print and digital media, including branding, brochures, posters, packaging, and UX/UI. My focus is on clarity, structure, and visual balance.
            </p>
            <div className="grid grid-cols-2 gap-4">

<grok-card data-id="b74b01" data-type="image_card" data-plain-type="render_searched_image"  data-arg-size="LARGE" ></grok-card>



<grok-card data-id="5cf570" data-type="image_card" data-plain-type="render_searched_image"  data-arg-size="LARGE" ></grok-card>

            </div>
          </div>

          {/* Motion Graphics */}
          <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Motion Graphics</h3>
            <p className="text-gray-300 mb-6">
              I create motion graphics for digital content, such as animated text, transitions, and social media visuals. I focus on timing and visual storytelling.
            </p>
            <div className="grid grid-cols-2 gap-4">

<grok-card data-id="16500e" data-type="image_card" data-plain-type="render_searched_image"  data-arg-size="LARGE" ></grok-card>



<grok-card data-id="64c5a2" data-type="image_card" data-plain-type="render_searched_image"  data-arg-size="LARGE" ></grok-card>

            </div>
          </div>

          {/* 3D Modeling */}
          <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">3D Modeling</h3>
            <p className="text-gray-300 mb-6">
              I create 3D models for objects and environments, including product visuals and concept scenes. I focus on form, scale, and mood.
            </p>
            <div className="grid grid-cols-2 gap-4">

<grok-card data-id="424320" data-type="image_card" data-plain-type="render_searched_image"  data-arg-size="LARGE" ></grok-card>



<grok-card data-id="ab9cf0" data-type="image_card" data-plain-type="render_searched_image"  data-arg-size="LARGE" ></grok-card>

            </div>
          </div>
        </motion.div>

        {/* Closing Motivation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-xl text-gray-400 mt-20 max-w-3xl mx-auto italic"
        >
          Always learning, always creating — excited to bring clean, bold, and impactful visuals to every project.
        </motion.p>
      </div>
    </section>
  );
}