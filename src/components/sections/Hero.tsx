import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../../config/socials";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          {/* Left Column: Image and Socials */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/sheddy.webp"
                  alt="Portrait of Shedrack Okunda"
                  width={256}
                  height={256}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Social Links moved here for a "strategic position" */}
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map(({ id, href, icon: Icon, label }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <Icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Text and CTAs */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Shedrack Okunda
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-6">
              Full-Stack MERN Developer
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed max-w-xl">
              I build scalable and responsive applications that combine clean
              design, performance, and real-world usability.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              {[
                "React.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Tailwind CSS",
                "Express.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
