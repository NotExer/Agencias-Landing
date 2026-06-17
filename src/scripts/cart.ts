export interface CartItem {
  slug:     string;
  name:     string;
  price:    number;
  image:    string;
  quantity: number;
}

const KEY = 'an_cart';

export function getCart(): CartItem[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]'); }
  catch { return []; }
}

function save(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: items }));
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const cart = getCart();
  const idx  = cart.findIndex(i => i.slug === item.slug);
  if (idx >= 0) { cart[idx].quantity++; save(cart); }
  else save([...cart, { ...item, quantity: 1 }]);
}

export function removeFromCart(slug: string) {
  save(getCart().filter(i => i.slug !== slug));
}

export function setQuantity(slug: string, qty: number) {
  if (qty <= 0) { removeFromCart(slug); return; }
  save(getCart().map(i => i.slug === slug ? { ...i, quantity: qty } : i));
}

export function getTotal()  { return getCart().reduce((s, i) => s + i.price * i.quantity, 0); }
export function getCount()  { return getCart().reduce((s, i) => s + i.quantity, 0); }
export function formatCOP(n: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
}