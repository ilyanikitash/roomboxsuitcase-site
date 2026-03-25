"use client";

import { useEffect, useMemo, useState } from "react";
import type { CustomerReview } from "@/data/reviews";

type ReviewsCarouselProps = {
  reviews: CustomerReview[];
};

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-1 text-[0.95rem] text-[var(--color-accent-text)]"
      aria-label={`Оценка: ${count} из 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < count ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const items = useMemo(() => reviews.filter((r) => r.text.trim()), [reviews]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 1 || paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [items.length, paused]);

  if (items.length === 0) return null;
  const current = items[active];
  if (!current) return null;

  const prev = () => setActive((idx) => (idx - 1 + items.length) % items.length);
  const next = () => setActive((idx) => (idx + 1) % items.length);

  return (
    <div
      className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-muted-bg)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-text)]">
        Отзывы покупателей
      </p>

      <div className="relative mt-4 min-h-[15rem] overflow-hidden">
        {items.map((review, index) => {
          const isActive = index === active;
          return (
            <article
              key={review.id}
              className={`absolute inset-0 flex flex-col transition-[opacity,transform,filter] duration-500 ease-out ${
                isActive
                  ? "translate-y-0 opacity-100 blur-0"
                  : "pointer-events-none translate-y-2 opacity-0 blur-[2px]"
              }`}
              aria-hidden={!isActive}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-[var(--color-foreground)]">
                    {review.customerName}
                  </p>
                </div>
                <Stars count={review.rating} />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-[0.95rem]">
                {review.text}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {items.map((review, index) => {
            const isActive = index === active;
            return (
              <button
                key={review.id}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-[var(--color-primary)]"
                    : "w-2 bg-[var(--color-border-strong)] hover:bg-[var(--color-muted)]"
                }`}
                aria-label={`Показать отзыв ${index + 1}`}
                aria-current={isActive}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-muted-bg)]"
            aria-label="Предыдущий отзыв"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-muted-bg)]"
            aria-label="Следующий отзыв"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
