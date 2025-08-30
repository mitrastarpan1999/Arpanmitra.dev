import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333] text-gray-100 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[250px] h-[250px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      {/* Glass Card */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 flex flex-col items-center"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>
        {submitted ? (
          <motion.p
            className="text-lg text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you for reaching out! I’ll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            ref={formRef}
            className="w-full flex flex-col gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            onSubmit={async e => {
              e.preventDefault();
              setLoading(true);
              setError(null);
              const formData = new FormData(formRef.current);
              try {
                const res = await fetch("https://formspree.io/f/mpwjqoga", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: formData,
                });
                const data = await res.json();
                if (data.ok) {
                  setSubmitted(true);
                } else {
                  setError("Something went wrong. Please try again later.");
                }
              } catch {
                setError("Something went wrong. Please try again later.");
              }
              setLoading(false);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-xl px-6 py-2 font-semibold shadow-lg hover:scale-105 transition border border-white/10 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
