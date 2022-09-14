import mg from "../Images/cart.png"
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom"
import {productSearch} from '../Redux/productAction'

const Header = () => {
    const result = useSelector((state)=> state.cartData)
    
    const dispatch = useDispatch();

    console.warn('Redux data in Header',result)
    return (
    <div className="header">
        <Link to="/"> <h1 style={{float: 'left', margin: '10px', padding:'10px', color: 'white'}}>E-Commerce</h1></Link>
       

          
         <div><input className=' inputBox' onChange={(event)=> dispatch(productSearch(event.target.value))} type='text' placeholder="Search Items"/></div>
         
   
   
   





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