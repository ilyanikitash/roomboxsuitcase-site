/**
 * Единая схема путей к статике из `public/`.
 * Замените файлы в папках, не меняя ключи в `products.ts`, если имена совпадают.
 */
export const PUBLIC_ASSET_ROOTS = {
  logo: "/logo",
  products: "/products",
  pdf: "/pdf",
} as const;

export type PublicLogoPath = `${typeof PUBLIC_ASSET_ROOTS.logo}/${string}`;
export type PublicProductImagePath =
  `${typeof PUBLIC_ASSET_ROOTS.products}/${string}`;
export type PublicPdfPath = `${typeof PUBLIC_ASSET_ROOTS.pdf}/${string}`;

export function logoFile(filename: string): PublicLogoPath {
  return `${PUBLIC_ASSET_ROOTS.logo}/${filename}`;
}

export function productImage(filename: string): PublicProductImagePath {
  return `${PUBLIC_ASSET_ROOTS.products}/${filename}`;
}

export function pdfFile(filename: string): PublicPdfPath {
  return `${PUBLIC_ASSET_ROOTS.pdf}/${filename}`;
}
