import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2> 
      <div className="container">
      <div className="row">
        {products.map((product)  => {
             return(    <div className="col-3" key={product.id}>
             <Product product={product} />
                 <div className="card">
               <img src="..." class="card-image-top" alt="..." />
               <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">
                 Some Quick example text to build on the card title and bulk of the card's contant.
               </p>
               <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
         </div>
         );
        })}
     </div>
   </div>
      </>
  ); 
}
export default ProductsList;