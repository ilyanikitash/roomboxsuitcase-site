"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import type { CatalogFilterId } from "@/data/products";
import { products } from "@/data/products";

export function ProductGrid() {
  const [filter, setFilter] = useState<CatalogFilterId>("all");

  const visible = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="catalog"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent-text)]">
            Каталог
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            Подборка на Wildberries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            Румбоксы и картины по номерам — выберите категорию и перейдите к
            карточке товара на маркетплейсе.
          </p>
        </div>
        <div className="mt-12">
          <CategoryFilter active={filter} onChange={setFilter} />
        </div>
        {visible.length === 0 ? (
          <p className="mt-14 text-center text-[var(--color-muted)]">
            В этой категории пока нет товаров.
          </p>
        ) : (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
