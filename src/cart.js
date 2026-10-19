function notImplemented() {
	throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.')
}

function addToCart(cart, headphones, quantity) {
	const copy = [...cart]
	if (quantity <= 0) throw new RangeError('количество должно быть больше 0')
	if (quantity > headphones.stock)
		throw new RangeError(`На складе не хватает продукта, доступное количество ${headphones.stock}`)
	if (!copy.length) {
		copy.push({ ...headphones, quantity: quantity })
		return copy
	}

	copy.forEach((item) => {
		if (item.id === headphones.id) {
			item.quantity += quantity
		} else {
			copy = [...copy, { ...headphones, quantity: quantity }]
		}
	})

	return copy
}
function changeQuantity() {
	return notImplemented()
}
function removeFromCart() {
	return notImplemented()
}
function calculateCartSubtotal() {
	return notImplemented()
}
function calculateOrderTotal() {
	return notImplemented()
}

const cartApi = {
	addToCart,
	changeQuantity,
	removeFromCart,
	calculateCartSubtotal,
	calculateOrderTotal,
}

if (typeof module !== 'undefined') module.exports = cartApi
if (typeof window !== 'undefined') window.cartApi = cartApi
