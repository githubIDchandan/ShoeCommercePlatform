import { useContext, useState } from "react";
import ProductContext from "../utils/ProductContext";
import Model from "./Model";


const Header=()=>{
   const {large,medium,small}= useContext(ProductContext);
   const [show,setShow]=useState(false);
//    const [total,setTotal]=useState(large.length+medium.length+small.length)
//    console.log(large)
console.log("header",large)
var total=large.length+medium.length+small.length;
    const ShowHandler=()=>{
        // setTotal(0)
        return setShow(!show);
    }
    return(
        <div>
            {show&&<Model ShowHandler={ShowHandler} setShow={setShow} />}
            <button onClick={()=>{
                setShow(!show)
            }}>Cart{total}</button>
        </div>
    )
}

export default Header;