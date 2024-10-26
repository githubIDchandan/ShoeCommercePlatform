import { useContext } from "react";
import ProductContext from "../utils/ProductContext";


const ShowProduct=({data})=>{
    //  console.log(data)
     const {prod,large,medium,small,setProductUpdate}=useContext(ProductContext)
     console.log("show",prod)
    
    return(
        <div className="showProductParent">
          {
            prod.map((item)=>{
              return(
                <div className="showProdCard">
                   <h1>{item.name}</h1>
                   <p>{item.desc}</p>
                   <h3>{item.price}</h3>
                   <button onClick={()=>{
                       setProductUpdate(Math.random());
                       {item.lsize&&item.lsize--}
                       {item.lsize&&large.push({
                        name:item.name,
                        price:item.price
                       })}
                        
                   }}> {item.lsize}({"L"})</button>

                   <button onClick={()=>{
                    setProductUpdate(Math.random());
                    {item.msize&&item.msize--}
                    {item.msize&&medium.push({
                      name:item.name,
                      price:item.price
                    })}
                   }}> {item.msize}({"M"})</button>

                   <button onClick={()=>{
                    setProductUpdate(Math.random());
                    {item.ssize&&item.ssize--}
                    {item.ssize&& small.push({
                      name:item.name,
                      price:item.price
                    })} 
                   }}> {item.ssize}({"S"})</button>
                 
                </div>
              )
            })
          }
            {/* <h2>{data.name}</h2>
            <h2>{data.desc}</h2>
            <h2>{data.p}</h2>
            <div>
            <button>Buy Large({ltotal})</button>
            </div>
              <div>
                <button >Buy Medium({mtotal})</button>
              </div>
            <div>
            <button>Buy Small({stotal})</button>
            </div>
            <h2></h2> */}
        </div>
    )
}

export default ShowProduct;