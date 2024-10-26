import { useContext, useState } from "react";
import ProductContext from "../utils/ProductContext";


const AddProduct=({productData})=>{
      const [name,setName]=useState('')
      const [desc,setDesc]=useState('')
      const [p,setP]=useState(null)
      const [lsize,setLsize]=useState()
      const [msize,setMsize]=useState()
      const [ssize,setSsize]=useState()

     const {prod}= useContext(ProductContext);
      const AddHandler=(e)=>{
                e.preventDefault();
                // console.log("price",price)
            const data={
                name:name,
                desc:desc,
                price:p,
                lsize:lsize,
                msize:msize,
                ssize:ssize
            }
            // console.log(typeof lsize, lsize)
            // console.log("ppp",prod)
            prod.push(data)
            productData(data)
                setName('');
                setDesc('');
                setP(0);
                setLsize(0);
                setMsize(0);
                setSsize(0);
                // setProductUpdate(Math.random())
      }
//    console.log("hiii")
    return(
        <div className="addproductParent">
           <form onSubmit={AddHandler}>
         <div>
             <div>
           <label>ProductName</label>
            <input type="text" value={name}
                   onChange={(e)=>{
                      setName(e.target.value)
                   }}
                 ></input>
          </div>
          <div>
          <label>Description</label>
           <input type="text" value={desc}
                   onChange={(e)=>{
                    setDesc(e.target.value)
                   }}
                 ></input>
          </div>
          <div>
          <label>P</label>
           <input value={p}
                   onChange={(e)=>{
                    // console.log(e.target.value)
                    setP(e.target.value)
                   }}
                 ></input>
          </div>
          <div>
           <label>L</label>
               <input value={lsize} onChange={(e)=>{
                console.log(e.target.value)
                    setLsize(e.target.value)
                   }}></input>
          </div>
          <div>
           <label>M</label>
              <input  type="number" value={msize} onChange={(e)=>{
                        setMsize(e.target.value)
                 }}></input>
          </div>
          <div>
          <label>S</label>
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