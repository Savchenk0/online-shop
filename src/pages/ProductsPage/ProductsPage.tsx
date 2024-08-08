import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { ProductI } from "../../components/ProductCard/ProductCard"
import "./styles.css"
import Products from "../../components/Products/Products"
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter"
import { useSearchParams } from "react-router-dom"
import filterProducts from "../../helpers/filterProducts"
import paginateArray from "../../helpers/paginateArray"

const ProductsPage = ({ onPaginate }: { onPaginate: () => void }) => {
	const [products, setProducts] = useState<ProductI[]>([])
	const productsPerPage = 10
	const isLoading = !products.length
	const [searchParams] = useSearchParams()
	const filteredProducts = useMemo(
		() => filterProducts(products, searchParams),
		[searchParams, products]
	)
	const paginatedProducts = useMemo(() => {
		return paginateArray<ProductI>(filteredProducts, productsPerPage)
	}, [filteredProducts, productsPerPage])

	const categories: string[] = useMemo(
		() =>
			products.reduce((acc: string[], el) => {
				if (!acc.includes(el.category)) acc.push(el.category)
				return acc
			}, []),
		[products]
	)
	const filter: { [key: string]: string[] } = { category: categories }
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then(rsp => {
			setProducts(rsp.data)
		})
	}, [])
	if (isLoading) return <p className="loading-text">Loading...</p>
	return (
		<div className="container">
			<div className="products-page__content-wrapper">
				<ProductsFilter filter={filter} />
				<Products
					paginatedProducts={paginatedProducts}
					onPaginate={onPaginate}
				/>
			</div>
		</div>
	)
}
export default ProductsPage
