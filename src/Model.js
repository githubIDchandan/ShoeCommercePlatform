import ProductContext from "../utils/ProductContext";
import { useContext } from "react";


const Model=({ShowHandler,setShow})=>{
   
   let {prod,large,medium,small,setProductUpdate} =useContext(ProductContext)
    //   large.filter(())
    let grandTotal=0;
      for(let i=0;i<large.length;i++){
        grandTotal+=Number(large[i].price);
      }
      for(let i=0;i<medium.length;i++){
        grandTotal+=Number(medium[i].price);
      }
      for(let i=0;i<small.length;i++){
        grandTotal+=Number(small[i].price);
      }
    return(
        <div className="modelParent">
            {prod.map((item)=>{
                let l=0,m=0,s=0,total=0;
                 for(let i=0;i<large.length;i++){
                    if(large[i].name==item.name){
                        // console.log(typeof large[i].price)
                        total+=Number(large[i].price);
                        l++;
                    }
                }
                for(let i=0;i<medium.length;i++){
                    if(medium[i].name==item.name){
                        total+=Number(small[i].price);
                        m++;
                    }
                }
                for(let i=0;i<small.length;i++){
                    if(small[i].name==item.name){
                        total+=Number(small[i].price);
                        s++;
                    }
                }
                return(
                    <div className="modelcard">
                        <h1>{item.name}</h1>
                        <div>
                        <p className="modeldesc">{item.desc}</p>
                         <div className="itemcount">
                         <h3>{l}{"L"}</h3>
                         <h3>{m}{"M"}</h3>
                         <h3>{s}{"S"}</h3>
                         </div>
                         <h2>Total:{total}</h2>
                        </div>
                    </div>
                      
                )   
            })}
            
            <h1>GrandTotal:{grandTotal}</h1>
             <div>
                <button onClick={()=>{
                    // setCardDelete({
                    //     large:0,
                    //     medium:0,
                    //     small:0
                    // })
                    // setProductUpdate(Math.random())
                    ShowHandler()
                   

                }}>Place Order</button>
                <button onClick={()=>{
                    setShow(false)
                }}>Cancel</button>
             </div>
        </div>
    )
}

export default Model;