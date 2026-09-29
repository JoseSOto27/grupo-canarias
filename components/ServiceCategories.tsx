"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Car,
  CalendarDays,
  Package,
  Pause,
  Play,
} from "lucide-react";

const services = [
  {
    label: "Salud",
    icon: HeartPulse,
    href: "/lineas-de-negocio/salud",
  },
  {
    label: "Seguridad",
    icon: ShieldCheck,
    href: "/lineas-de-negocio/seguridad",
  },
  {
    label: "Educación",
    icon: GraduationCap,
    href: "/lineas-de-negocio/educacion",
  },
  {
    label: "Movilidad",
    icon: Car,
    href: "/lineas-de-negocio/movilidad",
  },
  {
    label: "Eventos",
    icon: CalendarDays,
    href: "/lineas-de-negocio/eventos",
  },
  {
    label: "Proveeduría",
    icon: Package,
    href: "/lineas-de-negocio/proveeduria",
  },
];

export default function ServiceCategories() {
  const [paused, setPaused] = useState(false);

  const playbackLabel = paused
    ? "Reanudar desplazamiento"
    : "Pausar desplazamiento";

  return (
    <nav
      aria-label="Soluciones por sector"
      className="border-y border-[#0B2440]/[0.07] bg-white"
    >
      <div className="mx-auto flex max-w-[1360px] items-center gap-2 px-4 sm:px-8 lg:px-10">
        {/* Franja de servicios */}
        <div className="relative min-w-0 flex-1">
          <div
            className="gc-window overflow-hidden"
            data-paused={paused}
          >
            <div className="gc-minimal-track flex w-max">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className={`flex w-[1080px] shrink-0 items-center lg:w-[1280px] ${
                    copy === 1 ? "gc-repeat" : ""
                  }`}
                >
                  {services.map(({ label, icon: Icon, href }) => (
                    <li
                      key={href}
                      className="flex min-w-0 flex-1 items-center"
                    >
                      <Link
                        href={href}
                        tabIndex={copy === 1 ? -1 : undefined}
                        className="flex min-h-[68px] flex-1 items-center justify-center gap-3 whitespace-nowrap px-5 text-[13px] font-medium text-[#657584] transition-colors hover:text-[#0B2440] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#C99A39]"
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />

                        {label}
                      </Link>

                      <span
                        aria-hidden="true"
                        className="h-3 w-px shrink-0 bg-[#0B2440]/10"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Extremos suaves */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent"
          />
        </div>

        {/* Pausa */}
        <button
          type="button"
          onClick={() => setPaused((previous) => !previous)}
          aria-label={playbackLabel}
          title={playbackLabel}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#657584] transition-colors hover:bg-[#F7F7F5] hover:text-[#0B2440] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A39] motion-reduce:hidden"
        >
          {paused ? (
            <Play size={14} aria-hidden="true" />
          ) : (
            <Pause size={14} aria-hidden="true" />
          )}
        </button>
      </div>

      <style jsx>{`
        .gc-minimal-track {
          animation: gc-minimal-scroll 38s linear infinite;
        }

        .gc-window[data-paused="true"] .gc-minimal-track {
          animation-play-state: paused;
        }

        @media (hover: hover) {
          .gc-window:hover .gc-minimal-track {
            animation-play-state: paused;
          }
        }

        /* Navegación con teclado */
        .gc-window:has(:focus-visible) {
          overflow-x: auto;
        }

        .gc-window:has(:focus-visible) .gc-minimal-track {
          animation: none;
          transform: none;
        }

        .gc-window:has(:focus-visible) .gc-repeat {
          display: none;
        }

        @keyframes gc-minimal-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gc-window {
            overflow-x: auto;
          }

          .gc-minimal-track {
            animation: none;
          }

          .gc-repeat {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}