import React from "react";
import { Mail, Linkedin, Twitter, Github, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      className="mt-16 flex flex-col items-center gap-6 animate-slide-up"
      style={{ animationDelay: "400ms" }}
    >
      <div className="flex gap-6">
        {[
          {
            Icon: Linkedin,
            href: "https://www.linkedin.com/in/carlos-puellobolano/",
          },
          { Icon: Twitter, href: "https://x.com/krlospuello1987" },
          { Icon: Github, href: "https://github.com/capb1987" },
          { Icon: Facebook, href: "https://www.facebook.com/capbcode" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-slate-500 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1"
            target="_blank"
          >
            <item.Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      <div className="text-xs text-slate-700 mt-8">
        &copy; {new Date().getFullYear()} CAPB CODE. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
