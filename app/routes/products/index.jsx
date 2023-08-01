import { useEffect } from "react";
import { json } from "@remix-run/node";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product-cards";

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
      <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {horizontalProducts.map((horizontalProduct) => (
          // <li key={product.code}>
          //   <h3>{product.name}</h3>
          //   <p>Price: ${product.price}</p>
          //   <img src={product.imageUrl} alt={product.name} />
          // </li>
          <ProductCard key={horizontalProduct.code} product={horizontalProduct} />
        ))}
      {/* </div> */}

      {/* "products" listesini 2'li gösterim için kullanır */}
      {/* <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"> */}
        {products.map((product) => (
          // <ProductCard key={product.code}>
          //   <h3>{product.name}</h3>
          //   <p>Price: ${product.price}</p>
          //   <img src={product.imageUrl} alt={product.name} />
          // </ProductCard>

          <ProductCard key={product.code} product={product} />

        ))}
      </div>
    </div>
  );
}
