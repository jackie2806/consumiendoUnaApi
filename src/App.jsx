//import logo from './logo.svg';
import './App.css';

import { useFetch } from "./useFetch";

function App() {

  const [data] = useFetch('https://dummyjson.com/products')


  return (
    <div className="App">
      <h1>Fetch </h1>
      <div>
      {
        data.map((e)=>(
          <diV>
             <hi key={e.id}>{e.title}</hi>
             <div>
             <img src={e.images[0]} alt={e.title} />
             </div>
             
          </diV>        
         
      ))
      }
      </div>
   
    
    </div>
  );
}

export default App;
