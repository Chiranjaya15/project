import React,{ useState ,useEffect } from "react";
import axios from "axios";


export default function Deliverylist(){


    const[Delivery,setDelivery]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8090/delivery/")
        .then(res=>setDelivery(res.data))
        .catch((err)=>{console.log(err)})
      },[])

      return(

        <div className="container">
            <form>

            <div className="mt-3">  
            <h3>
                <table className="table">
                <thead>
                    <tr>
                        <th>Furniture DeliveryID </th>
                        <th>Customername</th>
                        <th>Items</th>
                        <th>TransactionID</th>
                        <th>address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Delivery.map((delivery,index)=>{
                            return <tr key={index}>
                                      <td>{delivery.deliveryid}</td>
                                      <td>{delivery.customername}</td>
                                      <td>{delivery.items}</td>
                                      <td>{delivery.transactionid}</td>
                                     <td>{delivery.address}</td>
                                     <td>{delivery.status}</td>
                                     
                                </tr>
                        })
                    }
                </tbody>
                </table>
            </h3>       
           </div>        
         </form>
    </div>
    )
}


