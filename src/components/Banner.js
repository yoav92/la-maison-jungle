import '../styles/Banner.css';
import logo from '../assets/logo.svg';
//function Banner(props) {
function Banner({ children }){
    const title= 'La maison jungle et de tarzan'
    return(
        <div className='lmj-banner'>
            {children}
        </div>
    )
}

export default Banner