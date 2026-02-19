"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
    images: {
        src: string;
        alt: string;
    }[];
    className?: string; // Allow overriding aspect ratio or width
}

export function ProjectCarousel({ images, className }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className={cn("relative w-full group aspect-[4/5] md:aspect-auto", className)}>
            <div
                ref={scrollContainerRef}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        // Inner items now just fill the parent height
                        className="min-w-full flex-shrink-0 snap-center relative h-full rounded-2xl overflow-hidden shadow-sm bg-gray-100"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 80vw"
                            priority={index === 0}
                        />
                        {/* Optional gradient for text readability if needed */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none opacity-90" />

                        {/* Title Overlay */}
                        <div className="hidden md:block absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
                            <h3 className="text-xl md:text-3xl font-bold text-white font-montserrat drop-shadow-md">
                                {img.alt}
                            </h3>
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
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "rounded-full transition-all duration-300 shadow-sm border border-white/20",
                            activeIndex === index
                                ? "bg-white w-8 h-2"
                                : "bg-white/50 w-2 h-2 hover:bg-white/80"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
