import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import styles from './Products.module.css';

// Импорты изображений
import heartOutlineIcon from '../../assets/images/icon-heart-outline.svg';
import heartFilledIcon from '../../assets/images/icon-heart-filled.svg';
import basketWhiteIcon from '../../assets/images/basket-white.svg';
import product1Img from '../../assets/images/content/product-1.png';
import product2Img from '../../assets/images/content/product-2.png';
import product3Img from '../../assets/images/content/product-3.png';
import product4Img from '../../assets/images/content/product-4.png';

interface ProductItem {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  isSale?: boolean;
  inStock: boolean;
}

const TABS = [
  { id: 'products-tab-1', label: 'запчасти' },
  { id: 'products-tab-2', label: 'моторы' },
  { id: 'products-tab-3', label: 'шины' },
  { id: 'products-tab-4', label: 'электроника' },
  { id: 'products-tab-5', label: 'инструменты' },
  { id: 'products-tab-6', label: 'аксессуары' },
];

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 1,
    title: 'Водонепроницаемый Рюкзак',
    price: '9 800 ₽',
    imgSrc: product1Img,
    inStock: true,
  },
  {
    id: 2,
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: '6 900 ₽',
    imgSrc: product2Img,
    isSale: true,
    inStock: true,
  },
  {
    id: 3,
    title: 'BRP Audio-Premium System',
    price: '68 000 ₽',
    imgSrc: product3Img,
    inStock: true,
  },
  {
    id: 4,
    title: 'Спасательное снаряжение',
    price: '9 800 ₽',
    imgSrc: product4Img,
    isSale: true,
    inStock: false,
  },
  {
    id: 5,
    title: 'Водонепроницаемый Рюкзак',
    price: '9 800 ₽',
    imgSrc: product1Img,
    inStock: true,
  },
  {
    id: 6,
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: '6 900 ₽',
    imgSrc: product2Img,
    isSale: true,
    inStock: true,
  },
];

export const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('products-tab-1');
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderArrowSvg = () => (
    <svg
      width="16"
      height="29"
      viewBox="0 0 16 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z"
        fill="#1C62CD"
      />
    </svg>
  );

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.products__inner}>
          <h2 className={styles.products__title}>Популярные товары</h2>

          <div className={styles['tabs-wrapper']}>
            <div className={`${styles.tabs} ${styles.products__tabs} ${styles['mobile-overflow']}`}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.tab} ${styles.products__tab} ${
                    activeTab === tab.id ? styles['tab--active'] : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className={`${styles['tabs-container']} ${styles.products__container}`}>
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={`${styles['tabs-content']} ${styles.products__content} ${
                  activeTab === tab.id ? styles['tabs-content--active'] : ''
                }`}
              >
                {activeTab === tab.id && (
                  <Splide
                    options={{
                      type: 'slide',
                      perPage: 4,
                      perMove: 1,
                      gap: '30px',
                      pagination: false,
                      speed: 500,
                      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                      drag: true,
                      breakpoints: {
                        1200: { perPage: 3 },
                        968: { perPage: 2 },
                        640: { perPage: 1 },
                      },
                    }}
                    aria-label="products-slider"
                  >
                    {PRODUCTS_DATA.map((product) => {
                      const isFav = favorites.includes(product.id);
                      return (
                        <SplideSlide key={product.id}>
                          <div className={styles['product-slider__item']}>
                            <div
                              className={`${styles['product-item__wrapper']} ${
                                !product.inStock ? styles['product-item__not-available'] : ''
                              }`}
                            >
                              {/* Кнопка Избранного */}
                              <button
                                type="button"
                                className={`${styles['product-item__favorite']} ${
                                  isFav ? styles['product-item__favorite--active'] : ''
                                }`}
                                onClick={(e) => handleToggleFavorite(e, product.id)}
                                aria-label="Добавить в избранное"
                              >
                                <img
                                  src={isFav ? heartFilledIcon : heartOutlineIcon}
                                  alt="Избранное"
                                  className={styles['favorite-icon']}
                                />
                              </button>

                              {/* Карточка товара */}
                              <a
                                className={`${styles['product-item']} ${
                                  product.isSale ? styles['product-item--sale'] : ''
                                }`}
                                href="#"
                              >
                                <p className={styles['product-item__hover-text']}>посмотреть товар</p>

                                <img
                                  className={styles['product-item__img']}
                                  src={product.imgSrc}
                                  alt={product.title}
                                  draggable={false}
                                />

                                <h4 className={styles['product-item__title']}>{product.title}</h4>

                                {product.inStock ? (
                                  <p className={`${styles.price} ${styles['product-item__price']}`}>
                                    {product.price}
                                  </p>
                                ) : (
                                  <div className={styles['product-item__notify-box']}>
                                    <p className={styles['product-item__notify-text']}>
                                      нет в наличии
                                    </p>
                                    <span className={styles['product-item__notify-link']}>
                                      Сообщить о поступлении
                                    </span>
                                  </div>
                                )}
                              </a>

                              {/* Кнопка Корзины только для товаров в наличии */}
                              {product.inStock && (
                                <button
                                  type="button"
                                  className={styles['product-item__basket']}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  aria-label="Добавить в корзину"
                                >
                                  <img
                                    src={basketWhiteIcon}
                                    alt="Корзина"
                                    className={styles['basket-icon']}
                                  />
                                </button>
                              )}
                            </div>
                          </div>
                        </SplideSlide>
                      );
                    })}

                    {/* Стрелки передаются прямо внутрь <Splide> */}
                    <div className="splide__arrows">
                      <button className="splide__arrow splide__arrow--prev" type="button">
                        {renderArrowSvg()}
                      </button>
                      <button className="splide__arrow splide__arrow--next" type="button">
                        {renderArrowSvg()}
                      </button>
                    </div>
                  </Splide>
                )}
              </div>
            ))}
          </div>

          <div className={styles.products__more}>
            <a className={styles['products__more-link']} href="#">
              Показать ещё
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;