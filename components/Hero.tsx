"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
} from "lucide-react";

const slides = [
  {
    image: "/images/hero/salud.jpg",
    category: "Salud y equipo médico",
    island: "La Palma",
    description:
      "Equipamiento y servicios para fortalecer la atención médica.",
    href: "/lineas-de-negocio/salud",
  },
  {
    image: "/images/hero/seguridad.jpg",
    category: "Seguridad pública",
    island: "El Hierro",
    description:
      "Tecnología y equipamiento para proteger a la ciudadanía.",
    href: "/lineas-de-negocio/seguridad",
  },
  {
    image: "/images/hero/educacion.jpg",
    category: "Educación y tecnología",
    island: "Lanzarote",
    description:
      "Espacios educativos más conectados, seguros e innovadores.",
    href: "/lineas-de-negocio/educacion",
  },
  {
    image: "/images/hero/movilidad.jpg",
    category: "Vehículos y movilidad",
    island: "Fuerteventura",
    description:
      "Unidades y flotillas preparadas para cada operación.",
    href: "/lineas-de-negocio/movilidad",
  },
  {
    image: "/images/hero/eventos.jpg",
    category: "Producción de eventos",
    island: "La Gomera",
    description:
      "Planeación, producción y ejecución en un mismo equipo.",
    href: "/lineas-de-negocio/eventos",
  },
  {
    image: "/images/hero/proveeduria.jpg",
    category: "Proveeduría general",
    island: "Gran Canaria",
    description:
      "Suministros y servicios que mantienen tu operación en marcha.",
    href: "/lineas-de-negocio/proveeduria",
  },
];

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A39]";

const carouselButton =
  `inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md ` +
  `text-[#657584] transition-colors hover:bg-[#F5F6F4] ` +
  `hover:text-[#0B2440] ${focusStyle}`;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const currentSlide = slides[current];

  useEffect(() => {
    if (paused || hovered) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const interval = window.setInterval(() => {
      if (document.hidden || reducedMotion.matches) return;

      setCurrent((previous) => (previous + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused, hovered]);

  const selectSlide = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
    setPaused(true);
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div
          role="region"
          aria-roledescription="carrusel"
          aria-label="Soluciones de Grupo Canarias"
          onFocusCapture={(event) => {
            const target = event.target as HTMLElement;

            if (!target.closest("[data-carousel-playback]")) {
              setPaused(true);
            }
          }}
          className="grid lg:grid-cols-2"
        >
          {/* Presentación */}
          <div className="relative z-10 min-w-0 py-10 sm:py-12 lg:py-16 lg:pr-8">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#657584] sm:text-[11px]">
              Soluciones para el sector público
            </p>

            <h1
              id="hero-title"
              className="max-w-[580px] text-[clamp(2.15rem,4vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#0B2440]"
            >
              <span className="block text-balance">
                Integramos soluciones.
              </span>

              <span className="mt-2 block text-balance text-[#9A752E]">
                Entregamos resultados.
              </span>
            </h1>

            <p className="mt-6 max-w-[470px] text-[15px] leading-8 text-[#657584]">
              Conectamos equipamiento, tecnología y servicios para
              hacer realidad los proyectos de tu institución.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/contacto"
                className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#0B2440] px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#194466] ${focusStyle}`}
              >
                Hablemos de tu proyecto
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <a
                href="#lineas-de-negocio"
                className={`inline-flex min-h-12 items-center gap-2 rounded-sm text-[13px] text-[#657584] transition-colors hover:text-[#0B2440] ${focusStyle}`}
              >
                Ver soluciones
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Imágenes locales */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative min-h-[280px] min-w-0 sm:min-h-[360px] lg:min-h-[480px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden bg-[#F3F5F4]"
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.href}
                  className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    preload={index === 0}
                    sizes="(min-width: 1200px) 560px, (min-width: 1024px) calc(50vw - 40px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                    className="object-cover object-center"
                  />
                </div>
              ))}

              {/* Degradados para integrar las fotos */}
              <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white to-transparent lg:block" />

              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent lg:h-16" />

              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent lg:h-16" />

              <div className="absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-white to-transparent lg:block" />
            </div>
          </div>

          {/* División y controles */}
          <div className="flex flex-col gap-5 border-t border-[#0B2440]/10 py-5 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
            <div
              aria-live={paused ? "polite" : "off"}
              aria-atomic="true"
              className="min-w-0 flex-1"
            >
              <Link
                href={currentSlide.href}
                aria-label={`Explorar ${currentSlide.category}, ${currentSlide.island}`}
                className={`group inline-block max-w-full rounded-sm ${focusStyle}`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#657584]">
                  {currentSlide.island}
                </p>

                <div className="mt-1.5 flex items-start gap-3">
                  <h2 className="text-lg font-medium leading-6 tracking-[-0.02em] text-[#0B2440] decoration-[#0B2440]/30 underline-offset-4 group-hover:underline group-focus-visible:underline">
                    {currentSlide.category}
                  </h2>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#8A969F]"
                  />
                </div>

                <p className="mt-2 max-w-[520px] text-[13px] leading-6 text-[#657584] sm:min-h-12 lg:min-h-6">
                  {currentSlide.description}
                </p>
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-3 self-end sm:self-auto">
              <p className="mr-1 text-xs tabular-nums text-[#657584]">
                <span className="sr-only">
                  División {current + 1} de {slides.length}
                </span>

                <span aria-hidden="true">
                  {String(current + 1).padStart(2, "0")}
                  <span className="mx-2 text-[#B0B8BE]">/</span>
                  {String(slides.length).padStart(2, "0")}
                </span>
              </p>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  data-carousel-playback
                  aria-label={
                    paused
                      ? "Reanudar reproducción automática"
                      : "Pausar reproducción automática"
                  }
                  onClick={() => setPaused((previous) => !previous)}
                  className={`${carouselButton} motion-reduce:hidden`}
                >
                  {paused ? (
                    <Play size={14} aria-hidden="true" />
                  ) : (
                    <Pause size={14} aria-hidden="true" />
                  )}
                </button>

                <button
                  type="button"
                  aria-label="División anterior"
                  onClick={() => selectSlide(current - 1)}
                  className={carouselButton}
                >
                  <ArrowLeft size={17} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  aria-label="Siguiente división"
                  onClick={() => selectSlide(current + 1)}
                  className={carouselButton}
                >
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}