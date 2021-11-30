import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({careType, scaleValue}) {
    
    let scaleType = careType === 'water' ? (
        <img src={Water} alt='water-icon' onClick={()=>info(careType, scaleValue)}/>
    ) : (
        <img src={Sun} alt='sun-icon' onClick={()=>info(careType, scaleValue)}/>
    )

    const range = [1,2,3]

    return (<div>
                {range.map((rangeElem)=>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                    )}
    
           </div>
    )

}

export default CareScale

function info(type,value){
    if(value===1){
        if(type=== "water")
        alert("pas beaucoup d'eau")
        if(type=== "light")
        alert("pas beaucoup de lumiere")
    }else if(value===2){
        if(type=== "water")
        alert("moyennement de l'eau")
        if(type=== "light")
        alert("moyennement de la lumiere")
    }else if(value===3){
        if(type=== "water")
        alert("beaucoup d'eau")
        if(type=== "light")
        alert("beaucoup de lumiere")
    }


}