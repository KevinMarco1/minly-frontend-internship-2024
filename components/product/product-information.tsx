"use client"
import { Product } from "@/models/product.model";


const 
ProductInformation = ({product} : {product : Product}) =>{
  
    return (
        <div>
            <p> name :  {product.name} &nbsp;
            price per item: {product.price} &nbsp;
            quantity: {product.quantity} &nbsp;
            </p>
        </div>
    )
}






export default ProductInformation ;