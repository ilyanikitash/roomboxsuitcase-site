export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <p className="text-base font-semibold text-[var(--color-foreground)]">
              РумбоксSuitcase
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              Витрина товаров продавца на Wildberries. Заказы оформляются на
              маркетплейсе.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-[var(--color-muted)] sm:items-end">
            <a
              href="/#catalog"
              className="transition-colors hover:text-[var(--color-foreground)]"
            >
              Каталог
            </a>
            <a
              href="https://www.wildberries.ru/seller/4081130"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-foreground)]"
            >
              Wildberries
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[var(--color-muted)] sm:text-left">
          © {new Date().getFullYear()} РумбоксSuitcase.
        </p>
      </div>
    </footer>
  );
}
