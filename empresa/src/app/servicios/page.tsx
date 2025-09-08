export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4 text-center">Nuestros Servicios</h1>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="border-b pb-2">Páginas Web modernas y responsivas</li>
          <li className="border-b pb-2">Aplicaciones móviles a medida</li>
          <li className="border-b pb-2">Desarrollo de ChatBots inteligentes</li>
          <li className="border-b pb-2">Gestión profesional de Redes Sociales</li>
          <li>Hosting seguro y escalable</li>
        </ul>
        <div className="mt-8 flex justify-center">
          <a href="/soporte" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition">Solicitar información</a>
        </div>
      </div>
    </main>
  );
}
