export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-gradient-to-b from-[var(--color-hero-from)] via-[var(--color-background)] to-[var(--color-background)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(127,191,194,0.14),transparent_62%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.45)_10%,transparent_55%,rgba(166,207,223,0.1)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[46%] h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--color-blob)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-[var(--color-blob-2)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[18%] top-10 h-40 w-40 rounded-full bg-[rgba(222,153,102,0.14)] blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--color-border)]/60 bg-[var(--color-card)]/45 px-5 py-10 text-center shadow-[0_18px_55px_-40px_rgba(38,74,82,0.35)] backdrop-blur-[2px] sm:px-10 sm:py-14">
          <p
            className="hero-reveal text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-text)] sm:text-sm"
            style={{ animationDelay: "40ms" }}
          >
            РумбоксSuitcase · румбоксы и картины по номерам
          </p>
          <h1
            className="hero-reveal mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-foreground)] sm:mt-6 sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "120ms" }}
          >
            Соберите уют
            <span className="block text-[var(--color-accent-text)]">
              в чемоданчике и на холсте
            </span>
          </h1>
          <p
            className="hero-reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            Всё для спокойного творчества: румбоксы и картины по номерам бренда
            IFutureArt, которые приятно собирать и рисовать. Купить можно на
            Wildberries, а инструкции — здесь.
          </p>
          <div
            className="hero-reveal mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            style={{ animationDelay: "310ms" }}
          >
            <a
              href="/#catalog"
              className="inline-flex h-12 min-w-[210px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.45)] bg-[var(--color-primary)] px-8 text-sm font-semibold text-[var(--color-primary-foreground)] shadow-[0_14px_30px_-18px_rgba(38,74,82,0.5)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:brightness-[1.03] hover:shadow-[0_18px_34px_-18px_rgba(38,74,82,0.58)] active:translate-y-0 active:scale-[0.99]"
            >
              Смотреть каталог
            </a>
            <a
              href="/#about"
              className="inline-flex h-12 min-w-[210px] items-center justify-center rounded-full border border-[var(--color-border-strong)]/90 bg-[var(--color-card)]/55 px-8 text-sm font-medium text-[var(--color-foreground)] transition-[background-color,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-muted-bg)] active:translate-y-0 active:scale-[0.99]"
            >
              О нас
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-reveal {
          opacity: 0;
          animation: heroReveal 720ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
