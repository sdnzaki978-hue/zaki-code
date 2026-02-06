import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-20 h-20 relative -ml-4">
            <img 
              src="/zaki10.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <span className="text-foreground font-semibold mr-4 hidden md:block">
            Zakaria
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "nav-link-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;