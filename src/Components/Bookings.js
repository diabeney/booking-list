import React,{ useState,useEffect } from 'react'
import '../App.css';
import BookingLists from '../Components/booking-lists';

const STOCK = {
  products: [
    {name: 'Physics of the Future', id: 1, price: 20.00, quantity: 0},
    {name: 'The midnight Sun', id: 2, price: 19.99, quantity: 0},
    {name: 'Future of Humanity', id: 3, price: 35.50, quantity: 0},
    {name: 'Love and Math', id: 4, price: 34.00, quantity: 0},
    {name: 'Living in the Light', id: 5, price: 28.75, quantity: 0},
  ]
}





function Bookings() {
  const [stock, setStock] = useState(STOCK.products);
  const [value, setValue] = useState('');

  function filterer(e) {
    e.preventDefault();
    const filtered = STOCK.products.filter(element => {
      const arr = element.name.split(' ').includes(value)
      return arr;
    })
    console.log(stock)
    console.log(filtered)
    setStock(filtered)
  }


  return (
    <div className='hero-section'>
      <h1>Shopping List</h1>
      <form onSubmit={e => filterer(e)} >
        <input value={value} onChange={e => setValue(e.target.value)} type="search" placeholder='Search' />
        <label htmlFor="checkbox">Filter by in stock</label>
        <input type="checkbox" />
      </form>
      <BookingLists props={stock} />  
   </div>
 )

  
}

export default Bookings;
