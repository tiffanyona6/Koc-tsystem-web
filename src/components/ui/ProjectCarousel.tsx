"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
    images: {
        src: string;
        alt: string;
        objectPosition?: string;
    }[];
    className?: string; // Allow overriding aspect ratio or width
}

export function ProjectCarousel({ images, className }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Lightbox & Portal state
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update active index on scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollLeft;
            const itemWidth = container.offsetWidth;
            const index = Math.round(scrollPosition / itemWidth);
            setActiveIndex(index);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (index: number) => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollTo({
                left: container.offsetWidth * index,
                behavior: "smooth"
            });
        }
    };

    const nextSlide = () => {
        const nextIndex = (activeIndex + 1) % images.length;
        scrollTo(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (activeIndex - 1 + images.length) % images.length;
        scrollTo(prevIndex);
    };

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setIsLightboxOpen(true);
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        // Restore body scroll
        document.body.style.overflow = "";
    };

    const nextLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className={cn("relative w-full group aspect-[4/5] md:aspect-auto", className)}>
                <div
                    ref={scrollContainerRef}
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="min-w-full flex-shrink-0 snap-center relative h-full rounded-2xl overflow-hidden shadow-sm bg-gray-100 cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectPosition: img.objectPosition || "center" }}
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 80vw"
                                priority={index === 0}
                            />
                            {/* Optional gradient for text readability if needed */}
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none opacity-90" />

                            {/* Title Overlay */}
                            <div className="hidden md:block absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 pointer-events-none">
                                <h3 className="text-xl md:text-3xl font-bold text-white font-montserrat drop-shadow-md">
                                    {img.alt}
                                </h3>
                            </div>

                            {/* Hover Overlay for click indication */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                    Ampliar imagen
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows - Desktop Only (Hidden on mobile) */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicators - Always visible */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30 pointer-events-none">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                scrollTo(index);
                            }}
                            className={cn(
                                "rounded-full transition-all duration-300 shadow-sm border border-white/20 pointer-events-auto",
                                activeIndex === index
                                    ? "bg-white w-8 h-2"
                                    : "bg-white/50 w-2 h-2 hover:bg-white/80"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal using Portal to escape stacking contexts */}
            {mounted && isLightboxOpen && createPortal(
                <div
                    className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
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
                        className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Selected Image */}
                        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
                            <img
                                src={images[lightboxIndex].src}
                                alt={images[lightboxIndex].alt}
                                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Title in Lightbox */}
                        <div className="mt-6 text-center">
                            <h3 className="text-xl md:text-2xl font-medium text-white max-w-3xl">
                                {images[lightboxIndex].alt}
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm">
                                {lightboxIndex + 1} de {images.length}
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevLightboxImage}
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full text-white transition-all z-50 backdrop-blur-md"
                                    aria-label="Imagen anterior"
                                >
                                    <ChevronLeft size={24} className="md:w-8 md:h-8" />
                                </button>
                                <button
                                    onClick={nextLightboxImage}
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full text-white transition-all z-50 backdrop-blur-md"
                                    aria-label="Siguiente imagen"
                                >
                                    <ChevronRight size={24} className="md:w-8 md:h-8" />
                                </button>
                            </>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
