import { pdfFile, productImage, type PublicPdfPath } from "./paths";

/**
 * Каталог: тексты и пути к файлам в `public/products/` и `public/pdf/`.
 */

export type ProductCategoryId = "roombox" | "paint-by-numbers";

export type CatalogFilterId = "all" | ProductCategoryId;

export interface Product {
  id: string;
  title: string;
  description: string;
  category: ProductCategoryId;
  categoryLabel: string;
  /** Пути к изображениям (`/products/...`); в каталоге показывается первое. */
  images: string[];
  /** Подписи к фото; при совпадении длины с `images` используются в галерее. */
  imageAlts?: string[];
  wildberriesUrl: string;
  instructionPdf?: PublicPdfPath;
  /** Размер холста и т.п. (картины по номерам). */
  size?: string;
}

export const CATEGORY_LABELS: Record<ProductCategoryId, string> = {
  roombox: "Румбокс",
  "paint-by-numbers": "Картина по номерам",
};

/** Папки каталога в `public/products/` (имена как на диске). */
export const PRODUCT_ASSET_DIRS = {
  asianQuarter: "asian-quarter",
  easternStories: "eastern-stories",
  teaWithTasteOfSummer: "tea-with-summer",
} as const;

const asianDir = PRODUCT_ASSET_DIRS.asianQuarter;
const easternDir = PRODUCT_ASSET_DIRS.easternStories;
const teaWithTasteOfSummerDir = PRODUCT_ASSET_DIRS.teaWithTasteOfSummer;

/** Порядок фото: общие ракурсы, затем детали. */
const ASIAN_IMAGE_FILES = [
  "asian-quarter-1.jpg",
  "asian-quarter-2.jpg",
  "asian-quarter-3.jpg",
  "asian-quarter-4.jpg",
  "asian-quarter-5.jpg",
  "asian-quarter-6.jpg",
  "asian-quarter-7.jpg",
  "asian-quarter-8.jpg",
] as const;

const EASTERN_IMAGE_FILES = [
  "eastern-stories-1.jpg",
  "eastern-stories-2.jpg",
  "eastern-stories-3.jpg",
  "eastern-stories-4.jpg",
  "eastern-stories-5.jpg",
  "eastern-stories-6.jpg",
  "eastern-stories-7.jpg",
  "eastern-stories-8.jpg",
] as const;

const TEA_WITH_TASTE_OF_SUMMER_IMAGE_FILES = [
  "tea-with-summer-1.jpg",
  "tea-with-summer-2.jpeg",
] as const;

export const ROOMBOX_INSTRUCTION_PDFS = {
  asianQuarter: pdfFile("Инструкция Азиатский квартал.pdf"),
  easternStories: pdfFile("Инструкция Восточные истории.pdf"),
} as const;

function imagesInFolder(
  folder: string,
  files: readonly string[],
): string[] {
  return files.map((f) => productImage(`${folder}/${f}`));
}

export const products: Product[] = [
  {
    id: "rb-asian-quarter",
    title: "Румбокс «Азиатский квартал»",
    description:
      "Книжный румбокс «Азиатский квартал» — это маленький волшебный мир, который можно разместить прямо на полке среди книг. Он не только украшает интерьер, но и превращается в увлекательное хобби: собирать его можно одному или вместе с семьей, отдыхая от повседневной суеты. Все детали продуманы до мелочей и выполнены из натуральных материалов, а теплая подсветка создает уют и превращает румбокс в стильный ночник. Такой набор станет оригинальным подарком и подарит много приятных часов творчества.",
    category: "roombox",
    categoryLabel: CATEGORY_LABELS.roombox,
    images: imagesInFolder(asianDir, ASIAN_IMAGE_FILES),
    imageAlts: [
      "Румбокс «Азиатский квартал» — открытый вид",
      "Закрытый чемодан, вид спереди",
      "Закрытый чемодан, вид сбоку",
      "Детали набора — фото 1",
      "Детали набора — фото 2",
      "Детали набора — фото 3",
      "Детали набора — фото 4",
      "Детали набора — фото 5",
    ],
    wildberriesUrl: "https://www.wildberries.ru/catalog/314954156/detail.aspx",
    instructionPdf: ROOMBOX_INSTRUCTION_PDFS.asianQuarter,
  },
  {
    id: "rb-eastern-stories",
    title: "Румбокс «Восточные истории»",
    description:
      "Книжный румбокс «Восточные истории» — это миниатюрный сказочный мир, который уютно размещается прямо на полке среди книг. Его сборка превращается в увлекательный и расслабляющий процесс, которым можно наслаждаться в одиночку или вместе с близкими. Детали выполнены из натуральных материалов, а теплая подсветка создает атмосферу старинной восточной улочки и делает румбокс стильным ночником. Это оригинальный подарок, который подарит эмоции и вдохновение как взрослым, так и детям.",
    category: "roombox",
    categoryLabel: CATEGORY_LABELS.roombox,
    images: imagesInFolder(easternDir, EASTERN_IMAGE_FILES),
    imageAlts: [
      "Румбокс «Восточные истории» — вид спереди",
      "Несколько ракурсов",
      "Вид сбоку",
      "Вид сзади",
      "Детали набора — фото 1",
      "Детали набора — фото 2",
      "Детали набора — фото 3",
      "Детали набора — фото 4",
    ],
    wildberriesUrl: "https://www.wildberries.ru/catalog/442527665/detail.aspx",
    instructionPdf: ROOMBOX_INSTRUCTION_PDFS.easternStories,
  },
  {
    id: "pn-tea-with-taste-of-summer",
    title: "Картина по номерам «Чай с привкусом лета»",
    description:
      "Картина по номерам бренда IFutureArt — отличный вариант для тех, кто хочет попробовать себя в рисовании без опыта. В наборе уже есть все, что нужно: большое полотно 40x50 см, краски, кисти и даже удобный мольберт из упаковки — можно сразу начать творить. Процесс помогает расслабиться, отвлечься от повседневных дел и получить удовольствие от создания своей картины. А готовая работа станет красивым украшением дома или приятным подарком близким.",
    category: "paint-by-numbers",
    categoryLabel: CATEGORY_LABELS["paint-by-numbers"],
    images: imagesInFolder(
      teaWithTasteOfSummerDir,
      TEA_WITH_TASTE_OF_SUMMER_IMAGE_FILES,
    ),
    imageAlts: [
      "Картина по номерам «Чай с привкусом лета» — общее фото",
      "Картина по номерам «Чай с привкусом лета» — живое фото",
    ],
    wildberriesUrl: "https://www.wildberries.ru/catalog/800710329/detail.aspx",
    size: "40x50 см",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductImageAlt(product: Product, index: number): string {
  const custom = product.imageAlts?.[index];
  if (custom) return custom;
  return `${product.title} — фото ${index + 1}`;
}
