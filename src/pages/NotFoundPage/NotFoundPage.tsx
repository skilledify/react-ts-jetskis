import React from 'react';
import styles from './NotFoundPage.module.css';

// SVG-иконка гидроцикла
const JetSkiIcon: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Корпус и гидродинамические линии */}
    <path d="M2 16c2 1 4 1 6 0 3-1.5 5-1.5 8 0 2 1 4 1 6 0" />
    <path d="M3 13l3.5-6.5C7 5.5 8 5 9.5 5H14l3 4 4 1-2 3H3z" />
    <path d="M13 5l2-3h3" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
  </svg>
);

export const NotFoundPage: React.FC = () => {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.card}>
        <h1 className={styles.errorCode}>404</h1>

        <div className={styles.iconWrapper} aria-hidden="true">
          <JetSkiIcon size={72} />
        </div>

        <h2 className={styles.title}>Вы заплыли слишком далеко!</h2>

        <p className={styles.description}>
          Похоже, эту страницу смыло волной или она сменила курс. 
          Возвращайтесь на заправленную фарватерную линию.
        </p>

        <div className={styles.actions}>
          <a href="/react-ts-jetskis" className={styles.btnPrimary}>
            На главную
          </a>
          <button 
            type="button" 
            onClick={handleGoBack} 
            className={styles.btnSecondary}
          >
            Назад
          </button>
        </div>
      </main>

      {/* Фоловый морской эффект */}
      <div className={styles.ocean} aria-hidden="true">
        <div className={`${styles.wave} ${styles.wave1}`} />
        <div className={`${styles.wave} ${styles.wave2}`} />
      </div>
    </div>
  );
};

export default NotFoundPage;