import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { products, productCategories } from '../data/productsData';

export function Products() {
  const { t, language } = useLanguage();
  // Бастапқыда 'all' емес, бірінші категория тұруы үшін:
  const [selectedCategory, setSelectedCategory] = useState<string>(productCategories[0].id);

  // Таңдалған категорияға жататын тауарлардың ішінен тек біріншісін аламыз
  const activeProduct = products.find((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.products}</h1>
          <p className="text-xl text-blue-100">{t.allProducts}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-2xl text-blue-900 mb-6 font-bold">{t.productCategories}</h2>
            <div className="flex flex-wrap gap-4">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {language === 'kk' ? category.nameKk : language === 'en' ? category.nameEn : category.nameRu}
                </button>
              ))}
            </div>
          </div>

          {/* Бір ғана тауарды көрсету (Single View) */}
          {activeProduct ? (
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn">
              
              {/* Сол жақ: Үлкен фото */}
              <div className="md:w-1/2 overflow-hidden bg-gray-50">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.nameRu}
                  className="w-full h-full object-contain max-h-[500px] p-4 transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Оң жақ: Характеристика мен сипаттама */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase">
                    {language === 'kk' ? activeProduct.categoryKk : activeProduct.categoryRu}
                  </span>
                  <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                    {language === 'kk' ? activeProduct.nameKk : language === 'ru' ? activeProduct.nameRu : activeProduct.nameEn}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {language === 'kk' ? activeProduct.descriptionKk : language === 'ru' ? activeProduct.descriptionRu : activeProduct.descriptionEn}
                  </p>
                </div>

                

                <div className="flex items-center gap-6">
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
                  >
                    {t.getQuote}
                  </Link>
                 
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">Мәлімет табылмады</div>
          )}
        </div>
      </section>
    </div>
  );
}