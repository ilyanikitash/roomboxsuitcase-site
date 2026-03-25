/**
 * Извлекает номер карточки из URL Wildberries (`/catalog/<id>/detail.aspx`).
 */
export function getWildberriesArticleId(url: string): string | undefined {
  const m = /\/catalog\/(\d+)\/detail\.aspx/i.exec(url);
  return m?.[1];
}
