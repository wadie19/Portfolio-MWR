import emailJs from "@emailjs/browser";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the error when the user starts correcting the field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      await emailJs.send(
        "service_jncfm9b",
        "template_yjkyexs",
        formData,
        "lbyQAVUp2swp7a72j"
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      toast.error(
        "Unable to send the message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className="mx-auto max-w-4xl px-4 py-20"
      id="contact"
    >
      <Toaster position="bottom-center" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-4xl font-semibold tracking-tight">
          Let's Talk
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-stone-300">
          Have a question, opportunity, or project in mind?
          Feel free to send me a message.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="rounded-3xl border border-stone-50/30 bg-white/10 p-6 lg:p-8"
        noValidate
      >
        {/* Name + Email */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Your name"
              onChange={handleChange}
              autoComplete="name"
              className="w-full rounded-xl border border-stone-50/30 bg-transparent px-4 py-3 outline-none transition focus:border-stone-300"
            />

            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-rose-400"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="your@email.com"
              onChange={handleChange}
              autoComplete="email"
              className="w-full rounded-xl border border-stone-50/30 bg-transparent px-4 py-3 outline-none transition focus:border-stone-300"
            />

            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-rose-400"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Tell me about your project or opportunity..."
            onChange={handleChange}
            rows={6}
            className="w-full resize-none rounded-xl border border-stone-50/30 bg-transparent px-4 py-3 outline-none transition focus:border-stone-300"
          />

          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-rose-400"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSending}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-300 ${
            isSending
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}

          {!isSending && <FiSend />}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;