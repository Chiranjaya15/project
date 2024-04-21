import React,{useState,useEffect} from "react";
import axios from "axios";

export default function Deleted(){

    const urlParams = new URLSearchParams(window.location.search);
    const furnitureName = urlParams.get('name');
    console.log(furnitureName)
    
    const[furnitured,setfurnitured]=useState([]);
    const myVariable = furnitureName; 
    const url = `http://localhost:8090/furniture/delete/${myVariable}`;
    

    useEffect(()=>{
        axios.delete(url)
        .then(res=>setfurnitured(res.data))
        .catch((err)=>{console.log(err)})
      },[furnitureName])




    return(
        <div className="container">
            <h1>FURNITURE DELETED</h1>
            <p1>{url}</p1>
        </div>
      
    );
    
  }
  
 