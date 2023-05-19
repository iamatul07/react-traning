import { useState } from 'react';
import './Header.css';
const Header = ({text}) => {
  const [status,setStatus] = useState(true);

  console.log('status',status)

  return (
    <>
    { status ? <h1>{text}</h1> : <h1>Hello</h1>}
    <button onClick={() => setStatus(!status)}>Click me</button>
    </>
   
  )
}

export default Header
