"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  CarFront,
  CalendarDays,
  Package,
  Pause,
  Play,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

type BusinessLineTemplateProps = {
  island: string;
  title: string;
  shortDescription: string;
  color: string;
  softColor: string;
  heroImages: string[];

  // Compatible con las páginas existentes; ya no se muestra.
  islandImage?: string;

  introLabel: string;
  introTitle: string;
  introDescription: string;
  services: Service[];
  valueTitle: string;
  valueDescription: string;
  valuePoints: string[];
  ctaTitle: string;
};

const divisionIdentity: Record<
  string,
  { icon: LucideIcon; color: string }
> = {
  "la palma": {
    icon: HeartPulse,
    color: "#357A2A",
  },
  "el hierro": {
    icon: ShieldCheck,
    color: "#155BB5",
  },
  lanzarote: {
    icon: GraduationCap,
    color: "#C9510D",
  },
  fuerteventura: {
    icon: CarFront,
    color: "#72288B",
  },
  "la gomera": {
    icon: CalendarDays,
    color: "#087C7E",
  },
  "gran canaria": {
    icon: Package,
    color: "#926A0B",
  },
};

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A39]";

const primaryButton =
  `inline-flex min-h-12 items-center justify-center gap-3 rounded-md ` +
  `bg-[#0B2440] px-5 py-3 text-[13px] font-medium text-white ` +
  `transition-colors hover:bg-[#194466] ${focusStyle}`;

const galleryButton =
  `inline-flex h-11 w-11 items-center justify-center rounded-md ` +
  `text-[#657584] transition-colors hover:bg-[#F5F6F4] ` +
  `hover:text-[#0B2440] ${focusStyle}`;

export default function BusinessLineTemplate({
  island,
  title,
  shortDescription,
  color,
  softColor,
  heroImages,
  introLabel,
  introTitle,
  introDescription,
  services,
  valueTitle,
  valueDescription,
  valuePoints,
  ctaTitle,
}: BusinessLineTemplateProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);

  const division = divisionIdentity[island.trim().toLowerCase()] ?? {
    icon: Package,
    color,
  };

  const DivisionIcon = division.icon;

  const images = heroImages.filter((image) => image.trim().length > 0);
  const imageCount = images.length;
  const activeImage = imageCount > 0 ? currentImage % imageCount : 0;

  useEffect(() => {
    if (paused || imageCount < 2) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const interval = window.setInterval(() => {
      if (document.hidden || reducedMotion.matches) return;

      setCurrentImage((previous) => (previous + 1) % imageCount);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused, imageCount]);

  const selectImage = (index: number) => {
    if (imageCount === 0) return;

    setCurrentImage((index + imageCount) % imageCount);
    setPaused(true);
  };

  return (
    <div className="bg-white text-[#0B2440]">
      {/* PORTADA */}
      <section className="px-5 pb-12 pt-4 sm:px-8 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/"
            className={`mb-7 inline-flex min-h-11 items-center gap-2 rounded-sm text-xs text-[#657584] transition-colors hover:text-[#0B2440] ${focusStyle}`}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Grupo Canarias
          </Link>

          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
            {/* Texto e identidad */}
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    color: division.color,
                    backgroundColor: `${division.color}10`,
                  }}
                >
                  <DivisionIcon
                    size={23}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>

                <span className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#657584]">
                  {island}
                </span>
              </div>

              <h1 className="text-balance break-words text-[clamp(2rem,3.8vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.035em]">
                {title}
              </h1>

              <span
                aria-hidden="true"
                className="mt-6 block h-px w-12"
                style={{ backgroundColor: color }}
              />

              <p className="mt-6 max-w-[500px] text-[15px] leading-8 text-[#657584]">
                {shortDescription}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/contacto" className={primaryButton}>
                  Solicitar propuesta
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>

                <a
                  href="#servicios"
                  className={`inline-flex min-h-12 items-center rounded-sm text-[13px] text-[#657584] transition-colors hover:text-[#0B2440] ${focusStyle}`}
                >
                  Ver servicios
                </a>
              </div>
            </div>

            {/* Galería */}
            <div
              role="region"
              aria-roledescription="carrusel"
              aria-label={`Galería de ${title}`}
              onFocusCapture={(event) => {
                const target = event.target as HTMLElement;

                if (!target.closest("[data-gallery-playback]")) {
                  setPaused(true);
                }
              }}
              className="min-w-0"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
                style={{ backgroundColor: softColor }}
              >
                {imageCount > 0 ? (
                  images.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      aria-hidden="true"
                      className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
                        activeImage === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        unoptimized
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white/70"
                      style={{ color: division.color }}
                    >
                      <DivisionIcon
                        size={64}
                        strokeWidth={1.2}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                )}
              </div>

              {imageCount > 1 && (
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p
                    aria-live={paused ? "polite" : "off"}
                    aria-atomic="true"
                    className="text-xs tabular-nums text-[#657584]"
                  >
                    <span className="sr-only">
                      Fotografía {activeImage + 1} de {imageCount}
                    </span>

                    <span aria-hidden="true">
                      {String(activeImage + 1).padStart(2, "0")}
                      <span className="mx-2 text-[#B0B8BE]">/</span>
                      {String(imageCount).padStart(2, "0")}
                    </span>
                  </p>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      data-gallery-playback
                      aria-label={
                        paused
                          ? "Reanudar reproducción automática"
                          : "Pausar reproducción automática"
                      }
                      onClick={() => setPaused((previous) => !previous)}
                      className={`${galleryButton} motion-reduce:hidden`}
                    >
                      {paused ? (
                        <Play size={14} aria-hidden="true" />
                      ) : (
                        <Pause size={14} aria-hidden="true" />
                      )}
                    </button>

                    <button
                      type="button"
                      aria-label="Fotografía anterior"
                      onClick={() => selectImage(activeImage - 1)}
                      className={galleryButton}
                    >
                      <ArrowLeft size={17} aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      aria-label="Siguiente fotografía"
                      onClick={() => selectImage(activeImage + 1)}
                      className={galleryButton}
                    >
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-6 border-t border-[#0B2440]/10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#657584]">
              {introLabel}
            </p>

            <h2 className="mt-4 max-w-[510px] text-balance text-[26px] font-medium leading-[1.3] tracking-[-0.025em] sm:text-[30px]">
              {introTitle}
            </h2>
          </div>

          <p className="min-w-0 text-[15px] leading-8 text-[#657584]">
            {introDescription}
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="scroll-mt-28 px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 text-[28px] font-medium tracking-[-0.025em] sm:text-[32px]">
            Qué ofrecemos
          </h2>

          <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
            {services.map(
              ({ title: serviceTitle, description, icon: Icon, items }) => (
                <article
                  key={serviceTitle}
                  className="min-w-0 border-t border-[#0B2440]/10 pt-6"
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                      style={{ color }}
                    />

                    <h3 className="text-lg font-medium leading-6 tracking-[-0.015em]">
                      {serviceTitle}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#657584]">
                    {description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-6 text-[#405363]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: color }}
                        />

                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* VALOR AGREGADO */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-8 border-t border-[#0B2440]/10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#657584]">
              Valor agregado
            </p>

            <h2 className="mt-4 max-w-[520px] text-balance text-[26px] font-medium leading-[1.3] tracking-[-0.025em] sm:text-[30px]">
              {valueTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#657584]">
              {valueDescription}
            </p>
          </div>

          <ul className="min-w-0 divide-y divide-[#0B2440]/10">
            {valuePoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 py-4 first:pt-0"
              >
                <Check
                  size={17}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="mt-1 shrink-0"
                  style={{ color }}
                />

                <span className="text-[15px] leading-7">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="border-t border-[#0B2440]/[0.07] bg-[#F8F8F6] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="min-w-0">
            <h2 className="max-w-[720px] text-balance text-[25px] font-medium leading-[1.3] tracking-[-0.025em] sm:text-[28px]">
              {ctaTitle}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#657584]">
              Cuéntanos qué necesitas y desarrollamos una propuesta.
            </p>
          </div>

          <Link
            href="/contacto"
            className={`${primaryButton} shrink-0 self-start`}
          >
            Hablemos de tu proyecto
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}