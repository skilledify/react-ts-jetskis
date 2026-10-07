import React, { useState, useEffect, useCallback } from 'react';
import shared from '../../styles/shared.module.css';
import styles from './BannerSection.module.css';

// Импорт изображений из ../../assets/images
import bannerSliderImg from '../../assets/images/banner-slider.jpg';
import saleItemImg from '../../assets/images/content/sale-1.png';
import iconsPrice from '../../assets/images/icons-price.svg';
import oldLine from '../../assets/images/old-line.svg';
import iconsPriceOld from '../../assets/images/icons-price-old.svg';

export const BannerSection: React.FC = () => {
  const sliderImages = [
    bannerSliderImg,
    bannerSliderImg,
    bannerSliderImg,
    bannerSliderImg,
    bannerSliderImg,
    bannerSliderImg,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Объявляем функции ДО useEffect с помощью useCallback
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  }, [sliderImages.length]);

  // 2. Теперь useEffect идет ПОСЛЕ объявления handleNext
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  // Иконки цен через CSS-переменные
  const priceStyle = {
    '--bg-icon-price': `url("${iconsPrice}")`,
    '--bg-old-line': `url("${oldLine}")`,
    '--bg-icon-price-old': `url("${iconsPriceOld}")`,
  } as React.CSSProperties;

  return (
    <section className={`${styles.bannerSection} ${shared['page-section']}`}>
      <div className={shared.container}>
        <div className={styles.inner}>
          
          {/* Слайдер баннеров */}
          <div className={styles.slider}>
            
            {/* Кнопка "Назад" */}
            <button
              type="button"
              className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}
              onClick={handlePrev}
              aria-label="Предыдущий слайд"
            >
              <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z" fill="white"/>
              </svg>
            </button>

            {/* Кнопка "Вперед" */}
            <button
              type="button"
              className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}
              onClick={handleNext}
              aria-label="Следующий слайд"
            >
              <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8936 13.632L2.33608 0.236548C2.01686 -0.0788495 1.50491 -0.0788495 1.1857 0.236548C0.866485 0.551946 0.866485 1.05777 1.1857 1.37317L14.1651 14.1974L1.1857 27.0216C0.866485 27.337 0.866485 27.8428 1.1857 28.1582C1.3423 28.3129 1.5531 28.3962 1.75788 28.3962C1.96266 28.3962 2.17346 28.3189 2.33005 28.1582L15.8876 14.7627C16.2068 14.4533 16.2068 13.9415 15.8936 13.632Z" fill="white"/>
              </svg>
            </button>

            {/* Контейнер слайдов */}
            <div className={styles.sliderWrapper}>
              <div
                className={styles.sliderTrack}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {sliderImages.map((imgSrc, index) => (
                  <a key={index} className={styles.sliderItem} href="#">
                    <img
                      className={styles.sliderImg}
                      src={imgSrc}
                      alt={`Баннер ${index + 1}`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Пагинация */}
            <ul className={styles.slickDots}>
              {sliderImages.map((_, index) => (
                <li
                  key={index}
                  className={index === currentIndex ? styles.slickActive : ''}
                >
                  <button type="button" onClick={() => setCurrentIndex(index)} />
                </li>
              ))}
            </ul>

          </div>

          {/* Карточка товара */}
          <a className={styles.saleItem} href="#" style={priceStyle}>
            <div className={styles.saleItemTop}>
              <div className={styles.saleItemInfo}>акция</div>
              <div className={styles.saleItemPrice}>
                <div className={`${styles.price} ${styles.saleItemPriceNew}`}>
                  190 000
                </div>
                <div className={`${styles.price} ${styles.saleItemPriceOld}`}>
                  225 000
                </div>
              </div>
            </div>

            <img
              className={styles.saleItemImg}
              src={saleItemImg}
              alt="Лодочный мотор Suzuki DF9.9BRS"
            />

            <h5 className={styles.saleItemTitle}>
              Лодочный мотор <br /> Suzuki DF9.9BRS
            </h5>

            <div className={styles.saleItemFooter}>
              Акция действует до
              <span>31.08.2020</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;