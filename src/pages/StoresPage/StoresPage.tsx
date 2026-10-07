import React, { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';
import styles from './StoresPage.module.css';
import shared from '../../styles/shared.module.css';

interface Store {
  id: number;
  city: string;
  address: string;
  phone: string;
  week: string;
  weekend: string;
  stock: string;
  inStock: boolean;
  tags: string[];
  flagship?: boolean;
}

const STORES: Store[] = [
  { id: 1, city: 'Москва', address: 'ул. Науки, 25', phone: '+7 (495) 123-45-67', week: '10:00 — 21:00', weekend: '10:00 — 19:00', stock: '12 единиц техники в зале', inStock: true, tags: ['Шоурум 800 м²', 'Сервис', 'Тест-драйв'], flagship: true },
  { id: 2, city: 'Москва', address: 'ул. Южная, 10', phone: '+7 (495) 234-56-78', week: '09:00 — 22:00', weekend: '09:00 — 21:00', stock: '8 единиц техники в зале', inStock: true, tags: ['Самовывоз за 15 минут', 'Trade-in'] },
  { id: 3, city: 'Санкт-Петербург', address: 'ул. Ленина, 28', phone: '+7 (812) 345-67-89', week: '10:00 — 20:00', weekend: '10:00 — 18:00', stock: 'Поставка 5 октября', inStock: false, tags: ['Сервис', 'Зимнее хранение'] },
  { id: 4, city: 'Казань', address: 'пр. Победы, 112', phone: '+7 (843) 456-78-90', week: '09:00 — 20:00', weekend: '10:00 — 18:00', stock: '6 единиц техники в зале', inStock: true, tags: ['Тест-драйв на воде', 'Кредит'] },
  { id: 5, city: 'Сочи', address: 'ул. Морская, 7', phone: '+7 (862) 567-89-01', week: '09:00 — 21:00', weekend: '09:00 — 20:00', stock: '5 единиц техники в зале', inStock: true, tags: ['Прокат', 'Обучение'] },
  { id: 6, city: 'Екатеринбург', address: 'ул. Щербакова, 77', phone: '+7 (343) 678-90-12', week: '10:00 — 20:00', weekend: '10:00 — 17:00', stock: 'Открытие в ноябре', inStock: false, tags: ['Скоро открытие'] },
];

const CITIES = ['Все города', ...Array.from(new Set(STORES.map((s) => s.city)))];

const StoresPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState(CITIES[0]);
  const [onlyStock, setOnlyStock] = useState(false);

  const filtered = useMemo(() => STORES.filter((s) => {
    const q = query.trim().toLowerCase();
    const byQuery = !q || `${s.city} ${s.address}`.toLowerCase().includes(q);
    const byCity = city === CITIES[0] || s.city === city;
    const byStock = !onlyStock || s.inStock;
    return byQuery && byCity && byStock;
  }), [query, city, onlyStock]);

  return (
    <div className={`${styles.page} ${shared.container}`}>
      <h1 className={styles.title}>Магазины Drive Moto</h1>
      <p className={styles.subtitle}>
        Приезжайте потрогать, завести и сравнить: <strong>6 магазинов</strong> от Москвы
        до Сочи. В каждом — шоурум, сервис и кофе для тех, кто «просто посмотреть».
      </p>

      <div className={styles.filters}>
        <label className={styles.search}>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Найти улицу или город…" />
        </label>
        <select className={styles.citySelect} value={city} onChange={(e) => setCity(e.target.value)}>
          {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <label className={styles.check}>
          <input type="checkbox" checked={onlyStock} onChange={(e) => setOnlyStock(e.target.checked)} />
          Техника в наличии
        </label>
        <span className={styles.count}>Найдено: {filtered.length}</span>
      </div>

      <div className={styles.grid}>
        {filtered.length === 0 && (
          <div className={styles.empty}>Ничего не нашли — попробуйте «Науки» или сбросьте фильтры. А лучше позвоните: 8 800 555-35-35</div>
        )}
        {filtered.map((s) => (
          <article key={s.id} className={styles.card}>
            {s.flagship && <span className={styles.flag}>Флагман</span>}
            <p className={styles.city}>{s.city}</p>
            <h3 className={styles.address}>{s.address}</h3>
            <div className={styles.meta}>
              <div><span>Тел: </span>{s.phone}</div>
              <div><span>пн–пт: </span>{s.week}</div>
              <div><span>сб–вс: </span>{s.weekend}</div>
            </div>
            <p className={`${styles.stock} ${s.inStock ? styles.stockOk : styles.stockEmpty}`}>
              {s.inStock ? `● ${s.stock}` : `○ ${s.stock}`}
            </p>
            <div className={styles.tags}>{s.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}</div>
            <div className={styles.actions}>
              <a className={styles.btnPrimary} href={`tel:${s.phone.replace(/[^+\d]/g, '')}`}>Позвонить</a>
              <button className={styles.btnGhost} type="button">Маршрут</button>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.banner}>
        <div>
          <p className={styles.bannerTitle}>Не нашли магазин рядом?</p>
          <p className={styles.bannerText}>Привезём гидроцикл или снегоход в ваш город за 2–7 дней. Предпродажная подготовка и первый запуск — бесплатно.</p>
        </div>
        <Link className={styles.bannerBtn} to={AppRoutes.DELIVERY_PAYMENTS_PAGE}>Условия доставки</Link>
      </div>
    </div>
  );
};

export default StoresPage;

