/* Reusable project card */
export default function ProjectCard({ title, desc, img, demo, code }) {
  return (
    <article className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      {img && <img src={img} alt={title} className="w-full h-44 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{desc}</p>
        <div className="mt-4 flex gap-3">
          {demo && (
            <a
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {code && (
            <a
              className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-100"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
