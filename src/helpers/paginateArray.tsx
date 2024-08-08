function paginateArray<T>(array: T[], elementsPerPage: number) {
	return array.reduce(
		(acc: T[][], product: T) => {
			const lastGroupOfProducts: T[] = acc[acc.length - 1]
			if (lastGroupOfProducts.length < elementsPerPage)
				lastGroupOfProducts.push(product)
			else {
				acc.push([product])
			}
			return acc
		},
		[[]]
	)
}
export default paginateArray
