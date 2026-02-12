import { ContactForm } from "@/components/layout/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="pt-28 md:pt-36 lg:pt-40 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto mb-12 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contacto</h1>
                    <p className="text-xl text-gray-600">
                        Estamos aquí para ayudarle. <span className="hidden md:inline">Cuéntenos su proyecto o necesidad y le responderemos con la mayor brevedad.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Cards */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Direct Info Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Información Directa</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Teléfono</span>
                                        <a href="tel:950531229" className="block text-lg font-semibold text-gray-900 hover:text-secondary">
                                            950 531 229
                                        </a>
                                        <a href="tel:+34606442514" className="block text-lg font-semibold text-gray-900 hover:text-secondary">
                                            +34 606 442 514
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Email</span>
                                        <a href="mailto:koc@technicalsystem.com" className="text-lg font-semibold text-gray-900 hover:text-secondary">
                                            koc@technicalsystem.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Ubicación</span>
                                        <p className="text-gray-900 font-medium leading-relaxed">
                                            C/ Chillida Nº4<br />
                                            Entrep. Edif. Carrida<br />
                                            Roquetas de Mar, Almería
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Schedule Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Horario</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Horario</span>
                                        <p className="text-lg font-semibold text-gray-900">
                                            De 8h a 15h
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-2">
                        <p className="text-xl text-gray-600 mb-6 md:hidden">
                            Cuéntenos su proyecto o necesidad y le responderemos con la mayor brevedad.
                        </p>
                        <ContactForm />
                    </div>
                </div>

                {/* Location Map */}
                <div className="max-w-6xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-sm h-[250px] md:h-[350px] relative z-0">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Edificio%20Carrida%20Plaza%2C%20C.%20Chillida%2C%204%2C%2004740%20Roquetas%20de%20Mar%2C%20Almer%C3%ADa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="Ubicación KOC Technical System"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
