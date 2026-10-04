import React, { useState } from 'react';
import styles from './ProductCard.module.css';

// Импорт изображений согласно вашему требованию (относительный путь: ../../assets/images)
import productImg from '../../assets/images/content/product-card-1.png';
import heartIcon from '../../assets/images/icon-heart-outline.svg';
import comparisonIcon from '../../assets/images/comparison.svg';

interface ProductCharacteristic {
  title: string;
  value: string;
}

interface ProductCardProps {
  title?: string;
  code?: string;
  oldPrice?: string;
  newPrice?: string;
  characteristics?: ProductCharacteristic[];
  availabilityContent?: React.ReactNode;
}

const defaultCharacteristics: ProductCharacteristic[] = [
  { title: 'Производитель', value: 'Канада' },
  { title: 'Количество мест, шт:', value: '3' },
  { title: 'Мощность, л.с.', value: '155' },
  { title: 'Тип двигателя', value: 'Бензиновый' },
  { title: 'Год выпуска', value: '2018' },
];

export const ProductCard: React.FC<ProductCardProps> = ({
  title = 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
  code = '366666-2',
  oldPrice = '1 200 475 ₽',
  newPrice = '1 100 475 ₽',
  characteristics = defaultCharacteristics,
  availabilityContent = 'Наличие в магазинах',
}) => {
  const [activeTab, setActiveTab] = useState<'characteristics' | 'availability'>('characteristics');

  return (
    <section className={styles['product-card']}>
      <div className={styles.container}>
        <div className={styles['product-card__inner']}>
          {/* Изображение и цена */}
          <div className={`${styles['product-card__img-box']} ${styles['product-item--sale']}`}>
            <img className={styles['product-card__img']} src={productImg} alt={title} />
            <p className={styles['product-card__price-old']}>{oldPrice}</p>
            <p className={styles['product-card__price-new']}>{newPrice}</p>
            <a className={styles['product-card__link']} href="#">
              Нашли дешевле? Снизим цену!
            </a>
            <div className={`${styles['product-card__btn']} ${styles['product-card__btn-mobile']}`}>
              <button type="button">Купить</button>
            </div>
          </div>

          {/* Контентная часть */}
          <div className={styles['product-card__content']}>
            <h1 className={styles['product-card__title']}>{title}</h1>
            <p className={styles['product-card__code']}>Код товара: {code}</p>

            <div className={styles['product-card__buttons']}>
              <a className={styles['product-card__icon-favorite']} href="#">
                <img src={heartIcon} alt="Избранное" />
              </a>
              <a className={styles['product-card__icon-comparison']} href="#">
                <img src={comparisonIcon} alt="Сравнение" />
              </a>
              <a className={styles.stars} href="#" data-rateyo-rating="4"></a>
            </div>

            {/* Табы */}
            <div className={`${styles['tabs-wrapper']} ${styles['product-card__tabs']}`}>
              <div className={styles.tabs}>
                <a
                  className={`${styles.tab} ${styles['product-card__tab']} ${
                    activeTab === 'characteristics' ? styles['tab--active'] : ''
                  }`}
                  href="#product-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('characteristics');
                  }}
                >
                  Характеристики
                </a>
                <a
                  className={`${styles.tab} ${styles['product-card__tab']} ${
                    activeTab === 'availability' ? styles['tab--active'] : ''
                  }`}
                  href="#product-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('availability');
                  }}
                >
                  Наличие в магазинах
                </a>
              </div>

              <div className={styles['tabs-container']}>
                {/* Таб 1: Характеристики */}
                <div
                  className={`${styles['tabs-content']} ${styles['product-card__tabs-content']} ${
                    activeTab === 'characteristics' ? styles['tabs-content--active'] : ''
                  }`}
                  id="product-1"
                >
                  {characteristics.map((item, index) => (
                    <dl className={styles['product-card__list']} key={index}>
                      <dt className={styles['product-card__list-title']}>{item.title}</dt>
                      <dd className={styles['product-card__list-data']}>{item.value}</dd>
                    </dl>
                  ))}

                  <div className={`${styles['filter-more']} ${styles['product-card__more']}`}>
                    <button className={`${styles['filter-more__btn']} ${styles['product-card__more-btn']}`} type="button">
                      Показать ещё
                    </button>
                  </div>

                  <div className={styles['product-card__btn']}>
                    <button type="button">Купить</button>
                  </div>
                </div>

                {/* Таб 2: Наличие */}
                <div
                  className={`${styles['tabs-content']} ${styles['product-card__tabs-content']} ${
                    activeTab === 'availability' ? styles['tabs-content--active'] : ''
                  }`}
                  id="product-2"
                >
                  {availabilityContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;