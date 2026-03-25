import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { customerReviews } from "@/data/reviews";

export function AboutBrand() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-[var(--color-border)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal as="div">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent-text)]">
              О нас
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
              РумбоксSuitcase
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
              Мы продаём на Wildberries румбоксы и картины по номерам бренда IFutureArt для тех,
              кто любит спокойное творчество без суеты. Этот сайт — витрина:
              здесь можно посмотреть подборку, скачать инструкции к румбоксам и
              перейти к покупке на маркетплейсе.
            </p>
          </Reveal>
          <Reveal as="div" delayMs={120}>
            <ReviewsCarousel reviews={customerReviews} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
