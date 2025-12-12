import { envSchema, NewsletterSchema } from "@/schemas";
import React from "react";
import z from "zod";
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface LogoProps {
  src: string;
  alt: string;
}

export type NewsletterFormData = z.infer<typeof NewsletterSchema>;

export type EnvType = z.infer<typeof envSchema>;

const rawEnv = import.meta.env;
//parsear el env
export const env = envSchema.safeParse(rawEnv);
