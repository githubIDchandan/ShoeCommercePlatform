


const ShowProduct=({data})=>{
    //  console.log(data)

    return(
        <div className="showProductParent">
            <h2>{data.name}</h2>
            <h2>{data.desc}</h2>
            <h2>{data.price}</h2>
            <div>
            <button>Buy Large({data.lsize})</button>
            </div>
              <div>
                <button >Buy Medium({data.msize})</button>
              </div>
            <div>
            <button>Buy Small({data.ssize})</button>
            </div>
            <h2></h2>
        </div>
    )
}

export default ShowProduct;