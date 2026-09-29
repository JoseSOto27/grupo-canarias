import { Building2, UserRound, MapPin, Medal } from "lucide-react";

const stats = [
  {
    icon: Building2,
    title: "+100",
    text: "Proyectos ejecutados",
    isNumber: true,
  },
  {
    icon: UserRound,
    title: "+50",
    text: "Dependencias atendidas",
    isNumber: true,
  },
  {
    icon: MapPin,
    title: "Cobertura",
    text: "Región Centro y todo México",
    isNumber: false,
  },
  {
    icon: Medal,
    title: "Calidad",
    text: "Cumplimiento y transparencia",
    isNumber: false,
  },
];

export default function Stats() {
  return (
    <section
      aria-label="Experiencia y alcance de Grupo Canarias"
      className="bg-[#0B2440] px-5 py-6 sm:px-8 sm:py-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <ul
          role="list"
          className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4"
        >
          {stats.map(({ icon: Icon, title, text, isNumber }) => (
            <li
              key={title}
              className="flex min-w-0 flex-col items-center bg-[#0B2440] px-3 py-7 text-center sm:px-6 sm:py-9"
            >
              <Icon
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-[#D5AC59]"
              />

              <p
                className={`mt-4 flex min-h-11 items-center justify-center font-medium leading-tight tracking-[-0.03em] text-white ${
                  isNumber
                    ? "text-[34px] tabular-nums sm:text-[38px]"
                    : "text-[21px] sm:text-[24px]"
                }`}
              >
                {title}
              </p>

              <p className="mt-2 max-w-[180px] text-[12px] leading-6 text-white/70 sm:text-[13px]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}