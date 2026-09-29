import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Eye,
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nosotros | Grupo Canarias",
  description:
    "Conoce el modelo, la misión, la visión y los valores de Grupo Canarias, empresa integradora de proyectos para el sector público.",
};

const values = [
  {
    icon: Scale,
    title: "Integridad",
    description:
      "Ejecutamos cada proyecto conforme a la normatividad aplicable en adquisiciones y obra pública.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    description:
      "Respondemos por cada bien y servicio con calidad verificada y garantías formales.",
  },
  {
    icon: Handshake,
    title: "Flexibilidad",
    description:
      "Adaptamos cada solución a la realidad presupuestal y operativa de la dependencia.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Incorporamos tecnología de vanguardia para mejorar la prestación de servicios públicos.",
  },
  {
    icon: UsersRound,
    title: "Vocación de servicio",
    description:
      "Entendemos que servir al gobierno es, en última instancia, servir a la ciudadanía.",
  },
];

const commitments = [
  "Cumplimiento de especificaciones técnicas y plazos establecidos.",
  "Documentación completa: fichas técnicas, garantías, fianzas y evidencia de entrega.",
  "Acompañamiento desde la investigación de mercado hasta el cierre del contrato.",
];

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A39]";

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0B2440]">
        {/* Portada */}
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9A752E]">
                  Quiénes somos
                </p>

                <h1 className="mt-5 max-w-[850px] text-balance text-[clamp(2.5rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                  Integramos capacidades para convertir necesidades en
                  resultados.
                </h1>
              </div>

              <div className="flex flex-col items-center gap-7 lg:mb-2">
                <Image
                  src="/images/logo-canarias.png"
                  alt="Símbolo de Grupo Canarias"
                  width={190}
                  height={190}
                  priority
                  className="h-32 w-32 object-contain sm:h-36 sm:w-36 lg:h-44 lg:w-44"
                />

                <div className="w-full border-t border-[#0B2440]/10 pt-6">
                  <p className="text-[15px] leading-8 text-[#657584]">
                    Empresa integradora de proyectos para los tres órdenes de
                    gobierno y organismos públicos.
                  </p>

                  <a
                    href="#modelo"
                    className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-[13px] font-medium text-[#0B2440] ${focusStyle}`}
                  >
                    Conocer nuestro modelo
                    <ArrowDown size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-[#0B2440]/10 sm:grid-cols-3 lg:mt-20">
              {[
                ["01", "Un solo contrato"],
                ["02", "Ejecución coordinada"],
                ["03", "Un solo responsable"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="bg-[#F8F8F6] px-6 py-6 sm:px-7"
                >
                  <span className="text-[10px] font-medium tracking-[0.16em] text-[#9A752E]">
                    {number}
                  </span>

                  <p className="mt-3 text-[15px] font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelo */}
        <section
          id="modelo"
          className="scroll-mt-28 border-y border-[#0B2440]/[0.08] bg-[#F8F8F6] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        >
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#9A752E]">
                Nuestro modelo
              </p>

              <h2 className="mt-4 max-w-[460px] text-balance text-[30px] font-medium leading-[1.2] tracking-[-0.035em] sm:text-[38px]">
                Simplificamos proyectos complejos.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-8 text-[#657584]">
              <p>
                En lugar de que una dependencia coordine a múltiples
                proveedores, reunimos bienes, equipamiento especializado,
                implementación tecnológica y servicios bajo una misma
                coordinación.
              </p>

              <p>
                Nuestra red de fabricantes, distribuidores autorizados y
                especialistas técnicos nos permite desarrollar soluciones
                llave en mano, desde el diagnóstico hasta la entrega,
                capacitación y soporte posterior.
              </p>
            </div>
          </div>
        </section>

        {/* Significado */}
        <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#9A752E]">
                Nuestro nombre
              </p>

              <h2 className="mt-4 max-w-[480px] text-balance text-[30px] font-medium leading-[1.2] tracking-[-0.035em] sm:text-[38px]">
                Una estructura. Distintas especialidades.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-8 text-[#657584]">
              <p>
                Un archipiélago reúne islas que comparten un mismo origen,
                aunque cada una conserva su carácter. Así funciona Grupo
                Canarias: cada especialidad tiene identidad, experiencia y
                equipo propios.
              </p>

              <p>
                Todas forman parte de la misma estructura corporativa. Cuando
                una institución contrata una línea de negocio, accede a la
                capacidad completa del grupo.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y visión */}
        <section className="border-y border-[#0B2440]/[0.08] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] lg:grid-cols-2">
            <article className="border-b border-[#0B2440]/10 py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-16">
              <Target
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-[#9A752E]"
              />

              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.17em] text-[#9A752E]">
                Misión
              </p>

              <h2 className="mt-4 max-w-[500px] text-balance text-[25px] font-medium leading-[1.35] tracking-[-0.025em] sm:text-[30px]">
                Integrar soluciones completas para que los gobiernos entreguen
                mejores resultados a la ciudadanía.
              </h2>

              <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#657584]">
                Equipamiento, tecnología, infraestructura y servicios con
                eficiencia, transparencia y calidad certificada.
              </p>
            </article>

            <article className="py-12 lg:py-16 lg:pl-16">
              <Eye
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-[#9A752E]"
              />

              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.17em] text-[#9A752E]">
                Visión
              </p>

              <h2 className="mt-4 max-w-[500px] text-balance text-[25px] font-medium leading-[1.35] tracking-[-0.025em] sm:text-[30px]">
                Ser el integrador de referencia para gobiernos municipales y
                estatales de la región centro.
              </h2>

              <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#657584]">
                Reconocido por su capacidad de ejecución, portafolio
                multisectorial y confiabilidad como aliado estratégico.
              </p>
            </article>
          </div>
        </section>

        {/* Valores */}
        <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#9A752E]">
              Nuestros valores
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-medium leading-[1.2] tracking-[-0.035em] sm:text-[38px]">
              Principios que orientan cada proyecto.
            </h2>

            <div className="mt-10 grid border-t border-[#0B2440]/10 md:grid-cols-2 lg:grid-cols-5">
              {values.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="border-b border-[#0B2440]/10 py-7 md:px-5 lg:border-r lg:px-6 lg:last:border-r-0"
                >
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-[#9A752E]"
                  />

                  <h3 className="mt-5 text-[15px] font-medium">{title}</h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#657584]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso */}
        <section className="bg-[#F8F8F6] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#9A752E]">
                Nuestro compromiso
              </p>

              <h2 className="mt-4 max-w-[450px] text-balance text-[30px] font-medium leading-[1.2] tracking-[-0.035em] sm:text-[38px]">
                Claridad y responsabilidad en cada entrega.
              </h2>
            </div>

            <ul className="divide-y divide-[#0B2440]/10 border-t border-[#0B2440]/10">
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-4 py-5 text-[14px] leading-7 text-[#405363] sm:text-[15px]"
                >
                  <Check
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-[#9A752E]"
                  />

                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cierre */}
        <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6 border-y border-[#0B2440]/10 py-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div>
              <h2 className="max-w-[670px] text-balance text-[26px] font-medium leading-[1.25] tracking-[-0.03em] sm:text-[32px]">
                Construyamos una solución a la medida de tu institución.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#657584]">
                Cuéntanos la necesidad, el alcance y el objetivo del proyecto.
              </p>
            </div>

            <Link
              href="/contacto"
              className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-lg bg-[#0B2440] px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#194466] lg:self-center ${focusStyle}`}
            >
              Solicitar propuesta
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}