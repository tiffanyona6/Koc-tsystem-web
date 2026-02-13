"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Droplets, Zap, CheckCircle2, Factory, FileCheck, BarChart3, Settings, ClipboardCheck, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ServicesGallery } from "@/components/sections/ServicesGallery";

// Animations
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white">

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-10 md:pt-36 md:pb-16 bg-gray-50 relative overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-[1200px] mx-auto">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="max-w-4xl"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-primary mb-6 leading-tight">
                                Servicios
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl font-light">
                                Ingeniería aplicada a agua, energía y control de proceso con resultados medibles
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contacto">
                                    <Button size="lg" className="w-full sm:w-auto px-8 shadow-lg">
                                        Solicitar propuesta
                                    </Button>
                                </Link>
                                <Link href="/proyectos" className="hidden sm:block">
                                    <Button variant="outline" size="lg" className="px-8">
                                        Ver proyectos
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* 2. ENERGIA Y DESCARBONIZACION */}
            <section id="energia-descarbonizacion" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            <div className="lg:w-2/3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide uppercase mb-6">
                                    Energía y Descarbonización
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                                    Energía y Descarbonización Industrial
                                </h2>
                                <p className="text-xl font-medium text-gray-800 mb-6 max-w-2xl leading-snug">
                                    Desarrollamos estrategias de eficiencia energética e integración de energías renovables para entornos industriales, orientadas a la reducción de costes operativos y huella de carbono.
                                </p>
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                                    Integramos análisis energético, optimización de consumos y planes de transición energética adaptados a cada instalación.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Auditorías energéticas industriales",
                                        "Integración de renovables",
                                        "Optimización de consumos",
                                        "Planes de descarbonización",
                                        "Monitorización energética",
                                        "Estudios de viabilidad técnica"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" strokeWidth={2} />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-50 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <BarChart3 className="text-green-600 w-5 h-5" />
                                        Resultados Clave
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Sostenibilidad</div>
                                            <div className="font-bold text-lg text-green-700">Reducción de huella de carbono</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Economía</div>
                                            <div className="font-bold text-lg text-green-700">Reducción de costes operativos</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Normativa</div>
                                            <div className="font-bold text-lg text-green-700">Cumplimiento medioambiental</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CICLO INTEGRAL DEL AGUA (Original Layout) */}
            <section id="edar-etap" className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            <div className="lg:w-2/3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                                    Tratamiento de Agua
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                                    Ciclo Integral del Agua
                                </h2>
                                <p className="text-xl font-medium text-gray-800 mb-6 max-w-2xl leading-snug">
                                    Diseño, fabricación e implantación de soluciones para EDAR, ETAP y sistemas de regeneración y reutilización de agua industrial.
                                </p>
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                                    Desarrollamos y ejecutamos proyectos integrales de tratamiento y regeneración de agua, desde el diseño técnico y dimensionamiento hasta la instalación, puesta en marcha y mantenimiento.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Diagnóstico técnico",
                                        "Diseño y dimensionamiento",
                                        "Fabricación e instalación",
                                        "Dirección técnica",
                                        "Puesta en marcha",
                                        "Mantenimiento"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" strokeWidth={2} />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <BarChart3 className="text-primary w-5 h-5" />
                                        Resultados Clave
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Impacto Energético</div>
                                            <div className="font-bold text-lg text-primary">Optimización de consumos</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Operativa</div>
                                            <div className="font-bold text-lg text-primary">Estabilidad del proceso</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Garantía</div>
                                            <div className="font-bold text-lg text-primary">Cumplimiento técnico</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CONTROL TERMICO Y HUMEDAD */}
            <section id="control-termico" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            <div className="lg:w-2/3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs tracking-wide uppercase mb-6">
                                    Control Térmico y Humedad
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                                    Control Térmico y Humedad Industrial
                                </h2>
                                <p className="text-xl font-medium text-gray-800 mb-6 max-w-2xl leading-snug">
                                    Diseño e implantación de sistemas avanzados de climatización industrial y control de procesos críticos donde la temperatura y la humedad impactan directamente en la estabilidad productiva.
                                </p>
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                                    Optimizamos entornos industriales de alta exigencia técnica.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Diseño de sistemas HVAC industriales",
                                        "Control de humedad en procesos productivos",
                                        "Recuperación térmica",
                                        "Optimización energética de climatización",
                                        "Automatización y regulación",
                                        "Mantenimiento técnico especializado"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" strokeWidth={2} />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-50 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <BarChart3 className="text-orange-600 w-5 h-5" />
                                        Resultados Clave
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Calidad</div>
                                            <div className="font-bold text-lg text-orange-700">Estabilidad productiva</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Eficiencia</div>
                                            <div className="font-bold text-lg text-orange-700">Menor consumo energético</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Fiabilidad</div>
                                            <div className="font-bold text-lg text-orange-700">Control de procesos críticos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGallery />

            {/* 4. CAE DETAIL */}
            <section id="cae" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-16 border border-green-100">

                            <div className="flex flex-col gap-8 mb-16">
                                <div className="w-full">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide uppercase mb-6">
                                        Eficiencia Energética
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                        Monetiza tu ahorro energético con CAE
                                        <span className="block text-2xl md:text-3xl font-medium text-gray-600 mt-2">Gestión integral y validación técnica garantizada</span>
                                    </h2>
                                    <div className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                                        <p className="mb-4">
                                            Analizamos actuaciones energéticas susceptibles de generar Certificados de Ahorro Energético (CAE) y gestionamos el proceso completo, desde el cálculo hasta la validación y monetización.
                                        </p>
                                        <p>
                                            Nuestro objetivo es maximizar el retorno económico del ahorro asegurando el cumplimiento técnico y normativo, y así fidelizar a nuestros clientes con más servicios.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* HORIZONTAL TIMELINE */}
                            <div className="relative mb-16 px-4 md:px-0">
                                {/* Mobile Scroll Wrapper */}
                                <div className="overflow-x-auto pb-8 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0 scrollbar-hide">
                                    <div className="flex md:grid md:grid-cols-5 min-w-[800px] md:min-w-0 relative">
                                        {/* Line connecting points - Desktop */}
                                        <div className="hidden md:block absolute top-[22px] left-0 w-full h-0.5 bg-green-200 z-0" />

                                        {[
                                            { step: "Estudio de medidas elegibles", icon: FileCheck },
                                            { step: "Cálculo del ahorro energético", icon: Zap },
                                            { step: "Documentación técnica", icon: ClipboardCheck },
                                            { step: "Tramitación administrativa", icon: Settings },
                                            { step: "Seguimiento hasta validación", icon: CheckCircle2 }
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-col items-center text-center relative z-10 flex-1 px-4 min-w-[160px]">
                                                <div className="w-12 h-12 rounded-full bg-white border-2 border-green-500 flex items-center justify-center text-green-600 shadow-sm mb-4">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-800 leading-snug">{item.step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Mobile Swipe Indication */}
                                <div className="md:hidden text-center text-xs text-green-600/60 font-medium mt-[-10px]">
                                    Desliza para ver el proceso &rarr;
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <Link href="/contacto">
                                    <Button size="lg" className="bg-green-600 text-white border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300 shadow-md font-semibold">
                                        Solicitar estudio CAE
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* 5. METODOLOGIA */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-3">Metodología de trabajo</h2>
                            <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">Proceso estructurado para garantizar el éxito técnico y la calidad en cada fase.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    phase: "Fase Inicial",
                                    icon: ClipboardCheck,
                                    items: ["Definición de objetivos", "Estudio de viabilidad", "Análisis de alternativas", "Estimación de costes"]
                                },
                                {
                                    phase: "Fase Diseño",
                                    icon: Settings,
                                    items: ["Planificación técnica", "Presupuesto detallado", "Redacción documental", "Tramitaciones legales"]
                                },
                                {
                                    phase: "Fase Ejecución",
                                    icon: HardHat,
                                    items: ["Dirección de obra", "Control económico", "Coordinación técnica", "Seguimiento de calidad"]
                                },
                                {
                                    phase: "Fase Final",
                                    icon: ShieldCheck,
                                    items: ["Puesta en marcha", "Verificación de objetivos", "Plan de mantenimiento", "Gestión de garantías"]
                                }
                            ].map((step, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-primary mb-4">
                                        {/* Render icon based on index or type */}
                                        {index === 0 && <ClipboardCheck className="w-6 h-6" />}
                                        {index === 1 && <Settings className="w-6 h-6" />}
                                        {index === 2 && <HardHat className="w-6 h-6" />}
                                        {index === 3 && <ShieldCheck className="w-6 h-6" />}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{step.phase}</h3>
                                    <ul className="space-y-2">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Accordion Alternative - Hidden on md+ (Using simple grid above for now, can implement accordion if needed for strict mobile optimization) */}
                    </div>
                </div>
            </section>



            {/* 7. QUICK CONTACT */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">¿Hablamos?</h2>
                            <Link href="/contacto">
                                <Button size="lg" className="px-10 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg font-semibold">Contactar ahora</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
