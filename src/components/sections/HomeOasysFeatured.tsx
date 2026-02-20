"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Lock, X } from "lucide-react";

export function HomeOasysFeatured() {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openLightbox = () => {
        setIsImageOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setIsImageOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <section className="relative overflow-hidden bg-white border-y border-gray-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/pattern-grid.svg')] opacity-[0.03]" />

            <div className="container-custom section-padding relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Column (Left on Desktop) */}
                    <div className="w-full lg:w-1/2 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            PROYECTO EN DESARROLLO 2026
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-8 w-1 bg-primary rounded-full hidden md:block"></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                Oasis <span className="text-primary">Project</span>
                            </h2>
                        </div>

                        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 leading-tight">
                            Eficiencia energética y optimización hídrica industrial
                        </h3>

                        <p className="text-gray-800 text-lg mb-8 leading-relaxed max-w-xl">
                            Oasis Project es una solución tecnológica desarrollada por KOC Technical System para transformar el desperdicio térmico en ahorro medible, integrando recuperación energética y reutilización inteligente del agua en un único sistema industrial.
                            <br /><br />
                            Diseñado para generar eficiencia estructural, reducción de costes y sostenibilidad real en entornos industriales de alta demanda.
                            <br />
                            <span className="block mt-4 text-sm font-semibold text-gray-500">Actualmente en fase de expansión y búsqueda de socios estratégicos.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contacto">
                                <Button size="lg" className="shadow-lg min-w-[220px] justify-between group bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300">
                                    Solicitar dossier
                                    <Lock className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </Link>
                            <Link href="/oasis-project">
                                <Button size="lg" className="min-w-[160px] group bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                                    Ver proyecto
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Column (Right on Desktop) - Hidden on Mobile */}
                    <div className="hidden lg:block w-full lg:w-1/2 mt-8 lg:mt-0">
                        <div
                            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] max-h-[650px] rounded-3xl shadow-2xl overflow-hidden group cursor-pointer"
                            onClick={openLightbox}
                        >
                            {/* IMAGEN PRINCIPAL */}
                            <img
                                src="/images/projects/proyecto-oasis-project-web-koc.webp"
                                alt="Infraestructura del proyecto Oasis - Optimización hídrica industrial"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay hover para indicar que es clickeable */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                    Ampliar imagen
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal / Lightbox */}
            {mounted && isImageOpen && createPortal(
                <div
                    className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-10 lg:right-10 text-white hover:text-gray-300 transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 z-50"
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                    >
                        <X size={28} />
                    </button>

                    <div
                        className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[80vh] flex items-center justify-center">
                            <img
                                src="/images/projects/proyecto-oasis-project-web-koc.webp"
                                alt="Infraestructura del proyecto Oasis - vista ampliada"
                                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
