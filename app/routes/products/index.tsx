import { useState } from "react";
import { json } from "@remix-run/node";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product-cards";
import { IconButton } from "@material-tailwind/react";

export const loader = async () => {
  let horizontalProducts: any = [];
  let products: any = [];
  let nextUrl = "https://mock.akakce.dev/page.json";

  try {
    const response = await axios.get(nextUrl);
    const data = response.data;

    horizontalProducts = [...horizontalProducts, ...data.horizontalProductList];
    products = [...products, ...data.productList];
    nextUrl = data.nextUrl;

  } catch (error: any) {
    console.error("API Call Error:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch products from API.");
  }

  return json({ horizontalProducts, products });
};

export default function ProductsIndexRoute() {
  const { horizontalProducts, products } = useLoaderData();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? horizontalProducts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === horizontalProducts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        <div className="flex overflow-hidden">
          {horizontalProducts.map((product: any, index: any) => (
            <div
              key={product.code}
              className={`transition-all duration-500 ease-in-out transform ${index === activeIndex ? "block" : "hidden"
                }`}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full" />
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <IconButton
          variant="text"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>

        <IconButton
          variant="text"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
        {products.map((product: any) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </>
  );
}
