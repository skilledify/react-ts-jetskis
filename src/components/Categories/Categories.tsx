import React from 'react';
import shared from '../../styles/shared.module.css';
import styles from './Categories.module.css';


import cat1 from '../../assets/images/categories-1.png';
import cat2 from '../../assets/images/categories-2.png';
import cat3 from '../../assets/images/categories-3.png';
import cat4 from '../../assets/images/categories-4.png';
import cat5 from '../../assets/images/categories-5.png';
import cat6 from '../../assets/images/categories-6.png';

interface CategoryItem {
  id: number;
  title: string;
  imgSrc: string;
  link: string;
}

const categoriesData: CategoryItem[] = [
  { id: 1, title: 'Квадроциклы', imgSrc: cat1, link: '#' },
  { id: 2, title: 'Гидроциклы', imgSrc: cat2, link: '#' },
  { id: 3, title: 'Катера', imgSrc: cat3, link: '#' },
  { id: 4, title: 'Снегоходы', imgSrc: cat4, link: '#' },
  { id: 5, title: 'Вездеходы', imgSrc: cat5, link: '#' },
  { id: 6, title: 'Двигатели', imgSrc: cat6, link: '#' },
];

  const Categories: React.FC = () => {
  return (
    <section className={styles.categories}>
      <div className={shared.container}>
        <div className={styles.categories__inner}>
          {categoriesData.map((item) => (
            <a key={item.id} className={styles.categories__item} href={item.link}>
              <div className={styles['categories__item-info']}>
                <h4 className={styles['categories__item-title']}>{item.title}</h4>
                <p className={styles['categories__item-text']}>Подробнее</p>
              </div>
              <div className={styles['categories__item-img']}>
                <img src={item.imgSrc} alt={item.title} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;