import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const submitRef = useRef(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please enter a message";
    if (form.honey) e.honey = "Bot detected";
    return e;
  }

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus({ loading: true, success: null, message: "" });
    const ENDPOINT = "";

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
        });
        if (!res.ok) throw new Error("Server error");
        setStatus({ loading: false, success: true, message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "", honey: "" });
      } else {
        const mailto = `mailto:your-email@example.com?subject=${encodeURIComponent(
          "Portfolio Inquiry from " + form.name
        )}&body=${encodeURIComponent(form.message + "\n\n" + form.email)}`;
        window.location.href = mailto;
        setStatus({ loading: false, success: true, message: "Opening email client..." });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, message: "Something went wrong. Try again." });
      console.error(err);
    }
  };

  return (
    <section id="Contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project idea or just want to say hello? Fill out the form and I’ll get back to you soon.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-xl border p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.name ? "border-red-400" : "border-gray-300"
                  }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-xl border p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.email ? "border-red-400" : "border-gray-300"
                  }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`mt-2 w-full rounded-xl border p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none ${errors.message ? "border-red-400" : "border-gray-300"
                }`}
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>

          <input type="text" name="honey" value={form.honey} onChange={handleChange} className="hidden" tabIndex={-1} />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              ref={submitRef}
              disabled={status.loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
            >
              {status.loading ? <Loader2 className="animate-spin" size={18} /> : <Mail size={18} />}
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>

            <span className="text-sm text-gray-500">
              Or email me at <a href="mailto:vanshkas87@gmail.com" className="underline">
                vanshkas87@gmail.com
              </a>
            </span>
          </div>

          {status.message && (
            <p className={`text-sm ${status.success ? "text-green-600" : "text-red-600"}`}>{status.message}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}