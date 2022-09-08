import mg from "../Images/cart.png"
import {useSelector} from 'react-redux'

const Header = () => {
    const result = useSelector((state)=> state.cartData)
    console.warn('Redux data in Header',result)
    return (
    <div className="header">
        <div className="cart-div">
        <span>{result.length}</span>
        <img src={mg} alt=''/>    
        </div>
    </div>

    )
}

export default Header;