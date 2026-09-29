"use client";

import {
  Camera,
  Car,
  MapPin,
  Monitor,
  Radio,
  ShieldCheck,
} from "lucide-react";

import BusinessLineTemplate from "./BusinessLineTemplate";

export default function Seguridad() {
  return (
    <BusinessLineTemplate
      island="EL HIERRO"
      title="Seguridad Pública y Protección Ciudadana"
      shortDescription="Tecnología, infraestructura, comunicaciones y unidades especializadas para fortalecer la operación de las instituciones de seguridad pública."

      color="#155BB5"
      softColor="#EAF2FC"

      heroImages={[
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85",
      ]}

      islandImage="/images/islas/el-hierro.png"

      introLabel="Seguridad integrada"
      introTitle="Del centro de mando a la unidad en campo."
      introDescription="Integramos sistemas de videovigilancia, plataformas de despacho, geolocalización, comunicaciones y vehículos especializados dentro de una misma arquitectura operativa."

      services={[
        {
          title: "Videovigilancia",
          icon: Camera,
          description:
            "Sistemas urbanos de monitoreo y analítica para vigilancia y prevención.",
          items: [
            "Cámaras fijas",
            "PTZ",
            "Lectura de placas",
            "Analítica de video",
            "Botones de pánico",
          ],
        },
        {
          title: "Software CAD",
          icon: Monitor,
          description:
            "Plataformas para atención y despacho coordinado de emergencias.",
          items: [
            "Despacho 911",
            "Inteligencia artificial",
            "Integración con cámaras",
            "Tableros de mando",
          ],
        },
        {
          title: "Centros C2 / C3 / C4",
          icon: ShieldCheck,
          description:
            "Creación y modernización de infraestructura para centros de mando.",
          items: [
            "Videowall",
            "Consolas",
            "Comunicaciones",
            "Protocolos",
            "Interconexión",
          ],
        },
        {
          title: "Body cams y radios",
          icon: Radio,
          description:
            "Comunicación, geolocalización y registro operativo.",
          items: [
            "Body cams",
            "GPS",
            "Radios",
            "Geolocalización",
          ],
        },
        {
          title: "GPS vehicular",
          icon: MapPin,
          description:
            "Rastreo en tiempo real e integración con plataformas de despacho.",
          items: [
            "Localización",
            "Despacho por proximidad",
            "Historial de recorridos",
            "Integración CAD",
          ],
        },
        {
          title: "Unidades especializadas",
          icon: Car,
          description:
            "Vehículos convertidos y equipados para seguridad y emergencia.",
          items: [
            "Patrullas",
            "Ambulancias",
            "Bomberos",
            "Unidades de rescate",
          ],
        },
      ]}

      valueTitle="Toda la cadena de seguridad en una misma solución."
      valueDescription="Integramos los componentes tecnológicos y operativos para reducir incompatibilidades y mejorar la coordinación."

      valuePoints={[
        "Cámara y sensores en calle",
        "Centro de mando C2 / C3 / C4",
        "Despacho mediante CAD",
        "Unidad geolocalizada en campo",
      ]}

      ctaTitle="¿Necesitas modernizar tu operación de seguridad?"
    />
  );
}