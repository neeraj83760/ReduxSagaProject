import {Route,Routes, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Cart() {
  // useSelctor ek state leta hai aur state poore redux ka data rakhti hai to agar humien
  // sirf cart ka data chahiye to state.cartData likhna padega 
  const cartData = useSelector((state)=> state.cartData )
   
  let amount = cartData.length && cartData.map((item)=> item.price).reduce((prev,next)=> prev + next)
  console.warn(amount);
  return (
    <div>
    <Link to="/">Product List</Link>
    <h1>Cart Page !!</h1>
    <div className='cart-page-container d-flex'>
    <table className='table table-striped table-bordered table-hover'>
      <tr>
        <td>Photo</td>
        <td>Brand</td>
        <td>Color</td>
        <td>Price</td>
      </tr>
      {
        cartData.map((item)=>
        
        <tr key={item.id}>
        <td><img src={item.photo} alt='Product Image' style={{height:'100px', width:'100px', objectFit:'cover'}}/></td>
        <td>{item.name}</td>
        <td>{item.color}</td>
        <td>{item.price}</td>
        </tr>
        
        )
      }

    </table>
    <div className='price-details m-5'>
   <table className='table table-striped table-bordered'>
      <tr>
        <td className='p-3'>Amount</td>
        <td className='p-3'>Discount</td>
        <td className='p-3'>Tax</td>
        <td className='p-3'>Total</td>
      </tr>
      <tr>
      <td className='p-3'>{amount}</td>
      <td className='p-3'>{amount/10}</td>
      <td className='p-3'>30</td>
      <td className='p-3'>{amount - (amount/10)}</td>
      </tr>   
   </table>

   <button className='btn btn-outline-info' style={{marginLeft: '220px'}}>Checkout</button>

    </div>
    </div>     
    </div>
  );
}

export default Cart;

