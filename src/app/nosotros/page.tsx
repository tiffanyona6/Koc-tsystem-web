

import Image from "next/image";
import { Handshake, Lightbulb, Leaf } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="pt-28 md:pt-36 lg:pt-40 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-0 max-w-6xl mx-auto mb-16">
                    {/* Block 1: Title + Intro (Mobile First, Desktop Top-Right) */}
                    <div className="order-1 md:order-2 md:col-start-2 md:mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Sobre Nosotros</h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Koc Technical System es una empresa especializada en el desarrollo, implantación y optimización de soluciones técnicas en procesos industriales donde el consumo de energía, el uso del agua y el control de la temperatura son críticos.
                        </p>
                    </div>

                    {/* Block 2: Image (Mobile Second, Desktop Left Spanning) */}
                    <div className="order-2 md:order-1 md:row-span-2 relative h-64 md:h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/images/about/foto-estudio.png"
                            alt="Equipo KOC Technical System"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Block 3: Mission/Vision (Mobile Third, Desktop Bottom-Right) */}
                    <div className="order-3 md:order-3 md:col-start-2 space-y-6">
                        {/* Mission */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Misión</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Implantar soluciones técnicas en procesos industriales que optimicen el uso de la energía, el agua y la temperatura, transformando la eficiencia obtenida en ahorro real y monetizable mediante Certificados de Ahorro Energético (CAE).
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visión</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Consolidarnos como un referente técnico en la implantación de soluciones industriales que convierten la eficiencia energética e hídrica en valor económico sostenible para la industria.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
