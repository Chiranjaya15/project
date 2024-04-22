import React,{ useState ,useEffect } from "react";
import axios from "axios";

function Addstock(){

    const[stock,setstock]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8090/furniture/")
        .then(res=>setfurniture(res.data))
        .catch((err)=>{console.log(err)})
      },[])


}