"use client"; 

import {
  Landmark,
  Megaphone,
  PartyPopper,
  Users,
} from "lucide-react";

import BusinessLineTemplate from "./BusinessLineTemplate";

export default function Eventos() {
  return (
    <BusinessLineTemplate
      island="LA GOMERA"
      title="Producción de Eventos"
      shortDescription="Planeación, producción y ejecución integral de eventos institucionales, ferias, eventos masivos y actos públicos."

      color="#15999B"
      softColor="#E8F6F6"

      heroImages={[
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
      ]}

      islandImage="/images/islas/la-gomera.png"

      introLabel="Producción integral"
      introTitle="Planeamos y ejecutamos cada detalle."
      introDescription="Coordinamos producción técnica, logística, espacios, seguridad, servicios médicos, talento y operación para desarrollar eventos completos."

      services={[
        {
          title: "Eventos institucionales",
          icon: Landmark,
          description:
            "Producción para ceremonias, informes y celebraciones oficiales.",
          items: [
            "Escenario",
            "Audio",
            "Iluminación",
            "Mobiliario",
            "Talento",
          ],
        },
        {
          title: "Ferias y festividades",
          icon: PartyPopper,
          description:
            "Coordinación integral de eventos municipales y temáticos.",
          items: [
            "Espacios",
            "Proveedores",
            "Espectáculos",
            "Seguridad",
            "Protección Civil",
          ],
        },
        {
          title: "Eventos masivos",
          icon: Users,
          description:
            "Producción técnica y logística para eventos de gran formato.",
          items: [
            "Pantallas",
            "Transmisión en vivo",
            "Producción",
            "Permisos",
          ],
        },
        {
          title: "Eventos políticos",
          icon: Megaphone,
          description:
            "Producción técnica y logística conforme a la normativa aplicable.",
          items: [
            "Templetes",
            "Sonido",
            "Material promocional",
            "Cobertura audiovisual",
          ],
        },
      ]}

      valueTitle="Producción y protección del asistente."
      valueDescription="La línea puede integrar servicios médicos y ambulancias para cubrir los eventos producidos."

      valuePoints={[
        "Producción técnica",
        "Logística",
        "Protección Civil",
        "Servicios médicos",
      ]}

      ctaTitle="¿Estás planeando un evento?"
    />
  );
}