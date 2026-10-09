🏍️ Drive MotoВитрина интернет-магазина техники BRP — гидроциклы, квадроциклы, снегоходы и катера📌 Навигация по проектуСтраницаМаршрутОписание🏠 Главная/Hero-слайдер, умный поиск, карусель категорий, хиты продаж🗂 Каталог/catalogСетка товаров с фильтрацией, сортировкой, избранным ❤️ и корзиной 🛒📄 Товар/productДетальная карточка, галерея, характеристики и самовывоз🏪 Магазины/storesШоурумы, поиск по адресу и фильтр по наличию🎉 Акции/salesПромокоды в один клик и живой таймер обратного отсчёта ⏱🚚 Доставка/delivery-paymentsИнтерактивный калькулятор стоимости и FAQ-аккордеон🛠 Технологический стекgraph TD
    A[Core: React 19 + TS] --> B[Styling: Tailwind v4 + CSS Modules]
    A --> C[Routing: React Router 7]
    A --> D[Build Tool: Vite 8]
    D --> E[Deployment: GitHub Pages]
Интерфейс: React 19, TypeScript 6, Vite 8Стилизация: Tailwind CSS 4 (@tailwindcss/vite), CSS Modules для изоляции стилейНавигация: React Router 7 (с поддержкой basename для GitHub Pages)UI-компоненты & Слайдеры: Splide, кастомные аккордеоны и модальные окнаКачество кода: ESLint 10, TypeScript-ESLint📂 Структура проектаsrc/
├── 📁 assets/         # Локальные шрифты (woff/woff2) и изображения
├── 📁 components/     # UI-блоки (Banner, Catalog, Header, Footer, Search и др.)
├── 📁 constants/      # Глобальные константы и роуты
├── 📁 layouts/        # Шаблоны страниц (MainLayout с Header/Footer/Outlet)
├── 📁 pages/          # Страницы приложения (HomePage, CatalogPage, StoresPage и др.)
├── 📁 styles/         # Глобальные стили, переменные и кастомизация Splide
├── 📄 App.tsx         # Настройка маршрутизации
└── 📄 main.tsx        # Точка входа в приложение
🚀 Быстрый стартУбедитесь, что у вас установлены Node.js (версии 20+) и npm. Выполните следующие команды в терминале:# 1. Клонируйте репозиторий
git clone https://github.com/<username>/react-ts-jetskis.git
cd react-ts-jetskis

# 2. Установите зависимости
npm install

# 3. Запустите проект в режиме разработки
npm run dev
Приложение откроется локально по адресу: http://localhost:5173/react-ts-jetskis/📜 Доступные скриптыКомандаДействиеnpm run devЗапуск локального dev-сервера с поддержкой HMRnpm run buildПроверка типов (tsc) и сборка проекта для productionnpm run previewЛокальный предпросмотр собранной production-версииnpm run lintПроверка исходного кода линтером (ESLint)