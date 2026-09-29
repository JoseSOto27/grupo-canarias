import type { Metadata } from "next";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "./globals.css";

const title = "Grupo Canarias";

const description =
  "Empresa integradora de proyectos para el sector gubernamental y público.";

export const metadata: Metadata = {
  metadataBase: new URL("https://grupo-canarias.vercel.app"),

  title: {
    default: title,
    template: `%s | ${title}`,
  },

  description,

  icons: {
    icon: [
      {
        url: "/images/logo-canarias.png",
        type: "image/png",
      },
    ],
    apple: "/images/logo-canarias.png",
  },

  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/logo-canarias.png",
        width: 1280,
        height: 1280,
        alt: "Logo azul de Grupo Canarias",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo-canarias.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}