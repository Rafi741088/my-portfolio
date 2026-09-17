import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully! ✓");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <span className="text-xs font-bold tracking-[4px] text-[#00D084]">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Let's Build Something{" "}
            <span className="contact-gradient-text">
              Amazing
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Have a project, idea or opportunity?
            Send me a message and let's create something
            amazing together.
          </p>

        </div>


        {/* Contact Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <div className="space-y-4">

            {/* Email */}
            <div className="contact-info-card flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111820]/70 p-5 backdrop-blur-xl">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:your@email.com"
                  className="mt-1 block text-sm text-slate-200 transition hover:text-[#00D084]"
                >
                  your@email.com
                </a>
              </div>

            </div>


            {/* Location */}
            <div className="contact-info-card flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111820]/70 p-5 backdrop-blur-xl">

              <div className="contact-icon">
                ◉
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm text-slate-200">
                  Bangladesh
                </p>
              </div>

            </div>


            {/* GitHub */}
            <div className="contact-info-card flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111820]/70 p-5 backdrop-blur-xl">

              <div className="contact-icon text-xs">
                GH
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Rafi741088"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-sm text-slate-200 transition hover:text-[#00D084]"
                >
                  github.com/Rafi741088
                </a>
              </div>

            </div>

          </div>


          {/* Right - Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form rounded-3xl border border-white/10 bg-[#111820]/80 p-6 backdrop-blur-2xl md:p-8"
          >

            {/* Name + Email */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="contact-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084] focus:ring-2 focus:ring-[#00D084]/10"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="contact-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084] focus:ring-2 focus:ring-[#00D084]/10"
                />
              </div>

            </div>


            {/* Subject */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="contact-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084] focus:ring-2 focus:ring-[#00D084]/10"
              />

            </div>


            {/* Message */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="contact-input w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D084] focus:ring-2 focus:ring-[#00D084]/10"
              ></textarea>

            </div>


            {/* Status */}
            {status && (
              <div
                className={`mt-5 rounded-xl border p-3 text-sm ${
                  status.includes("successfully")
                    ? "border-[#00D084]/20 bg-[#00D084]/10 text-[#00D084]"
                    : status === "Sending..."
                    ? "border-[#00A8FF]/20 bg-[#00A8FF]/10 text-[#00A8FF]"
                    : "border-red-500/20 bg-red-500/10 text-red-400"
                }`}
              >
                {status}
              </div>
            )}


            {/* Submit */}
            <button
              type="submit"
              className="contact-submit mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-5 py-4 font-bold text-[#06100C] transition"
            >
              Send Message
              <span className="text-xl">→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;