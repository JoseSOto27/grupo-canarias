"use client";
 
import {
  Gift,
  Megaphone,
  Package,
  Printer,
} from "lucide-react";

import BusinessLineTemplate from "./BusinessLineTemplate";

export default function Proveeduria() {
  return (
    <BusinessLineTemplate
      island="GRAN CANARIA"
      title="Proveeduría General"
      shortDescription="Suministro, arrendamiento y servicios para atender las necesidades operativas y administrativas de las dependencias."

      color="#C58D0D"
      softColor="#FAF3DF"

      heroImages={[
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1800&q=85",
      ]}

      islandImage="/images/islas/gran-canaria.png"

      introLabel="Abasto y operación"
      introTitle="Un solo proveedor para múltiples necesidades."
      introDescription="Facilitamos el suministro recurrente de bienes y servicios para áreas administrativas y operativas mediante esquemas adaptados a cada contratación."

      services={[
        {
          title: "Papelería y consumibles",
          icon: Package,
          description:
            "Abasto recurrente para áreas administrativas.",
          items: [
            "Papelería",
            "Artículos de oficina",
            "Consumibles",
            "Entregas programadas",
          ],
        },
        {
          title: "Renta de impresoras",
          icon: Printer,
          description:
            "Arrendamiento integral de impresoras y multifuncionales.",
          items: [
            "Mantenimiento",
            "Consumibles",
            "Reemplazo",
            "Disponibilidad continua",
          ],
        },
        {
          title: "Material promocional",
          icon: Gift,
          description:
            "Material institucional para programas y dependencias.",
          items: [
            "Lonas",
            "Uniformes",
            "Artículos utilitarios",
            "Material impreso",
          ],
        },
        {
          title: "Publicidad y medios",
          icon: Megaphone,
          description:
            "Servicios de comunicación y difusión institucional.",
          items: [
            "Campañas",
            "Diseño",
            "Medios",
            "Comunicación social",
          ],
        },
      ]}

      valueTitle="Abastecimiento con continuidad operativa."
      valueDescription="Los esquemas de arrendamiento y suministro permiten reducir inversiones iniciales y mantener disponibilidad constante."

      valuePoints={[
        "Suministro programado",
        "Mantenimiento",
        "Consumibles",
        "Reemplazo de equipos",
      ]}

      ctaTitle="¿Necesitas una solución de abastecimiento?"
    />
  );
}