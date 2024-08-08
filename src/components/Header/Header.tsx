import { NavLink } from "react-router-dom"
import "./styles.css"
import { forwardRef, useState } from "react"
import Cart from "../Cart/Cart"
import { createPortal } from "react-dom"
const Header = forwardRef<HTMLElement>((props, ref) => {
	const [isShowModal, setIsShowModal] = useState(false)
	return (
		<header ref={ref} className="header">
			<div className="container">
				<div className="header__content-wrapper">
					<img
						className="header__logo"
						src="/logo.svg"
						onClick={() => setIsShowModal(true)}
					/>
					<ul className="header__nav">
						<li className="header__nav-item">
							<NavLink
								className={({ isActive }) => (isActive ? "blue" : "")}
								to={"/"}
							>
								Home
							</NavLink>
						</li>
						<li className="header__nav-item">
							<NavLink
								className={({ isActive }) => (isActive ? "blue" : "")}
								to={"/info"}
							>
								Info
							</NavLink>
						</li>
						<li className="header__nav-item">
							<NavLink
								className={({ isActive }) => (isActive ? "blue" : "")}
								to={"/products"}
							>
								Products
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			{isShowModal
				? createPortal(<Cart setIsShow={setIsShowModal} />, document.body)
				: null}
		</header>
	)
})
export default Header
