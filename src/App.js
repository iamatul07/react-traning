import { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import Para from './components/Header/Para/Para';
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