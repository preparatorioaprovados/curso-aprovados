'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Aprovados</h1>
          <nav className="flex gap-6 items-center">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Sobre</a>
            <a href="#results" className="text-gray-600 hover:text-blue-600">Resultados</a>
            <a href="/auth/login" className="text-gray-600 hover:text-blue-600">Login</a>
            <a href="/auth/registro" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Registrar</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-6xl font-bold mb-6">Aprove-se nos Melhores Concursos</h2>
        <p className="text-2xl text-gray-600 mb-12">Aulas com os melhores professores, simulados e redação</p>
        <button className="bg-blue-600 text-white px-10 py-4 text-lg rounded-lg font-semibold">Começar Gratuitamente</button>
      </section>

      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16">Por que Aprovados?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">📚 Aulas ao Vivo</h4>
              <p className="text-gray-600">Com os melhores professores</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">⏱️ Simulados</h4>
              <p className="text-gray-600">Com timer e análise</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">✍️ Redação</h4>
              <p className="text-gray-600">Correção de professores</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">📊 Analytics</h4>
              <p className="text-gray-600">Acompanhe seu progresso</p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h3 className="text-4xl font-bold mb-16">Resultados Reais</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-6xl font-bold text-blue-600 mb-2">1.234+</p>
            <p className="text-xl text-gray-600">Alunos Aprovados</p>
          </div>
          <div>
            <p className="text-6xl font-bold text-blue-600 mb-2">78%</p>
            <p className="text-xl text-gray-600">Taxa de Aprovação</p>
          </div>
          <div>
            <p className="text-6xl font-bold text-blue-600 mb-2">6 meses</p>
            <p className="text-xl text-gray-600">Tempo Médio</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Depoimentos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Passei em 6 meses!"</p>
              <p className="font-bold">João Silva - PMES 2024</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Redação melhorou muito"</p>
              <p className="font-bold">Maria Santos - PM-BA 2024</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Melhor que concorrentes"</p>
              <p className="font-bold">Carlos Oliveira - CBM-BA 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center mb-16">Planos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-gray-200 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Bronze</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">R$ 97<span className="text-lg">/mês</span></p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Escolher</button>
          </div>
          <div className="border-2 border-blue-600 p-8 rounded-lg">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Mais Popular</span>
            <h4 className="text-2xl font-bold mb-2">Prata</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">R$ 197<span className="text-lg">/mês</span></p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">Escolher</button>
          </div>
          <div className="border-2 border-gray-200 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Ouro</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">R$ 1.997<span className="text-lg"> once</span></p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Escolher</button>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Pronto para Passar?</h3>
        <p className="text-xl mb-8">Comece sua jornada agora</p>
        <button className="bg-white text-blue-600 px-10 py-4 text-lg rounded-lg font-semibold">Registrar Gratuitamente</button>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2026 Curso Aprovados. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
