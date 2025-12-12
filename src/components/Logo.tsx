import React, { useState } from "react";
import { LogoProps } from "@/types";
import logo from "../img/logo.png";
import logoWebp from "../img/logo.webp";

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  const [imgError, setImgError] = useState(false);
  const [imgUrl, setImgUrl] = useState(logoWebp);

  if (imgError) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-full border border-slate-800 shadow-xl backdrop-blur-sm mb-8 animate-fade-in group hover:border-gray-500/50 hover:bg-slate-950 transition-colors duration-300">
        <img
          src={logoWebp ? logoWebp : logo}
          alt={alt}
          className="w-56 object-cover mx-auto"
        />
      </div>
    );
  }

  return (
    <div className="mb-8 animate-fade-in relative group w-full flex justify-center">
      <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
      <img
        src={src}
        alt={alt}
        onError={() => setImgError(true)}
        className="relative w-auto h-32 md:h-52 max-w-full object-contain drop-shadow-2xl transform transition duration-500 hover:scale-105"
      />
    </div>
  );
};

export default Logo;
