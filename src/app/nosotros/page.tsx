

import Image from "next/image";
import { Handshake, Lightbulb, Leaf } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white">
            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-10 md:pt-36 md:pb-16 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-primary mb-6 leading-tight">
                                Sobre Nosotros
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Block 2: Image */}
                        <div className="relative h-full min-h-[400px] md:min-h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src="/images/about/foto-estudio.png"
                                alt="Equipo KOC Technical System"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Block 3: Mission/Vision */}
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Koc Technical System es una empresa especializada en el desarrollo, implantación y optimización de soluciones técnicas en procesos industriales donde el consumo de energía, el uso del agua y el control de la temperatura son críticos.
                            </p>
                            {/* Mission */}
                            <div className="bg-white p-8 rounded-xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Implantar soluciones técnicas en procesos industriales que optimicen el uso de la energía, el agua y la temperatura, transformando la eficiencia obtenida en ahorro real y monetizable mediante Certificados de Ahorro Energético (CAE).
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-white p-8 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Consolidarnos como un referente técnico en la implantación de soluciones industriales que convierten la eficiencia energética e hídrica en valor económico sostenible para la industria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Section */}
            <div className="w-full bg-blue-50/30 border-y border-blue-100/50 py-8 md:py-16 mb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-center text-center divide-y md:divide-y-0 md:divide-x divide-blue-200/50">
                        <div className="px-4 py-8 md:py-0">
                            <div className="text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.1] font-semibold text-primary mb-2">+26</div>
                            <div className="text-gray-600 font-medium text-lg lg:text-[16px]">Años de experiencia</div>
                        </div>
                        <div className="px-4 py-8 md:py-0">
                            <div className="text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.1] font-semibold text-primary mb-2">+100</div>
                            <div className="text-gray-600 font-medium text-lg lg:text-[16px]">Clientes que confían</div>
                        </div>
                        <div className="px-4 py-8 md:py-0">
                            <div className="text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.1] font-semibold text-primary mb-2">+200</div>
                            <div className="text-gray-600 font-medium text-lg lg:text-[16px]">Proyectos llave en mano</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">

                {/* Technical Text Block */}
                <div className="max-w-6xl mx-auto mb-24">
                    <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed text-justify">
                        <p>
                            Nuestra experiencia en distintos sectores industriales nos permite intervenir directamente en los procesos productivos, analizando y mejorando sistemas energéticos, térmicos e hídricos para reducir consumos, aumentar la eficiencia y garantizar resultados medibles. Acompañamos al cliente desde el estudio técnico inicial hasta la implantación completa del proyecto, mediante soluciones llave en mano adaptadas a cada instalación.
                        </p>
                        <p>
                            Las mejoras implantadas se traducen en ahorros reales y verificables, que Koc Technical System convierte en Certificados de Ahorro Energético (CAE), permitiendo a nuestros clientes monetizar la eficiencia obtenida y maximizar el retorno de la inversión. Nuestro enfoque se basa en la ingeniería aplicada, el rigor técnico y la obtención de soluciones eficaces, sostenibles y económicamente rentables para la industria.
                        </p>
                    </div>
                </div>

                {/* Values Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 md:mb-20 lg:mb-28">
                    {/* Card 1: Confianza */}
                    <div className="group p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-xl">
                        <div className="mb-6 text-secondary group-hover:text-white transition-colors duration-300">
                            <Handshake className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">Confianza</h3>
                        <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                            Relaciones a largo plazo basadas en la honestidad y el rigor técnico.
                        </p>
                    </div>

                    {/* Card 2: Innovación */}
                    <div className="group p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-xl">
                        <div className="mb-6 text-secondary group-hover:text-white transition-colors duration-300">
                            <Lightbulb className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">Innovación</h3>
                        <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                            Aplicación de las últimas tecnologías disponibles para maximizar el rendimiento.
                        </p>
                    </div>

                    {/* Card 3: Sostenibilidad */}
                    <div className="group p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-xl">
                        <div className="mb-6 text-secondary group-hover:text-white transition-colors duration-300">
                            <Leaf className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">Sostenibilidad</h3>
                        <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                            Compromiso real con la descarbonización y el uso responsable de los recursos.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
