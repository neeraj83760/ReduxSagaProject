import mg from "../Images/cart.png"
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom"

const Header = () => {
    const result = useSelector((state)=> state.cartData)
    console.warn('Redux data in Header',result)
    return (
    <div className="header">
        <Link to="/"> <h1 style={{float: 'left', margin: '10px', padding:'10px', color: 'white'}}>E-Commerce</h1></Link>
        <Link to='/cart'>
            <div className="cart-div">
            <span>{result.length}</span>
            <img src={mg} alt=''/>    
            </div>
        </Link>

        </div>
       

    )
}

export default Header;