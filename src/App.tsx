import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductPage from "./pages/ProductPage/ProductPage"
import { useRef } from "react"
import "normalize.css"
import "./App.css"

function App() {
	const mainSectionRef = useRef<HTMLDivElement>(null)
	function handlePaginate() {
		mainSectionRef.current?.scrollTo(0, 0)
	}

	return (
		<>
			<Header />
			<div ref={mainSectionRef} className="main-section">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/products"
						element={<ProductsPage onPaginate={handlePaginate} />}
					/>
					<Route path="/products/:id" element={<ProductPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App
