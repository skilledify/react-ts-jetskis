// src/components/Breadcrumbs/Breadcrumbs.tsx
import { useLocation, Link, matchPath } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';
import styles from './Breadcrumbs.module.css';

interface RouteCrumb {
  path: string;
  title: string;
}

const ROUTE_CRUMBS: RouteCrumb[] = [
  { path: AppRoutes.CATALOG_PAGE, title: 'Каталог' },
  { path: AppRoutes.PRODUCTCARD_PAGE, title: 'Карточка товара' },
];

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  // На «Главной» крошки скрыты
  if (pathnames.length === 0) {
    return null;
  }

  const accumulatedPaths = pathnames.map(
    (_, index) => `/${pathnames.slice(0, index + 1).join('/')}`
  );

  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <div className={styles.inner}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to={AppRoutes.HOME_PAGE} className={styles.listLink}>
              Главная
            </Link>
          </li>

          {accumulatedPaths.map((path, index) => {
            const isLast = index === accumulatedPaths.length - 1;

            const matchedRoute = ROUTE_CRUMBS.find((route) =>
              matchPath({ path: route.path, end: true }, path)
            );

            if (matchedRoute?.path === AppRoutes.HOME_PAGE) {
              return null;
            }

            const title = matchedRoute
              ? matchedRoute.title
              : decodeURIComponent(pathnames[index]);

            return (
              <li key={path} className={styles.listItem}>
                {isLast ? (
                  <span className={styles.active} aria-current="page">
                    {title}
                  </span>
                ) : (
                  <Link to={path} className={styles.listLink}>
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}