import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  const companyInfo = {
    kk: {
      address: 'КАЗАХСТАН, Г.ШЫМКЕНТ, РАЙОН ТУРАН, проспект Абая, уч 2/27 , помещение номер Л',
      description: 'BOITUMAR — су клапандары, трубопровод арматурасы және центробежді насостардың кәсіби өндірушісі. 2017 жылдан бастап сапалы өнімдер жеткізіп келеміз.',
    },
    en: {
      address: 'KAZAKHSTAN, CITY OF SHYMKENT, TURAN DISTRICT, ABAY AVENUE, BUILDING 2/27, ROOM NUMBER L',
      description: 'BOITUMAR is a professional manufacturer of water valves, pipe fittings, and centrifugal pumps. Delivering quality products since 2017.',
    },
    ru: {
      address: 'КАЗАХСТАН, Г.ШЫМКЕНТ, РАЙОН ТУРАН, проспект Абая, уч 2/27 , помещение номер Л',
      description: 'BOITUMAR — производство и поставка запорной арматуры в Казахстане',
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">B</span>
              </div>
              <div>
                <div className="text-white tracking-tight leading-tight">BOITUMAR</div>
              </div>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              {companyInfo[language].description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 mt-1 flex-shrink-0 text-blue-400" />
                <span>{companyInfo[language].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0 text-blue-400" />
                <a href="tel:+7 700 677 7034" className="hover:text-white">
                  +7 700 677 7034
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0 text-blue-400" />
                <a href="mailto:tooboitumar@gmail.com" className="hover:text-white">
                  tooboitumar@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  {t.products}
                </Link>
              </li>
              
             
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">{t.products}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  {language === 'kk' ? 'Клапандар' : language === 'en' ? 'Valves' : 'Клапаны'}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  {language === 'kk' ? 'Насостар' : language === 'en' ? 'Pumps' : 'Насосы'}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  {language === 'kk' ? 'Арматура' : language === 'en' ? 'Fittings' : 'Арматура'}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  {t.waterSupply}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  {t.fireSafety}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  {t.oilGas}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 ТОО BOITUMAR {t.allRightsReserved}.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{t.followUs}:</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
