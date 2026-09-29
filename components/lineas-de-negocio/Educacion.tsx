"use client"; 

import {
  Glasses,
  GraduationCap,
  Monitor,
  ShieldCheck,
} from "lucide-react";

import BusinessLineTemplate from "./BusinessLineTemplate";

export default function Educacion() {
  return (
    <BusinessLineTemplate
      island="LANZAROTE"
      title="Educación y Tecnología Educativa"
      shortDescription="Infraestructura, tecnología y equipamiento para crear entornos educativos modernos, seguros y conectados."

      color="#F06A16"
      softColor="#FFF1E8"

      heroImages={[
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1800&q=85",
      ]}

      islandImage="/images/islas/lanzarote.png"

      introLabel="Educación inteligente"
      introTitle="Tecnología al servicio del aprendizaje."
      introDescription="Modernizamos espacios educativos mediante soluciones que integran conectividad, herramientas digitales, equipamiento especializado y seguridad escolar."

      services={[
        {
          title: "Aulas inteligentes",
          icon: Monitor,
          description:
            "Tecnología interactiva y conectividad para modernizar espacios educativos.",
          items: [
            "Pantallas interactivas",
            "Proyectores",
            "Audio",
            "Conectividad",
            "Capacitación docente",
          ],
        },
        {
          title: "Equipamiento escolar",
          icon: GraduationCap,
          description:
            "Infraestructura y equipos para planteles de diferentes niveles.",
          items: [
            "Mobiliario",
            "Cómputo",
            "Laboratorios",
            "Talleres",
          ],
        },
        {
          title: "Simulación con RV",
          icon: Glasses,
          description:
            "Entornos inmersivos para formación técnica y médica.",
          items: [
            "Realidad virtual",
            "Simulación",
            "Práctica segura",
            "Formación técnica",
          ],
        },
        {
          title: "Seguridad escolar",
          icon: ShieldCheck,
          description:
            "Tecnología orientada a la protección de alumnos e instalaciones.",
          items: [
            "Videovigilancia",
            "Control de accesos",
            "Alertamiento",
            "Integración con emergencias",
          ],
        },
      ]}

      valueTitle="Escuelas seguras e inteligentes."
      valueDescription="La combinación de tecnología educativa y seguridad permite desarrollar proyectos integrales de modernización escolar."

      valuePoints={[
        "Conectividad",
        "Tecnología educativa",
        "Simulación inmersiva",
        "Seguridad escolar",
      ]}

      ctaTitle="¿Quieres modernizar un plantel educativo?"
    />
  );
}