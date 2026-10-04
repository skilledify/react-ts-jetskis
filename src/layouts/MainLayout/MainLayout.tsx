// src/layouts/MainLayout/MainLayout.tsx
import { Outlet } from 'react-router';
import  Breadcrumbs  from '../../components/Breadcrumbs/Breadcrumbs';

// Имитируем ваши компоненты Header и Footer
// Замените их на свои реальные импорты
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer';

export const MainLayout = () => {
  return (
    <div className="app-layout">
      {/* Шапка сайта */}
      <Header />

      {/* Основная область контента */}
      <main className="main-content">
        <div className="container">
          {/* Хлебные крошки выводятся один раз для всех внутренних страниц */}
          <Breadcrumbs />

          {/* Здесь рендерятся страницы: HomePage, CatalogPage, ProductCardPage */}
          <Outlet />
        </div>
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};