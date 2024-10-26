import React, { useContext, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header";
import Body from "./src/Body";
import ProductContext from "./utils/ProductContext";
import Model from "./src/Model";


const Applayout=()=>{
    const [productUpdate,setProductUpdate]=useState();
    const {prod,large,medium,small}=useContext(ProductContext)
    // const {list} =useContext(ProductContext)
    return (
        <div>
        <ProductContext.Provider value={{prod:prod,large:large,medium:medium,small:small,setProductUpdate}}>
        <Header/>
        <Body/>
        </ProductContext.Provider>
        </div>
    )
}


    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Applayout/>)

