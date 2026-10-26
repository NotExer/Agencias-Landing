/** Contact events describe intent, never a received message or a sale. */
export const isProductionAnalytics = () => window.location.hostname === "agenciasnacionales.com";

export function trackEvent(name: string, parameters: Record<string, string | number> = {}) {
  if (isProductionAnalytics()) window.gtag?.("event", name, parameters);
}

export function trackContactIntent(method: string) {
  trackEvent("generate_lead", { method });
}

// Bundled modules execute once across ClientRouter navigation. Event delegation
// handles newly swapped links without registering another listener per page.
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest<HTMLAnchorElement>("a[href]");
  if (!link || link.getAttribute("aria-disabled") === "true") return;
  const url = new URL(link.href);
  if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
    trackEvent("whatsapp_click", { link_url: `${url.origin}${url.pathname}` });
    trackContactIntent(link.dataset.contactMethod || "whatsapp");
  } else if (url.protocol === "tel:") {
    trackEvent("phone_click");
    trackContactIntent("phone");
  } else if (url.protocol === "mailto:") {
    trackEvent("email_click");
    trackContactIntent("email");
  }
});

// Fired after Astro swaps the document and updates its title, including history
// navigation. Initial page load is emitted by this same lifecycle event.
let previousPage = document.referrer;
document.addEventListener("astro:page-load", () => {
  trackEvent("page_view", {
    page_location: window.location.href,
    page_title: document.title,
    page_referrer: previousPage,
  });
  previousPage = window.location.href;
});
