const products = require('../../src/data/products')
const { sortProductsByPrice } = require('../../src/catalog')

describe('sortProductsByPrice', () => {
	test('все товары c asc сортируются как [3, 6, 5, 4, 2, 1]', () => {
		expect(sortProductsByPrice(products, 'asc').map((item) => item.id)).toEqual([3, 6, 5, 4, 2, 1])
	})

	test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
		expect(sortProductsByPrice(products).map((item) => item.id)).toEqual([3, 6, 5, 4, 2, 1])
	})

	test('товары [1, 3, 4] c asc сортируются как [3, 4, 1]', () => {
		const copy = products.filter((item) => [1, 3, 4].includes(item.id))
		expect(sortProductsByPrice(copy, 'asc').map((item) => item.id)).toEqual([3, 4, 1])
	})

	test('все товары c desc сортируются как [1, 2, 4, 5, 6, 3]', () => {
		expect(sortProductsByPrice(products, 'desc').map((item) => item.id)).toEqual([1, 2, 4, 5, 6, 3])
	})

	test('товары [3, 1, 4] c desc сортируются как [1, 4, 3]', () => {
		const copy = products.filter((item) => [3, 1, 4].includes(item.id))
		expect(sortProductsByPrice(copy, 'desc').map((item) => item.id)).toEqual([1, 4, 3])
	})

	test('товары [5, 2, 6] c desc сортируются как [2, 5, 6]', () => {
		const copy = products.filter((item) => [5, 2, 6].includes(item.id))
		expect(sortProductsByPrice(copy, 'desc').map((item) => item.id)).toEqual([2, 5, 6])
	})

	test('asc не меняет исходный массив [1, 3, 4]', () => {
		const copy = products.filter((item) => [1, 3, 4].includes(item.id))
		sortProductsByPrice(copy, 'asc')
		expect(copy).toEqual(products.filter((item) => [1, 3, 4].includes(item.id)))
	})

	test('desc не меняет исходный массив [1, 3, 4]', () => {
		const copy = products.filter((item) => [1, 3, 4].includes(item.id))
		sortProductsByPrice(copy, 'desc')
		expect(copy).toEqual(products.filter((item) => [1, 3, 4].includes(item.id)))
	})

	test('направление по умолчанию не меняет исходный массив всех товаров', () => {
		const copy = products.filter((item) => [1, 3, 4].includes(item.id))
		sortProductsByPrice(copy)
		expect(copy).toEqual(products.filter((item) => [1, 3, 4].includes(item.id)))
	})

	test.todo("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]")
	test.todo('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]')
	test.todo("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]")
	test.todo("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]")
	test.todo("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]")
	test.todo("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]")
	test.todo("'asc' не меняет исходный массив [1, 3, 4]")
	test.todo("'desc' не меняет исходный массив [1, 3, 4]")
	test.todo('направление по умолчанию не меняет исходный массив всех товаров')
})
