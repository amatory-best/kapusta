import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
import MinisterSection from './components/MinisterSection';
import DocumentsSection from './components/DocumentsSection';
import QueueWidget from './components/QueueWidget';
import AppealForm from './components/AppealForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      
      {/* Emergency alert */}
      <div className="bg-yellow-100 border-b-2 border-yellow-300 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-2xl animate-bounce">⚠️</span>
          <p className="text-sm text-yellow-900">
            <strong>ВНИМАНИЕ!</strong> В связи с переходом на летнее/зимнее/непонятное время,
            график работы министерства может отличаться от указанного на сайте, на табличке у входа,
            от того что сказали по телефону, и вообще от всего.
          </p>
        </div>
      </div>

      <ServicesSection />
      <NewsSection />
      <MinisterSection />
      <QueueWidget />
      <DocumentsSection />
      <AppealForm />
      <Footer />
      <CookieBanner />
    </div>
  );
}
