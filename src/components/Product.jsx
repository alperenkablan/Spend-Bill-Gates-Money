import "./product.style.css"

function Product({product,total,money,basket,setBasket}){

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
			checkBasket.amount += 1
			setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
		} else {
			setBasket([...basket, {
				id: product.id,
				amount: 1,
			}
    ])}}

    const removeBasket = () => {
		const currentBasket = basket.find(item => item.id === product.id)
		const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
		currentBasket.amount -= 1
		if (currentBasket.amount === 0) {
			setBasket([...basketWithoutCurrent])
		} else {
			setBasket([...basketWithoutCurrent, currentBasket])
		}
	}


    return(
        <>
        <div className="product">
        <img src={product.image} alt=""/>
        <h6>{product.title}</h6>
        <div className="price">
        <h6>{product.price}$</h6>
        <div className="actions">
            <button disabled={!basketItem} onClick={removeBasket}>Sell</button>
            <span className="amount">{basketItem && basketItem.amount || 0}</span>
            <button disabled={total+product.price>money} onClick={addBasket}>Buy</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Product