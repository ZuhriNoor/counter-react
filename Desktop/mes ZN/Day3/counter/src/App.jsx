import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react'; 


export default function App() {

  const [counter,setCounter] = useState(0);


 
  
  const increment = () => {
    setCounter(counter+1);
  }

  const decrement = () => {
    setCounter(counter-1);
  }



  return (
    <div>
      <Container className='mt-5 pt-5'>
        <h1 className='text-center'>Counter App</h1>
        <br />
        <div className='d-flex justify-content-center align-items-center mx-auto circle' style={{width: '200px',height: '200px', backgroundColor: '#F6FA70', borderRadius: '50%'}}>
          <h2>{counter}</h2>
        </div>
        <div className='d-flex justify-content-between mx-auto' style={{width: '350px'}}>
          <Button variant='success' size='lg' className='px-4 button-custom' style={{borderRadius: '50%'}} onClick={increment}>+</Button>
          {counter > 0 && <Button variant='danger' size='lg' className='px-4' style={{borderRadius: '50%'}} onClick={decrement}>-</Button>}
        </div>
      </Container>
    </div>
    
    
  )
}
