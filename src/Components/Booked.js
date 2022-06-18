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

      <table>
          <thead>
          <tr>
              <th colSpan={2}>Items Selected</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
              
          </thead>
          <tbody>
              
          {items.map(item => {
              return <tr>
                  <td colSpan={2}>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  </tr>
          })}
          </tbody>
          <tfoot>
          <tr>
             <th colSpan={2}>Total Amount:</th> 
              <th colSpan={2}>${ price }</th> 
          </tr>   
          </tfoot>
      </table>
  )
}

export default Booked