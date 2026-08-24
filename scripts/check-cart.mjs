import assert from "node:assert/strict";
import {
  addToCart,
  clearCart,
  getCart,
  getCount,
  removeFromCart,
} from "../src/scripts/cart.ts";

const values = new Map();
globalThis.localStorage = {
  getItem: (key) => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value),
};
globalThis.window = new EventTarget();

const product = { slug: "bota-prueba", name: "Bota prueba", image: "/bota.avif" };

assert.equal(addToCart(product), true);
assert.equal(addToCart(product), false);
assert.equal(getCount(), 1);
assert.deepEqual(getCart(), [product]);

removeFromCart(product.slug);
assert.equal(getCount(), 0);

localStorage.setItem("an_cart", "invalid-json");
assert.deepEqual(getCart(), []);

addToCart(product);
clearCart();
assert.deepEqual(getCart(), []);

console.log("Cart persistence checks passed.");
