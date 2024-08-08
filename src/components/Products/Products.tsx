import ProductCard, { ProductI } from "../ProductCard/ProductCard"
import "./styles.css"
import { FC, useEffect, useState } from "react"
interface ProductsI {
	paginatedProducts: ProductI[][]
	onPaginate: (index: number) => void
}
const Products: FC<ProductsI> = ({ paginatedProducts, onPaginate }) => {
	const [page, setPage] = useState(1)
	useEffect(() => setPage(1), [paginatedProducts])
	const pagesAmount = paginatedProducts.length

	const currentProducts = paginatedProducts[page - 1]
	return (
		<div>
			<div className="products__wrapper">
				{currentProducts?.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
			<div className="products__pagination">
				{pagesAmount > 1 &&
					Array(pagesAmount)
						.fill(1)
						.map((_, index) => (
							<a
								className={`products__page-number  ${
									page === index + 1 ? "products__page-number--active" : ""
								}`}
								key={index}
								onClick={() => {
									onPaginate(index)
									setPage(index + 1)
								}}
							>
								{index + 1}
							</a>
						))}
			</div>
		</div>
	)
}
export default Products
