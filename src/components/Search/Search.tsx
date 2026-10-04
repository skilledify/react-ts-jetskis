import React, { useState } from 'react';
import searchIcon from '../../assets/images/search.svg';
import styles from './Search.module.css';

interface TabItem {
  id: string;
  label: string;
  placeholder: string;
}

const TABS: TabItem[] = [
  { id: 'tab-1', label: 'Поиск по номеру', placeholder: 'Введите номер' },
  { id: 'tab-2', label: 'Поиск по марке', placeholder: 'Введите марку' },
  { id: 'tab-3', label: 'Поиск по названию товара', placeholder: 'Введите название товара' },
];

export const Search: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('tab-2');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeTab = TABS.find((tab) => tab.id === activeTabId) || TABS[0];

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string) => {
    e.preventDefault();
    setActiveTabId(tabId);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Поиск [${activeTab.label}]:`, searchQuery);
  };

  return (
    <section className={`${styles.search} page-section`}>
      {/* Используем 'container' как глобальный класс проекта, если он объявлен в main.css / index.css */}
      <div className="container">
        <div className={styles.searchInner}>
          <div className={`${styles.searchTabs} ${styles.tabsWrapper}`}>
            <div className={styles.mobileOverflow}>
              {TABS.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`${styles.tab} ${styles.searchTabsItem} ${
                    activeTabId === tab.id ? styles.tabActive : ''
                  }`}
                  onClick={(e) => handleTabClick(e, tab.id)}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.searchContent}>
            <div className={`${styles.tabsContent} ${styles.searchContentItem} ${styles.tabsContentActive}`}>
              <form className={styles.searchContentForm} onSubmit={handleSubmit}>
                <input
                  className={styles.searchContentInput}
                  type="text"
                  placeholder={activeTab.placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className={styles.searchContentBtn}
                  type="submit"
                  style={{ '--search-icon': `url("${searchIcon}")` } as React.CSSProperties}
                >
                  искать
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;