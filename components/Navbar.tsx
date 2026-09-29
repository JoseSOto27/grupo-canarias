"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  CarFront,
  CalendarDays,
  Package,
  Menu,
  X,
} from "lucide-react";

const solutions = [
  {
    name: "Salud y equipo médico",
    island: "La Palma",
    href: "/lineas-de-negocio/salud",
    icon: HeartPulse,
    color: "#357A2A",
  },
  {
    name: "Seguridad pública",
    island: "El Hierro",
    href: "/lineas-de-negocio/seguridad",
    icon: ShieldCheck,
    color: "#155BB5",
  },
  {
    name: "Educación y tecnología",
    island: "Lanzarote",
    href: "/lineas-de-negocio/educacion",
    icon: GraduationCap,
    color: "#C9510D",
  },
  {
    name: "Vehículos y movilidad",
    island: "Fuerteventura",
    href: "/lineas-de-negocio/movilidad",
    icon: CarFront,
    color: "#72288B",
  },
  {
    name: "Producción de eventos",
    island: "La Gomera",
    href: "/lineas-de-negocio/eventos",
    icon: CalendarDays,
    color: "#087C7E",
  },
  {
    name: "Proveeduría general",
    island: "Gran Canaria",
    href: "/lineas-de-negocio/proveeduria",
    icon: Package,
    color: "#926A0B",
  },
];

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A39]";

const desktopLink =
  `inline-flex min-h-11 items-center gap-2 rounded-md text-[13px] ` +
  `font-medium text-[#0B2440]/75 transition-colors ` +
  `hover:text-[#0B2440] ${focusStyle}`;

function SolutionLinks({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {solutions.map(({ name, island, href, icon: Icon, color }) => (
        <Link
          key={href}
          href={href}
          onClick={onNavigate}
          className={`group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#F4F5F3] sm:p-4 ${focusStyle}`}
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{
              color,
              backgroundColor: `${color}10`,
            }}
          >
            <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-medium leading-5 text-[#0B2440]">
              {name}
            </span>

            <span className="mt-1 block text-xs text-[#657584]">
              {island}
            </span>
          </span>

          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 text-[#0B2440]/30 transition-colors group-hover:text-[#0B2440]"
          />
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen && !solutionsOpen) return;

    const desktop = window.matchMedia("(min-width: 1024px)");

    const handleOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
        setSolutionsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (mobileOpen) {
        mobileButtonRef.current?.focus();
      } else {
        solutionsButtonRef.current?.focus();
      }

      setMobileOpen(false);
      setSolutionsOpen(false);
    };

    const handleBreakpointChange = () => {
      setMobileOpen(false);
      setSolutionsOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", handleBreakpointChange);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, [mobileOpen, solutionsOpen]);

  return (
    <header
      ref={headerRef}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;

        if (
          nextTarget instanceof Node &&
          !event.currentTarget.contains(nextTarget)
        ) {
          closeMenus();
        }
      }}
      className="sticky top-2 z-50 mx-3 my-3 rounded-[18px] border border-white/90 bg-white/95 shadow-[0_4px_18px_rgba(11,36,64,0.06),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.7)] ring-1 ring-[#0B2440]/[0.06] backdrop-blur-[18px] backdrop-saturate-200 supports-[backdrop-filter:blur(1px)]:bg-white/40 sm:top-3 sm:mx-6 xl:mx-auto xl:max-w-[1200px]"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.14) 25%, rgba(255,255,255,0.02) 58%, rgba(255,255,255,0.5) 100%)",
      }}
    >
      <div className="mx-auto flex h-[54px] items-center justify-between gap-4 px-4 sm:gap-6 sm:px-6 lg:h-[58px]">
        {/* Identidad */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="Grupo Canarias — Inicio"
          className={`flex shrink-0 items-center gap-3 rounded-md ${focusStyle}`}
        >
          <Image
            src="/images/logo-canarias.png"
            alt=""
            width={40}
            height={40}
            loading="eager"
            className="h-10 w-10 shrink-0 object-contain"
          />

          <span className="flex flex-col">
            <span className="text-[15px] font-semibold leading-none tracking-[0.18em] text-[#0B2440] sm:text-[17px]">
              CANARIAS
            </span>

            <span className="mt-[2px] text-[8px] font-medium leading-none tracking-[0.2em] text-[#657584]">
              GRUPO EMPRESARIAL
            </span>
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex xl:gap-9"
        >
          <Link
            href="/nosotros"
            onClick={closeMenus}
            className={desktopLink}
          >
            Nosotros
          </Link>

          <button
            ref={solutionsButtonRef}
            type="button"
            aria-expanded={solutionsOpen}
            aria-controls="desktop-solutions"
            onClick={() => setSolutionsOpen((previous) => !previous)}
            className={`${desktopLink} ${
              solutionsOpen ? "text-[#0B2440]" : ""
            }`}
          >
            Soluciones

            <ChevronDown
              size={15}
              aria-hidden="true"
              className={`transition-transform duration-200 motion-reduce:transition-none ${
                solutionsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <Link
            href="/#proceso"
            onClick={closeMenus}
            className={desktopLink}
          >
            Cómo trabajamos
          </Link>

          <Link
            href="/contacto"
            onClick={closeMenus}
            className={`inline-flex min-h-11 items-center gap-3 rounded-full bg-[#0B2440] px-5 py-3 text-[12px] font-medium text-white transition-colors hover:bg-[#194466] ${focusStyle}`}
          >
            Solicitar propuesta
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>

        {/* Control móvil */}
        <button
          ref={mobileButtonRef}
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((previous) => !previous)}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors lg:hidden ${focusStyle} ${
            mobileOpen
              ? "border-[#0B2440] bg-[#0B2440] text-white"
              : "border-[#0B2440]/10 bg-white/70 text-[#0B2440] hover:bg-white"
          }`}
        >
          {mobileOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Panel de soluciones: escritorio */}
      <div
        id="desktop-solutions"
        hidden={!solutionsOpen}
        className="absolute inset-x-6 top-[calc(100%+12px)] mx-auto max-h-[calc(100dvh-112px)] max-w-[1040px] overflow-y-auto overscroll-contain rounded-2xl border border-[#0B2440]/10 bg-white p-6 shadow-[0_24px_70px_rgba(11,36,64,0.14)] max-lg:hidden"
      >
        <div className="mb-4 flex items-center justify-between gap-6 border-b border-[#0B2440]/[0.08] px-3 pb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#926A0B]">
              Nuestras especialidades
            </p>

            <p className="mt-2 text-lg font-medium text-[#0B2440]">
              Seis divisiones. Una solución integral.
            </p>
          </div>

          <span className="text-xs text-[#657584]">Grupo Canarias</span>
        </div>

        <nav aria-label="Líneas de negocio">
          <SolutionLinks onNavigate={closeMenus} />
        </nav>
      </div>

      {/* Panel móvil */}
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="absolute inset-x-0 top-[calc(100%+10px)] max-h-[calc(100dvh-104px)] overflow-y-auto overscroll-contain rounded-2xl border border-[#0B2440]/10 bg-white shadow-[0_20px_40px_rgba(11,36,64,0.10)] lg:hidden"
      >
        <nav
          aria-label="Navegación móvil"
          className="px-5 pb-6 pt-3 sm:px-8"
        >
          <Link
            href="/nosotros"
            onClick={closeMenus}
            className={`flex min-h-14 items-center rounded-lg px-3 text-[15px] font-medium text-[#0B2440] hover:bg-[#F7F7F5] ${focusStyle}`}
          >
            Nosotros
          </Link>

          <details className="group rounded-xl">
            <summary
              className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-3 text-[15px] font-medium text-[#0B2440] hover:bg-[#F7F7F5] [&::-webkit-details-marker]:hidden ${focusStyle}`}
            >
              Soluciones

              <ChevronDown
                size={18}
                aria-hidden="true"
                className="transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
              />
            </summary>

            <div className="mb-2 rounded-xl border border-[#0B2440]/[0.06] bg-[#FAFAF8] p-1">
              <SolutionLinks onNavigate={closeMenus} />
            </div>
          </details>

          <Link
            href="/#proceso"
            onClick={closeMenus}
            className={`flex min-h-14 items-center rounded-lg px-3 text-[15px] font-medium text-[#0B2440] hover:bg-[#F7F7F5] ${focusStyle}`}
          >
            Cómo trabajamos
          </Link>

          <div className="mt-4 border-t border-[#0B2440]/[0.08] pt-5">
            <Link
              href="/contacto"
              onClick={closeMenus}
              className={`flex min-h-[52px] items-center justify-between gap-4 rounded-xl bg-[#0B2440] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#194466] ${focusStyle}`}
            >
              Solicitar propuesta
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}