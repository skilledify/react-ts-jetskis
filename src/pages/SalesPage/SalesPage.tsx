import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';
import styles from './SalesPage.module.css';
import shared from '../../styles/shared.module.css';

interface Promo {
  id: number;
  badge: string;
  title: string;
  text: string;
  oldPrice?: string;
  newPrice?: string;
  until: string;
  accent?: boolean;
  gift?: string;
}

const PROMOS: Promo[] = [
  { id: 1, badge: '−30%', title: 'Горячий SALE на гидроциклы', text: 'SeaDoo GTI 130 и Spark Trixx прошлого сезона — забирайте лето по зимним ценам. Предпродажка уже включена.', oldPrice: '1 599 000 ₽', newPrice: '1 119 000 ₽', until: 'до 31 октября', accent: true },
  { id: 2, badge: '+50 000 ₽', title: 'Trade-in: меняем старое на новое', text: 'Пригоните квадроцикл, снегоход или мотор — добавим 50 000 ₽ к оценке и зачтём в новый BRP.', until: 'бессрочно' },
  { id: 3, badge: 'Подарок', title: 'Экипировка — в подарок к катеру', text: 'Жилеты, фал и чехол на сумму до 80 000 ₽ при покупке любого катера. На воду — сразу.', gift: 'Набор на 80 000 ₽', until: 'до 15 октября' },
  { id: 4, badge: '0-0-12', title: 'Рассрочка без переплат на снегоходы', text: 'Lynx и Ski-Doo в рассрочку 0-0-12: без первого взноса. Одобрение за 15 минут.', until: 'до конца сезона' },
  { id: 5, badge: 'ТО-0', title: 'Первое ТО — за наш счёт', text: 'Купите любой квадроцикл Can-Am — первое ТО, масло BRP XPS и диагностика в подарок.', gift: 'Выгода 35 000 ₽', until: 'до 1 ноября' },
  { id: 6, badge: '−15%', title: 'Двигатели Suzuki со скидкой капитана', text: 'Моторы DF9.9–DF140 со скидкой 15% + бесплатная установка на вашу лодку.', oldPrice: '689 000 ₽', newPrice: '585 650 ₽', until: 'пока моторы в зале' },
];

function useCountdown() {
  const target = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  }, []);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const pad = (n: number) => String(n).padStart(2, '0');
  return { d, h: pad(h), m: pad(m), s: pad(s) };
}

const SalesPage: React.FC = () => {
  const { d, h, m, s } = useCountdown();
  const [copied, setCopied] = useState(false);
  const copyPromo = async () => {
    try {
      await navigator.clipboard.writeText('DRIVE10');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  };
  return (
    <div className={`${styles.page} ${shared.container}`}>
      <h1 className={styles.title}>Акции</h1>
      <p className={styles.subtitle}>Здесь скидки честные, как глубиномер: <strong>без «было 10 млн»</strong>. Ловите момент — техника по акциям разбирается быстрее, чем тает лёд в апреле.</p>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.heroBadge}>Акция месяца</span>
          <p className={styles.heroTitle}>Гидроциклы со скидкой до 480 000 ₽</p>
          <p className={styles.heroText}>Успейте до конца месяца: скидка + бесплатная доставка по Москве и зимнее хранение в подарок. Осталось 7 единиц.</p>
          <div className={styles.timer}>
            <div className={styles.timerItem}><span>{d}</span><small>дней</small></div>
            <div className={styles.timerItem}><span>{h}</span><small>часов</small></div>
            <div className={styles.timerItem}><span>{m}</span><small>минут</small></div>
            <div className={styles.timerItem}><span>{s}</span><small>секунд</small></div>
          </div>
          <div className={styles.heroActions}>
            <Link className={styles.btnPrimary} to={AppRoutes.CATALOG_PAGE}>Выбрать гидроцикл</Link>
            <Link className={styles.btnGhost} to={AppRoutes.STORES_PAGE}>Посмотреть в зале</Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.heroPriceOld}>1 599 000 ₽</p>
          <p className={styles.heroPriceNew}>1 119 000 ₽</p>
          <p className={styles.heroNote}>SeaDoo GTI 130 • в наличии в Москве</p>
          <div className={styles.promoBox}>
            <span>Промокод на доп. скидку 10 000 ₽:</span>
            <button type="button" onClick={copyPromo} className={styles.promoCode}>DRIVE10 {copied ? '✓ скопировано' : '⧉ копировать'}</button>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        {PROMOS.map((p) => (
          <article key={p.id} className={`${styles.card} ${p.accent ? styles.cardAccent : ''}`}>
            <div className={styles.cardTop}>
              <span className={styles.badge}>{p.badge}</span>
              <span className={styles.until}>{p.until}</span>
            </div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardText}>{p.text}</p>
            {p.newPrice && (<div className={styles.prices}><span className={styles.old}>{p.oldPrice}</span><span className={styles.new}>{p.newPrice}</span></div>)}
            {p.gift && !p.newPrice && <p className={styles.gift}>{p.gift}</p>}
            <button type="button" className={styles.cardBtn}>Забрать выгоду</button>
          </article>
        ))}
      </div>
      <div className={styles.rules}>
        <div className={styles.rulesItem}><p className={styles.rulesNum}>01</p><p className={styles.rulesTitle}>Скидки суммируются с trade-in</p><p className={styles.rulesText}>Привезли старую технику — скидка по акции плюс доплата за trade-in. Двойная выгода.</p></div>
        <div className={styles.rulesItem}><p className={styles.rulesNum}>02</p><p className={styles.rulesTitle}>Бронируем по телефону</p><p className={styles.rulesText}>Звоните 8 800 555-35-35 — зафиксируем цену на 3 дня, пока едете смотреть.</p></div>
        <div className={styles.rulesItem}><p className={styles.rulesNum}>03</p><p className={styles.rulesTitle}>Рассрочка тоже участвует</p><p className={styles.rulesText}>Акционные цены действуют и в кредит, и в рассрочку 0-0-12.</p></div>
      </div>
    </div>
  );
};

export default SalesPage;
