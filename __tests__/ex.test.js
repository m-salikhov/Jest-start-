import { expect, jest, test } from '@jest/globals';

test('forEach', () => {
  // Моки функций в Jest создаются с помощью функции jest.fn
  // Она возвращает функцию, которая запоминает все свои вызовы и переданные аргументы
  // Потом это используется для проверок
  const callback = jest.fn();

  [1, 2, 3].forEach(callback);

  // Теперь проверяем, что она была вызвана с правильными аргументами нужное количество раз
  expect(callback.mock.calls).toHaveLength(3);
  // Первый аргумент первого вызова
  expect(callback.mock.calls[0][0]).toBe(1);
  // Первый аргумент второго вызова
  expect(callback.mock.calls[1][0]).toBe(2);
  // Первый аргумент третьего вызова
  expect(callback.mock.calls[2][0]).toBe(3);
});

test('logging something', () => {
  const spy = jest.spyOn(console, 'log');

  console.log(12);

  expect(spy).toHaveBeenCalled(); // => true, т.к. метод log был вызван
  expect(spy).toHaveBeenCalledTimes(1); // => true, т.к. метод был вызван 1 раз
  expect(spy).toHaveBeenCalledWith(12); // true, т.к. log был вызван с аргументом 12
  expect(spy.mock.calls[0][0]).toBe(12); // проверка, идентичная предыдущей
});
