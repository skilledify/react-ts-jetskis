import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import styles from './Products.module.css';

// Импорт изображений товаров
import productImg1 from '../../assets/images/content/product-1.png';
import productImg2 from '../../assets/images/content/product-2.png';
import productImg3 from '../../assets/images/content/product-3.png';
import productImg4 from '../../assets/images/content/product-4.png';

// Импорт иконок/SVG при необходимости
import basketIcon from '../../assets/images/basket-white.svg';
import heartOutlineIcon from '../../assets/images/icon-heart-outline.svg';
import heartFilledIcon from '../../assets/images/icon-heart-filled.svg';

interface Product {
  id: number;
  title: string;
  price: string;
  img: string;
  isSale?: boolean;
  inStock: boolean;
}

interface Tab {
  id: string;
  label: string;
}

const TABS: Tab[] = [
  { id: 'products-tab-1', label: 'запчасти' },
  { id: 'products-tab-2', label: 'моторы' },
  { id: 'products-tab-3', label: 'шины' },
  { id: 'products-tab-4', label: 'электроника' },
  { id: 'products-tab-5', label: 'инструменты' },
  { id: 'products-tab-6', label: 'аксессуары' },
];

const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    title: 'Водонепроницаемый Рюкзак',
    price: '9 800 ₽',
    img: productImg1,
    isSale: false,
    inStock: true,
  },
  {
    id: 2,
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: '6 900 ₽',
    img: productImg2,
    isSale: true,
    inStock: true,
  },
  {
    id: 3,
    title: 'BRP Audio-Premium System',
    price: '68 000 ₽',
    img: productImg3,
    isSale: false,
    inStock: true,
  },
  {
    id: 4,
    title: 'Спасательное снаряжение',
    price: '9 800 ₽',
    img: productImg4,
    isSale: true,
    inStock: false,
  },
  {
    id: 5,
    title: 'Водонепроницаемый Рюкзак',
    price: '9 800 ₽',
    img: productImg1,
    isSale: false,
    inStock: true,
  },
  {
    id: 6,
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: '6 900 ₽',
    img: productImg2,
    isSale: true,
    inStock: true,
  },
];

export const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('products-tab-1');
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.products__inner}>
          <h2 className={styles.products__title}>Популярные товары</h2>

          <div className={styles["tabs-wrapper"]}>
            <div
              className={`${styles.tabs} ${styles.products__tabs} ${styles["mobile-overflow"]}`}
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.products__tab} ${
                    activeTab === tab.id ? styles["products__tab--active"] : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`${styles["tabs-container"]} ${styles.products__container}`}
          >
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={`${styles["tabs-content"]} ${styles.products__content} ${
                  activeTab === tab.id ? styles["tabs-content--active"] : ""
                }`}
                id={tab.id}
              >
                {activeTab === tab.id && (
                  <Splide
                    options={{
                      perPage: 4,
                      gap: "30px",
                      pagination: true,
                      arrows: true,
                      padding: { right: "2px", left: "2px" }, // Запас 2px, чтобы border не срезался по краям
                      breakpoints: {
                        1200: { perPage: 3, gap: "20px" },
                        968: { perPage: 2, gap: "15px" },
                        640: { perPage: 1, arrows: false },
                      },
                    }}
                    aria-label="products-slider"
                  >
                    {PRODUCTS_DATA.map((product) => {
                      const isFav = !!favorites[product.id];
                      return (
                        <SplideSlide key={product.id}>
                          <div className={styles["product-slider__item"]}>
                            <div
                              className={`${styles["product-item__wrapper"]} ${
                                !product.inStock
                                  ? styles["product-item__not-available"]
                                  : ""
                              }`}
                            >
                              <button
                                type="button"
                                className={`${styles["product-item__favorite"]} ${styles["favorite-btn"]}`}
                                onClick={() => toggleFavorite(product.id)}
                                aria-label="Добавить в избранное"
                              >
                                <img
                                  src={
                                    isFav ? heartFilledIcon : heartOutlineIcon
                                  }
                                  alt="Избранное"
                                />
                              </button>
                              {product.inStock && (
                                <button
                                  type="button"
                                  className={styles["product-item__basket"]}
                                  aria-label="Добавить в корзину"
                                >
                                  <img src={basketIcon} alt="" />
                                </button>
                              )}

                              {!product.inStock && (
                                <a
                                  className={
                                    styles["product-item__notify-link"]
                                  }
                                  href="#"
                                >
                                  <span>Сообщить о поступлении</span>
                                </a>
                              )}

                              <a
                                className={`${styles["product-item"]} ${
                                  product.isSale
                                    ? styles["product-item--sale"]
                                    : ""
                                }`}
                                href="#"
                              >
                                <p
                                  className={styles["product-item__hover-text"]}
                                >
                                  посмотреть товар
                                </p>
                                <img
                                  className={styles["product-item__img"]}
                                  src={product.img}
                                  alt={product.title}
                                />
                                <h4 className={styles["product-item__title"]}>
                                  {product.title}
                                </h4>

                                {product.inStock ? (
                                  <p
                                    className={`${styles.price} ${styles["product-item__price"]}`}
                                  >
                                    {product.price}
                                  </p>
                                ) : (
                                  <p
                                    className={
                                      styles["product-item__notify-text"]
                                    }
                                  >
                                    нет в наличии
                                  </p>
                                )}
                              </a>
                            </div>
                          </div>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                )}
              </div>
            ))}
          </div>

          <div className={styles.products__more}>
            <a className={styles["products__more-link"]} href="#">
              Показать ещё
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};