import { plantList } from '../data/plantList'
import CareScale from './CareScale'
import "../styles/PlantItem.css"

function PlantItem({name,cover,id,light,water}){
return(
    <li key={id} className='lmj-plant-item'>
        <h2>{name}</h2>
        <img className='lmj-plant-item-cover' src={cover} onClick={() => handleClick(name)}/>
        <div>
            <CareScale careType='water' scaleValue={water}/>
            <CareScale careType='light' scaleValue={light}/>
        </div>
    </li>)
    
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default PlantItem