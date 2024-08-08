import { Link, useSearchParams } from "react-router-dom"
import "./styles.css"
import { FC, Fragment } from "react"
interface ProductsFilterI {
	[key: string]: string[]
}
const ProductsFilter: FC<{ filter: ProductsFilterI }> = ({ filter }) => {
	const filters = Object.entries(filter)
	const [searchParams, setSearchParams] = useSearchParams()
	return (
		<div className="products-page__filter">
			{filters.map(([heading, options]) => {
				return (
					<Fragment key={heading}>
						<h2 className="products-page__filter-heading">
							{heading[0].toUpperCase() + heading.slice(1)}
						</h2>
						<ul className="products-page__filter-options-list">
							{options.map(filterOption => (
								<li
									onClick={() => {
										searchParams.set(heading, filterOption)
										setSearchParams(searchParams)
									}}
									className="products-page__filter-option"
									key={filterOption}
								>
									{filterOption}
								</li>
							))}
						</ul>
						<Link to={"/products"} className="products-page__filter-reset--btn">
							Reset filters
						</Link>
					</Fragment>
				)
			})}
		</div>
	)
}

export default ProductsFilter
