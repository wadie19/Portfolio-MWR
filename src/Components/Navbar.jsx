import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;

      const elementPosition =
        targetElement.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4">

      {/* Desktop navigation */}
      <div className="mx-auto hidden max-w-4xl items-center justify-between rounded-2xl border border-stone-50/30 bg-black/30 px-6 py-3 backdrop-blur-lg lg:flex">

        <a
          href="#"
          onClick={handleLogoClick}
          aria-label="Back to top"
        >
          <img
            src={logo}
            alt="Mohamed Wadie Rezgui logo"
            width={130}
          />
        </a>

        <ul className="flex items-center gap-6">
          {NAVIGATION_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) =>
                  handleLinkClick(e, item.href)
                }
                className="text-sm transition hover:text-yellow-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation */}
      <div className="mx-auto rounded-2xl border border-stone-50/20 bg-black/30 backdrop-blur-lg lg:hidden">

        <div className="flex items-center justify-between px-3 py-2">

          <a
            href="#"
            onClick={handleLogoClick}
            aria-label="Back to top"
          >
            <img
              src={logo}
              alt="Mohamed Wadie Rezgui logo"
              width={90}
            />
          </a>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            className="rounded-lg p-2 transition hover:bg-white/10"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-1 border-t border-stone-50/20 px-4 py-4">
            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) =>
                    handleLinkClick(e, item.href)
                  }
                  className="block rounded-lg px-3 py-2 text-lg transition hover:bg-white/10 hover:text-yellow-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;