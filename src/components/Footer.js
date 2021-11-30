import { useEffect, useState } from 'react'
import '../styles/Footer.css'

function Footer({cart}) {
	const [inputValue, setInputValue] = useState('')
	function handleInput(value){		
			setInputValue(value)
		}
	function handleBlur(){
		if(!inputValue.includes('@')){
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
		}
	}
	//useEffect(()=>
	//	console.log('cette alerte s\'affiche a chaque rendu')
	//)
	//useEffect(()=>{
	//	console.log('cette alerte s\'affiche la premiere fois')
	//},[])
	//useEffect(()=>{
	//	console.log('cette alerte s\'affiche a chaque rendu et quand mon panier est mis a jour')
	//},[cart])
	//useEffect(()=> {
	//	return () =>
	//	console.log('cette alerte s\'affiche quand footer est retire du dom')
	//});

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div>
				<input
					placeholder='Entrez votre mail'
					value = {inputValue}
					onChange = {(e)=>handleInput(e.target.value)} 
					onBlur={()=>handleBlur()}
				/>
				<button>envoyer</button>
			</div>
		</footer>
	)
}

export default Footer