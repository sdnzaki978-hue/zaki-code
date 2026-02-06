import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/sdnz.aki978/", // غير your_username لاسمك
      label: "Instagram" 
    },
    { 
      icon: Mail, 
      href: "mailto:sdnzaki978@gmail.com", 
      label: "Email" 
    },
  ];

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          Copyright ©2025-2026 ZakariaCode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;