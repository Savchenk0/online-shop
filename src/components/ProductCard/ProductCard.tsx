import { FC } from "react"
import "./styles.css"
import { Link } from "react-router-dom"
type Rating = {
	rate: number
	count: number
}
export interface ProductI {
	category: string
	description: string
	image: string
	price: number
	rating: Rating
	title: string
	id: number
}
const ProductCard: FC<ProductI> = props => {
	const { category, description, image, price, title, rating, id } = props
	return (
		<div className="product__wrapper">
			<Link className="product__link-section" to={`/products/${id}`}>
				<img className="product__image" src={image} alt={title} />
				<p title={title} className="product__title">
					{title}
				</p>
			</Link>
			<p className="product__category">Category: {category}</p>
			<div className="product__rating-section">
				<p className="product__rating">{rating?.rate} &#11088;</p>
				<p className="product__reviews">{rating?.count} reviews</p>
			</div>
			<div className="product__price-section">
				<p className="product__price">{price} &#36; </p>
				<button
					onClick={() => {
						const currentCart = JSON.parse(localStorage.getItem("cart"))
						if (currentCart) {
							currentCart.push({ ...props })
							localStorage.setItem("cart", JSON.stringify(currentCart))
							return
						}
						localStorage.setItem("cart", JSON.stringify([{ ...props }]))
					}}
					className="product__add-to-cart--btn"
				>
					Add to cart
				</button>
			</div>
		</div>
	)
}
export default ProductCard
