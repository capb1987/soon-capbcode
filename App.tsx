import { Hammer, Monitor, Cpu } from "lucide-react";
import BackgroundGrid from "./src/components/BackgroundGrid";
import Logo from "./src/components/Logo";
import NewsletterForm from "./src/components/NewsletterForm";
import Footer from "./src/components/Footer";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <BackgroundGrid />

      <main className="z-10 flex flex-col items-center max-w-3xl w-full">
        {/* Status Badge */}
        <div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium tracking-wide animate-slide-up">
          <Hammer className="w-4 h-4 animate-pulse" />
          <span>EN MANTENIMIENTO</span>
        </div>

        {/* Logo Section */}
        <Logo src="logo_capb.png" alt="CAPB CODE Logo" />

        {/* Main Text */}
        <h1
          className="text-gray-300 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up z-50"
          style={{ animationDelay: "200ms" }}
        >
          <span className="">
            ¡Estamos trabajando duro para una nueva experiencia!
          </span>
        </h1>

        {/* Slogan */}
        <p
          className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "150ms" }}
        >
          Creando soluciones digitales, un código a la vez.
          <br className="hidden md:block" />
          <span className="text-slate-500 text-sm mt-2 block">
            Estamos preparando algo increíble para ti.
          </span>
        </p>

        {/* Decorative Features Icons */}
        <div
          className="flex gap-8 mt-10 opacity-50 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex flex-col items-center gap-2">
            <Monitor className="w-6 h-6 text-slate-400" />
            <span className="text-[10px] uppercase tracking-widest text-slate-400">
              Web
            </span>
          </div>
          <div className="w-px h-10 bg-slate-800"></div>
          <div className="flex flex-col items-center gap-2">
            <Cpu className="w-6 h-6 text-slate-400" />
            <span className="text-[10px] uppercase tracking-widest text-slate-400">
              Tech
            </span>
          </div>
        </div>

        {/* Newsletter / Contact Form */}
        <NewsletterForm />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
