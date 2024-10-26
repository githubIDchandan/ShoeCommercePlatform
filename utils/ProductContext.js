import { createContext } from "react";

const ProductContext= createContext({
   prod:[],
   large:[],
   medium:[],
   small:[],
   deleteItem:()=>{},
})

export default ProductContext


