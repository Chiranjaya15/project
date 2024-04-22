import React,{ useState ,useEffect } from "react";
import axios from "axios";
import { Types } from "mongoose";

export default function Update(){

    const urlParams=new URLSearchParams(window.location.search);
    const furnitureName =urlParams.get("name");
    const Url =`http://localhost:8090/furniture/${furnitureName}`;
    const Url2 =`http://localhost:8090/furniture/update/${furnitureName}`;

    const[furnitureUpdate,setfurnitureUpdate] =useState([]);
    const[names,setNames]=useState('');
    const[type,setTypes]=useState('');
    const[statuses, setStatuses]= useState('');
    const [quantities, setQuantities] = useState('');
    const [descriptions, setDescriptions] = useState('');
 

    useEffect(()=>{
        axios.get(Url)
        .then((res)=>{console.log(res.data)
            setfurnitureUpdate(res.data)
        console.log({setfurnitureUpdate})})
        .catch(err=>console.log(err));
    },[])

    useEffect(() => {
        furnitureUpdate.map((furniture, index) => {
          setNames(prevNames => [...prevNames, furniture.name]);
          setTypes(prevTypes => [...prevTypes, furniture.type]);
          setStatuses(prevStatuses => [...prevStatuses, furniture.status]);
          setQuantities(prevQuantities => [...prevQuantities, furniture.quantity]);
          setDescriptions(prevDescriptions => [...prevDescriptions, furniture.description]);
        });
      }, []);

       
    async function updateFurniture(e){
        e.preventDefault();

        const newItem ={    
            name :names,
            type:type,
            status :statuses,
            quantity :quantities,
            description:descriptions
            

        }

      try { 

        await axios.put(Url2,newItem);
        alert("Item Updated");

    }catch(err){
        alert(err.message);
       }

    }

   


    return(
        <div className="container">
        <h1>Update Furniture {furnitureName}</h1>
            <form onSubmit={updateFurniture} className="form-group" action="/submit" method="post">
                <div>
                    <label for="furnitureName">Furniture Name:</label><br/>
                    <input type="text" id="furnitureName" name="furnitureName" placeholder={names} 
                    onChange={(e)=>{
                        setNames(e.target.value);
                    }}
                    /><br/><br/>
                </div>
                <div>
                    <label for="furnitureType">Type:</label><br/>
                    <select id="furnitureType"  name="furnitureType" onChange={(e)=>{
                        setTypes(e.target.value);
                    }}>
                        <option value="Desks">{type}</option>
                        <option value="Desks">Desks</option>
                        <option value="Chair">Chair</option>
                        <option value="Container">Container</option>
                        <option value="Beds">Beds</option>
                    </select><br/><br/>
                </div>
                <div>
                    <label for="status">Status:</label><br/>
                    <select id="status" name="status"            
                    onChange={(e)=>{
                        setStatuses(e.target.value);
                    }}> 
                        <option value="Available">{statuses}</option>
                        <option value="Available">Available</option>
                        <option value="Out of Stock">Out of Stock</option>
                        <option value="Obsolete">Obsolete</option>
                    </select><br/><br/>
                </div>
                <div>
                    <label for="quantity">Quantity:</label><br/>
                    <input type="number" id="quantity" placeholder={quantities} name="quantity" min="0" max="10000" step="1" 
                    onChange={(e)=>{
                        setQuantities(e.target.value);
                    }}
                        /><br/><br/>
                </div>

                <div>
                    <label for="furnituredescription">Furniture Description:</label><br/>
                    <textarea style={{resize:"both", width: "1000px", height: "200px"}} type="text" id="furnituredescription" placeholder={descriptions} name="furnituredescription"
                        onChange={(e)=>{
                            setDescriptions(e.target.value);}}/><br/><br/>
                </div>
               <a href="/updated"> <input type="submit" value="Submit"/> </a>
            </form>
        
            </div>

    )


}