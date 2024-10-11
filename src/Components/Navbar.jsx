import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import menuIcon from "../images/menuIcon.png";
import "../animation.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [bgColor, setBgColor] = useState(
    localStorage.getItem("navbarColor") || "transparent",
  );
  const menuRef = useRef(null);

  // Effect to change navbar background color based on the current route
  useEffect(() => {
    // Check the current pathname to determine navbar color
    if (
      location.pathname === "/about" ||
      location.pathname === "/features" ||
      location.pathname === "/team"
    ) {
      setBgColor("#212D2D");
      localStorage.setItem("navbarColor", "#212D2D"); // Persist color in localStorage
    } else {
      setBgColor("transparent");
      localStorage.setItem("navbarColor", "transparent"); // Persist color in localStorage
    }
  }, [location]);

  // Effect to handle clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Attach event listener for mouse down events
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  //   console.log("ismenuopen:", isMenuOpen); // Debugging output

  return (
    <header
      className={`sticky top-0 flex flex-row-reverse items-center justify-between px-4 py-8 md:flex-row bg-[${bgColor}] relative z-10 font-semibold`}
    >
      <div className="flex items-center gap-8 px-8">
        <div className="-top-3 h-[34px] max-w-[150px]">
          <img src={logo} alt="Company Logo" />
        </div>
      </div>
      {/* Menu icon for mobile view, toggles menu open/close state */}
      <div className="animated-menu absolute left-10 top-8 block cursor-pointer md:hidden">
        <img
          className="h-[24px] w-[24px]"
          src={menuIcon}
          alt="menu icon"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        />
      </div>
      {/* Navigation links */}
      <nav>
        <ul
          className={`${
            isMenuOpen ? "menu-slide-in left-[0]" : "hidden"
          } menu-animation absolute -left-44 top-8 flex flex-col gap-4 rounded-sm bg-[#393939] px-10 py-5 text-sm md:static md:flex md:flex-row md:gap-8 md:rounded-none md:bg-transparent md:px-0 md:py-0 lg:gap-10 lg:text-base`}
          ref={menuRef}
        >
          {/* Close icon for mobile view, toggles menu open/close state */}
          <div className="absolute right-2 top-0 block cursor-pointer rounded-full p-2 text-2xl shadow-2xl duration-200 hover:rotate-180 md:hidden">
            <span
              className="text-white"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              &times;
            </span>
          </div>

          {/* Navigation Links */}
          <li className="flex-grow text-left">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 underline"
                  : bgColor === "#212D2D"
                    ? "text-white"
                    : "text-teal-600"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="flex-grow text-left">
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-green-600 underline"
                  : bgColor === "#212D2D"
                    ? "text-white"
                    : "text-teal-600";
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="flex-grow text-left">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 underline"
                  : bgColor === "#212D2D"
                    ? "text-white"
                    : "text-teal-600"
              }
              to="/features"
            >
              Features
            </NavLink>
          </li>
          <li className="flex-grow text-left">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 underline"
                  : bgColor === "#212D2D"
                    ? "text-white"
                    : "text-teal-600"
              }
              to="/testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li className="flex-grow text-left">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 underline"
                  : bgColor === "#212D2D"
                    ? "text-white"
                    : "text-teal-600"
              }
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li className="flex-grow text-left">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 underline"
                  : bgColor === "#212D2D"
                    ? "text-white"
                    : "text-teal-600"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
