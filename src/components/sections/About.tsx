import { Code } from "lucide-react";
import type React from "react";
import { PASSIONS } from "../../config/passions";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-slate-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent "
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Full-stack developer focused on building modern, responsive, and
            user-centered applications with clean design and scalable
            architecture.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <Code
                className="w-24 h-24 mx-auto mb-4 text-blue-400"
                aria-hidden="true"
              />
              <p className="text-slate-300">
                Building scalable web & mobile experiences{" "}
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-6">
            {[
              "I’m a full-stack developer focused on building responsive and scalable web applications using modern technologies like React, Node.js, TypeScript, and MongoDB. I enjoy turning ideas into functional products with clean user interfaces and efficient backend systems.",

              "I’m particularly interested in frontend engineering, API development, authentication systems, and performance optimization. I enjoy solving real-world problems through code and continuously improving my development workflow and software architecture skills.",

              "Currently, I’m expanding my skills in mobile development with React Native while continuing to deepen my knowledge of full-stack application development. I’m actively seeking internship and junior developer opportunities where I can contribute, collaborate, and grow as a software engineer.",
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                className={`text-lg text-slate-300 leading-relaxed ${
                  idx === 2 ? "italic" : ""
                }`}
              >
                {text}
              </motion.p>
            ))}

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Currently Learning
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Next.js",
                  "System Design",
                  "PostgreSQL",
                  "Docker",
                  ".NET",
                  "DevOps",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Passions */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {PASSIONS.map(({ id, icon: Icon, title, description }, idx) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 * idx,
                    duration: 0.5,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                    },
                  }}
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg cursor-default"
                  role="group"
                  tabIndex={0}
                  aria-label={title}
                >
                  <div className="text-blue-400">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{title}</h4>
                    <p className="text-xs text-slate-400">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
