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

  // Лёгкая валидация формы рассылки
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const validateEmail = (value: string): string => {
    const trimmed = value.trim();
    if (!trimmed) {
      return 'Введите e-mail, чтобы получать акции';
    }
    // Лёгкая проверка формата: что-то@что-то.домен
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(trimmed)) {
      return 'Похоже на опечатку — проверьте e-mail';
    }
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Убираем ошибку/сразу прячем успех, пока пользователь печатает
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleEmailBlur = () => {
    // Мягко подсказываем только если что-то уже введено
    if (email.trim()) {
      setError(validateEmail(email));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = validateEmail(email);
    if (message) {
      setError(message);
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Готово! Проверьте почту — скидка уже летит к вам');
    setEmail('');
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
              <form className={styles.footerForm} onSubmit={handleSubmit} noValidate>
                <input
                  className={`${styles.footerFormInput} ${error ? styles.footerFormInputError : ''}`}
                  type="email"
                  placeholder="Введите ваш e-mail:"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'footer-email-error' : success ? 'footer-email-success' : undefined}
                />
                <button className={styles.footerFormBtn} type="submit">
                  Отправить
                </button>
              </form>
              {error && (
                <p id="footer-email-error" className={styles.footerFormError} role="alert">
                  {error}
                </p>
              )}
              {success && !error && (
                <p id="footer-email-success" className={styles.footerFormSuccess} role="status">
                  {success}
                </p>
              )}
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
                  <a className={styles.socialListItemLink} href="#" aria-label="Мы в Instagram">
                    <img
                      className={styles.socialListItemImg}
                      src={instagramIcon}
                      alt="instagram"
                    />
                    <span className={styles.socialTip}>Instagram</span>
                  </a>
                </li>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#" aria-label="Мы во ВКонтакте">
                    <img className={styles.socialListItemImg} src={vkIcon} alt="vk" />
                    <span className={styles.socialTip}>ВКонтакте</span>
                  </a>
                </li>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#" aria-label="Мы в Facebook">
                    <img className={styles.socialListItemImg} src={fbIcon} alt="fb" />
                    <span className={styles.socialTip}>Facebook</span>
                  </a>
                </li>
                <li className={styles.socialListItem}>
                  <a className={styles.socialListItemLink} href="#" aria-label="Мы в YouTube">
                    <img
                      className={styles.socialListItemImg}
                      src={youtubeIcon}
                      alt="youtube"
                    />
                    <span className={styles.socialTip}>YouTube</span>
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