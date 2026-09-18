import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Rafi741088/repos?sort=updated&per_page=12"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjects(
          data.filter((repo) => !repo.fork)
        );
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-[#00D084]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#00D084]">
            My Work
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00D084] to-[#00A8FF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            A collection of projects built while learning, experimenting and
            solving real-world development problems.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#00D084]" />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="text-red-400">
              Unable to load GitHub projects right now.
            </p>

            <a
              href="https://github.com/Rafi741088"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-[#00D084] hover:underline"
            >
              View GitHub Profile →
            </a>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && projects.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-[#111820]/60 p-10 text-center">
            <p className="text-slate-400">
              No public projects found yet.
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && !error && projects.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111820]/70 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#00D084]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00D084]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[3px] text-slate-600">
                    PROJECT
                  </span>

                  <span className="text-xs text-slate-600">
                    #{String(project.id).slice(-3)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-6 line-clamp-1 text-xl font-bold transition duration-300 group-hover:text-[#00D084]">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {project.description ||
                    "A web development project built with modern technologies."}
                </p>

                {/* Language */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="rounded-full border border-[#00A8FF]/20 bg-[#00A8FF]/5 px-3 py-1.5 text-xs font-semibold text-[#00A8FF]">
                    {project.language || "Web"}
                  </span>

                  {project.stargazers_count > 0 && (
                    <span className="text-xs text-slate-500">
                      ★ {project.stargazers_count}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-bold text-white transition hover:border-[#00D084]/40 hover:bg-[#00D084]/10 hover:text-[#00D084]"
                  >
                    GitHub
                  </a>

                  {project.homepage ? (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-4 py-3 text-center text-xs font-bold text-black transition hover:scale-[1.02]"
                    >
                      Live Demo →
                    </a>
                  ) : (
                    <span className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-center text-xs font-semibold text-slate-600">
                      No Demo
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Rafi741088"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-[#00D084]/40 hover:bg-[#00D084]/10 hover:text-[#00D084]"
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