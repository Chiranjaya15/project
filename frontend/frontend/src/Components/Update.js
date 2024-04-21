import React,{ useState ,useEffect } from "react";
import axios from "axios";

export default function Update(){

    const urlParams=new URLSearchParams(window.location.search);
    const furnitureName =urlParams.get("name");
    const Url =`http://localhost:8090/furniture/${furnitureName}`;
    const Url2 =`http://localhost:8090/furniture/update/${furnitureName}`;

    const[furnitueUpdate,setfurnitueUpdate] =useState([]);

    useEffect(()=>{
        axios.get(Url)
        .then((res)=>{console.log(res.data)
            setfurnitueUpdate(res.data)
        console.log({setfurnitueUpdate})})
        .catch(err=>console.log(err));
    },[])




    return(
        <div className="container">
            <h1>FURNITURE UPDATING PAGE</h1>


        </div>

    )


}