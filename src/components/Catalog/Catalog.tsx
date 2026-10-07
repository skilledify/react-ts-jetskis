import { useState, type CSSProperties, type ChangeEvent, type ReactNode } from 'react';


import shared from '../../styles/shared.module.css';
import styles from './Catalog.module.css';

import arrowDownIcon from '../../assets/images/arrow-down.svg';
import checkedIcon from '../../assets/images/checked-icon.svg';
import heartOutlineIcon from '../../assets/images/icon-heart-outline.svg';
import heartFilledIcon from '../../assets/images/icon-heart-filled.svg';
import basketIcon from '../../assets/images/basket-white.svg';

import hydrocycle1 from '../../assets/images/content/hydrocycle-1.png';
import hydrocycle2 from '../../assets/images/content/hydrocycle-2.png';
import hydrocycle3 from '../../assets/images/content/hydrocycle-3.png';
import hydrocycle4 from '../../assets/images/content/hydrocycle-4.png';
import hydrocycle5 from '../../assets/images/content/hydrocycle-5.png';
import hydrocycle6 from '../../assets/images/content/hydrocycle-6.png';
import hydrocycle7 from '../../assets/images/content/hydrocycle-7.png';
import hydrocycle8 from '../../assets/images/content/hydrocycle-8.png';
import hydrocycle9 from '../../assets/images/content/hydrocycle-9.png';
import hydrocycle10 from '../../assets/images/content/hydrocycle-10.png';
import hydrocycle11 from '../../assets/images/content/hydrocycle-11.png';
import hydrocycle12 from '../../assets/images/content/hydrocycle-12.png';

type Product = {
	id: number;
	img: string;
	title: string;
	price: string;
};

type FilterGroup = {
	key: string;
	title: string;
	items: { label: string; checked?: boolean }[];
	type?: 'checkbox' | 'radio' | 'badge';
	search?: boolean;
	more?: boolean;
	accordion?: boolean;
};

const PRODUCTS: Product[] = [
	{ id: 1, img: hydrocycle1, title: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\\Mango', price: '1 049 500 ₽' },
	{ id: 2, img: hydrocycle2, title: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic', price: '1 100 475 ₽' },
	{ id: 3, img: hydrocycle3, title: 'Гидроцикл BRP SeaDoo GTR 230hp X California green', price: '1 323 700 ₽' },
	{ id: 4, img: hydrocycle4, title: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream', price: '1 049 500 ₽' },
	{ id: 5, img: hydrocycle5, title: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal', price: '1 543 000 ₽' },
	{ id: 6, img: hydrocycle6, title: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up', price: '732 345 ₽' },
	{ id: 7, img: hydrocycle7, title: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental', price: '857 666 ₽' },
	{ id: 8, img: hydrocycle8, title: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue', price: '1 229 711 ₽' },
	{ id: 9, img: hydrocycle9, title: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper', price: '587 440 ₽' },
	{ id: 10, img: hydrocycle10, title: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple', price: '587 440 ₽' },
	{ id: 11, img: hydrocycle11, title: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla', price: '1 049 500 ₽' },
	{ id: 12, img: hydrocycle12, title: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry', price: '1 049 500 ₽' },
];

const QUICK_FILTERS = ['Полноприводные', 'от 5000', 'BRP', 'ещё'];
const SORT_OPTIONS = ['По популярности', '2', '3'];
const POWER_OPTIONS = ['90', '130', '154', '230'];
const PAGES = ['1', '2', '3', '4', '5', '...', '11'];

const LIST_SELECTS = [
	{ key: 'power', title: 'Мощность л.с.' },
	{ key: 'engine', title: 'Мощность двигателя, л.с.' },
	{ key: 'speed', title: 'Макс. скорость' },
];

const FILTER_GROUPS_BEFORE_PRICE: FilterGroup[] = [
	{
		key: 'availability',
		accordion: true,
		title: 'Наличие',
		items: [{ label: 'В наличии' }, { label: 'Под заказ' }],
	},
	{
		key: 'novelty',
		accordion: true,
		title: 'Новинки',
		type: 'radio',
		items: [{ label: 'Все' }, { label: 'Новинки' }, { label: 'Акции' }],
	},
];

const FILTER_GROUPS_AFTER_LIST: FilterGroup[] = [
	{
		key: 'brand',
		accordion: true,
		title: 'Бренд',
		more: true,
		items: [
			{ label: 'BRP', checked: true },
			{ label: 'SPARK 2', checked: true },
			{ label: 'SPARK 3' },
		],
	},
	{
		key: 'model',
		accordion: true,
		title: 'Модель',
		search: true,
		more: true,
		items: [
			{ label: 'Sea-doo Spark 2', checked: true },
			{ label: 'SeaDoo Spark 90', checked: true },
			{ label: 'SeaDoo GTI 155' },
			{ label: 'SeaDoo GTR 230' },
		],
	},
	{
		key: 'promo',
		title: 'Акции',
		type: 'badge',
		items: [{ label: 'SALE', checked: true }, { label: 'NEW' }, { label: 'HIT' }, { label: 'ДИЛЕР' }],
	},
	{
		key: 'countries',
		title: 'Страны',
		more: true,
		items: [
			{ label: 'Россия', checked: true },
			{ label: 'Германия', checked: true },
			{ label: 'Китай' },
			{ label: 'США' },
		],
	},
];

const PRICE_MIN = 100000;
const PRICE_MAX = 500000;

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

const formatPrice = (n: number) => n.toLocaleString('ru-RU');

const buildInitialChecked = () => {
	const state: Record<string, boolean> = {};
	[...FILTER_GROUPS_BEFORE_PRICE, ...FILTER_GROUPS_AFTER_LIST].forEach((group) => {
		group.items.forEach((item) => {
			state[`${group.key}:${item.label}`] = Boolean(item.checked);
		});
	});
	return state;
};

type AccordionItemProps = {
	title: string;
	isOpen: boolean;
	onToggle: () => void;
	className?: string;
	children: ReactNode;
};

const AccordionItem = ({ title, isOpen, onToggle, className, children }: AccordionItemProps) => (
	<li className={cx(styles.itemDrop, className)}>
		<button
			type="button"
			className={cx(styles.itemTitle, styles.drop, isOpen && styles.dropActive)}
			aria-expanded={isOpen}
			onClick={onToggle}
		>
			{title}
		</button>
		<div className={cx(styles.panel, isOpen && styles.panelOpen)}>
			<div className={styles.panelInner}>{children}</div>
		</div>
	</li>
);

const Catalog = () => {
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
	const [sort, setSort] = useState(SORT_OPTIONS[0]);
	const [activeTab, setActiveTab] = useState<'params' | 'brand'>('params');
	const [isAsideOpen, setIsAsideOpen] = useState(false);
	const [closedGroups, setClosedGroups] = useState<Record<string, boolean>>({});
	const [isExtraOpen, setIsExtraOpen] = useState(false);
	const [checked, setChecked] = useState<Record<string, boolean>>(buildInitialChecked);
	const [radio, setRadio] = useState('Все');
	const [priceFrom, setPriceFrom] = useState(150000);
	const [priceTo, setPriceTo] = useState(275000);
	const [listValues, setListValues] = useState<Record<string, string>>({
		power: POWER_OPTIONS[0],
		engine: POWER_OPTIONS[0],
		speed: POWER_OPTIONS[0],
	});
	const [favorites, setFavorites] = useState<number[]>([]);
	const [activePage, setActivePage] = useState('1');

	const cssVars = {
		'--icon-arrow-down': `url("${arrowDownIcon}")`,
		'--icon-checked': `url("${checkedIcon}")`,
		'--icon-heart': `url("${heartOutlineIcon}")`,
		'--icon-heart-filled': `url("${heartFilledIcon}")`,
	} as CSSProperties;

	const toggleGroup = (key: string) =>
		setClosedGroups((prev) => ({ ...prev, [key]: !prev[key] }));

	const toggleChecked = (key: string) =>
		setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

	const toggleFavorite = (id: number) =>
		setFavorites((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

	const handlePriceFrom = (e: ChangeEvent<HTMLInputElement>) =>
		setPriceFrom(Math.min(Number(e.target.value), priceTo));

	const handlePriceTo = (e: ChangeEvent<HTMLInputElement>) =>
		setPriceTo(Math.max(Number(e.target.value), priceFrom));

	const handleReset = () => {
		setChecked(buildInitialChecked());
		setRadio('Все');
		setPriceFrom(150000);
		setPriceTo(275000);
	};

	const percent = (value: number) => ((value - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

	const renderGroup = (group: FilterGroup) => {
		const type = group.type ?? 'checkbox';

		const body = (
			<div className={cx(styles.content, type === 'radio' && styles.contentRadio)}>
				{group.search && (
					<input className={styles.search} type="text" placeholder="Введите модель " />
				)}

				{group.items.map((item) => {
					const id = `${group.key}:${item.label}`;
					return (
						<div key={id} className={styles.contentBox}>
							<label className={styles.contentLabel}>
								{type === 'radio' ? (
									<input
										className={styles.control}
										type="radio"
										name={group.key}
										checked={radio === item.label}
										onChange={() => setRadio(item.label)}
									/>
								) : (
									<input
										className={styles.control}
										type="checkbox"
										checked={checked[id]}
										onChange={() => toggleChecked(id)}
									/>
								)}
								{type === 'badge' ? (
									<span className={styles.badgeText}>{item.label}</span>
								) : (
									item.label
								)}
							</label>
						</div>
					);
				})}

				{group.more && (
					<div className={styles.more}>
						<button type="button" className={styles.moreBtn}>
							Показать ещё
						</button>
					</div>
				)}
			</div>
		);

		if (group.accordion) {
			return (
				<AccordionItem
					key={group.key}
					title={group.title}
					isOpen={!closedGroups[group.key]}
					onToggle={() => toggleGroup(group.key)}
				>
					{body}
				</AccordionItem>
			);
		}

		return (
			<li
				key={group.key}
				className={cx(styles.itemDrop, type === 'badge' && styles.badgeGroup)}
			>
				<p className={styles.itemTitle}>{group.title}</p>
				{body}
			</li>
		);
	};

	return (
		<section className={styles.catalog} style={cssVars}>
			<div className={shared.container}>
				<h2 className={styles.title}>Гидроциклы</h2>

				<div className={styles.filter}>
					<div className={styles.filterItemsInner}>
						<div className={styles.filterItems}>
							{QUICK_FILTERS.map((name) => (
								<button key={name} type="button">
									{name}
								</button>
							))}
						</div>
					</div>

					<div className={styles.filterBtn}>
						<select
							className={styles.selectItem}
							value={sort}
							onChange={(e) => setSort(e.target.value)}
						>
							{SORT_OPTIONS.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>

						<button
							type="button"
							className={cx(styles.viewBtn, viewMode === 'grid' && styles.viewBtnActive)}
							onClick={() => setViewMode('grid')}
							aria-label="Плитка"
						>
							<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="1" y="1" width="21" height="19" stroke="#2F3035" strokeWidth="2" />
								<rect x="7" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2" />
								<rect x="7" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2" />
								<rect x="14" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2" />
								<rect x="14" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2" />
							</svg>
						</button>

						<button
							type="button"
							className={cx(styles.viewBtn, viewMode === 'list' && styles.viewBtnActive)}
							onClick={() => setViewMode('list')}
							aria-label="Список"
						>
							<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="1">
									<rect x="6" width="19" height="3" rx="1.5" fill="#2F3035" />
									<rect x="6" y="8" width="19" height="3" rx="1.5" fill="#2F3035" />
									<rect x="6" y="16" width="19" height="3" rx="1.5" fill="#2F3035" />
									<rect width="3" height="3" rx="1.5" fill="#2F3035" />
									<rect y="8" width="3" height="3" rx="1.5" fill="#2F3035" />
									<rect y="16" width="3" height="3" rx="1.5" fill="#2F3035" />
								</g>
							</svg>
						</button>
					</div>
				</div>

				<div className={styles.inner}>
					<button
						type="button"
						className={styles.asideBtn}
						onClick={() => setIsAsideOpen((prev) => !prev)}
						aria-expanded={isAsideOpen}
					>
						Фильтры
					</button>

					<aside className={cx(styles.aside, isAsideOpen && styles.asideOpen)}>
						<div className={styles.tabs}>
							<a
								className={cx(styles.tab, activeTab === 'params' && styles.tabActive)}
								href="#filter-1"
								onClick={(e) => {
									e.preventDefault();
									setActiveTab('params');
								}}
							>
								<span>Параметры</span>
							</a>
							<a
								className={cx(styles.tab, activeTab === 'brand' && styles.tabActive)}
								href="#filter-2"
								onClick={(e) => {
									e.preventDefault();
									setActiveTab('brand');
								}}
							>
								<span>По марке</span>
							</a>
						</div>

						{activeTab === 'params' && (
							<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
								<ul className={styles.list}>
									{FILTER_GROUPS_BEFORE_PRICE.map(renderGroup)}

									<AccordionItem
										title="Цена"
										isOpen={!closedGroups.price}
										onToggle={() => toggleGroup('price')}
									>
										<div className={styles.content}>
											<div className={styles.range}>
												<div className={styles.rangeLine} />
												<div
													className={styles.rangeBar}
													style={{
														left: `${percent(priceFrom)}%`,
														width: `${percent(priceTo) - percent(priceFrom)}%`,
													}}
												/>
												<input
													className={styles.rangeInput}
													type="range"
													min={PRICE_MIN}
													max={PRICE_MAX}
													step={1000}
													value={priceFrom}
													onChange={handlePriceFrom}
												/>
												<input
													className={styles.rangeInput}
													type="range"
													min={PRICE_MIN}
													max={PRICE_MAX}
													step={1000}
													value={priceTo}
													onChange={handlePriceTo}
												/>
												<div className={styles.rangeLabels}>
													<span data-prefix="от">{formatPrice(priceFrom)}</span>
													<span data-prefix="до">{formatPrice(priceTo)}</span>
												</div>
											</div>
										</div>
									</AccordionItem>

									<li className={styles.itemList}>
										{LIST_SELECTS.map((select) => (
											<div key={select.key} className={styles.listRow}>
												<p className={styles.listTitle}>{select.title} </p>
												<select
													className={styles.listSelect}
													value={listValues[select.key]}
													onChange={(e) =>
														setListValues((prev) => ({
															...prev,
															[select.key]: e.target.value,
														}))
													}
												>
													{POWER_OPTIONS.map((option) => (
														<option key={option} value={option}>
															{option}
														</option>
													))}
												</select>
											</div>
										))}
									</li>

									{FILTER_GROUPS_AFTER_LIST.map(renderGroup)}

									<li className={cx(styles.itemDrop, styles.itemBtn)}>
										<button
											className={cx(styles.btnChoose, styles.btnChooseActive)}
											type="submit"
										>
											Выбрать
										</button>
										<p
											className={cx(styles.extra, isExtraOpen && styles.extraActive)}
											onClick={() => setIsExtraOpen((prev) => !prev)}
										>
											Дополнительные параметры
										</p>
										{isExtraOpen && <div className={styles.extraContent}>more</div>}
										<button className={styles.btnReset} type="button" onClick={handleReset}>
											Сбросить фильтр
										</button>
									</li>
								</ul>
							</form>
						)}
					</aside>

					<div className={styles.innerList}>
						{PRODUCTS.map((product) => {
							const isFavorite = favorites.includes(product.id);
							// "Нет в наличии" — только у некоторых карточек
							const isAvailable = ![4, 9].includes(product.id);
							return (
								<div
									key={product.id}
									className={cx(
										styles.productWrapper,
										viewMode === 'list' && styles.productWrapperList
									)}
								>
									<button
										type="button"
										className={cx(styles.favoriteBtn, isFavorite && styles.favoriteBtnActive)}
										onClick={() => toggleFavorite(product.id)}
										aria-label="В избранное"
									/>
									{isAvailable && (
										<button type="button" className={styles.productBasket} aria-label="В корзину">
											<img src={basketIcon} alt="" />
										</button>
									)}
									<a className={styles.productItem} href="#">
										<p className={styles.hoverText}>посмотреть товар</p>
										<img className={styles.productImg} src={product.img} alt={product.title} />
										<h4 className={styles.productTitle}>{product.title}</h4>
										<p className={styles.productPrice}>{product.price}</p>
									</a>
								</div>
							);
						})}
					</div>
				</div>

				<div className={styles.pagination}>
					<ul className={styles.paginationList}>
						{PAGES.map((page) => {
							const isDots = page === '...';
							return (
								<li
									key={page}
									className={cx(
										styles.paginationItem,
										!isDots && activePage === page && styles.paginationItemActive
									)}
								>
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault();
											if (!isDots) setActivePage(page);
										}}
									>
										<span>{page}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
