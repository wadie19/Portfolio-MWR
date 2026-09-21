import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-stone-50/20 px-4 py-12">

      {/* Logo */}
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src={logo}
          alt="Mohamed Wadie Rezgui logo"
          width={180}
          className="mb-8"
        />
      </div>

      {/* Social links */}
      <div className="flex items-center justify-center gap-6">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={link.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:opacity-80"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        © {currentYear} Mohamed Wadie Rezgui. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;