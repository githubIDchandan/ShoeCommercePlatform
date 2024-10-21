import { useState } from "react";
import AddProduct from "./AddProduct";
import ShowProduct from "./ShowProduct";


const Body=()=>{

    const [data,setData]=useState({});

    const productData=(data)=>{
           setData(data)
    }


    return(
        <div>
           <AddProduct productData={productData}/> 
           <ShowProduct data={data}/>
        </div>
    )
}

export default Body;