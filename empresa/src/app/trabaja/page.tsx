export default function TrabajaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">Trabaja con Nosotros</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">¿Te gustaría formar parte de nuestro equipo? Envíanos tu CV y cuéntanos por qué eres el candidato ideal.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre completo" className="w-full border rounded-lg px-4 py-2" />
          <input type="email" placeholder="Correo electrónico" className="w-full border rounded-lg px-4 py-2" />
          <textarea placeholder="Cuéntanos sobre ti" className="w-full border rounded-lg px-4 py-2" rows={4} />
          <button type="submit" className="w-full bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition">Enviar</button>
        </form>
      </div>
    </main>
  );
}
