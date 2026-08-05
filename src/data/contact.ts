export const WHATSAPP_NUMBER = "573042351036";

export function waHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
