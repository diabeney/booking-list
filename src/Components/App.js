import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Users from './Users';

export const Data = {
    accounts: [

        {
            name: 'diabene',
            verified: false,
        },
        {
            name: 'raindropp',
            verified: true,
        },
        {
            name: 'greymoore',
            verified: true,
        },
        {
            name: 'uptown',
            verified: true,
        }
    ]
    
}


function App() {


    const [user,setUser] = useState('')
    const printMessage = () => {
        setUser('Diabene')
    }    
    return (
        <>
            <h1>Hello {user} </h1>
            <Users data = {Data} />
            <Button clickHandler={printMessage}>Reveal Secret</Button>
      </>
  )
}


export default App