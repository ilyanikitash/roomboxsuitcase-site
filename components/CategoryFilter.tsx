"use client";

import type { CatalogFilterId } from "@/data/products";

const FILTERS: { id: CatalogFilterId; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "roombox", label: "Румбоксы" },
  { id: "paint-by-numbers", label: "Картины по номерам" },
];

type CategoryFilterProps = {
  active: CatalogFilterId;
  onChange: (id: CatalogFilterId) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
      role="tablist"
      aria-label="Фильтр каталога"
    >
      {FILTERS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-[background,color,box-shadow] duration-200 ${
              isActive
                ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-sm"
                : "bg-[var(--color-card)] text-[var(--color-muted)] shadow-[var(--shadow-card)] hover:bg-[var(--color-muted-bg)] hover:text-[var(--color-foreground)]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
