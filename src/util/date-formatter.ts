const LOCALE = 'fr-FR';

export function formatDate(date: Date) {
  return Intl.DateTimeFormat(LOCALE, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
