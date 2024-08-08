import { ProductI } from "../components/ProductCard/ProductCard"
const filterProducts = (
	products: ProductI[],
	searchParams: URLSearchParams
): ProductI[] => {
	const params: [string, string][] = []
	for (const entry of searchParams.entries()) {
		params.push(entry)
	}
	if (!params.length) return products
	return products.filter(product => {
		for (let i = 0; i < params.length; i++) {
			if (product[params[i][0]] !== params[i][1]) return false
		}
		return true
	})
}
export default filterProducts
