import Link from "next/link";
import {
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  CarFront,
  CalendarDays,
  Package,
} from "lucide-react";

const lines = [
  {
    name: "La Palma",
    subtitle: "Salud y equipo médico",
    icon: HeartPulse,
    color: "#357A2A",
    href: "/lineas-de-negocio/salud",
    description:
      "Equipamiento médico, material de curación, ayudas técnicas, campañas de salud y simuladores médicos.",
  },
  {
    name: "El Hierro",
    subtitle: "Seguridad pública",
    icon: ShieldCheck,
    color: "#155BB5",
    href: "/lineas-de-negocio/seguridad",
    description:
      "Videovigilancia, centros de mando, CAD con IA, body cams, GPS, patrullas, ambulancias y unidades especializadas.",
  },
  {
    name: "Lanzarote",
    subtitle: "Educación y tecnología",
    icon: GraduationCap,
    color: "#C9510D",
    href: "/lineas-de-negocio/educacion",
    description:
      "Aulas inteligentes, equipamiento escolar, simuladores con realidad virtual y soluciones de seguridad para planteles.",
  },
  {
    name: "Fuerteventura",
    subtitle: "Vehículos y movilidad",
    icon: CarFront,
    color: "#72288B",
    href: "/lineas-de-negocio/movilidad",
    description:
      "Flotilla vehicular, vehículos equipados, rotulación institucional y asesoría en adquisiciones.",
  },
  {
    name: "La Gomera",
    subtitle: "Producción de eventos",
    icon: CalendarDays,
    color: "#087C7E",
    href: "/lineas-de-negocio/eventos",
    description:
      "Eventos institucionales, ferias, eventos masivos y políticos con producción integral y servicios médicos.",
  },
  {
    name: "Gran Canaria",
    subtitle: "Proveeduría general",
    icon: Package,
    color: "#926A0B",
    href: "/lineas-de-negocio/proveeduria",
    description:
      "Papelería, consumibles, renta de impresoras, material promocional, publicidad y servicios administrativos.",
  },
];

export default function BusinessLines() {
  return (
    <section
      id="lineas-de-negocio"
      aria-labelledby="business-lines-title"
      className="scroll-mt-28 bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Encabezado */}
        <div className="mb-8 sm:mb-10">
          <h2
            id="business-lines-title"
            className="text-[28px] font-medium leading-tight tracking-[-0.03em] text-[#0B2440] sm:text-[34px]"
          >
            Líneas de negocio
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#657584]">
            Seis especialidades para integrar tu proyecto.
          </p>
        </div>

        {/* Divisiones */}
        <ul className="grid gap-x-10 border-t border-[#0B2440]/10 md:grid-cols-2 lg:gap-x-16">
          {lines.map(
            (
              { name, subtitle, icon: Icon, color, href, description },
              index
            ) => (
              <li
                key={href}
                className="min-w-0 border-b border-[#0B2440]/10"
              >
                <Link
                  href={href}
                  aria-labelledby={`division-title-${index} division-name-${index}`}
                  className="group grid h-full grid-cols-[44px_minmax(0,1fr)_20px] content-start items-start gap-x-3 rounded-sm py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A39] sm:grid-cols-[48px_minmax(0,1fr)_20px] sm:gap-x-4 sm:py-8"
                >
                  {/* Icono */}
                  <span
                    className="flex h-12 w-11 items-center justify-center sm:w-12"
                    style={{ color }}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>

                  {/* Nombre y servicio */}
                  <div className="min-w-0">
                    <p
                      id={`division-name-${index}`}
                      className="text-[11px] font-medium uppercase leading-5 tracking-[0.1em] text-[#657584]"
                    >
                      {name}
                    </p>

                    <h3
                      id={`division-title-${index}`}
                      className="mt-2 text-lg font-medium leading-6 tracking-[-0.02em] text-[#0B2440] decoration-[#0B2440]/30 underline-offset-4 group-hover:underline group-focus-visible:underline md:min-h-12"
                    >
                      {subtitle}
                    </h3>
                  </div>

                  {/* Acceso */}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-7 text-[#8A969F] transition-colors group-hover:text-[#0B2440] group-focus-visible:text-[#0B2440]"
                  />

                  {/* Descripción */}
                  <p className="col-span-3 mt-4 text-sm leading-7 text-[#657584] md:col-span-1 md:col-start-2">
                    {description}
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}