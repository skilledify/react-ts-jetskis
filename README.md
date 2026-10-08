<div align="center">

# 🏍️ Drive Moto

### Витрина интернет-магазина техники BRP — гидроциклы, квадроциклы, снегоходы и катера

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)

**Адаптивный фронтенд магазина моторной техники** с каталогом, акциями, картой магазинов и калькулятором доставки.

[🚀 Демо на GitHub Pages](https://<username>.github.io/react-ts-jetskis/) · [📦 Репозиторий](https://github.com/<username>/react-ts-jetskis)

</div>

---

## ✨ Возможности

- 🏠 **Главная** — hero-баннер-слайдер, умный поиск с вкладками, карусель категорий, хиты продаж и промо-блок
- 🗂 **Каталог** — сетка товаров с фильтрацией, сортировкой, «избранным» ❤️ и добавлением в корзину 🛒
- 📄 **Карточка товара** — галерея, характеристики, вкладки, список магазинов с наличием для самовывоза
- 🏪 **Магазины** — 6 шоурумов с поиском по адресу, фильтром по городу и отметкой «в наличии»
- 🎉 **Акции** — промокоды с копированием в один клик и живой таймер обратного отсчёта ⏱
- 🚚 **Доставка и оплата** — интерактивный калькулятор стоимости, таблица тарифов и FAQ-аккордеон
- 🧭 **Навигация** — Breadcrumbs, ScrollToTop при смене маршрута, страница `404`
- 📱 **Адаптивность** — mobile-first вёрстка, бургер-меню, горизонтально прокручиваемое меню категорий
- 🎨 **Дизайн-система** — акцентный цвет `#1C62CD`, шрифты *Staatliches*, *Barlow*, *SF Pro Display*, *Proxima Nova*

## 📸 Обзор страниц

| Страница | Маршрут | Описание |
|---|---|---|
| 🏠 Главная | `/` | Баннеры, поиск, категории, популярные товары |
| 🗂 Каталог | `/catalog` | Витрина гидроциклов с фильтрами и избранным |
| 📄 Товар | `/product` | Детальная карточка + точки самовывоза |
| 🏪 Магазины | `/stores` | Шоурумы, фильтры по городу и наличию |
| 🎉 Акции | `/sales` | Промокоды и таймер акций |
| 🚚 Доставка | `/delivery-payments` | Калькулятор, тарифы, FAQ |

## 🛠 Технологии

| Технология | Зачем в проекте |
|---|---|
| **React 19** | UI-библиотека, компонентная архитектура, функциональные компоненты |
| **TypeScript 6** | Строгая типизация пропсов, данных каталога и констант |
| **Vite 8** | Сборка и молниеносный HMR в dev-режиме |
| **Tailwind CSS 4** | Утилитарные стили через `@tailwindcss/vite` |
| **CSS Modules** | Инкапсулированные стили каждого компонента + `shared.module.css` |
| **React Router 7** | Клиентская маршрутизация с `basename` для GitHub Pages |
| **Splide** | Плавные слайдеры баннеров и карусели товаров |
| **ESLint 10** | Линтинг с `typescript-eslint` и React-плагинами |

## 📂 Структура проекта

```
react-ts-jetskis/
├── public/                    # Статика: favicon, спрайт иконок
├── src/
│   ├── assets/
│   │   ├── fonts/             # Локальные шрифты (woff/woff2)
│   │   └── images/            # Иконки, баннеры, фото товаров
│   ├── components/            # Переиспользуемые компоненты
│   │   ├── Banner/            # Промо-баннер
│   │   ├── BannerSection/     # Hero-слайдер на главной
│   │   ├── Breadcrumbs/       # Хлебные крошки
│   │   ├── CardTabsBox/       # Вкладки + магазины для самовывоза
│   │   ├── Catalog/           # Сетка каталога с фильтрами
│   │   ├── Categories/        # Карусель категорий
│   │   ├── Footer/            # Подвал сайта
│   │   ├── Header/            # Шапка: меню, поиск, категории
│   │   ├── ProductCard/       # Карточка товара
│   │   ├── Products/          # Блок товаров (слайдер)
│   │   ├── ProductsPopular/   # Популярные товары
│   │   ├── ProductsSlider/    # Универсальная карусель
│   │   ├── Search/            # Поиск с вкладками
│   │   └── ScrollToTop.tsx    # Прокрутка вверх при навигации
│   ├── constants/
│   │   └── global.constants.ts # Маршруты приложения
│   ├── layouts/
│   │   └── MainLayout/        # Общий каркас: Header + Outlet + Footer
│   ├── pages/                 # Страницы (роуты)
│   │   ├── HomePage/
│   │   ├── CatalogPage/
│   │   ├── ProductCardPage/
│   │   ├── StoresPage/
│   │   ├── SalesPage/
│   │   ├── DeliveryPaymentsPage/
│   │   └── NotFoundPage/
│   ├── styles/
│   │   └── shared.module.css  # Контейнер, общие секции, переопределения Splide
│   ├── App.tsx                # Роутинг приложения
│   ├── index.css              # Ресеты, Tailwind, глобальные переменные
│   └── main.tsx               # Точка входа
├── vite.config.ts             # Плагины: React + Tailwind
├── eslint.config.js
└── package.json
```

## 🚀 Быстрый старт

**Требования:** [Node.js](https://nodejs.org/) 20+ и npm.

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/<username>/react-ts-jetskis.git
cd react-ts-jetskis

# 2. Установите зависимости
npm install

# 3. Запустите dev-сервер
npm run dev
```

Приложение будет доступно по адресу → **http://localhost:5173/react-ts-jetskis/**

## 📜 Доступные команды

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск dev-сервера с HMR |
| `npm run build` | Production-сборка: проверка типов (`tsc -b`) + Vite build |
| `npm run preview` | Локальный предпросмотр production-сборки |
| `npm run lint` | Проверка кода ESLint |

