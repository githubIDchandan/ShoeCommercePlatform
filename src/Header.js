import { useContext } from "react";
import ProductContext from "../utils/ProductContext";


const Header=()=>{
   const {large,medium,small,setp}= useContext(ProductContext);
//    console.log(large)
let total=0;
   for(let i=0;i<large.length;i++){
    console.log(large[i])
    total+=large[i];
   }
   for(let i=0;i<medium.length;i++){
    console.log(typeof medium[i])
    total+=medium[i];
   }
   for(let i=0;i<small.length;i++){
    total+=small[i];
   }
    return(
        <div>
            <button>Cart{total}</button>
        </div>
    )
}

export default Header;