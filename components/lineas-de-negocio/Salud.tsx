"use client";

import {
  Accessibility,
  BrainCircuit,
  Eye,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import BusinessLineTemplate from "./BusinessLineTemplate";

export default function Salud() {
  return (
    <BusinessLineTemplate
      island="LA PALMA"
      title="Salud y Equipamiento Médico"
      shortDescription="Soluciones médicas integrales para hospitales, centros de salud, unidades móviles, consultorios y programas sociales."

      color="#357A2A"
      softColor="#EEF6EB"

      heroImages={[
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=85",
      ]}

      islandImage="/images/islas/la-palma.png"

      introLabel="Salud integral"
      introTitle="Equipamiento y servicios para fortalecer la atención médica."
      introDescription="Integramos suministro, equipamiento especializado, ayudas técnicas y programas de atención adaptados a las necesidades de cada dependencia."

      services={[
        {
          title: "Equipo médico",
          icon: Stethoscope,
          description:
            "Equipamiento para hospitales, centros de salud, unidades móviles y consultorios.",
          items: [
            "Mobiliario clínico",
            "Equipo de diagnóstico",
            "Imagenología",
            "Esterilización",
            "Unidades especializadas",
          ],
        },
        {
          title: "Material de curación",
          icon: HeartPulse,
          description:
            "Abasto de insumos con registro sanitario y esquemas adaptados a cada contrato.",
          items: [
            "Contratos anuales",
            "Contratos abiertos",
            "Pedidos programados",
            "Volúmenes personalizados",
          ],
        },
        {
          title: "Ayudas técnicas",
          icon: Accessibility,
          description:
            "Soluciones para programas sociales municipales y estatales.",
          items: [
            "Sillas de ruedas",
            "Andaderas",
            "Bastones y muletas",
            "Auxiliares auditivos",
            "Prótesis y órtesis",
          ],
        },
        {
          title: "Campañas de salud",
          icon: Eye,
          description:
            "Organización integral de campañas visuales y auditivas.",
          items: [
            "Tamizaje",
            "Personal especializado",
            "Estudios",
            "Entrega de lentes",
            "Padrón de beneficiarios",
          ],
        },
        {
          title: "Simuladores médicos",
          icon: BrainCircuit,
          description:
            "Tecnología para formación médica y práctica clínica segura.",
          items: [
            "Alta fidelidad",
            "Realidad virtual",
            "Simulación clínica",
            "Capacitación especializada",
          ],
        },
      ]}

      valueTitle="Programas sociales completos, no solo suministro."
      valueDescription="Podemos estructurar programas que integren diagnóstico, atención, entrega de ayudas técnicas y documentación de beneficiarios."

      valuePoints={[
        "Diagnóstico y planeación",
        "Personal y equipo especializado",
        "Entrega logística",
        "Evidencia y padrón de beneficiarios",
      ]}

      ctaTitle="¿Tienes un proyecto de salud?"
    />
  );
}