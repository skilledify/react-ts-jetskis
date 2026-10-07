import React, { useState } from 'react';
import { Link } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';
import styles from './DeliveryPaymentsPage.module.css';
import shared from '../../styles/shared.module.css';

const TARIFFS = [
  { zone: 'Москва (внутри МКАД)', tech: 'от 1 500 ₽', parts: 'от 500 ₽', time: '1–2 дня' },
  { zone: 'Московская область', tech: 'от 3 000 ₽', parts: 'от 800 ₽', time: '2–3 дня' },
  { zone: 'Санкт-Петербург и Казань', tech: 'от 8 000 ₽', parts: 'от 1 200 ₽', time: '3–5 дней' },
  { zone: 'Вся Россия', tech: 'от 15 000 ₽', parts: 'от 1 900 ₽', time: '2–7 дней' },
];

const FAQS = [
  { q: 'Привезёте гидроцикл прямо к воде?', a: 'Да! Услуга «К воде»: привезём, спустим на воду, проверим и дадим 30 минут инструктажа. По Москве — 5 000 ₽, по области — от 8 000 ₽.' },
  { q: 'Можно оплатить после осмотра?', a: 'Конечно. Самовывоз — оплата в магазине после проверки и запуска. Доставка — 10% предоплата, остальное после приёма техники.' },
  { q: 'А если техника не понравится при получении?', a: 'Вернём предоплату полностью, а доставку в одну сторону возьмём на себя. Такое бывает редко — обычно влюбляются с первого запуска.' },
  { q: 'Есть рассрочка на доставку?', a: 'Доставка включается в чек и тоже идёт в рассрочку 0-0-12. Отдельно за неё платить не нужно.' },
];

const DeliveryPaymentsPage: React.FC = () => {
  const [city, setCity] = useState('Москва');
  const [kind, setKind] = useState('Гидроцикл / катер');
  const [open, setOpen] = useState<number | null>(0);
  const price = city === 'Москва' ? (kind === 'Запчасти' ? '500 ₽' : '1 500 ₽') : city === 'Московская область' ? (kind === 'Запчасти' ? '800 ₽' : '3 000 ₽') : kind === 'Запчасти' ? 'от 1 200 ₽' : 'от 8 000 ₽';
  return (
    <div className={`${styles.page} ${shared.container}`}>
      <h1 className={styles.title}>Доставка и оплата</h1>
      <p className={styles.subtitle}>Довезём <strong>аккуратно, как своё</strong>: в жёсткой упаковке, со страховкой и первым запуском. Оплата — как удобно вам: от карты до лизинга для бизнеса.</p>
      <div className={styles.cards}>
        <div className={styles.card}><p className={styles.emoji}>🏬</p><h3>Самовывоз за 15 минут</h3><p>Москва, ул. Науки 25. Соберём, заправим, заведём при вас. Кофе и разбор всех кнопок — бесплатно.</p><span>0 ₽ • сегодня</span></div>
        <div className={styles.card}><p className={styles.emoji}>🚚</p><h3>Доставка до двери</h3><p>По Москве — 1–2 дня, по России — 2–7 дней деловыми линиями. Технику страхуем на полную стоимость.</p><span>от 500 ₽</span></div>
        <div className={`${styles.card} ${styles.cardAccent}`}><p className={styles.emoji}>🌊</p><h3>Доставка «К воде»</h3><p>Фишка Drive Moto: привозим к причалу, спускаем на воду и учим управлять. Уедете уже капитаном.</p><span>от 5 000 ₽</span></div>
        <div className={styles.card}><p className={styles.emoji}>💳</p><h3>Оплата как удобно</h3><p>Карта, СБП, кредит, рассрочка 0-0-12, счёт для юрлиц и лизинг. Чек и ПТС — сразу.</p><span>6 способов</span></div>
      </div>
      <div className={styles.calc}>
        <div><h3 className={styles.calcTitle}>Посчитайте доставку за 10 секунд</h3><p className={styles.calcText}>Выберите, куда везти и что везём, — покажем ориентир. Точную цену подтвердит менеджер за 5 минут.</p>
          <div className={styles.calcRow}>
            <select value={city} onChange={(e) => setCity(e.target.value)}>{['Москва', 'Московская область', 'Санкт-Петербург', 'Казань', 'Сочи', 'Другой город'].map((c) => <option key={c}>{c}</option>)}</select>
            <select value={kind} onChange={(e) => setKind(e.target.value)}>{['Гидроцикл / катер', 'Квадроцикл / снегоход', 'Мотор', 'Запчасти'].map((k) => <option key={k}>{k}</option>)}</select>
          </div></div>
        <div className={styles.calcOut}><small>Ваша доставка</small><b>{price}</b><span>страховка и упаковка включены</span><Link to={AppRoutes.CATALOG_PAGE}>Перейти в каталог</Link></div>
      </div>
      <h2 className={styles.h2}>Тарифы честно, без звёздочек</h2>
      <div className={styles.table}>
        <div className={`${styles.tr} ${styles.trHead}`}><span>Куда</span><span>Техника</span><span>Запчасти</span><span>Срок</span></div>
        {TARIFFS.map((t) => <div key={t.zone} className={styles.tr}><span><b>{t.zone}</b></span><span>{t.tech}</span><span>{t.parts}</span><span>{t.time}</span></div>)}
      </div>
      <div className={styles.steps}>
        <div><b>01</b><h4>Заявка</h4><p>Оставьте заказ на сайте или позвоните 8 800 555-35-35. Фиксируем цену и срок.</p></div>
        <div><b>02</b><h4>Подготовка</h4><p>Проводим предпродажную подготовку: масло, протяжка, проверка на воде или стенде.</p></div>
        <div><b>03</b><h4>Оплата</h4><p>Картой онлайн, при получении или в рассрочку. Для юрлиц — счёт с НДС.</p></div>
        <div><b>04</b><h4>Первый запуск</h4><p>Заводим вместе с вами, объясняем и дарим памятку капитана + ТО-0 со скидкой.</p></div>
      </div>
      <h2 className={styles.h2}>Частые вопросы</h2>
      <div className={styles.faq}>{FAQS.map((f, i) => (
        <div key={i} className={`${styles.faqItem} ${open === i ? styles.faqOpen : ''}`}>
          <button type="button" onClick={() => setOpen(open === i ? null : i)}>{f.q}<i>{open === i ? '−' : '+'}</i></button>
          {open === i && <p>{f.a}</p>}
        </div>))}</div>
      <div className={styles.banner}><div><p className={styles.bannerTitle}>Остались вопросы про доставку?</p><p className={styles.bannerText}>Позвоните — подскажем срок до вашего города и подберём самый выгодный способ. Работаем 10:00–21:00 без выходных.</p></div><a className={styles.bannerBtn} href="tel:88005553535">8 800 555-35-35</a></div>
    </div>
  );
};

export default DeliveryPaymentsPage;
