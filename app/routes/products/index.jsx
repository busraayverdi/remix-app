import { useState } from "react";
import { json } from "@remix-run/node";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product-cards";
import { IconButton, Carousel } from "@material-tailwind/react";

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
  const numberOfScreens = 1;

  const slides = horizontalProducts.map((product) => (
    <div key={product.code}>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  ));
  const [activeindex, setActiveIndex] = useState(0);

  return (
    <>
      <Carousel
        className="rounded-xl mt-5"
        numberOfScreens={horizontalProducts.length}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={() => {
              handlePrev;
              setActiveIndex(
                horizontalProducts.length == activeindex
                  ? activeindex == 0
                  : horizontalProducts.length != activeindex && activeindex != 0
                  ? activeindex - 1
                  : activeindex == 0
              );
            }}
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
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={() => {
              handleNext;
              setActiveIndex(
                horizontalProducts.length == activeindex + 1
                  ? activeindex == 0
                  : activeindex + 1
              );
            }}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
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
        )}
      >
        {activeindex == 0 && (
          <img
            src="https://cdn.akakce.com/x/apple/iphone-13.jpg"
            alt="image 1"
            className="rounded mx-auto d-block w-60 my-5"
          />
        )}
        {activeindex == 1 && (
          <img
            src="https://cdn.akakce.com/x/apple/iphone-11-64-gb-aksesuarsiz-kutu.jpg"
            alt="image 2"
            className="rounded mx-auto d-block w-60 my-5"
          />
        )}
        {activeindex == 2 && (
          <img
            src="https://cdn.akakce.com/x/apple/iphone-13-pro-max.jpg"
            alt="image 3"
            className="rounded mx-auto d-block w-60 my-5"
          />
        )}
        {activeindex == 3 && (
          <img
            src="https://cdn.akakce.com/x/samsung/samsung-galaxy-m52.jpg"
            alt="image 2"
            className="rounded mx-auto d-block w-60 my-5"
          />
        )}
      </Carousel>

      <div className="grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </>
  );
}