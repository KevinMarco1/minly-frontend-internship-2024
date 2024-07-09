"use client"

import { useState } from "react";
import PrimaryButton from "../buttons/primary-button";
import ProductInformation from "./product-information";



const ProductInformationWithSelection = ({ product , setSelected , selected} : any) => {
    const [added, setAdded] = useState(false);

    function addToList(product : any){
        setSelected([...selected,product])
        setAdded(true);
    }

    function removeFromList(product : any){
        setSelected(selected.filter((currentProduct: any) => currentProduct !== product)) ;
        setAdded(false);

    }

    return(
        <>
            <ProductInformation product={product}></ProductInformation>
            <PrimaryButton onClick={() => (added ? removeFromList(product) : addToList(product))} placeholder={added ? 'remove from my list' : "add to my list"} ></PrimaryButton>
        </>
    )
}





export default ProductInformationWithSelection ;