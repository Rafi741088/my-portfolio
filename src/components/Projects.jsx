import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Rafi741088/repos?sort=updated&per_page=12"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("GitHub API Error");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00D084]/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#00A8FF]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[4px] text-[#00D084]">
            MY WORK
          </span>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Explore some of my latest development projects and
            experiments built with modern web technologies.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#00D084]" />

            <p className="mt-5 text-sm text-slate-500">
              Loading projects from GitHub...
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && projects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111820]/75 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#00D084]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                {/* Top Gradient */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] transition-all duration-700 group-hover:w-full" />

                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[3px] text-[#00D084]">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500">
                    GitHub
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00D084]/20 bg-gradient-to-br from-[#00D084]/15 to-[#00A8FF]/10 text-2xl transition duration-500 group-hover:scale-110">
                  💻
                </div>

                {/* Title */}
                <h3 className="mt-6 truncate text-xl font-bold transition duration-300 group-hover:text-[#00D084]">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {project.description ||
                    "A modern web development project built using modern technologies."}
                </p>

                {/* Technology */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00D084] shadow-[0_0_10px_rgba(0,208,132,0.5)]" />

                  <span className="text-xs font-medium text-slate-400">
                    {project.language || "Web Development"}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-[#00D084]/40 hover:bg-[#00D084]/10 hover:text-[#00D084]"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  {project.homepage ? (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-4 py-3 text-sm font-bold text-[#06100C] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,208,132,0.2)]"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  ) : (
                    <span className="flex flex-1 cursor-not-allowed items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-600">
                      No Demo
                    </span>
                  )}

                </div>
              </article>
            ))}

          </div>
        )}

        {/* No Projects */}
        {!loading && projects.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-[#111820]/70 p-12 text-center">
            <div className="text-4xl">📂</div>

            <h3 className="mt-4 text-xl font-bold">
              No Projects Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Add some repositories to your GitHub profile.
            </p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Rafi741088"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-[#00D084]/30 bg-[#00D084]/10 px-7 py-3.5 text-sm font-bold text-[#00D084] transition duration-300 hover:-translate-y-1 hover:bg-[#00D084]/20 hover:shadow-[0_10px_30px_rgba(0,208,132,0.12)]"
          >
            Explore All Projects
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;