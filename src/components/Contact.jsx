import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send message. Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00D084]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#00A8FF]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#00D084]">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#00D084] to-[#00A8FF] bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            Have a project idea, business opportunity or collaboration in
            mind? Send me a message and let's discuss it.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">

          {/* LEFT INFO */}
          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-white/10 bg-[#111820]/70 p-7 backdrop-blur-xl">
              <p className="text-lg font-bold">
                Let's talk
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I'm open to freelance projects, remote opportunities,
                collaborations and interesting digital ideas.
              </p>

              {/* Email */}
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-[#00D084]/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D084]/10 text-xl">
                  ✉
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Email
                  </p>

                  <a
                    href="mailto:your@email.com"
                    className="mt-1 block truncate text-sm font-medium text-slate-200 hover:text-[#00D084]"
                  >
                    your@email.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-[#00A8FF]/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A8FF]/10 text-xl">
                  ◉
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-[#D4AF37]/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-sm font-black">
                  GH
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/Rafi741088"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-medium text-slate-200 hover:text-[#D4AF37]"
                  >
                    @Rafi741088
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-[#111820]/70 p-6 shadow-2xl backdrop-blur-xl md:p-8"
            >

              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#0A0F14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084]/60 focus:ring-2 focus:ring-[#00D084]/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0A0F14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00A8FF]/60 focus:ring-2 focus:ring-[#00A8FF]/10"
                  />
                </div>

                {/* Subject */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-white/10 bg-[#0A0F14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084]/60 focus:ring-2 focus:ring-[#00D084]/10"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0A0F14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084]/60 focus:ring-2 focus:ring-[#00D084]/10"
                  />
                </div>
              </div>

              {/* Status */}
              {status.message && (
                <div
                  className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]"
                      : status.type === "error"
                      ? "border-red-500/30 bg-red-500/10 text-red-400"
                      : "border-[#00A8FF]/30 bg-[#00A8FF]/10 text-[#00A8FF]"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-6 py-4 text-sm font-black text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(0,208,132,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.type === "loading"
                  ? "Sending..."
                  : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;