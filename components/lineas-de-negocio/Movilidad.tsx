"use client";

import {
  Car,
  FileCheck,
  Paintbrush,
  Wrench,
} from "lucide-react";

import BusinessLineTemplate from "./BusinessLineTemplate";

export default function Movilidad() {
  return (
    <BusinessLineTemplate
      island="FUERTEVENTURA"
      title="Vehículos y Movilidad"
      shortDescription="Flotillas, conversiones especializadas, rotulación y acompañamiento para adquisiciones del sector público."

      color="#72288B"
      softColor="#F5ECF8"

      heroImages={[
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
      ]}

      islandImage="/images/islas/fuerteventura.png"

      introLabel="Movilidad institucional"
      introTitle="Vehículos preparados para cumplir una función pública."
      introDescription="Integramos suministro, conversión, equipamiento e identidad vehicular de acuerdo con las necesidades operativas de cada dependencia."

      services={[
        {
          title: "Flotilla vehicular",
          icon: Car,
          description:
            "Suministro de unidades nuevas y seminuevas.",
          items: [
            "Sedanes",
            "Pick-ups",
            "Camiones",
            "Utilitarios",
            "Vehículos de carga",
          ],
        },
        {
          title: "Vehículos equipados",
          icon: Wrench,
          description:
            "Conversión especializada conforme a la función de la unidad.",
          items: [
            "Protección Civil",
            "Servicios públicos",
            "DIF",
            "Transporte adaptado",
          ],
        },
        {
          title: "Rotulación",
          icon: Paintbrush,
          description:
            "Aplicación de identidad institucional y balizado.",
          items: [
            "Diseño gráfico",
            "Rotulación",
            "Balizado",
            "Aplicación institucional",
          ],
        },
        {
          title: "Asesoría de adquisición",
          icon: FileCheck,
          description:
            "Acompañamiento jurídico-administrativo del proceso.",
          items: [
            "FORTAMUN",
            "FAIS",
            "Recursos propios",
            "Acuerdos de cabildo",
          ],
        },
      ]}

      valueTitle="De la adquisición a la entrega de la unidad."
      valueDescription="Podemos integrar el vehículo, conversión, equipamiento, rotulación y documentación dentro de un mismo proyecto."

      valuePoints={[
        "Selección de unidad",
        "Conversión especializada",
        "Equipamiento",
        "Entrega institucional",
      ]}

      ctaTitle="¿Necesitas integrar o renovar una flotilla?"
    />
  );
}