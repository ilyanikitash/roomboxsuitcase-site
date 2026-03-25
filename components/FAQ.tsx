const FAQ_ITEMS = [
  {
    q: "Это интернет-магазин?",
    a: "Нет. Сайт показывает подборку товаров и ведёт на карточки на Wildberries. Оформление заказа — только на маркетплейсе.",
  },
  {
    q: "Где взять инструкцию к румбоксу?",
    a: "На карточке товара ниже есть кнопка «Открыть инструкцию» — откроется PDF. Не у всех позиций может быть файл: смотрите подсказку на карточке.",
  },
  {
    q: "Какие категории вы представляете?",
    a: "Румбоксы (миниатюрные интерьеры) и картины по номерам. Фильтр в каталоге помогает оставить только нужное.",
  },
  {
    q: "Есть ли доставка с этого сайта?",
    a: "Доставка и оплата — по правилам Wildberries после перехода по ссылке «Купить на Wildberries».",
  },
  {
    q: "Что входит в комплект?",
    a: "Состав набора указан в карточке товара. Обычно в комплект входит всё необходимое для сборки или рисования, чтобы можно было сразу приступить к процессу.",
  },
  {
    q: "Подойдёт ли товар для подарка?",
    a: "Да, и картины по номерам, и румбоксы часто покупают в подарок. Это не просто вещь, а приятный творческий процесс и красивый результат.",
  },
  {
    q: "Подойдёт ли новичку?",
    a: "Да, товары подходят даже тем, кто раньше не занимался таким творчеством. Всё делается по инструкции, шаг за шагом.",
  },
  {
    q: "Это уже готовое изделие или нужно собирать/рисовать самостоятельно?",
    a: "Это набор для самостоятельного творчества. Картины нужно раскрашивать, а румбоксы — собирать самостоятельно.",
  },
  {
    q: "Есть ли инструкция?",
    a: "Да, инструкция идёт в комплекте. Инструкцию на русском языке для румбоксов можно найти на этом сайте, а для картин по номерам она доступна в электронном виде по QR-коду.",
  },
  {
    q: "Подойдёт ли картина по номерам, если я совсем не умею рисовать?",
    a: "Да, именно для этого такой формат и создан. Вам не нужно уметь рисовать — достаточно закрашивать участки по номерам.",
  },
  {
    q: "Что такое румбокс?",
    a: "Румбокс — это миниатюрная интерьерная композиция или книжный уголок, который нужно собрать самостоятельно. В готовом виде он красиво смотрится на полке и создаёт уютную атмосферу.",
  },
  {
    q: "Сложно ли собирать румбокс?",
    a: "Уровень сложности зависит от модели, но в целом сборка требует внимательности и аккуратности. Это увлекательный процесс, который особенно нравится тем, кто любит творчество и детали.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-gradient-to-b from-[var(--color-background)] to-[var(--color-surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent-text)]">
            Вопросы
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            Частые вопросы
          </h2>
        </div>
        <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-center text-sm leading-relaxed text-[var(--color-foreground)] shadow-[var(--shadow-card)] sm:text-base">
          Есть вопросы? Пишите нам на почту{" "}
          <a
            href="mailto:Natalinikitash@mail.ru"
            className="font-medium text-[var(--color-accent-text)] underline-offset-4 transition-colors hover:text-[var(--color-foreground)] hover:underline"
          >
            Natalinikitash@mail.ru
          </a>
          !
        </p>
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-1 shadow-[var(--shadow-card)] transition-shadow open:shadow-[var(--shadow-card-hover)]"
            >
              <summary className="cursor-pointer list-none py-4 text-left text-base font-medium text-[var(--color-foreground)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-muted-bg)] text-[var(--color-muted)] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
