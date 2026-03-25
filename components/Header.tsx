import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";

const NAV = [
  { href: "/#catalog", label: "Каталог" },
  { href: "/#faq", label: "Вопросы" },
  { href: "/#about", label: "О нас" },
];

/**
 * Высота слота под знак: почти вся полезная высота шапки без «толстой» полосы.
 * Ширина подписи растёт по aspect ratio файла (широкий логотип).
 */
const LOGO_SLOT_H = "h-[3.75rem] sm:h-[4.25rem]";

/**
 * Лёгкое увеличение по горизонтали: визуально «подрезает» лишние поля в PNG
 * (прозрачные отступы), origin слева — без сдвига относительно навигации.
 */
const LOGO_TRIM_SCALE = "scale-[1.07] sm:scale-[1.09]";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div
        className={`mx-auto flex min-h-[3.75rem] max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2.5 px-3 sm:min-h-[4.25rem] sm:gap-x-7 sm:px-5 lg:px-8`}
      >
        <Link
          href="/"
          className={`relative flex min-w-0 shrink-0 items-center ${LOGO_SLOT_H} max-w-[min(92vw,26rem)] outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] sm:max-w-[min(50vw,28rem)] lg:max-w-[30rem]`}
        >
          <span className="relative flex h-full w-full min-w-0 items-center">
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width}
              height={brand.logo.height}
              className={`h-full w-auto max-w-none object-contain object-left ${LOGO_TRIM_SCALE} origin-left`}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 480px"
              priority
            />
          </span>
        </Link>
        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm font-medium leading-snug text-[var(--color-muted)] sm:gap-x-6 sm:text-[0.9375rem] lg:gap-x-8"
          aria-label="Основная навигация"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
