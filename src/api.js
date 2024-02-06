import React, { useEffect,useState} from 'react'
 
export default function Apicall(){

    const [abc, setAbc]= useState([]);
      
useEffect(() =>{
    const data = fetch("https://jsonplaceholder.typicode.com/posts");
    const value = data.then((item) => item .json());
    value .then ((apiData) => setAbc(apiData));
},[]);
console.log(abc,"apiData")

    return(
        abc.map((value,i)=>{
          return(
            //  key={i} console uncaught error remove 
            <div className='card'  key={i}>
            <p><b>title:</b>{value.title}</p>
            <p><b>body:</b>{value.body}</p>
            </div>
          )
        })
    )
};