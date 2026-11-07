import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/about", label: "About" },
  { to: "/certifications", label: "Certifications" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        Kanishka
      </NavLink>
      
        
      <ul className={open ? "open" : ""}>
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `link${isActive ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
               <div className="nav-actions">
           <ThemeToggle />
           <button
             className="menu-toggle"
             aria-label="Toggle menu"
             aria-expanded={open}
             onClick={() => setOpen((o) => !o)}
           >
             {open ? "Close" : "Menu"}
           </button>
         </div>
       
    </nav>
  );
}
