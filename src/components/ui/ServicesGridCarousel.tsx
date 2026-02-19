"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServicesGridCarouselProps {
    images: {
        src: string;
        alt: string;
    }[];
}

export function ServicesGridCarousel({ images }: ServicesGridCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // On desktop, we scroll by 1/2 of the width (two items view)
            // On mobile, we scroll by full width
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            const scrollAmount = isDesktop ? container.clientWidth / 2 : container.clientWidth;

            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="relative w-full group">
                <div
                    ref={scrollContainerRef}
                    className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none py-8 px-4 md:px-0"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="min-w-full md:min-w-[50%] flex-shrink-0 snap-center px-0 md:px-4"
                        >
                            <div
                                className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-gray-100 group-card transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:shadow-xl"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">Ampliar imagen</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white shadow-lg p-3 rounded-full text-gray-800 z-20 hover:scale-110 transition-transform hidden md:flex"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white shadow-lg p-3 rounded-full text-gray-800 z-20 hover:scale-110 transition-transform hidden md:flex"
                    aria-label="Siguiente"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-6xl h-auto aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={selectedImage}
                            alt="Full screen view"
                            fill
                            className="object-contain"
                            priority
                        />
                        <button
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
