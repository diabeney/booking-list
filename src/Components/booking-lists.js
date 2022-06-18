import React,{useState} from 'react';
import Booked from '../Components/Booked';


function BookingLists({ props }) {

    const PRODUCTS = [...props]
    const [booked, setBooked] = useState(PRODUCTS);
    const [cart, setCart] = useState(true);
    const handleAddition = (element) => {
        element.quantity += 1;
        const newProducts = [...booked];
        setBooked(newProducts);
    }

    const handleSubtraction = (element) => {
        (element.quantity !== 0) ? element.quantity -= 1 : element.quantity = 0;
        const newProducts = [...booked];
        setBooked(newProducts);
    }

    const toggleCart = () => {
        let newCart = !cart;
        setCart(newCart)
    }
    return (
        <>
          {
              booked.map((element) => {
                  return <div  className='list-items'>
                      <h3>{element.name}</h3>
                      <p>${element.price}</p>
                      { (element.quantity === 0) ?  null : <span>{element.quantity}</span>}
                      <div>
                          
                      <button onClick={() => {handleAddition(element)}}>+</button>
                      <button onClick={() => {handleSubtraction(element)}}>-</button>
                     </div>

                      </div>
            })
            }
            <button onClick={()=>{toggleCart()}}>View Cart</button>
            <div style={{display: cart ? "none" :  "block"}}>
                <Booked props={booked} />
            </div>
    </>
  )
}

export default BookingLists