import React, { useContext, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header";
import Body from "./src/Body";
import ProductContext from "./utils/ProductContext";











const Applayout=()=>{
    const [productUpdate,setProductUpdate]=useState();
    const {large,medium,small,brand,cost}=useContext(ProductContext)
    const {list} =useContext(ProductContext)
    return (
        <div>
        <ProductContext.Provider value={{large:large,medium:medium,small:small,brand:brand,cost:cost,setProductUpdate}}>
        <Header/>
        <Body/>
        </ProductContext.Provider>
        </div>
    )
}


    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Applayout/>)

