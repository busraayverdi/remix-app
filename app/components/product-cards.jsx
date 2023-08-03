import { Link } from "@remix-run/react";
import { AiOutlineDoubleRight } from "react-icons/ai";


export default function ProductCard({ product }) {
  const variant = product.price;
  const formattedNumber = variant.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <>
      <section className="overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ">
      <Link to={`/products/${product.code}`}>
        <div className="my-8 mx-8">
          <button type="button" class="relative inline-flex items-center p-3 text-sm font-large text-center text-white rounded-xl ">
            
            <div class="absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white 
            bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{`% ${product.dropRatio}`}</div>
          </button>


          <img className="rounded mx-auto d-block w-60 my-5" src={product.imageUrl} alt={product.name} />

          <hr></hr>
          <div className="flex flex-col mt-2 p-4">
            <h3 className="text-s font-bold text-gray-500 my-5">
              {product.name}
            </h3>

            <p className="font-bold text-gray-700">
              <span className="text-lg">{formattedNumber.split(",")[0]}</span>
              <span className="text-sm">{formattedNumber.split(",")[1]} TL</span>
              <div className="flex items-center">
                <p className="font-bold text-gray-400">{`${product.countOfPrices} satıcı`}</p>
                <AiOutlineDoubleRight className="ml-2" />
              </div>
            </p>
            <p className="font-bold text-gray-400 mt-5">{product.followCount!==undefined? `${product.followCount}+ takip`:""}</p>
          </div>
        </div>
        </Link>
      </section>
    </>
  );
}