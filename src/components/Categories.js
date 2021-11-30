import '../styles/Categories.css'
import Cart from './Cart'

function Categories({ setActiveCategory, categories, activeCategory }) {
	//console.log(activeCategory);
	function ChooseCategory(categoryValue){
		let search = activeCategory.find((Element) => Element === categoryValue);
		if(typeof search === 'undefined'){
			setActiveCategory([...activeCategory, categoryValue]);
		}
	}

	return (
		<div className='lmj-categories'>
			<select
				value={(e) => activeCategory.find((Element)=>Element === e.target.value)}
				onChange={(e) => ChooseCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=' '>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<div>
			{activeCategory.map((Element,index)=>(
				<div key={`${Element}-${index}`}>{Element}</div>
			))}
			</div>
			<button onClick={() => setActiveCategory([])}>Réinitialiser</button>
			
		</div>
	)
}

export default Categories