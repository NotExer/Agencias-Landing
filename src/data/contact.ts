export const WHATSAPP_NUMBER = "573042351036";
export const PHONE_DISPLAY = "304 2351036";
export const EMAIL = "contactanos@agenciasnacionales.com";

export function waHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
