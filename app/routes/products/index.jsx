import { useEffect } from "react";
import { json } from "@remix-run/node";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  let horizontalProducts = [];
  let products = [];
  let nextUrl = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05";

  const response = await axios.get(nextUrl);
  const data = response.data.result;
  horizontalProducts = [...horizontalProducts, ...data?.horizontalProducts];
  products = [...products, ...data.products];
  return json({ horizontalProducts, products });
};

export default function ProductsIndexRoute() {
  const { horizontalProducts, products } = useLoaderData();

  return (
    <div className="w-full mt-8">
      <h1>Products Page</h1>
      <p>List of products</p>

      {/* "horizontalProducts" listesini yatay scroll ile gösterir */}
      <ul className="horizontal-scroll">
        {horizontalProducts.map((product) => (
          <li key={product.code}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </li>
        ))}
      </ul>

      {/* "products" listesini 2'li gösterim için kullanır */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.code}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
