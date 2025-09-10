"use client"
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react"; 
import Image from "next/image"; // ✅ Use next/image

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800 px-10 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          MYDHARI ISHWAR SAIDEVMANISH{" "}
          <span className="text-indigo-400">Portfolio</span>
        </h1>
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 md:px-20 py-20">
        {/* Left */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Saidevmanish
            </span>{" "}
            👋
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            A passionate{" "}
            <span className="text-indigo-300">developer & problem solver</span>{" "}
            who builds modern, interactive, and user-friendly digital experiences. 
            Skilled in <span className="text-indigo-300">HTML, CSS, JS, C</span>, 
            with strong problem understanding and communication.
          </p>
          <div className="flex gap-4">
            <a
            
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 rounded-xl shadow-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right (Profile Image) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full p-[5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-[5px] border-gray-900">
              {/* ✅ Make sure sai.jpg is inside /public */}
              <Image
                src="/sai.jpg"
                alt="Profile"
                width={288}
                height={288}
                className="object-cover rounded-full w-full h-full"
                priority // ✅ loads immediately for performance
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 md:px-20 py-16 bg-gray-950">
        <h3 className="text-3xl font-semibold mb-8 text-indigo-400">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "JavaScript", "C", "Problem Solving", "Communication", "Python"].map(
            (skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="px-5 cursor-pointer py-2 bg-gray-800 text-gray-200 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 md:px-20 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-indigo-400">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Student Engagement",
              desc: "Enhancing student engagement through interactive tools and resources.",
              img: "/stu.jpg",
            },
            {
              title: "Portfolio Website",
              desc: "This site itself — built with React, Tailwind, and Framer Motion.",
              img: "/project3.png",
            },
          ].map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={160}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 md:px-20 py-16 bg-gray-950">
        <h3 className="text-3xl font-semibold mb-8 text-indigo-400">Contact Me</h3>
        <div className="bg-gray-900 rounded-xl shadow-xl p-6 space-y-4 max-w-xl">
          <p className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-indigo-400" /> saidevmanish@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-indigo-400" /> +91 8121818678
          </p>

          <a
            href="https://github.com/saidev-manish"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-indigo-400 transition"
          >
            <Github className="w-5 h-5 text-indigo-400" /> github.com/saidev-manish
          </a>

          <a
            href="https://www.linkedin.com/in/saidevmanish-m-i-69215b328"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-indigo-400 transition"
          >
            <Linkedin className="w-5 h-5 text-indigo-400" /> linkedin.com/in/saidevmanish-m-i-69215b328
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Saidevmanish. All rights reserved.
      </footer>
    </div>
  );
}
