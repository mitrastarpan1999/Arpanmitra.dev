import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333] text-gray-100 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      {/* Glass Card */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 sm:p-16 border border-white/20 flex flex-col items-center"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        {/* Career Objective */}
        <motion.p
          className="max-w-3xl text-lg leading-7 text-gray-200 mb-6 text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          Motivated and detail-oriented aspiring Software Engineer with hands-on experience in frontend development and backend fundamentals. Possesses a solid foundation in software design, programming principles, and collaborative project execution. Passionate about learning, contributing to team success, and continuously improving technical and communication skills to grow in the IT industry.
        </motion.p>
        <motion.p
          className="max-w-3xl text-lg leading-7 text-gray-200 mb-6 text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          I am <span className="font-bold text-violet-200">Arpan Mitra</span>, an aspiring <span className="font-bold text-blue-300">Full Stack Web Developer</span> with a strong foundation in frontend and backend fundamentals. With over 2 years of experience as a <span className="font-bold text-fuchsia-300">Team Leader</span> and <span className="font-bold text-fuchsia-300">Senior IT Researcher</span>, I have managed multiple web development projects and delivered high-quality solutions for clients. I am passionate about learning, collaborating, and building impactful digital experiences.
        </motion.p>
        {/* Skills & Expertise */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-8 border border-white/10 text-base leading-6">
            <h3 className="text-2xl font-bold text-violet-200 mb-3">Skills & Technologies</h3>
            <ul className="list-disc list-inside text-gray-200 text-base leading-6 space-y-1.5">
              <li>Frontend Development: <span className="text-blue-200">HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</span></li>
              <li>Frameworks & Libraries: <span className="text-blue-200">React.js, Express.js, Bootstrap, Tailwind CSS</span></li>
              <li>Backend Basics: <span className="text-blue-200">Node.js, RESTful APIs</span></li>
              <li>Version Control: <span className="text-blue-200">Git, GitHub</span></li>
              <li>UI/UX Fundamentals, Web Optimization, Responsive Design</li>
              <li>Communication & Team Collaboration, Agile Task Execution</li>
              <li>Project Ownership & Problem-Solving</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-8 border border-white/10 text-base leading-6">
            <h3 className="text-2xl font-bold text-violet-200 mb-3">Professional Highlights</h3>
            <ul className="list-disc list-inside text-gray-200 text-base leading-6 space-y-1.5">
              <li>2+ years of experience leading and collaborating on web projects</li>
              <li>Strong focus on responsive UI and user experience</li>
              <li>Hands-on with modern CSS frameworks and JavaScript libraries</li>
              <li>Experience with version control and collaborative workflows</li>
              <li>Continuous learner, always exploring new technologies</li>
            </ul>
          </div>
        </motion.div>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Express.js', 'Node.js', 'EJS', 'PostgreSQL', 'Python','Git', 'GitHub', 'UI/UX', 'GenAI', 'Process documentation'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg border border-white/10">{skill}</span>
          ))}
        </motion.div>
        {/* Education */}
        <motion.div
          className="w-full text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <span className="inline-block text-lg text-violet-200 font-semibold bg-white/10 px-6 py-2 rounded-2xl border border-white/10">B.Tech in Electronics and Communication Engineering – Brainware Group of Institutions (2017 – 2021) | CGPA: 7.92</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
