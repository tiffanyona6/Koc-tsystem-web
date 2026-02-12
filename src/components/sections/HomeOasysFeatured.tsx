import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Lock, TrendingUp } from "lucide-react";

export function HomeOasysFeatured() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50/20 border-y border-gray-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/pattern-grid.svg')] opacity-[0.03]" />

            <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Column (Left on Desktop) */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Proyecto Estratégico 2026
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-8 w-1 bg-primary rounded-full hidden md:block"></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                Oasys <span className="text-primary">Project</span>
                            </h2>
                        </div>

                        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 leading-tight">
                            Ahorro energético y optimización integral del agua.
                        </h3>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
                            Oasys Project es una solución innovadora desarrollada por KOC Technical System para maximizar la eficiencia energética y la gestión inteligente del agua en entornos industriales. <span className="block mt-4 text-sm font-semibold text-gray-500">Actualmente en fase de expansión y búsqueda de socios estratégicos.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/oasys">
                                <Button size="lg" className="shadow-lg min-w-[220px] justify-between group">
                                    Información para inversores
                                    <Lock className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </Link>
                            <Link href="/oasys">
                                <Button variant="outline" size="lg" className="min-w-[160px] group">
                                    Ver proyecto
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Column (Right on Desktop) */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative aspect-video lg:aspect-square bg-gradient-to-br from-gray-100 to-white rounded-3xl border border-gray-200 shadow-2xl p-8 flex items-center justify-center overflow-hidden group">
                            {/* Abstract visual representation since we don't have the image yet */}
                            <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="text-center relative z-10 p-8 rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm shadow-sm">
                                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                    <TrendingUp className="w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Oasys Innovation</h4>
                                <p className="text-gray-500 text-sm">Visualización del proyecto en desarrollo</p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
