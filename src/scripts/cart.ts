export interface CartItem {
  slug: string;
  name: string;
  image: string;
}

const STORAGE_KEY = "an_cart";

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;
  return (
    typeof item.slug === "string" &&
    typeof item.name === "string" &&
    typeof item.image === "string"
  );
}

export function getCart(): CartItem[] {
  if (typeof localStorage === "undefined") return [];

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(stored)) return [];

    const uniqueItems = new Map<string, CartItem>();
    stored.filter(isCartItem).forEach((item) => {
      uniqueItems.set(item.slug, {
        slug: item.slug,
        name: item.name,
        image: item.image,
      });
    });
    return [...uniqueItems.values()];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cart:updated", { detail: items }));
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  if (cart.some((cartItem) => cartItem.slug === item.slug)) return false;

  cart.push(item);
  saveCart(cart);
  return true;
}

export function removeFromCart(slug: string) {
  saveCart(getCart().filter((item) => item.slug !== slug));
}

export function clearCart() {
  saveCart([]);
}

export function getCount() {
  return getCart().length;
}
