import { MouseEventHandler } from "react";


export default function PrimaryButton({onClick  , placeholder} :{onClick : MouseEventHandler<HTMLButtonElement> | undefined , placeholder:string}){
    return   <button onClick={onClick}>{placeholder}</button> ;
}
