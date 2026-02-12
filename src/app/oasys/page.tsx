import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Droplets, Zap, ChevronRight, TrendingUp } from "lucide-react";

export default function OasysPage() {
    return (
        <main className="pt-28 md:pt-36 lg:pt-40 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30 pb-20">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 skew-x-12 transform origin-top-right blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm mb-6 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Proyecto Estratégico 2026
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            Oasys <span className="text-primary">Project</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                            Innovación aplicada a la eficiencia energética e hídrica industrial.
                        </p>
                        <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
                            Proyecto estratégico en desarrollo orientado a generar ahorro medible, retorno económico y sostenibilidad real.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contacto">
                                <Button size="lg" className="shadow-lg min-w-[200px]">
                                    Contactar para inversión
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1 - The Problem */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">El Desafío Industrial</h2>
                        <p className="text-gray-600">
                            La industria actual se enfrenta a retos críticos que requieren soluciones inmediatas e integradas.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Costes energéticos crecientes", icon: Zap, desc: "El aumento constante de precios impacta directamente en los márgenes operativos." },
                            { title: "Ineficiencia hídrica", icon: Droplets, desc: "El desperdicio de agua y la falta de reutilización son insostenibles económica y ambientalmente." },
                            { title: "Falta de integración", icon: TrendingUp, desc: "Sistemas aislados que no se comunican entre sí, impidiendo una visión global." },
                            { title: "Exigencias regulatorias", icon: Leaf, desc: "Normativas cada vez más estrictas sobre huella de carbono y uso de recursos." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 group">
                                <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2 - The Solution */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6">
                                La Solución Oasys
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Integración inteligente de energía y agua.
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Integración energía + agua en una plataforma unificada.",
                                    "Monitorización inteligente y predictiva en tiempo real.",
                                    "Optimización automatizada de procesos críticos.",
                                    "Modelo escalable adaptable a cualquier industria."
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                        <p className="text-lg text-gray-300">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl p-8 flex items-center justify-center">
                                {/* Placeholder for illustration/graphic */}
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                        <div className="w-16 h-16 bg-primary rounded-full" />
                                    </div>
                                    <p className="text-gray-400 font-mono text-sm">Oasys Core System</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Impact */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Impacto Proyectado</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto">
                            Métricas estimadas basadas en modelos de simulación iniciales.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
                        {[
                            { val: "-30%", label: "Ahorro Energético" },
                            { val: "-45%", label: "Consumo Hídrico" },
                            { val: "< 24m", label: "ROI Estimado" },
                            { val: "100%", label: "Sostenible" }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.val}</div>
                                <div className="text-sm md:text-base font-medium text-blue-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 - Status */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Estado del Proyecto</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {["Fase Actual", "Desarrollo Técnico", "Validación", "Financiación"].map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-bold text-primary border border-blue-100">
                                    {idx + 1}
                                </div>
                                <span className="font-semibold text-gray-700">{step}</span>
                                {idx < 3 && <div className="hidden md:block w-12 h-px bg-gray-200" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5 - Investment Opportunity */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 text-center shadow-xl shadow-blue-900/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Oportunidad de Inversión</h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Oasys Project representa una oportunidad estratégica para participar en una solución tecnológica con alto potencial de crecimiento en el sector industrial sostenible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contacto">
                                <Button size="lg" className="px-8 py-6 text-lg shadow-lg hover:translate-y-[-2px] transition-transform">
                                    Solicitar dossier para inversores
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
