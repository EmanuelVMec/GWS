export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#1BC6D9]/30 flex flex-col items-center justify-start p-4 sm:p-8">
      <section className="w-full max-w-4xl mx-auto mt-8 mb-12">
        <h1 className="text-4xl font-extrabold text-center text-[#2A8CFF] mb-4">Nuestros Servicios</h1>
        <p className="text-center text-lg text-[#0A0A0A] mb-8 max-w-2xl mx-auto">En GWS ofrecemos soluciones digitales integrales para tu empresa o proyecto. Selecciona el servicio que más se adapte a tus necesidades y revisa nuestros planes.</p>

        {/* Servicio: Chatbots & Automatización */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B5B5B5] p-8 mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl text-[#1BC6D9]">🤖</span>
            <h2 className="text-2xl font-bold text-[#2A8CFF]">Chatbots & Automatización</h2>
          </div>
          <p className="text-[#0A0A0A] mb-6">Automatiza la atención al cliente y procesos internos con bots inteligentes y soluciones de integración.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Chatbot Básico</h3>
                <p className="mt-2 text-[#B5B5B5]">Respuestas automáticas y FAQ.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$149</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/único</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Chatbot web o WhatsApp</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Respuestas automáticas</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Integración avanzada</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> IA personalizada</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Soporte premium</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Chatbot Pro</h3>
                <p className="mt-2 text-[#B5B5B5]">Integración con sistemas y flujos personalizados.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$299</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/único</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Integración con web y apps</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Flujos personalizados</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte y capacitación</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> IA avanzada</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Integración con CRM</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Chatbot Empresarial</h3>
                <p className="mt-2 text-[#B5B5B5]">IA, automatización y soporte premium.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$599+</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/personalizado</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> IA personalizada</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Integración con CRM y sistemas</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Automatización avanzada</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte premium</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Consultoría y escalabilidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio: Email Marketing */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B5B5B5] p-8 mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl text-[#1BC6D9]">📧</span>
            <h2 className="text-2xl font-bold text-[#2A8CFF]">Email Marketing</h2>
          </div>
          <p className="text-[#0A0A0A] mb-6">Campañas de email, automatización y gestión profesional de dominios para tu marca.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Campaña Básica</h3>
                <p className="mt-2 text-[#B5B5B5]">Envío de correos y diseño simple.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$79</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/único</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Hasta 1,000 envíos</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Diseño plantilla básica</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Segmentación avanzada</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Automatización</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Reportes premium</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Campaña Pro</h3>
                <p className="mt-2 text-[#B5B5B5]">Segmentación y automatización.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$199</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/único</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Hasta 5,000 envíos</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Segmentación avanzada</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Automatización básica</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Reportes premium</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Consultoría personalizada</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Campaña Empresarial</h3>
                <p className="mt-2 text-[#B5B5B5]">Automatización, reportes y consultoría.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$399+</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/personalizado</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Envíos ilimitados</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Automatización avanzada</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Reportes premium</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Consultoría personalizada</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Integración con CRM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio: Mantenimiento & Reparación */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B5B5B5] p-8 mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl text-[#1BC6D9]">🛠️</span>
            <h2 className="text-2xl font-bold text-[#2A8CFF]">Mantenimiento & Reparación</h2>
          </div>
          <p className="text-[#0A0A0A] mb-6">Cuidado preventivo y correctivo de equipos, servidores y sistemas. Optimización y soporte técnico.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Mantenimiento Básico</h3>
                <p className="mt-2 text-[#B5B5B5]">Revisión y limpieza de equipos.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$49</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/por equipo</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Limpieza física</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Revisión de software</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Reparación avanzada</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Soporte remoto</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Optimización avanzada</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Mantenimiento Pro</h3>
                <p className="mt-2 text-[#B5B5B5]">Optimización y soporte remoto.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$99</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/por equipo</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Optimización de sistema</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte remoto</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Reparación básica</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Reparación avanzada</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Consultoría premium</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Mantenimiento Empresarial</h3>
                <p className="mt-2 text-[#B5B5B5]">Soporte, reparación y consultoría premium.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$299+</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/personalizado</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Reparación avanzada</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Consultoría y soporte premium</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Optimización y seguridad</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Mantenimiento preventivo</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte remoto y presencial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio: Soporte & Actualización */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B5B5B5] p-8 mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl text-[#1BC6D9]">💻</span>
            <h2 className="text-2xl font-bold text-[#2A8CFF]">Soporte & Actualización</h2>
          </div>
          <p className="text-[#0A0A0A] mb-6">Asistencia técnica, actualización de hardware y software, soporte remoto y presencial para empresas y particulares.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Soporte Básico</h3>
                <p className="mt-2 text-[#B5B5B5]">Resolución de incidencias y asistencia remota.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$39</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/por caso</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte remoto</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Diagnóstico básico</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Actualización hardware</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Soporte presencial</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Consultoría premium</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Soporte Pro</h3>
                <p className="mt-2 text-[#B5B5B5]">Actualización y soporte presencial.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$99</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/por caso</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Actualización hardware/software</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte presencial</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Diagnóstico avanzado</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Consultoría premium</li>
                  <li className="flex items-center gap-2 text-[#B5B5B5]"><span className="text-[#B5B5B5]">✖</span> Mantenimiento preventivo</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-[#B5B5B5] bg-white shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Soporte Empresarial</h3>
                <p className="mt-2 text-[#B5B5B5]">Consultoría, soporte y actualización premium.</p>
                <p className="mt-2">
                  <strong className="text-3xl font-bold text-[#2A8CFF]">$299+</strong>
                  <span className="text-sm font-medium text-[#B5B5B5]">/personalizado</span>
                </p>
                <a className="mt-4 block rounded-md border border-[#2A8CFF] bg-[#2A8CFF] px-8 py-2 text-center text-sm font-semibold text-white hover:bg-transparent hover:text-[#2A8CFF] transition" href="/soporte">Solicitar</a>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Consultoría premium</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Soporte remoto y presencial</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Actualización y mantenimiento</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Seguridad y escalabilidad</li>
                  <li className="flex items-center gap-2 text-[#0A0A0A]"><span className="text-[#1BC6D9]">✔</span> Atención prioritaria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
