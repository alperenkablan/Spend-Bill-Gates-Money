import {useState} from 'react'
import "./basketitem.style.css"
function BasketItem({item, product}) {
	return (
		<>
			<li className="basket-item">
				{product.title} <span>x {item.amount}</span>
			</li>
		</>
	)
}

export default BasketItem