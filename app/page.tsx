
import ProductContainer from "@/components/product/product-container";
import { Product } from "@/models/product.model";


const products  : Product[] = [
  {'name' : 'item1' , 'quantity': 10 , 'price': 100} ,
  {'name' : 'item2' , 'quantity': 20 , 'price': 200} ,
  {'name' : 'item3' , 'quantity': 30 , 'price': 300} ,
]


export default function Home() {
  return (
    <>
      <ProductContainer products={products}></ProductContainer>
    </>
  );
}
