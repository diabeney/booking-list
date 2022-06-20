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
                  return <div key={element.id} className='list-items'>
                      <h3 >{element.name}</h3>
                      <p>${element.price}</p>
                      { (element.quantity === 0) ?  null : <div className='booked-counter'>{element.quantity}</div>}
                      <div>
                          
                      <button className="btn" onClick={() => {handleAddition(element)}}>+</button>
                          <button disabled={element.quantity ? false : true} className="btn" onClick={() => {handleSubtraction(element)}}>-</button>
                     </div>

                      </div>
            })
            }
            <button className='btn view-cart' onClick={() => { toggleCart() }}>{ cart ? 'View Cart': 'Close Cart'}</button>
            <div style={{display: cart ? "none" :  "block",marginTop: '2rem'}}>
                <Booked props={booked} />
            </div>
    </>
  )
}

export default BookingLists