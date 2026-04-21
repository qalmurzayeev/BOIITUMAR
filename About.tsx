import { Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.8), rgba(0, 0, 100, 0.8)), url('https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NjQwOTcyOHww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.aboutTitle}</h1>
          <p className="text-xl text-blue-100">{t.aboutSubtitle}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {language === 'kk' &&
                'TOO BOITUMAR Қытайдың провинциясында орналасқан су клапандары, трубопровод арматурасы және центробежді насостарды өндірумен айналысатын жетекші компания. Біз 2017 жылы құрылғаннан бері халықаралық нарықта беделді орын алдық.'}
              {language === 'en' &&
                'TOO BOITUMAR is a leading company located in Hebei Province, China, specializing in the production of water valves, pipe fittings, and centrifugal pumps. Since our establishment in 2017, we have earned a reputable position in the international market.'}
              {language === 'ru' &&
                'ТОО "Boitumar" — динамично развивающаяся компания, специализирующаяся на поставках запорной арматуры для промышленных предприятий. На протяжении более 5 лет мы успешно работаем на рынке и поставляем качественную продукцию для нефтегазовой, химической и других отраслей промышленности. За это время компания накопила значительный практический опыт, выстроила надежные партнерские отношения с производителями и заслужила доверие клиентов. С 2025 года компания вышла на новый этап развития — запущено собственное производство запорной арматуры. Наш производственный цех расположен в г. Шымкент, в индустриальной зоне "Standart", что позволяет нам обеспечивать полный контроль качества продукции, гибкость в производстве и оперативные сроки поставки.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'kk' &&
                'Біздің өнімдер UL/FM, API, ISO 9001, ANSI және басқа да халықаралық сертификаттарға ие. Біз 50-ден астам елге экспорт жасаймыз және әлемдік ірі жобаларда әріптес болып келеміз.'}
              {language === 'en' &&
                'Our products hold UL/FM, API, ISO 9001, ANSI, and other international certifications. We export to over 50 countries and have been partners in major global projects.'}
              {language === 'ru' &&
                'Наши преимущества: Более 5 лет опыта в сфере поставок запорной арматуры. Собственное производство в г. Шымкент Контроль качества на всех этапах. Индивидуальный подход к каждому клиенту. Надежные партнерские связи с международными производителями. Мы ориентированы на долгосрочное сотрудничество и стремимся предлагать нашим клиентам эффективные и надежные решения.'}
            </p>
          </div>
        </div>
      </section>

      {/* Factory & Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl text-blue-900 mb-6">{t.factory}</h2>
              <p className="text-gray-700 mb-6">
                {language === 'kk' &&
                  'Біздің заманауи өндіріс зауытымыз 1 000 шаршы метрден астам аумақты алып жатыр. Автоматтандырылған өндіріс желілері мен озық технологиялар қолданылады.'}
                {language === 'en' &&
                  'Our modern production facility covers an area of over 1 000 square meters. Automated production lines and advanced technologies are utilized.'}
                {language === 'ru' &&
                  'Наш современный производственный завод занимает площадь более 1 000 квадратных метров. Используются автоматизированные производственные линии и передовые технологии.'}
              </p>
              <img src="/1.png" alt="Factory" className="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h2 className="text-3xl text-blue-900 mb-6">{t.qualityControl}</h2>
              <p className="text-gray-700 mb-6">
                {language === 'kk' &&
                  'Біз әр өнімнің сапасына ерекше назар аударамыз. Қатаң сапа бақылауы және тестілеу процестері қолданылады. Әр өнім халықаралық стандарттарға сәйкес тексеріледі.'}
                {language === 'en' &&
                  'We pay special attention to the quality of each product. Strict quality control and testing processes are applied. Each product is tested for compliance with international standards.'}
                {language === 'ru' &&
                  'Мы уделяем особое внимание качеству каждого продукта. Применяются строгие процессы контроля качества и тестирования. Каждый продукт проверяется на соответствие международным стандартам.'}
              </p>
              <img src="/5.png" alt="Quality Control" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-blue-900 mb-6 text-center">{t.team}</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              {language === 'kk' &&
                'Біздің команда — бұл 20-ден астам білікті мамандар, инженерлер және техниктер. Біз үнемі қызметкерлеріміздің біліктілігін арттырып, озық технологияларды меңгеруге тырысамыз.'}
              {language === 'en' &&
                'Our team consists of over 20 qualified specialists, engineers, and technicians. We continuously improve the skills of our employees and strive to master advanced technologies.'}
              {language === 'ru' &&
                'Команда Boitumar — это специалисты с практическим опытом в поставке и производстве запорной арматуры для промышленности. Мы объединяем инженерную экспертизу и знание реальных условий эксплуатации, что позволяет точно подбирать решения и обеспечивать стабильную работу оборудования. Слаженная работа команды гарантирует качество продукции, соблюдение сроков и надежность в каждом проекте.'}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <img
                src="/team.png"
                alt="Team"
                className="rounded-lg shadow-lg w-full h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}