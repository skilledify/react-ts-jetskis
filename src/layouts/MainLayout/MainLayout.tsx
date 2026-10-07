// src/layouts/MainLayout/MainLayout.tsx
import { Outlet } from 'react-router';
import  Breadcrumbs  from '../../components/Breadcrumbs/Breadcrumbs';

// Имитируем ваши компоненты Header и Footer
// Замените их на свои реальные импорты
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import shared from '../../styles/shared.module.css';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.appLayout}>
      {/* Шапка сайта */}
      <Header />

      {/* Основная область контента */}
      <main className={styles.mainContent}>
        {/* Контейнер нужен только крошкам: у страниц и секций собственные
            контейнеры, иначе контент получает двойной отступ и не
            совпадает по краям с Header */}
        <div className={shared.container}>
          {/* Хлебные крошки выводятся один раз для всех внутренних страниц */}
          <Breadcrumbs />
        </div>

        {/* Здесь рендерятся страницы: HomePage, CatalogPage, ProductCardPage */}
        <Outlet />
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};