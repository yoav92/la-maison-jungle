function Cart(){
    const priceMonstera=8;
    const priceLierre=10;
    const priceBouquet=15;
    
    return (<div>
    <ul>
        <li>Prix du monstera pour un adulte: {priceMonstera}</li>
        <li>Prix du Lierre pour un enfant: {priceLierre}</li>
        <li>Prix du Bouquet: {priceBouquet}</li>
        <li>Total du panier: {priceMonstera+priceLierre+priceBouquet}</li>
    </ul></div>)
    
}

export default Cart;