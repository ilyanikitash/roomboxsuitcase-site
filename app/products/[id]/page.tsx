import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGallery } from "@/components/ProductGallery";
import {
  getProductById,
  getProductImageAlt,
  products,
} from "@/data/products";
import { getWildberriesArticleId } from "@/lib/wildberries";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Товар не найден" };
  return {
    title: `${product.title} — RoomboxSuitcase`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const galleryAlts = product.images.map((_, i) =>
    getProductImageAlt(product, i),
  );
  const wbArticle = getWildberriesArticleId(product.wildberriesUrl);

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24 lg:pt-10">
            <nav aria-label="Навигация по сайту">
              <Link
                href="/#catalog"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
              >
                <span className="text-[var(--color-accent-text)]" aria-hidden>
                  ←
                </span>
                Каталог
              </Link>
            </nav>

            <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-14 xl:gap-16">
              <ProductGallery
                title={product.title}
                images={product.images}
                imageAlts={galleryAlts}
              />

              <div className="flex min-w-0 flex-col lg:sticky lg:top-[5.5rem] lg:self-start">
                <header className="space-y-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-text)]">
                    {product.categoryLabel}
                  </p>
                  <h1 className="text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-[2rem]">
                    {product.title}
                  </h1>
                  {wbArticle ? (
                    <p className="text-sm text-[var(--color-muted)]">
                      Артикул на Wildberries:{" "}
                      <span className="font-medium tabular-nums text-[var(--color-foreground)]">
                        {wbArticle}
                      </span>
                    </p>
                  ) : null}
                </header>

                {product.category === "paint-by-numbers" && product.size ? (
                  <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--color-border)] pt-8 text-sm">
                    <div className="flex min-w-[10rem] flex-col gap-1">
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Размер
                      </dt>
                      <dd className="font-medium text-[var(--color-foreground)]">
                        {product.size}
                      </dd>
                    </div>
                  </dl>
                ) : null}

                <div className="mt-8 border-t border-[var(--color-border)] pt-8">
                  <h2 className="sr-only">О товаре</h2>
                  <p className="text-[0.95rem] leading-[1.75] text-[var(--color-muted)] sm:text-base">
                    {product.description}
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <a
                    href={product.wildberriesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-center text-[0.95rem] font-semibold text-[var(--color-primary-foreground)] shadow-[var(--shadow-soft)] transition-[transform,opacity,box-shadow] hover:opacity-[0.97] active:scale-[0.99] sm:py-4 sm:text-base"
                  >
                    Перейти к покупке на Wildberries
                  </a>
                  <p className="text-center text-xs leading-relaxed text-[var(--color-muted)] sm:text-left">
                    Оплата и доставка — на Wildberries. На этой странице — фото
                    набора{product.instructionPdf ? " и PDF-инструкция" : ""}.
                  </p>
                  {product.instructionPdf ? (
                    <a
                      href={product.instructionPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)] px-5 py-3 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-muted-bg)]"
                    >
                      Скачать инструкцию (PDF)
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
