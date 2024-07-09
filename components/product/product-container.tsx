"use client"

import { Product } from "@/models/product.model";
import React, { useState } from "react";
import ProductInformationWithActions from "./product-actions";
import ProductInformationWithSelection from "./product-selection";

const ProductContainer = ({products } : {products : Product[]})=>{
    const [selected, setSelected] = useState([]);
    
    return(
        <>  
           <div>
            {products.map((product : Product) => (
                    <ProductInformationWithSelection setSelected={setSelected} selected={selected} product={product}></ProductInformationWithSelection>
                ))}
                <br></br>
           </div>

           <br></br>
           <br></br>
           <br></br>

           <div>
            { selected.length > 0 && selected.map((product : Product) => (
                    <ProductInformationWithActions product={product}></ProductInformationWithActions>
                ))}
                <br></br>
           </div>



        </>
    )
}

export default ProductContainer ;