"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/60 to-[#0f172a]/30 md:from-[#0f172a]/45 md:to-[#0f172a]/20 lg:from-[#0f172a]/55 lg:to-[#0f172a]/25 z-10" />
                <Image
                    src="/images/hero/hero-bg.png"
                    alt="KOC Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 md:px-6 text-left text-white">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-[32px] md:text-[44px] lg:text-[60px] font-bold font-heading mb-6 leading-[1.1] md:leading-[1.2] drop-shadow-md">
                            Soluciones técnicas sostenibles
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl drop-shadow-sm font-light">
                            para energía, agua y control térmico industrial
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 justify-start">
                            <Link href="/contacto">
                                <Button size="lg" className="px-8 shadow-xl w-full lg:w-auto">
                                    Solicitar reunión
                                </Button>
                            </Link>
                            <Link href="/oasys">
                                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary w-full lg:w-auto">
                                    Descubrir Oasys Project
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
