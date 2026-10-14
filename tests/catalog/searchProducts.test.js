const products = require('../../src/data/products')
const { searchProducts } = require('../../src/catalog')

describe('searchProducts', () => {
	test('Наушник возвращает товар с ID 1', () => {
		const searchText = 'Наушники'
		expect(searchProducts(products, searchText)[0]).toEqual(
			products.filter((elem) => elem.id === 1)[0],
		)
	})

	test('Чистый код возвращает товар с ID 6', () => {
		const searchText = 'Чистый код'
		expect(searchProducts(products, searchText)[0]).toEqual(
			products.filter((elem) => elem.id === 6)[0],
		)
	})

	test('Настольная лампа возвращает товар с ID 4', () => {
		const searchText = 'Настольная лампа'
		expect(searchProducts(products, searchText)[0]).toEqual(
			products.filter((elem) => elem.id === 4)[0],
		)
	})

	test('javascript возвращает товар с ID 3', () => {
		const searchText = 'javascript'
		expect(searchProducts(products, searchText)[0]).toEqual(
			products.filter((elem) => elem.id === 3)[0],
		)
	})

	test('ЧЕХОЛ возвращает товар с ID 5', () => {
		const searchText = 'ЧЕХОЛ'
		expect(searchProducts(products, searchText)[0]).toEqual(
			products.filter((elem) => elem.id === 5)[0],
		)
	})

	test('наушники возвращает товар с ID 1', () => {
		const searchText = 'наушники'
		expect(searchProducts(products, searchText)[0]).toEqual(
			products.filter((elem) => elem.id === 1)[0],
		)
	})

	test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
		const searchText = ''
		expect(searchProducts(products, searchText).map((elem) => elem.id)).toEqual([1, 2, 3, 4, 5, 6])
	})

	test('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
		const searchText = '     '
		expect(searchProducts(products, searchText).map((elem) => elem.id)).toEqual([1, 2, 3, 4, 5, 6])
	})

	test('\\t\\n возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
		const searchText = '\t\n'
		expect(searchProducts(products, searchText).map((elem) => elem.id)).toEqual([1, 2, 3, 4, 5, 6])
	})

	test.todo("'Наушники' возвращает товар с ID 1")
	test.todo("'Чистый код' возвращает товар с ID 6")
	test.todo("'Настольная лампа' возвращает товар с ID 4")
	test.todo("'javascript' возвращает товар с ID 3")
	test.todo("'ЧЕХОЛ' возвращает товар с ID 5")
	test.todo("'наушники' возвращает товар с ID 1")
	test.todo('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]')
	test.todo('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]')
	test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]")
})
