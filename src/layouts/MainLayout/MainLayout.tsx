// src/layouts/MainLayout/MainLayout.tsx
import { Outlet } from 'react-router';
import  Breadcrumbs  from '../../components/Breadcrumbs/Breadcrumbs';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import shared from '../../styles/shared.module.css';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.appLayout}>

      <Header />

   
      <main className={styles.mainContent}>

        <div className={shared.container}>
        
          <Breadcrumbs />
        </div>

 
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};