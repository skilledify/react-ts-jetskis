import React, { useState } from 'react';
import styles from './Header.module.css';

// Импорт всех используемых изображений и иконок
import logoImg from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icon-heart-outline.svg';
import userIcon from '../../assets/images/user.svg';
import basketIcon from '../../assets/images/basket.svg';
import homeIcon from '../../assets/images/home.svg';
import percentsIcon from '../../assets/images/procents.svg';
import deliveryIcon from '../../assets/images/delivery.svg';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className="container">
          <div className={styles['header__top-inner']}>
            <nav className={styles.menu}>
              <button
                className={styles.menu__btn}
                onClick={toggleMobileMenu}
                type="button"
                aria-label="Toggle menu"
              >
                <div className={styles['menu__btn-line']} />
                <div className={styles['menu__btn-line']} />
                <div className={styles['menu__btn-line']} />
              </button>

              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#">
                    Магазины
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#">
                    Акции
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#">
                    Доставка и оплата
                  </a>
                </li>
              </ul>
            </nav>

            <a className={styles.logo} href="#">
              <img className={styles.logo__img} src={logoImg} alt="Логотип" />
            </a>

            <div className={styles.header__box}>
              <p className={styles.header__address}>Москва, ул. Науки 25</p>

              <ul className={styles['user-list']}>
                <li className={styles['user-list__item']}>
                  <a className={styles['user-list__link']} href="#">
                    <img src={heartIcon} alt="Избранное" />
                  </a>
                </li>
                <li className={styles['user-list__item']}>
                  <a className={styles['user-list__link']} href="#">
                    <img src={userIcon} alt="Профиль" />
                  </a>
                </li>
                <li className={styles['user-list__item']}>
                  <a className={`${styles['user-list__link']} ${styles.basket}`} href="#">
                    <img src={basketIcon} alt="Корзина" />
                    <p className={styles.basket__num}>1</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное выдвижное меню */}
      <ul
        className={`${styles['menu-mobile__list']} ${
          isMobileMenuOpen ? styles['menu-mobile__list--active'] : ''
        }`}
      >
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img className={styles['menu-mobile__img']} src={userIcon} alt="Войти" />
            <p className={styles['menu-mobile__text']}>Войти</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img className={styles['menu-mobile__img']} src={userIcon} alt="Регистрация" />
            <p className={styles['menu-mobile__text']}>Регистрация</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img
              className={styles['menu-mobile__img']}
              src={heartIcon}
              alt="Избранное"
            />
            <p className={styles['menu-mobile__text']}>Избранное</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img className={styles['menu-mobile__img']} src={basketIcon} alt="Корзина" />
            <p className={styles['menu-mobile__text']}>Корзина</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img className={styles['menu-mobile__img']} src={homeIcon} alt="Магазины" />
            <p className={styles['menu-mobile__text']}>Магазины</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img className={styles['menu-mobile__img']} src={percentsIcon} alt="Акции" />
            <p className={styles['menu-mobile__text']}>Акции</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <img className={styles['menu-mobile__img']} src={deliveryIcon} alt="Доставка и оплата" />
            <p className={styles['menu-mobile__text']}>Доставка и оплата</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Квадроциклы</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Катера</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Гидроциклы</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Лодки</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Вездеходы</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Снегоходы</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Двигатели</p>
          </a>
        </li>
        <li className={styles['menu-mobile__item']}>
          <a className={styles['menu-mobile__link']} href="#">
            <p className={styles['menu-mobile__text']}>Запчасти</p>
          </a>
        </li>
      </ul>

      {/* Горизонтальный скролл меню на мобильных */}
      <div className={styles['menu__mobile-linewrapper']}>
        <ul className={styles['menu__mobile-line']}>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Магазины
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Акции
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Доставка и оплата
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.header__bottom}>
        <div className="container">
          <ul className={styles['menu-categories']}>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Квадроциклы
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Катера
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Гидроциклы
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Лодки
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Вездеходы
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Снегоходы
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Двигатели
              </a>
            </li>
            <li className={styles['menu-categories__item']}>
              <a className={styles['menu-categories__link']} href="#">
                Запчасти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;