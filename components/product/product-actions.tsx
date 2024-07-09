"use client"
import { useState } from "react";
import PrimaryButton from "../buttons/primary-button";
import ProductInformation from "./product-information";

const Actions = ({addToCounter , minusFromCounter} : any) => {
    return(
        <>
            <PrimaryButton onClick={addToCounter} placeholder={'plus'}></PrimaryButton>
            &nbsp;&nbsp;
            <PrimaryButton onClick={minusFromCounter} placeholder={'minus'}>minus</PrimaryButton>
            &nbsp;&nbsp;
            </>
    )
}


const ProductInformationWithActions = ({ product} : any) => {
    const [counter, setCounter] = useState(0);

    function addToCounter(){
        setCounter(counter + 1) ;
    }

    function minusFromCounter(){
        setCounter(counter - 1) ;
    }

    return(
        <>
            <ProductInformation product={product}></ProductInformation>
            <p>quantity needed : {counter}</p>
            <Actions addToCounter={addToCounter} minusFromCounter={minusFromCounter}></Actions>
       </>
    )
}




export default ProductInformationWithActions ;