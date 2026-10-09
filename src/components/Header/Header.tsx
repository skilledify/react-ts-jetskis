
import React, { useState } from 'react';
import { Link } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';
import shared from '../../styles/shared.module.css';
import styles from './Header.module.css';


import logoImg from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icon-heart-outline.svg';
import userIcon from '../../assets/images/user.svg';
import basketIcon from '../../assets/images/basket.svg';
import homeIcon from '../../assets/images/home.svg';
import percentsIcon from '../../assets/images/procents.svg';
import deliveryIcon from '../../assets/images/delivery.svg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.header__top}>
          <div className={shared.container}>
            <div className={styles["header__top-inner"]}>
              <nav className={styles.menu}>
                <button
                  className={styles.menu__btn}
                  onClick={toggleMobileMenu}
                  type="button"
                  aria-label="Toggle menu"
                >
                  <div className={styles["menu__btn-line"]} />
                  <div className={styles["menu__btn-line"]} />
                  <div className={styles["menu__btn-line"]} />
                </button>

                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <Link
                      className={styles.menu__link}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Магазины
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link
                      className={styles.menu__link}
                      to={AppRoutes.SALES_PAGE}
                    >
                      Акции
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link
                      className={styles.menu__link}
                      to={AppRoutes.DELIVERY_PAYMENTS_PAGE}
                    >
                      Доставка и оплата
                    </Link>
                  </li>
                </ul>
              </nav>

              <Link className={styles.logo} to={AppRoutes.HOME_PAGE}>
                <img className={styles.logo__img} src={logoImg} alt="Логотип" />
              </Link>

              <div className={styles.header__box}>
                <p className={styles.header__address}>Москва, ул. Науки 25</p>

                <ul className={styles["user-list"]}>
                  <li className={styles["user-list__item"]}>
                    <a className={styles["user-list__link"]} href="#">
                      <img src={heartIcon} alt="Избранное" />
                    </a>
                  </li>
                  <li className={styles["user-list__item"]}>
                    <a className={styles["user-list__link"]} href="#">
                      <img src={userIcon} alt="Профиль" />
                    </a>
                  </li>
                  <li className={styles["user-list__item"]}>
                    <a
                      className={`${styles["user-list__link"]} ${styles.basket}`}
                      href="#"
                    >
                      <img src={basketIcon} alt="Корзина" />
                      <p className={styles.basket__num}>1</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <ul
          className={`${styles["menu-mobile__list"]} ${
            isMobileMenuOpen ? styles["menu-mobile__list--active"] : ""
          }`}
        >
          <li className={styles["menu-mobile__close-item"]}>
            <button
              type="button"
              className={styles["menu-mobile__close"]}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            />
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <img
                className={styles["menu-mobile__img"]}
                src={userIcon}
                alt="Войти"
              />
              <p className={styles["menu-mobile__text"]}>Войти</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <img
                className={styles["menu-mobile__img"]}
                src={userIcon}
                alt="Регистрация"
              />
              <p className={styles["menu-mobile__text"]}>Регистрация</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <img
                className={styles["menu-mobile__img"]}
                src={heartIcon}
                alt="Избранное"
              />
              <p className={styles["menu-mobile__text"]}>Избранное</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <img
                className={styles["menu-mobile__img"]}
                src={basketIcon}
                alt="Корзина"
              />
              <p className={styles["menu-mobile__text"]}>Корзина</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <Link
              className={styles["menu-mobile__link"]}
              to={AppRoutes.STORES_PAGE}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                className={styles["menu-mobile__img"]}
                src={homeIcon}
                alt="Магазины"
              />
              <p className={styles["menu-mobile__text"]}>Магазины</p>
            </Link>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <Link
              className={styles["menu-mobile__link"]}
              to={AppRoutes.SALES_PAGE}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                className={styles["menu-mobile__img"]}
                src={percentsIcon}
                alt="Акции"
              />
              <p className={styles["menu-mobile__text"]}>Акции</p>
            </Link>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <Link
              className={styles["menu-mobile__link"]}
              to={AppRoutes.DELIVERY_PAYMENTS_PAGE}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                className={styles["menu-mobile__img"]}
                src={deliveryIcon}
                alt="Доставка и оплата"
              />
              <p className={styles["menu-mobile__text"]}>Доставка и оплата</p>
            </Link>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Квадроциклы</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Катера</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Гидроциклы</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Лодки</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Вездеходы</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Снегоходы</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Двигатели</p>
            </a>
          </li>
          <li className={styles["menu-mobile__item"]}>
            <a className={styles["menu-mobile__link"]} href="#">
              <p className={styles["menu-mobile__text"]}>Запчасти</p>
            </a>
          </li>
        </ul>

        <div className={styles["menu__mobile-linewrapper"]}>
          <div className={shared.container}>
            <div className={styles.mobileLineWrapper}>
              <div className={styles.mobileLineOverflow}>
                <ul className={styles["menu__mobile-line"]}>
                  <li className={styles.menu__item}>
                    <Link className={styles.menu__link} to={AppRoutes.STORES_PAGE}>
                      Магазины
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link className={styles.menu__link} to={AppRoutes.SALES_PAGE}>
                      Акции
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link
                      className={styles.menu__link}
                      to={AppRoutes.DELIVERY_PAYMENTS_PAGE}
                    >
                      Доставка и оплата
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.header__bottom}>
          <div className={shared.container}>
            <div className={styles.categoriesWrapper}>
              <div className={styles.categoriesOverflow}>
                <ul className={styles["menu-categories"]}>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Квадроциклы
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Катера
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Гидроциклы
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Лодки
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Вездеходы
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Снегоходы
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Двигатели
                    </Link>
                  </li>
                  <li className={styles["menu-categories__item"]}>
                    <Link
                      className={styles["menu-categories__link"]}
                      to={AppRoutes.STORES_PAGE}
                    >
                      Запчасти
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;