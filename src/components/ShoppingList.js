import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
//Indiquée entre accolades,  &&   précède un élément JSX et précise que l'élément ne sera généré que si la condition est respectée
//{plant.isBestSale || plant.category === "classique" && <span>🔥</span>}
function ShoppingList() {
	return (
    <div>
    <ul>
        {
        plantList.map((Element) => 
        (
            
            <li key={Element.id}>
                {Element.name}
                {Element.isSpecialOffer?<span>🔥</span>:null}
                {Element.isSpecialOffer && <div className="affichage">soldes</div>}
            </li>

        )
        )}
    </ul>
    </div>
    )
}

export default ShoppingList




























