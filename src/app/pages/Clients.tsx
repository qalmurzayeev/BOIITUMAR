export function Clients() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Наши клиенты</h1>
          <p className="text-xl text-blue-100">Компании, которым мы доверяем</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Поставки */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Компания Boitumar осуществляет поставки запорной арматуры для предприятий, входящих в структуры крупнейших национальных компаний Республики Казахстан:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-lg">
              <li>НАК «Казатомпром»</li>
              <li>АО «КазМунайГаз»</li>
            </ul>
          </div>

          {/* Отрасли */}
          <div className="mb-12 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Отрасли применения</h2>
            <p className="text-gray-700 mb-4">Наша продукция используется на предприятиях следующих отраслей:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Уранодобывающая промышленность</li>
              <li>Нефтегазовая отрасль</li>
              <li>Переработка и транспортировка сырья</li>
              <li>Химическое производство</li>
            </ul>
          </div>

          {/* Опыт и надежность */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Опыт и надежность</h2>
            <p className="text-gray-700 mb-4">
              Сотрудничество с предприятиями группы Казатомпром и КазМунайГаз подтверждает:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Соответствие высоким промышленным требованиям</li>
              <li>Надежность оборудования в сложных условиях эксплуатации</li>
              <li>Опыт поставок на стратегические объекты</li>
              <li>Понимание специфики отраслевых процессов</li>
            </ul>
          </div>

          {/* Логотиптер */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center"></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-64">
                <img src="/kmg.png" alt="Казатомпром" className="h-20 object-contain" />
                <p className="text-gray-700 font-semibold text-center">НАК «Казатомпром»</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-64">
                <img src="/kazz.png" alt="КазМунайГаз" className="h-20 object-contain" />
                <p className="text-gray-700 font-semibold text-center">АО «КазМунайГаз»</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}