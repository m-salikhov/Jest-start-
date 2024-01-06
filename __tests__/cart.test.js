import makeCart from '../src/cart.js';

let cart;
let mockItems = [
  { product: { name: 'car', price: 3 }, count: 5 },
  { product: { name: 'house', price: 10 }, count: 2 },
];

beforeEach(() => {
  cart = makeCart();
  cart.addItem({ name: 'car', price: 3 }, 5);
  cart.addItem({ name: 'house', price: 10 }, 2);
});

test('cart getCount', () => {
  expect(cart.getCount()).toBe(7);
});

test('cart getCount', () => {
  expect(cart.getCost()).toBe(35);
});

test('cart getItems', () => {
  expect(cart.getItems()).toEqual(mockItems);
});

test('cart add', () => {
  cart.addItem({ name: 'house', price: 10 }, 1);
  expect(cart.getItems()).toHaveLength(3);
  expect(cart.getCost()).toBe(45);
});
