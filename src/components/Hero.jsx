
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333] text-gray-100 px-4 pt-24 pb-12 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      {/* Glass Card */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-16 border border-white/20 flex flex-col items-center"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D5603AQGhqAW7JpKjbg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719025248397?e=2147483647&v=beta&t=9rrAqUtg8JMASEomDZOGPwPZZp6zx0Sdt-k-vGSVQAE"
          alt="Arpan Mitra profile"
          className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-violet-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-2 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Arpan Mitra
        </motion.h1>
        <motion.p
          className="text-xl font-semibold mb-2 text-violet-200"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Aspiring Software Engineer | Frontend Developer
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <a href="mailto:mitrastarpan1999@gmail.com" className="text-blue-300 hover:underline">mitrastarpan1999@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:8335921001" className="text-blue-300 hover:underline">8335921001</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://www.linkedin.com/in/arpan-mitra-00033b240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">LinkedIn</a>
        </motion.div>
        <motion.p
          className="max-w-2xl text-gray-200 mb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Motivated and detail-oriented aspiring Software Engineer with hands-on experience in frontend development and backend fundamentals. Passionate about learning, contributing to team success, and continuously improving technical and communication skills to grow in the IT industry.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Express.js', 'Node.js', 'RESTful APIs', 'PostgreSQL', 'Python', 'Git', 'GitHub', 'GenAI', 'Process documentation'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg border border-white/10">{skill}</span>
          ))}
        </motion.div>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 mb-10">
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-8 border border-white/10 text-[1.18rem] leading-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-violet-200 mb-4">Work Experience</h3>
            <div className="mb-6">
              <div className="font-semibold text-lg">Team Leader – Tech Assignment Grade</div>
              <div className="text-base text-violet-300 mb-2">November 2023 – Present</div>
              <ul className="list-disc list-inside text-gray-200 text-base space-y-2">
                <li>Led a cross-functional team of 9 in executing multiple web-based projects from design to deployment.</li>
                <li>Designed and implemented responsive UIs, improving user interaction and engagement.</li>
                <li>Ensured timely project delivery through clear task planning and regular client coordination.</li>
                <li>Mentored team members on best practices in frontend development and Git workflows.</li>
                <li>Contributed to solution architecture and optimization strategies.</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-lg">Senior IT Researcher – Royal Research</div>
              <div className="text-base text-violet-300 mb-2">August 2022 – October 2023</div>
              <ul className="list-disc list-inside text-gray-200 text-base space-y-2">
                <li>Developed and maintained interactive web interfaces for client solutions.</li>
                <li>Collaborated with developers to integrate frontend and backend components.</li>
                <li>Applied research-driven methodologies to solve client-specific IT challenges.</li>
                <li>Supported UI enhancement efforts to improve application performance and usability.</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-8 border border-white/10 text-[1.18rem] leading-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-violet-200 mb-4">Education</h3>
            <div className="font-semibold text-lg">B.Tech in Electronics and Communication Engineering</div>
            <div className="text-base text-violet-300 mb-2">Brainware Group of Institutions (2017 – 2021)</div>
            <div className="text-base text-gray-200">CGPA: 7.92</div>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-8 border border-white/10 text-[1.18rem] leading-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-violet-200 mb-4">Certifications & Courses</h3>
            <ul className="list-disc list-inside text-gray-200 text-base space-y-2">
              <li>The Complete Web Development Bootcamp – Udemy (Ongoing)</li>
              <li>Advanced JavaScript & Frontend Techniques (Self-learning)</li>
              <li>Data Security and Privacy Training - Udemy</li>
              <li>Advance python from MSME</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-violet-200 mb-6">Featured Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left border border-white/10 text-[1.13rem] leading-7">
              <div className="font-semibold text-violet-100 text-lg mb-1">Bookverse</div>
              <div className="text-base text-violet-200 mb-2">Postgres, Frontend & Backend</div>
              <div className="text-base text-gray-200 mb-3">Worked on both frontend and backend of a book notes website with database.</div>
              <Link to="/projects#bookverse" className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10">View Project</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left border border-white/10 text-[1.13rem] leading-7">
              <div className="font-semibold text-violet-100 text-lg mb-1">Weather Website</div>
              <div className="text-base text-violet-200 mb-2">HTML, CSS, JavaScript, API</div>
              <div className="text-base text-gray-200 mb-3">Created a weather website using open weather API.</div>
              <Link to="/projects#weather" className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10">View Project</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left border border-white/10 text-[1.13rem] leading-7">
              <div className="font-semibold text-violet-100 text-lg mb-1">Simple Blog Website</div>
              <div className="text-base text-violet-200 mb-2">Node.js, Express, EJS</div>
              <div className="text-base text-gray-200 mb-3">Users can create, edit, and delete blog posts. Hosted live on Render.</div>
              <Link to="/projects#blog" className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10">View Project</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left border border-white/10 text-[1.13rem] leading-7">
              <div className="font-semibold text-violet-100 text-lg mb-1">Responsive Portfolio Website</div>
              <div className="text-base text-violet-200 mb-2">HTML, CSS, JavaScript</div>
              <div className="text-base text-gray-200 mb-3">A fully responsive portfolio website showcasing projects and skills.</div>
              <Link to="/projects#portfolio" className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10">View Project</Link>
            </div>
          </div>
        </motion.div>
        {/* My Services Section */}
        <motion.div
          className="w-full max-w-4xl mx-auto mt-12 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent text-center">My Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col items-start overflow-hidden">
              <span className="text-4xl font-extrabold text-violet-300 mb-2">01</span>
              <div className="text-xl font-bold text-violet-100 mb-2">Web Design</div>
              <div className="text-gray-200 mb-4">Web development is the process of building, programming...</div>
              <Link to="/services" className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10">Read More</Link>
            </div>
            {/* Service 2 */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col items-start overflow-hidden">
              <span className="text-4xl font-extrabold text-violet-300 mb-2">02</span>
              <div className="text-xl font-bold text-violet-100 mb-2">Content Writing</div>
              <div className="text-gray-200 mb-4">Web development is the process of building, programming...</div>
              <Link to="/services" className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10">Read More</Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition text-lg border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/ARPAN_MITRA_CV.pdf"
            download
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition text-lg border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>

          
        </div>
      
              {/* Blog Highlights Section */}
        <motion.div
          className="w-full max-w-4xl mx-auto mt-12 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent text-center">Blog Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col">
              <h4 className="font-semibold text-violet-100 text-lg mb-2">How I Built My First Full-Stack App</h4>
              <p className="text-gray-200 mb-3">A step-by-step journey through building Bookverse, from database design to deploying on Render.</p>
              <Link to="/blog/first-full-stack-app" className="inline-block mt-2 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition border border-white/10">Read More</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col">
              <h4 className="font-semibold text-violet-100 text-lg mb-2">Tips for Responsive Web Design</h4>
              <p className="text-gray-200 mb-3">My favorite techniques and tools for making websites look great on any device.</p>
              <Link to="/blog/responsive-web-design-tips" className="inline-block mt-2 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition border border-white/10">Read More</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col">
              <h4 className="font-semibold text-violet-100 text-lg mb-2">Weather App with OpenWeather API</h4>
              <p className="text-gray-200 mb-3">How I integrated real-time weather data into a user-friendly web app.</p>
              <Link to="/blog/weather-app-openweather-api" className="inline-block mt-2 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition border border-white/10">Read More</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col">
              <h4 className="font-semibold text-violet-100 text-lg mb-2">Lessons Learned as a Team Leader</h4>
              <p className="text-gray-200 mb-3">Reflections on leadership, collaboration, and delivering successful projects in tech.</p>
              <Link to="/blog/lessons-learned-team-leader" className="inline-block mt-2 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow hover:scale-105 transition border border-white/10">Read More</Link>
            </div>
          </div>
        </motion.div>
        {/* Hobbies & Interests Section */}
        <motion.div
          className="w-full max-w-4xl mx-auto mt-12 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent text-center">Hobbies & Interests</h3>
          <ul className="list-disc list-inside text-gray-200 text-lg space-y-3 mx-auto max-w-2xl">
            <li>Exploring new web technologies and building side projects</li>
            <li>Reading tech blogs and books on software engineering</li>
            <li>Singing Indian classical music</li>
            <li>Drawing</li>
            <li>Listening to music and watching movies</li>
          </ul>
        </motion.div>
        </motion.div>
    </section>
    
  );
}
