import { useEffect, useState } from 'react';
// import Header from "./components/Header/Header";
// import Para from './components/Header/Para/Para';
import './App.css'

function App() {
  // const [lists,setLists] = useState([
  //   {
  //     id:1,
  //     name:'atul'
  //   },
  //   {
  //     id:2,
  //     name:'sayan'
  //   },
  //   {
  //     id:3,
  //     name:'sudipta'
  //   }
  // ]);
  const [count,setCount] = useState(0)
  //const color = count % 5 === 0 ? 'red' : 'blue';

  //==================================================================
  //this will be trigger each time component re-render
  // useEffect(() => {
  //   console.log(" useEFFECT----color");
  //   document.body.style.backgroundColor = randomColor(); 
  //   //api
  // })

  //======================================================================
  //this will be trigger for the very first time when component render after that will be not 
  //render

 // useEffect(() => {
  //   console.log(" useEFFECT----color");
  //   document.body.style.backgroundColor = randomColor(); 
  //   //api
  // },[])

  //======================================================================

  //on the 3rd example we can pass array filled with all the dependancies 
  //that should trigger the callback funtion
  //anytime the dependencies chanegs it will trigger the callback funtion

  // useEffect(() => {
  //   console.log(" useEFFECT----color");
  //   document.body.style.backgroundColor = randomColor(); 
  //   //api
  // },[color])

  console.log("render=========")
  
  return (
    <div className="App">
      {/* <Header text={`Hello PwC Developers`}/>
      <Para />
      <ol>
        {
          lists.map((list) => {
              return (<li key={list.id}>{list.name}</li>)
          })
        }

      </ol>   */}
      <center>
      <button onClick={() => setCount(count+1)}>Click here to increment {count}</button>
      </center>
     
    </div>
  );
}

export default App;


function randomColor(){
  return `#${Math.random().toString(16).substr(-6)}`; 
}