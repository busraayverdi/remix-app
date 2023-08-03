import { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import ProductDetailCard from "~/components/product-detail-cards";

export const loader = async ({params}) => {
  debugger
  const { code } = params;
  let nextUrl = `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${code}`;

  const response = await axios.get(nextUrl);
  console.log(response)
  const data = response.data.result;
   //products = [...products, ...data.products];
  return json({data});
};

export default function ProductRoute() {
  const { data } = useLoaderData(); // useLoaderData hook'undan product verisini alıyoruz

  return (
    <div>
      <ProductDetailCard key={data.code} product={data} />
    </div>
  );
}





























// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import axios from "axios";


// export const loader = async ({ params }) => {
//     debugger
//     //   const client = createClient();
//     //   const { product } = await client.products.retrieve(params.code);
//     //   return json(product);
//     const productCode = params.code;
//     const response = await axios.get(`https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${productCode}`);
//     const data = response.data;
//     console.log(data)

//     return json(data);
// };

// export default function ProductRoute() {
//     const productData = useLoaderData();
//     //   const [variant, setVariant] = useState(product.variants[0]);
//     //   const [image, setImage] = useState(product.images[0]);
//     //   const [quantity, setQuantity] = useState(1);

//     //   const handleVariantChange = (index) => {
//     //     setVariant(product.variants[index]);
//     //     setQuantity(1);
//     //   };

//     //   const handleQuantityChange = (action) => {
//     //     switch (action) {
//     //       case "inc":
//     //         if (quantity < variant.inventory_quantity) 
//     //           setQuantity(quantity + 1);
//     //         break;

//     //       case "dec":
//     //         if (quantity > 1) setQuantity(quantity - 1);
//     //         break;

//     //       default:
//     //         break;
//     //     }
//     //   };

//     //   const handleImageChange = (id) => {
//     //     setImage(product.images.find((img) => img.id === id));
//     //   };

//     return (
//         <div className="w-full">
//             <div className="grid items-center md:grid-cols-2">
//                 <div>
//                     <h1>{productData.name}</h1>
//                     <p>Price: ${productData.price}</p>
//                     {/* <img
//             className="w-full rounded-lg"
//             src={image.url}
//             alt={product.title}
//           /> */}
//                     {/* <div className="flex justify-center p-4 space-x-2">
//             {product.images.map((imageItem) => (
//               <img
//                 className={`w-16 border-2 rounded-lg ${
//                   imageItem.id === image.id ? "border-teal-400" :      null
//                 }`}
//                 key={imageItem.id}
//                 src={imageItem.url}
//                 alt={product.title}
//                 onClick={() => handleImageChange(imageItem.id)}
//               />
//             ))}
//           </div> */}
//                 </div>
//                 {/* <div className="flex flex-col px-16 py-4 space-y-8">
//           <h1>{product.title} </h1>
//           <p className="font-semibold text-teal-600">{formatPrice(variant)}</p>
//           <div>
//             <p className="font-semibold">Select Size</p>
//             <div className="grid grid-cols-3 gap-2 mt-2 md:grid-cols-2 xl:grid-cols-4">
//               {product.variants.map((variantItem, index) => (
//                 <button
//                   key={variantItem.id}
//                   className={`px-2 py-1 mr-2 text-sm hover:brightness-90 ${
//                     variantItem.id === variant.id
//                       ? "bg-gray-700 text-gray-100"
//                       : "bg-gray-300 text-gray-700"
//                   }`}
//                   onClick={() => handleVariantChange(index)}
//                 >
//                   {variantItem.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div>
//             <p className="font-semibold">Select Quantity</p>
//             <div className="flex items-center px-4 mt-2 space-x-4">
//               <button
//                 className="px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold"
//                 onClick={() => handleQuantityChange("dec")}
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 className="px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold"
//                 onClick={() => handleQuantityChange("inc")}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <div>
//             <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-200 bg-gray-700 rounded hover:text-white hover:bg-gray-900">
//               <BiShoppingBag className="mr-2 text-lg" />{" "}
//               <span>Add to Cart</span>
//             </button>
//           </div>
//           <div>
//             <p className="font-semibold">Product Description</p>
//             <hr className="w-2/3 mt-2 border-t-2 border-gray-300" />
//             <p className="mt-4 text-gray-700">{product.description}</p>
//           </div>
//         </div> */}
//             </div>
//         </div>
//     );
// }