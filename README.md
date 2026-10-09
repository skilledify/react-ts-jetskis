🏍️ Drive Moto интернет-магазин техники BRPАдаптивный фронтенд магазина моторной техники с каталогом, фильтрами, акциями и калькулятором доставки.🚀 Демо · 📦 Репозиторий✨ Возможности и страницы

🛠 ТехнологииCore: React 19, TypeScript 6, Vite 8Стили: Tailwind CSS 4, CSS ModulesРоутинг: React Router 7 (с поддержкой GitHub Pages)Инструменты: Splide (слайдеры), ESLint📂 Структура проектаPlaintextsrc/
├── assets/         # Локальные шрифты и изображения
├── components/     # Переиспользуемые UI-компоненты
├── constants/      # Константы и маршруты
├── layouts/        # Общий каркас (Header, Footer, Outlet)
├── pages/          # Страницы приложения (Home, Catalog, Product и др.)
├── styles/         # Глобальные стили и кастомизация Splide
├── App.tsx         # Роутинг
└── main.tsx        # Точка входа

🏠 Главная (/) — hero-слайдер, умный поиск, карусель категорий и хиты продаж.🗂 Каталог (/catalog) — сетка товаров с фильтрацией, сортировкой, избранным ❤️ и корзиной 🛒.📄 Товар (/product) — детальная карточка, галерея, характеристики и точки самовывоза.🏪 Магазины (/stores) — шоурумы с поиском по адресу и фильтром по наличию.🎉 Акции (/sales) — промокоды с копированием в один клик и таймер обратного отсчёта.🚚 Доставка (/delivery-payments) — интерактивный калькулятор, тарифы и FAQ.
🚀 Быстрый стартТребования: Node.js 20+ и npm.Bash# Клонирование и установка
git clone https://github.com/skilledify/react-ts-jetskis.git
cd react-ts-jetskis
npm install

# Запуск dev-сервера
npm run dev
Приложение будет доступно по адресу http://localhost:5173/react-ts-jetskis/.📜 Доступные командыКомандаОписаниеnpm run devЗапуск dev-сервера с HMRnpm run buildProduction-сборка (tsc + Vite)npm run previewПредпросмотр сборки локальноnpm run lintПроверка кода ESLint