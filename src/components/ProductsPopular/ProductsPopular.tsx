import React, { useState } from 'react';
import { Link } from 'react-router';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { AppRoutes } from '../../constants/global.constants';
import shared from '../../styles/shared.module.css';
import styles from './ProductsPopular.module.css';


import popularImg1 from '../../assets/images/content/products-popular-1.png';
import popularImg2 from '../../assets/images/content/products-popular-2.png';
import popularImg3 from '../../assets/images/content/products-popular-3.png';
import popularImg4 from '../../assets/images/content/products-popular-4.png';


import heartOutlineIcon from '../../assets/images/icon-heart-outline.svg';
import heartFilledIcon from '../../assets/images/icon-heart-filled.svg';
import basketWhiteIcon from '../../assets/images/basket-white.svg';

interface Product {
  id: number;
  title: string;
  price: string;
  img: string;
  isSale?: boolean;
  isAvailable: boolean;
}

interface Tab {
  id: string;
  label: string;
}

const TABS: Tab[] = [
  { id: 'products-popular-tab-1', label: 'запчасти' },
  { id: 'products-popular-tab-2', label: 'моторы' },
  { id: 'products-popular-tab-3', label: 'шины' },
  { id: 'products-popular-tab-4', label: 'электроника' },
  { id: 'products-popular-tab-5', label: 'инструменты' },
  { id: 'products-popular-tab-6', label: 'аксессуары' },
];

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'BRP Audio-портативная система',
    price: '9 800 ₽',
    img: popularImg1,
    isSale: true,
    isAvailable: false,
  },
  {
    id: 2,
    title: 'Garmin Echomap Plus 62cv',
    price: '45 800 ₽',
    img: popularImg2,
    isSale: false,
    isAvailable: true,
  },
  {
    id: 3,
    title: 'RF D.E.S.S.TM Key',
    price: '68 000 ₽',
    img: popularImg3,
    isSale: true,
    isAvailable: false,
  },
  {
    id: 4,
    title: 'Мужской костюм 3мм',
    price: '7 000 ₽',
    img: popularImg4,
    isSale: false,
    isAvailable: false,
  },
  {
    id: 5,
    title: 'BRP Audio-портативная система',
    price: '9 800 ₽',
    img: popularImg1,
    isSale: true,
    isAvailable: false,
  },
  {
    id: 6,
    title: 'Garmin Echomap Plus 62cv',
    price: '45 800 ₽',
    img: popularImg2,
    isSale: false,
    isAvailable: true,
  },
];

 const ProductsPopular: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('products-popular-tab-1');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.products}>
      <div className={shared.container}>
        <div className={styles.productsInner}>
          <h2 className={styles.productsTitle}>С этими товарами покупают</h2>

          <div className={styles.tabsWrapper}>
            <div className={`${styles.productsTabs} ${styles.mobileOverflow}`}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.productsTab} ${
                    activeTab === tab.id ? styles.tabActive : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        
          <div className={styles.productsContainer}>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  id={tab.id}
                  className={`${styles.productsContent} ${
                    isActive ? styles.tabsContentActive : ''
                  }`}
                >
                  {isActive && (
                    <Splide
                      options={{
                        perPage: 4,
                        gap: '30px',
                        pagination: true,
                        arrows: true,
                        padding: { right: '2px', left: '2px' },
                        breakpoints: {
                          1200: { perPage: 3, gap: '20px' },
                          968: { perPage: 2, gap: '15px' },
                          640: { perPage: 1, arrows: false },
                        },
                      }}
                      aria-label="product-slider"
                      className={styles.productSlider}
                    >
                      {PRODUCTS.map((product) => {
                        const isFav = favorites.includes(product.id);
                        return (
                          <SplideSlide key={product.id}>
                            <div className={styles.productSliderItem}>
                              <div
                                className={`${styles.productItemWrapper} ${
                                  !product.isAvailable
                                    ? styles.productItemNotAvailable
                                    : ''
                                }`}
                              >
    
                                <button
                                  type="button"
                                  className={`${styles.productItemFavorite} ${
                                    isFav ? styles.productItemFavoriteActive : ''
                                  }`}
                                  onClick={() => toggleFavorite(product.id)}
                                  aria-label="Добавить в избранное"
                                >
                                  <img
                                    src={isFav ? heartFilledIcon : heartOutlineIcon}
                                    alt=""
                                  />
                                </button>

                        
                                {product.isAvailable && (
                                  <button
                                    type="button"
                                    className={styles.productItemBasket}
                                    aria-label="Добавить в корзину"
                                  >
                                    <img src={basketWhiteIcon} alt="" />
                                  </button>
                                )}

                                {!product.isAvailable && (
                                  <a
                                    className={styles.productItemNotifyLink}
                                    href="#"
                                  >
                                    <span>Сообщить о поступлении</span>
                                  </a>
                                )}

  
                                <Link
                                  className={`${styles.productItem} ${
                                    product.isSale ? styles.productItemSale : ''
                                  }`}
                                  to={AppRoutes.PRODUCTCARD_PAGE}
                                >
                                  <p className={styles.productItemHoverText}>
                                    посмотреть товар
                                  </p>
                                  <img
                                    className={styles.productItemImg}
                                    src={product.img}
                                    alt={product.title}
                                  />
                                  <h4 className={styles.productItemTitle}>
                                    {product.title}
                                  </h4>
                                  <p className={styles.productItemPrice}>
                                    {product.price}
                                  </p>
                                  <p className={styles.productItemNotifyText}>
                                    нет в наличии
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </SplideSlide>
                        );
                      })}
                    </Splide>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPopular;