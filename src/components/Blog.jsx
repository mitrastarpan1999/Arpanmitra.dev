import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "first-full-stack-app",
    title: "How I Built My First Full-Stack App",
    content: `A step-by-step journey through building Bookverse, from database design to deploying on Render.\n\nBookverse is a full-stack notes app built with Node.js, Express, EJS and PostgreSQL (Neon). I designed a books schema, implemented RESTful routes for CRUD and favorites, and integrated the OpenLibrary API to fetch covers. For production I configured SSL-enabled connections, environment variables (DATABASE_URL), and connection pooling, then deployed the app on Render. Building Bookverse taught me practical database design, server-side rendering, API integration, and continuous deployment—an ideal first full-stack project to showcase backend and deployment skills.`,
  },
  {
    slug: "responsive-web-design-tips",
    title: "Tips for Responsive Web Design",
    content: `My favorite techniques and tools for making websites look great on any device.\n\nResponsive design is about ensuring a site adapts seamlessly across screens. I rely on flexbox and CSS grid for layouts, combined with relative units like em, %, and rem for scalable sizing. Media queries let me fine-tune styles for different breakpoints, while tools like Tailwind CSS speed up responsive styling. I also test with browser dev tools to catch issues early. The key is simplicity: design mobile-first, then scale up. This approach keeps websites clean, accessible, and consistent—no matter the device.`,
  },
  {
    slug: "weather-app-openweather-api",
    title: "Weather App with OpenWeather API",
    content: `How I integrated real-time weather data into a user-friendly web app.\n\nThis project connects my Express server with the OpenWeather API to deliver real-time weather updates. The app uses the Geocoding API to convert city names into latitude and longitude, then fetches live weather data including temperature, humidity, wind speed, and conditions. I built it with Express, Axios, and EJS for dynamic rendering, and added error handling for invalid inputs. The result is a lightweight, responsive weather app that makes checking conditions simple and accurate.`,
  },
  {
    slug: "lessons-learned-team-leader",
    title: "Lessons Learned as a Team Leader",
    content: `Reflections on leadership, collaboration, and delivering successful projects in tech.\n\nLeading a team of nine taught me the value of clear communication, collaboration, and structured planning. I learned how to balance project deadlines with team growth by mentoring members in frontend development and Git workflows. Client coordination improved my problem-solving and adaptability, while working on solution architecture sharpened my technical perspective. The experience showed me that leadership is not just about guiding projects to completion, but also about empowering people to succeed together.`,
  },
];

export default function Blog() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-400">Blog post not found</h2>
        <Link to="/" className="text-blue-400 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <section className="min-h-[60vh] px-4 py-16 bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333] text-gray-100 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          {post.title}
        </h1>
        <pre className="whitespace-pre-wrap text-lg text-gray-200 mb-8">{post.content}</pre>
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 mt-4 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition text-lg border border-white/10 text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
