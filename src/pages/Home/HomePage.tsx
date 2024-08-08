import { Link } from "react-router-dom"
import "./styles.css"
const HomePage = () => {
	return (
		<div className="container">
			<div className="home__content-wrapper">
				<h1 className="home__heading">This is a home page</h1>
				<Link className="home__products-btn" to={"./products"}>
					View products
				</Link>
			</div>
		</div>
	)
}
export default HomePage
