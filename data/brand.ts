import { logoFile } from "./paths";

/** Имя файла логотипа в `public/logo/` (PNG с прозрачностью). */
const LOGO_FILENAME = "Логотип.png";

/**
 * Натуральные размеры файла (1126×276) — широкий горизонтальный знак.
 * Нужны для корректного aspect ratio и расчёта `sizes` в `next/image`.
 */
export const brand = {
  name: "RoomboxSuitcase",
  logo: {
    src: logoFile(LOGO_FILENAME),
    alt: "RoomboxSuitcase — логотип",
    width: 1126,
    height: 276,
  },
} as const;
