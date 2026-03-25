import Image from "next/image";
import Link from "next/link";
import { getProductImageAlt, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const cover = product.images[0];
  if (!cover) return null;
  const isPaintByNumbers = product.category === "paint-by-numbers";

  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-border)]/90 bg-[var(--color-card)] shadow-[var(--shadow-card)] transition-[box-shadow,transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[linear-gradient(165deg,var(--color-muted-bg),rgba(255,255,255,0.7))]">
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(47,61,67,0.06),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-95"
          aria-hidden
        />
        <Image
          src={cover}
          alt={getProductImageAlt(product, 0)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
            isPaintByNumbers
              ? "object-contain p-3 sm:p-4"
              : "object-cover object-center group-hover:translate-y-[-1px]"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[var(--color-border)]/80 bg-[var(--color-chip)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            {product.categoryLabel}
          </span>
        </div>
        <h3 className="text-[1.06rem] font-semibold leading-snug tracking-tight text-[var(--color-foreground)] sm:text-lg">
          {product.title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-text)] transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--color-primary-foreground)]">
          Подробнее
          <span
            className="translate-y-[0.5px] transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
