export const WHATSAPP_NUMBER = "573042351036";
export const PHONE_DISPLAY = "304 2351036";
export const EMAIL = "contactanos@agenciasnacionales.com";

export function waHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ponytail: computed so the "años" claim stays consistent and never goes stale (57 in 2026).
export const YEARS_IN_BUSINESS = new Date().getFullYear() - 1969;
