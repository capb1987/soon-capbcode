import React, { useRef, useState } from "react";
import { Send, CheckCircle2, Loader2, Mail, XCircle } from "lucide-react"; // Agregamos XCircle para el error
import { useForm } from "react-hook-form";
import { NewsletterSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterFormData } from "@/types";
import emailjs from "@emailjs/browser";

import { EnvType, env } from "../types";

type FormStatus = "idle" | "loading" | "success" | "error"; // Incluimos 'error'

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const { VITE_YOUR_SERVICE_ID, VITE_YOUR_PUBLIC_KEY, VITE_YOUR_TEMPLATE_ID } =
    env.data;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus("loading");

    try {
      // Los parámetros: serviceID, templateID, templateParams, publicKey
      await emailjs.send(
        VITE_YOUR_SERVICE_ID,
        VITE_YOUR_TEMPLATE_ID,
        {
          // 'email' debe coincidir con la variable que usas en tu plantilla de EmailJS
          email: data.email,
          // Puedes agregar más variables si tu plantilla lo requiere, e.g., 'subject', 'name'
        },
        VITE_YOUR_PUBLIC_KEY
      );

      // 3. Manejo de éxito
      setStatus("success");
      // Limpia el formulario y el estado local si lo estás usando
      reset();
      setEmail("");
      // console.log("SUCCESS!", data);
    } catch (error) {
      // 3. Manejo de error
      setStatus("error");
      console.error("FAILED...", error);
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400 animate-fade-in">
        <CheckCircle2 className="w-5 h-5" />
        <span>¡Gracias! Te avisaremos cuando estemos listos.</span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 animate-fade-in">
        <XCircle className="w-5 h-5" />
        <span>¡Ocurrió un error! Por favor, inténtalo de nuevo.</span>
      </div>
    );
  }

  // --- Renderizado del formulario (status === 'idle' || 'loading') ---

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // Puedes asignar formRef aquí si usaras el método basado en la referencia del formulario (emailjs.sendForm)
      // ref={formRef}
      className="mt-8 w-full max-w-md flex flex-col gap-3 animate-slide-up"
      style={{ animationDelay: "200ms" }}
    >
      <div className="relative grow">
        <input
          {...register("email")}
          type="email"
          name="email" // Asegúrate de tener el atributo 'name' si usas emailjs.sendForm
          placeholder="tu@email.com"
          disabled={status === "loading"}
          className={`w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all backdrop-blur-sm`}
        />

        {errors.email && (
          <p
            className={`w-full my-3 text-sm flex gap-2 justify-center items-center text-red-500 {animate-bounce}`}
          >
            <Mail className="w-5 h-5" /> {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>Notificarme</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default NewsletterForm;
