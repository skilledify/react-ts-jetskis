import React from 'react';
import styles from './Banner.module.css';

// Выносим изображение в переменную через import по вашему пути
import bannerImg from '../../assets/images/content/banner.jpg';

interface BannerProps {
  href?: string;
  alt?: string;
}

export const Banner: React.FC<BannerProps> = ({ 
  href = '#', 
  alt = 'banner' 
}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <a className={styles.banner__link} href={href}>
          <img 
            className={styles.banner__linkImg} 
            src={bannerImg} 
            alt={alt} 
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;