"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  title: string;
  images: string[];
  imageAlts: string[];
};

export function ProductGallery({ title, images, imageAlts }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const mainSrc = images[active] ?? images[0];
  const mainAlt = imageAlts[active] ?? imageAlts[0] ?? title;

  if (images.length === 0) return null;

  const hasThumbs = images.length > 1;

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-5">
        {hasThumbs ? (
          <div
            className="order-2 flex flex-row gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 lg:order-1 lg:w-[4.5rem] lg:flex-shrink-0 lg:flex-col lg:gap-2.5 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar]:w-1 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-[var(--color-border-strong)] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label={`Фото товара: ${title}`}
          >
            {images.map((src, index) => {
              const isActive = index === active;
              return (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Фото ${index + 1} из ${images.length}`}
                  onClick={() => setActive(index)}
                  className={`relative aspect-[4/5] w-[3.25rem] shrink-0 overflow-hidden rounded-xl border bg-[var(--color-muted-bg)] transition-[border-color,box-shadow,opacity] sm:w-[4rem] lg:w-full lg:max-w-none ${
                    isActive
                      ? "border-[var(--color-primary)] opacity-100 ring-2 ring-[var(--color-primary)]/20"
                      : "border-[var(--color-border)] opacity-[0.92] hover:border-[var(--color-border-strong)] hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 4rem, 72px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        ) : null}

        <div
          className={`order-1 min-w-0 flex-1 ${hasThumbs ? "lg:order-2" : ""}`}
        >
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[var(--color-muted-bg)] shadow-[var(--shadow-card)] ring-1 ring-[var(--color-border)]/80">
              <Image
                src={mainSrc}
                alt={mainAlt}
                fill
                sizes="(max-width: 1024px) 100vw, min(896px, 55vw)"
                className="object-cover"
                priority={active === 0}
              />
            </div>
            {hasThumbs ? (
              <p className="mt-3 hidden text-center text-xs text-[var(--color-muted)] lg:block">
                {active + 1} / {images.length}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
