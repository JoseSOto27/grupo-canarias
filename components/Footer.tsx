import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

// Agrega los enlaces oficiales de tus perfiles.
const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "" },
  { label: "Instagram", icon: FaInstagram, href: "" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "" },
  { label: "YouTube", icon: FaYoutube, href: "" },
];

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5AC59]";

const socialStyle =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D5AC59]/20 bg-[#061B2D] text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Marca y frase */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <Link
            href="/"
            aria-label="Grupo Canarias — Inicio"
            className={`inline-flex items-center gap-3 self-start rounded-sm sm:self-auto ${focusStyle}`}
          >
            <Image
              src="/images/logo-canarias-blanco.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 object-contain"
            />

            <span className="flex flex-col">
              <span className="text-[18px] font-semibold leading-tight tracking-[0.18em]">
                CANARIAS
              </span>

              <span className="mt-1 text-[8px] font-medium tracking-[0.2em] text-white/55">
                GRUPO EMPRESARIAL
              </span>
            </span>
          </Link>

          <p className="text-[12px] leading-6 text-white/70 sm:text-right sm:text-[13px]">
            Integramos soluciones.{" "}
            <span className="text-[#D5AC59]">
              Entregamos resultados.
            </span>
          </p>
        </div>

        {/* Derechos y redes */}
        <div className="flex flex-col-reverse gap-3 border-t border-white/10 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-[10px] leading-5 text-white/50 sm:text-[11px]">
            © {year} Grupo Canarias. Todos los derechos reservados.
          </p>

          <ul
            aria-label="Redes sociales de Grupo Canarias"
            className="flex flex-wrap items-center gap-2"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                {href.trim() ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} de Grupo Canarias, abre en una nueva pestaña`}
                    className={`${socialStyle} transition-colors hover:border-[#D5AC59]/50 hover:bg-white/5 hover:text-[#D5AC59] ${focusStyle}`}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    role="img"
                    aria-label={label}
                    className={socialStyle}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}