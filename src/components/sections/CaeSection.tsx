import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FileCheck } from "lucide-react";

export function CaeSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 border-t border-green-100">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6">
                    <FileCheck className="text-green-600 w-8 h-8" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Certificados de Ahorro Energético (CAE)
                </h2>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                    Gestionamos íntegramente sus CAEs para que monetice sus ahorros energéticos sin trámites complejos.
                    <span className="font-semibold block mt-2">Rentabilidad directa para su industria.</span>
                </p>

                <Link href="/servicios">
                    <Button className="bg-green-600 hover:bg-green-700 text-white shadow-md">
                        Consultar sobre CAE
                    </Button>
                </Link>
            </div>
        </section>
    );
}
