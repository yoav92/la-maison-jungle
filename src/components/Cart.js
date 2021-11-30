import { useState, useEffect } from 'react'
import Footer from './Footer'
import '../styles/Cart.css'

function Cart({setActiveCategory, activeCategory, cart, updateCart}) {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
		useEffect(() => {
			document.title = `LMJ: ${total}€ d'achats`
		}, [total])
		//useEffect(() => {
		//	alert(`J'aurai ${total}€ à payer 💸`)
		//},[total, activeCategory])//dee qu'il y a un changement dans total ou activeCategory, on lance l'alerte
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{cart.map(({name, price, amount}, index)=>(
				<div key={`${name}-${index}`}>
					{name} {price}$ x {amount}
					<button onClick={()=> remove(name)}>remove</button>
				</div>
		
			))}


			<h3>Total : {total}$</h3>
			
			{(cart.length!==0) && <button onClick={() => updateCart([])}>Vider le panier</button>}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
	function remove(name){
		var FoundItem = cart.find((Element)=>Element.name === name);
		var cartFiltered = cart.filter((Element)=>Element.name !== FoundItem.name)
		updateCart([...cartFiltered])
	}
}


export default Cart