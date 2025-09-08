export default function SoportePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-4xl font-bold text-purple-700 mb-4 text-center">Soporte</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">¿Tienes alguna duda o necesitas ayuda? Contáctanos y te responderemos lo antes posible.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full border rounded-lg px-4 py-2" />
          <input type="email" placeholder="Correo electrónico" className="w-full border rounded-lg px-4 py-2" />
          <textarea placeholder="Describe tu consulta" className="w-full border rounded-lg px-4 py-2" rows={4} />
          <button type="submit" className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-700 transition">Enviar</button>
        </form>
      </div>
    </main>
  );
}
