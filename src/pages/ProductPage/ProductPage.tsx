import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { ProductI } from "../../components/ProductCard/ProductCard"
import "./styles.css"

const ProductPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState<ProductI>()
	const [isLoading, setIsLoading] = useState(false)
	const { category, description, image, price, title, rating } = product || {}
	useEffect(() => {
		setIsLoading(true)
		axios.get(`https://fakestoreapi.com/products/${id}`).then(rsp => {
			setProduct(rsp.data)
			setIsLoading(false)
		})
	}, [id])
	if (isLoading) return <p className="loading-text">Loading...</p>
	return (
		<div className="container">
			<>
				<div className="product-page__wrapper">
					<img className="product-page__image" src={image} alt={title} />
					<div className="product-page__info">
						<p title={title} className="product-page__title">
							{title}
						</p>
						<p className="product-page__category">
							Category:{" "}
							<Link to={`/products?category=${category}`}>{category}</Link>
						</p>
						<p className="product-page__description">{description}</p>
						<div className="product-page__rating-section">
							<p className="product-page__rating">{rating?.rate} &#11088;</p>
							<p className="product-page__reviews">{rating?.count} reviews</p>
						</div>
						<p className="product-page__price">{price} &#36; </p>
					</div>
				</div>
				<Link to="/products" className="product-page__back-btn">
					Catalog
				</Link>
			</>
		</div>
	)
}
export default ProductPage
