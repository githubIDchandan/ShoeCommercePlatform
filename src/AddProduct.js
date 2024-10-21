import { useContext, useState } from "react";
import ProductContext from "../utils/ProductContext";


const AddProduct=({productData})=>{
      const [name,setName]=useState('')
      const [desc,setDesc]=useState('')
      const [price,setPrice]=useState(0)
      const [lsize,setLsize]=useState(0)
      const [msize,setMsize]=useState(0)
      const [ssize,setSsize]=useState(0)

     const {large,medium,small,brand,cost,setProductUpdate}= useContext(ProductContext);
      const AddHandler=(e)=>{
                e.preventDefault();
            const data={
                name:name,
                desc:desc,
                price:price,
                lsize:lsize,
                msize:msize,
                ssize:ssize
            }
            // console.log(typeof lsize, lsize)
            large.push(lsize);
            medium.push(msize);
            small.push(ssize);
            cost.push(price),
            brand.push(name)
            productData(data);
          

                setName('');
                setDesc('');
                setPrice(0);
                setLsize(0);
                setMsize(0);
                setSsize(0);
                setProductUpdate(Math.random())
      }
//    console.log("hiii")
    return(
        <div className="addproductParent">
           <form onSubmit={AddHandler}>
         <div>
             <div>
           <div> <label>ShoeName</label></div>
                 <input type="text" value={name}
                   onChange={(e)=>{
                      setName(e.target.value)
                   }}
                 ></input>
          </div>
          <div>
          <div>  <label>Description</label></div>
                 <input type="text" value={desc}
                   onChange={(e)=>{
                    setDesc(e.target.value)
                   }}
                 ></input>
          </div>
          <div>
           <div>  <label>Price</label></div>
                  <input  value={price} onChange={(e)=>{
                    setPrice(e.target.price)
                  }}></input>
          </div>
          <div>
           <div>   <label>L</label></div>
                   <input   value={lsize} onChange={(e)=>{
                    setLsize(e.target.value)
                   }}></input>
          </div>
          <div>
           <div>    <label>M</label></div>
                    <input  type="number" value={msize} onChange={(e)=>{
                        setMsize(e.target.value)
                    }}></input>
          </div>
          <div>
           <div>    <label>S</label></div>
                    <input type="number" value={ssize} onChange={(e)=>{
                        setSsize(e.target.value)
                    }}></input>
          </div>
          <button onClick={()=>{
                  
          }}>AddProduct</button>
         </div>
          </form>
         
        </div>
    )
}

export default AddProduct;