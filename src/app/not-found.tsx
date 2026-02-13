import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 font-poppins">
            <div className="relative">
                <h1 className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none select-none font-montserrat">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-bold text-gray-800 bg-gray-50 px-6 py-2 rounded-xl border border-gray-100 shadow-sm">
                        Página no encontrada
                    </span>
                </div>
            </div>

            <p className="text-gray-500 mt-8 mb-10 text-center max-w-md text-lg">
                La ruta que intentas visitar no existe o ha sido movida permanentemente.
            </p>

            <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 h-14 px-8 text-lg bg-[#0047AB] text-white border-2 border-transparent hover:bg-white hover:text-[#0047AB] hover:border-[#0047AB] shadow-md hover:shadow-lg"
            >
                Volver al Inicio
            </Link>
        </div>
    );
}
