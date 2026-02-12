import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Droplets, Zap, Thermometer, FileText } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="pt-28 md:pt-36 lg:pt-40 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nuestros Servicios</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Soluciones integrales de ingeniería para optimizar recursos y mejorar la eficiencia industrial.
                    </p>
                </div>

                <div className="grid gap-12 max-w-5xl mx-auto">
                    {/* Service 1 */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                            <Zap className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Energía y Eficiencia</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Desarrollamos estrategias integrales de descarbonización y eficiencia energética.
                                Desde auditorías detalladas hasta la implementación de energías renovables (fotovoltaica, biomasa)
                                y sistemas de recuperación de calor.
                            </p>
                            <Link href="/contacto">
                                <Button size="lg" className="shadow-lg">Consultar proyecto</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 text-secondary">
                            <Droplets className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agua (EDAR, ETAP, Reutilización)</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Expertos en el ciclo integral del agua. Diseñamos y optimizamos Estaciones Depuradoras (EDAR)
                                y de Tratamiento de Agua Potable (ETAP). Implementamos sistemas avanzados de regeneración
                                para reutilización industrial y agrícola.
                            </p>
                            <Link href="/contacto">
                                <Button size="lg" className="shadow-lg">Consultar proyecto</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 text-tertiary">
                            <Thermometer className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Control Térmico y de Humedad</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Soluciones precisas para procesos que requieren condiciones ambientales estrictas.
                                Control de temperatura y humedad para industria alimentaria, farmacéutica y procesos críticos.
                            </p>
                            <Link href="/contacto">
                                <Button size="lg" className="shadow-lg">Consultar proyecto</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start border-l-4 border-green-500">
                        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-700">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificados de Ahorro Energético (CAE)</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Gestión completa de CAEs. Identificamos actuaciones elegibles, gestionamos la documentación
                                y facilitamos la monetización de sus ahorros energéticos. Un retorno directo a su cuenta de resultados.
                            </p>
                            <Link href="/contacto">
                                <Button className="bg-green-600 hover:bg-green-700 text-white">Gestionar mis CAEs</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
