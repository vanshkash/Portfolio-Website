import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  // 🔥 Auto-hide success/error message after 3.5 sec
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ loading: false, success: null, message: "" });
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    emailjs
      .sendForm("service_iqlibk5", "template_7edbg08", formRef.current, {
        publicKey: "0x53Bck-i3pU7itVn",
      })
      .then(
        () => {
          setStatus({ loading: false, success: true, message: "Message sent successfully!" });
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus({ loading: false, success: false, message: "Failed to send. Try again." });
        }
      );
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
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                className="mt-2 w-full rounded-xl border p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 border-gray-300"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 border-gray-300"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 border-gray-300 resize-none"
              placeholder="Write your message here..."
              required
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status.loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
            >
              {status.loading ? <Loader2 className="animate-spin" size={18} /> : <Mail size={18} />}
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>

            <span className="text-sm text-gray-500">
              Or email me at{" "}
              <a href="mailto:vanshkas87@gmail.com" className="underline">
                vanshkas87@gmail.com
              </a>
            </span>
          </div>

          {status.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${status.success ? "text-green-600" : "text-red-600"}`}
            >
              {status.message}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
