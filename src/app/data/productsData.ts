export interface Product {
  id: string;
  nameKk: string;
  nameEn: string;
  nameRu: string;
  category: string;
  categoryKk: string;
  categoryEn: string;
  categoryRu: string;
  image: string;
  descriptionKk: string;
  descriptionEn: string;
  descriptionRu: string;
  specifications: {
    labelKk: string;
    labelEn: string;
    labelRu: string;
    value: string;
  }[];
  standards: string[];
  applicationsKk: string[];
  applicationsEn: string[];
  applicationsRu: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
  id: 'gate-valve-1',
  nameRu: 'Задвижка ВТМ',
  nameKk: 'Задвижка ВТМ',
  nameEn: 'Gate Valve ВТМ',
  category: 'gate-valves',
  categoryKk: 'Задвижкалар',
  categoryRu: 'Задвижки',
  categoryEn: 'Gate Valves',
  image: '/zad.png',
  descriptionRu: 'Задвижки BTM — это промышленная запорная арматура для магистральных и технологических трубопроводов, где критичны надежность, герметичность и ресурс. Конструкция оптимизирована для стабильной работы при высоких давлениях и температурах, с минимальными потерями давления и высокой стойкостью к износу. Арматура применяется в нефтегазовой, химической и тяжелой промышленности, а также в системах водоснабжения и инфраструктурных проектах. Исполнения подбираются под среду — от воды и нефтепродуктов до агрессивных жидкостей, включая кислоты, с учетом материалов корпуса и уплотнений.',
  specifications: [],
  standards: [],
},
  {
    id: 'check-valve-1',
    nameKk: 'Кері клапан',
    nameRu: 'Обратный клапан',
    nameEn: 'Check Valve',
    category: 'valves', // 'valves' ID-іне сәйкес келеді
    categoryKk: 'Клапандар',
    categoryRu: 'Клапаны',
    categoryEn: 'Valves',
    image: '/clap.png', // Клапанның суреті
    descriptionKk: 'Ағынның кері бағытталуын болдырмауға арналған жоғары сапалы кері клапан. Су және бу жүйелері үшін қолайлы.',
    descriptionRu: 'Клапаны BTM разработаны для точного и надежного перекрытия потока в технологических линиях. Геометрия проточной части и уплотнений обеспечивает стабильные характеристики при переменных нагрузках, а также длительный срок службы в сложных режимах эксплуатации. Используются в энергетике, нефтегазовом секторе и химическом производстве. Предназначены для работы с паром, водой, нефтепродуктами и химически активными средами, включая агрессивные составы при соответствующем подборе материалов.',
    descriptionEn: 'High-quality check valve to prevent backflow. Suitable for water and steam systems.',
  },
  {
  id: 'ball-valve-1',
  nameRu: 'Шаровой кран стальной',
  nameKk: 'Болат шар кран',
  nameEn: 'Steel Ball Valve',
  category: 'ball-valves',
  categoryKk: 'Шар крандар',
  categoryRu: 'Краны шаровые',
  categoryEn: 'Ball Valves',
  image: '/kran.png',
  descriptionRu: 'Шаровые краны BTM обеспечивают быстрое и абсолютно герметичное перекрытие потока. Конструкция с прецизионной обработкой шара и седел гарантирует низкий крутящий момент, высокую износостойкость и стабильную герметичность на протяжении всего срока службы. Решения ориентированы на нефтегазовую отрасль, газораспределительные системы и химические процессы. Подходят для транспортировки газа, нефти, нефтепродуктов, воды и агрессивных жидкостей (включая кислоты) в специализированных исполнениях.',
  descriptionKk: 'BTM шар крандары ағынды жылдам және толық герметикалық жабуды қамтамасыз етеді.',
  descriptionEn: 'BTM ball valves provide fast and fully hermetic flow shut-off for oil, gas and chemical systems.',
  specifications: [],
  standards: [],
},
{
  id: 'butterfly-1',
  nameRu: 'Дисковый затвор поворотный',
  nameKk: 'Айналмалы диск затворы',
  nameEn: 'Butterfly Valve',
  category: 'butterfly-valves',
  categoryKk: 'Диск затворлар',
  categoryRu: 'Затворы дисковые поворотные',
  categoryEn: 'Butterfly Valves',
  image: '/zat.png',
  descriptionRu: 'Дисковые затворы BTM — эффективное решение для трубопроводов большого диаметра, где важны компактность, быстрый монтаж и надежная работа. Оптимизированная конструкция обеспечивает стабильное перекрытие потока и устойчивость к рабочим нагрузкам. Применяются в промышленных и инфраструктурных системах, включая нефтегазовую и химическую отрасли. Подходят для воды, сточных вод, нефтепродуктов и химических сред, включая умеренно агрессивные жидкости.',
  descriptionKk: 'BTM диск затворлары үлкен диаметрлі құбыржолдар үшін тиімді шешім.',
  descriptionEn: 'BTM butterfly valves are an efficient solution for large-diameter pipelines.',
  specifications: [],
  standards: [],
},
];
export const productCategories = [
  {
    id: 'gate-valves',
    nameKk: 'Задвижкалар',
    nameEn: 'Gate Valves',
    nameRu: 'Задвижки',
    descriptionKk: 'Әртүрлі типтегі задвижкалар',
    descriptionEn: 'Various types of gate valves',
    descriptionRu: 'Различные типы задвижек',
  },
  {
    id: 'valves',
    nameKk: 'Клапандар',
    nameEn: 'Valves',
    nameRu: 'Клапаны',
    descriptionKk: 'Кері және реттегіш клапандар',
    descriptionEn: 'Check and control valves',
    descriptionRu: 'Обратные и регулирующие клапаны',
  },
  
  {
    id: 'ball-valves',
    nameKk: 'Шарлы крандар',
    nameEn: 'Ball Valves',
    nameRu: 'Краны шаровые',
    descriptionKk: 'Жоғары сапалы шарлы крандар',
    descriptionEn: 'High-quality ball valves',
    descriptionRu: 'Высококачественные шаровые краны',
  },
  {
    id: 'butterfly-valves',
    nameKk: 'Көбелек затворлар',
    nameEn: 'Butterfly Valves',
    nameRu: 'Затворы дисковые поворотные',
    descriptionKk: 'Дискілі бұрылмалы затворлар',
    descriptionEn: 'Butterfly valves',
    descriptionRu: 'Дисковые поворотные затворы',
  },
];