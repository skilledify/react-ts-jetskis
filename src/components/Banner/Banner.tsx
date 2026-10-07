import React from 'react';
import { Link } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';
import shared from '../../styles/shared.module.css';
import styles from './Banner.module.css';

// Выносим изображение в переменную через import по вашему пути
import bannerImg from '../../assets/images/content/banner.jpg';

interface BannerProps {
  alt?: string;
}

export const Banner: React.FC<BannerProps> = ({ 
  alt = 'banner' 
}) => {
  return (
    <div className={styles.banner}>
      <div className={shared.container}>
        {/* Клик по баннеру ведёт в каталог */}
        <Link className={styles.banner__link} to={AppRoutes.CATALOG_PAGE}>
          <img 
            className={styles.banner__linkImg} 
            src={bannerImg} 
            alt={alt} 
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;