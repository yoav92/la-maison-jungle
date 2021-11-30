import '../styles/App.css';
import Banner from './Banner.js'
import Cart from './Cart.js'
import ShoppingList from './ShoppingList.js';
import logo from '../assets/logo.png';
import QuestionForm from './QuestionForm.js';
import ConnectBackend from './ConnectBackend.js';
import Categories from './Categories.js';
import Footer from './Footer';
import { useState, useEffect } from 'react';

//banner est l'enfant de App
function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  const [activeCategory, setActiveCategory] = useState([]);
  const [isFooterShown, updateIsFooterShown] = useState(true);

  return  <div>
            {/*<ConnectBackend/>*/}
            <QuestionForm/>
              <Banner>
                  <img src={logo} alt='La maison jungle' className="App-logo"/>
                  <h1 className='lmj-title'>La maison jungle</h1>
              </Banner>
            <ShoppingList cart={cart} updateCart={updateCart} 
            setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
            <Cart cart={cart} updateCart={updateCart} setActiveCategory={setActiveCategory} 
            activeCategory={activeCategory}/>
            {/*<button onClick={()=>updateIsFooterShown(false)}>Cacher le footer</button>*/}
            {/*isFooterShown && <Footer cart={cart}/>*/}
            <Footer cart={cart}/>
          </div>
}

export default App;
