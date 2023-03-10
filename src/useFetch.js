import { useState, useEffect } from "react"; 


 export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>setData(data.products))
    .catch((error)=>error)
  },)
  return [data]
}
 

/* export const useFetch = fetch('https://dummyjson.com/products')
.then(response=>response.json())
.then(res=>res)
.catch(e=>e) */

 /*  const [data,setData] = useState([])
  useEffect(()=>{
    useFetch.then(res=>setData(res.products)).catch(e=>console.log(e))
  }, [data]) */