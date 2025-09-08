export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Nuestro Equipo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mb-2" />
            <h2 className="font-semibold text-lg">Ana Torres</h2>
            <p className="text-gray-500">CEO & Fundadora</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mb-2" />
            <h2 className="font-semibold text-lg">Luis Gómez</h2>
            <p className="text-gray-500">Desarrollador Full Stack</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mb-2" />
            <h2 className="font-semibold text-lg">María López</h2>
            <p className="text-gray-500">Diseñadora UX/UI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mb-2" />
            <h2 className="font-semibold text-lg">Carlos Ruiz</h2>
            <p className="text-gray-500">Soporte Técnico</p>
          </div>
        </div>
      </div>
    </main>
  );
}
