import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ProductNotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent-text)]">
            Каталог
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-[var(--color-foreground)]">
            Товар не найден
          </h1>
          <p className="mt-3 text-[var(--color-muted)]">
            Проверьте ссылку или вернитесь в каталог.
          </p>
          <Link
            href="/#catalog"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-sm font-medium text-[var(--color-primary-foreground)] transition-opacity hover:opacity-90"
          >
            В каталог
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
