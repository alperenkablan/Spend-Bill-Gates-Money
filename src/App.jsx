import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';
import products from './products.json'

function App() {

	const [money, setMoney] = useState(1000000000)
	const [basket, setBasket] = useState([])
	const [total, setTotal] = useState(0)

	const resetBasket = () => {
		setBasket([])
	}

	useEffect(() => {
		setTotal(
			basket.reduce((acc, item) => {
				return acc + (item.amount * (products.find(product => product.id === item.id).price))
			}, 0),
		)
	}, [basket])

	return (
		<>
		<div className="title">
			<img className='title-img' src="https://neal.fun/spend/billgates.jpg" alt="" />
			<h2>Spend Bill Gates' Money</h2>
		</div>
			<Header total={total} money={money}/>
			<div className="container products">
				{products.map(product => (
					<Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
				))}
			</div>
			{total > 0 && (
				<Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
			)}
		</>
	);
}

export default App;