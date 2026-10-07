import React, { useState } from 'react';
import styles from './CardTabsBox.module.css';
import shared from '../../styles/shared.module.css';

// Импорт изображений согласно заданному пути
import oldLineImg from '../../assets/images/old-line.svg';
import searchIconImg from '../../assets/images/search.svg';
import arrowDownIconImg from '../../assets/images/arrow-down.svg';

interface PickupStore {
  id: string;
  address: string;
  workHoursWeekday: string;
  workHoursWeekend: string;
  availableStatus: string;
  amount: number;
}

const STORES_DATA: PickupStore[] = [
  {
    id: '1',
    address: 'Москва, ул. Южная 10',
    workHoursWeekday: '08:00 - 22:00',
    workHoursWeekend: '09:00 - 21:00',
    availableStatus: 'В наличии',
    amount: 12,
  },
  {
    id: '2',
    address: 'Москва, ул. Долгоруковская 15',
    workHoursWeekday: '08:00 - 22:00',
    workHoursWeekend: '09:00 - 21:00',
    availableStatus: 'В наличии',
    amount: 2,
  },
  {
    id: '3',
    address: 'Санкт-Петербург, ул. Ленина 28',
    workHoursWeekday: '08:00 - 22:00',
    workHoursWeekend: '09:00 - 21:00',
    availableStatus: 'Нет в наличии',
    amount: 0,
  },
];

type TabType = 'about' | 'specs' | 'availability' | 'reviews';

export const CardTabsBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('availability');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPickupOnly, setIsPickupOnly] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePickupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPickupOnly(e.target.checked);
  };

  const filteredStores = STORES_DATA.filter((store) => {
    const matchesSearch = store.address
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPickup = isPickupOnly ? store.amount > 0 : true;
    return matchesSearch && matchesPickup;
  });

  return (
    <div className={`${styles.cardTabsbox} ${shared.container}`}>
      {/* Навигация табов */}
      <div className={styles.cardTabs}>
        <button
          className={`${styles.cardTab} ${
            activeTab === 'about' ? styles.tabActive : ''
          }`}
          onClick={() => setActiveTab('about')}
        >
          О товаре
        </button>
        <button
          className={`${styles.cardTab} ${
            activeTab === 'specs' ? styles.tabActive : ''
          }`}
          onClick={() => setActiveTab('specs')}
        >
          Характеристики
        </button>
        <button
          className={`${styles.cardTab} ${
            activeTab === 'availability' ? styles.tabActive : ''
          }`}
          onClick={() => setActiveTab('availability')}
        >
          Наличие в магазине
        </button>
        <button
          className={`${styles.cardTab} ${
            activeTab === 'reviews' ? styles.tabActive : ''
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Отзывы
        </button>
      </div>

      {/* Контейнер содержимого табов */}
      <div className={styles.cardTabsContainer}>
        {/* Таб 1: О товаре */}
        <div
          className={`${styles.cardTabsContent} ${
            activeTab === 'about' ? styles.tabsContentActive : ''
          }`}
        >
          <p>Подробное описание товара...</p>
          <div>
            <span>Цена со скидкой: </span>
            <span
              className={styles.priceOld}
              style={{ backgroundImage: `url("${oldLineImg}")` }}
            >
              1200 ₽
            </span>
          </div>
        </div>

        {/* Таб 2: Характеристики */}
        <div
          className={`${styles.cardTabsContent} ${
            activeTab === 'specs' ? styles.tabsContentActive : ''
          }`}
        >
          <p>Технические характеристики и параметры оборудования...</p>
        </div>

        {/* Таб 3: Наличие в магазине */}
        <div
          className={`${styles.cardTabsContent} ${
            activeTab === 'availability' ? styles.tabsContentActive : ''
          }`}
        >
          <div className={styles.cardTopLine}>
            <form className={styles.cardForm} onSubmit={(e) => e.preventDefault()}>
              <label className={styles.cardFormLabelsearch}>
                <span>Магазин</span>
                <input
                  className={styles.cardFormInputsearch}
                  type="text"
                  placeholder="Введите адрес"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{
                    backgroundImage: `url("${searchIconImg}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px 16px',
                  }}
                />
              </label>

              <label className={styles.cardFormLabelpickup}>
                <input
                  className={styles.cardFormInputpickup}
                  type="checkbox"
                  checked={isPickupOnly}
                  onChange={handlePickupChange}
                />
                <span>Забрать сегодня</span>
              </label>
            </form>
          </div>

          {/* Заголовки таблицы */}
          <div className={`${styles.cardListItem} ${styles.cardListItemtitle}`}>
            <div className={styles.cardListAddress}>
              Адрес <img src={arrowDownIconImg} alt="" style={{ width: '10px', marginLeft: '4px' }} />
            </div>
            <div className={styles.cardListWorkhours}>Режим работы</div>
            <div className={styles.cardListAvialable}>Доступность</div>
            <div className={styles.cardListNum}>Количество</div>
            <div className={styles.cardFormBtn}></div>
          </div>

          {/* Список магазинов */}
          {filteredStores.map((store) => (
            <div key={store.id} className={styles.cardListItem}>
              <div className={styles.cardListAddress}>{store.address}</div>

              <div className={styles.cardListWorkhours}>
                <div className={styles.workhours}>
                  <span>пн-пт:</span>
                  <span>{store.workHoursWeekday}</span>
                </div>
                <div className={styles.workhours}>
                  <span>сб-вс:</span>
                  <span>{store.workHoursWeekend}</span>
                </div>
              </div>

              <div className={styles.cardListAvialable}>
                {store.availableStatus}
              </div>

              <div className={styles.cardListNum}>{store.amount} шт.</div>

              <div className={styles.cardFormBtn}>
                <button type="button">Купить</button>
              </div>
            </div>
          ))}
        </div>

        {/* Таб 4: Отзывы */}
        <div
          className={`${styles.cardTabsContent} ${
            activeTab === 'reviews' ? styles.tabsContentActive : ''
          }`}
        >
          <p>Отзывы покупателей...</p>
        </div>
      </div>
    </div>
  );
};

export default CardTabsBox;