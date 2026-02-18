"use client";

import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

const galleryImages = [
    { src: "/images/projects/marlenka-magicbox.png", alt: "Proyecto Marlenka y Magic Box" },
    { src: "/images/projects/proyecto-sistema-automatico.png", alt: "Sistema Automático de Atemperado" },
    { src: "/images/projects/targa.png", alt: "Proyecto Targa MG" },
    { src: "/images/projects/twt.png", alt: "Sistema TWT - Agua 4.0" },
    { src: "/images/projects/marlenka-magicbox.png", alt: "Detalle Instalación Industrial" },
    { src: "/images/projects/targa.png", alt: "Tecnología de Nebulización" },
];

export function ServicesGallery() {
    return (
        <section className="section-padding bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-secondary font-semibold text-xs tracking-wide uppercase mb-4">
                        Galería
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-6">Nuestro trabajo</h2>
                    <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
                        Detalles de nuestras intervenciones técnicas en campo.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <ProjectCarousel
                        images={galleryImages}
                        className="w-full h-auto aspect-[4/5] md:aspect-[16/9] shadow-xl rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}

