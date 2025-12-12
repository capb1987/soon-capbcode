import z from "zod";

export const NewsletterSchema = z.object({
  email: z.email({
    message: "Por favor, ingresa un correo electrónico válido.",
  }),
});

export const envSchema = z.object({
  VITE_YOUR_SERVICE_ID: z.string(),
  VITE_YOUR_PUBLIC_KEY: z.string(),
  VITE_YOUR_TEMPLATE_ID: z.string(),
});
