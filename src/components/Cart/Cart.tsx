import { FC } from "react"
import { ProductI } from "../ProductCard/ProductCard"
import "./styles.css"
interface CartI {
	setIsShow: (arg: boolean) => void
}
const Cart: FC<CartI> = ({ setIsShow }) => {
	const products: ProductI[] = JSON.parse(localStorage.getItem("cart"))
	return (
		<div
			onClick={e => {
				if (e.target.className.includes("cart__background")) setIsShow(false)
			}}
			className="cart__background"
		>
			<div className="cart__content-wrapper">
				{products?.length ? (
					products.map(product => (
						<div>
							<img /> <p>{product.title}</p>
							<div className="cart__amount-section"></div>
						</div>
					))
				) : (
					<p>The cart is empty</p>
				)}
			</div>
		</div>
	)
}
export default Cart
