import React, { useState } from 'react';
import styles from './Footer.module.css';

// Импорт изображений
import instagramIcon from '../../assets/images/instagram.svg';
import vkIcon from '../../assets/images/vk.svg';
import fbIcon from '../../assets/images/fb.svg';
import youtubeIcon from '../../assets/images/youtube.svg';

export const Footer: React.FC = () => {
  // Состояние для открытия/закрытия меню на мобильных устройствах
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Обработка отправки формы
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopInner}>
            {/* Форма рассылки */}
            <div className={`${styles.footerTopItem} ${styles.footerTopNewslatter}`}>
              <h6 className={styles.footerTopTitle}>
                Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
              </h6>
              <form className={styles.footerForm} onSubmit={handleSubmit}>
                <input
                  className={styles.footerFormInput}
                  type="email"
                  placeholder="Введите ваш e-mail:"
                  required
                />
                <button className={styles.footerFormBtn} type="submit">
                  Отправить
                </button>
              </form>
            </div>

            {/* Блок Информация */}
            <div className={`${styles.footerTopItem} ${styles.footerTopItemdrop}`}>
              <h6
                className={`${styles.footerTopTitle} ${styles.footerTopdrop} ${
                  openSections['info'] ? styles.footerTopdropActive : ''
                }`}
                onClick={() => toggleSection('info')}
              >
                Информация
              </h6>
              <ul
                className={`${styles.footerList} ${
                  openSections['info'] ? styles.footerListOpen : ''
                }`}
              >
                <li className={styles.footerListItem}>
                  <a href="#">О компании</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#">Контакты</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#">Акции</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#">Магазины</a>
                </li>
              </ul>
            </div>

            {/* Блок Интернет-магазин */}
            <div className={styles.footerTopItem}>
              <h6
                className={`${styles.footerTopTitle} ${styles.footerTopdrop} ${
                  openSections['shop'] ? styles.footerTopdropActive : ''
                }`}
                onClick={() => toggleSection('shop')}
              >
                Интернет-магазин
              </h6>
              <ul
                className={`${styles.footerList} ${
                  openSections['shop'] ? styles.footerListOpen : ''
                }`}
              >
                <li className={styles.footerListItem}>
                  <a href="#">Доставка и самовывоз</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#">Оплата</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#">Возврат-обмен</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#">Новости</a>
                </li>
              </ul>
            </div>

            {/* Блок Социальные сети */}
            <div className={`${styles.footerTopItem} ${styles.footerTopSocial}`}>
              <ul className={styles.socialList}>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#">
                    <img
                      className={styles.socialListItemImg}
                      src={instagramIcon}
                      alt="instagram"
                    />
                  </a>
                </li>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#">
                    <img className={styles.socialListItemImg} src={vkIcon} alt="vk" />
                  </a>
                </li>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#">
                    <img className={styles.socialListItemImg} src={fbIcon} alt="fb" />
                  </a>
                </li>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#">
                    <img
                      className={styles.socialListItemImg}
                      src={youtubeIcon}
                      alt="youtube"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className={styles.footerBottom}>
          <a className={styles.footerBottomLink} href="#">
            Договор оферты
          </a>
          <a className={styles.footerBottomLink} href="#">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;