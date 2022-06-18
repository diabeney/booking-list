import React, { useState,useEffect } from 'react'

function Booked({ props }) {
    const [price, setPrice] = useState(0);
    
    let items = [];
    const totalPrice = props.map(element => {
        if (element.quantity !== 0) {
            items.push(element)
        }
        return element.price * element.quantity;
   })

    const total = totalPrice.reduce((prev, curr) => {
      return prev + curr
   })

 useEffect(() => {
        setPrice(total)
    },[total])
   
  return (
      <aside>
          <section>
              <h1>Total Number of Items:  </h1>
              {items.map(item => {
                  return <li key={item.id}>{item.name}  -<span>{item.quantity}</span></li>
              })}
              
          </section>
          <h1>Total Price: {price}</h1>
      </aside>
  )
}

export default Booked