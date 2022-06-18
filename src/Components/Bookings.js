
import '../App.css';
import BookingLists from '../Components/booking-lists';

const STOCK = {
  products: [
    {name: 'Physics of the Future', id: 1, price: 20, quantity: 0},
    {name: 'The midnight Sun', id: 2, price: 19, quantity: 0},
    {name: 'Future of Humanity', id: 3, price: 35, quantity: 0},
    {name: 'Love and Math', id: 4, price: 34, quantity: 0},
    {name: 'Living in the Light', id: 5, price: 28, quantity: 0},
  ]
}

function Bookings() {
  return (
    <div className='hero-section'>
      <h1>Shopping List</h1>
      <BookingLists props={STOCK.products} />  
   </div>
 )

  
}

export default Bookings;
