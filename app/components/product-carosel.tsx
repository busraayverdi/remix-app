import { Link } from "@remix-run/react";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function ProductCarosel({ product }: { product: any }) {
  const variant = product.price;
  const formattedNumber = variant.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="p-6">
      <Link to={`/products/${product.code}`}>
        <div className="flex items-center gap-8">
          {/* Ürün Görseli */}
          <div className="flex-shrink-0 relative w-60 h-60">
            <div
              className="absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white 
              bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
            >
              {`% ${product.dropRatio}`}
            </div>
            <img
              className="rounded object-cover w-full h-full"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>

          {/* Ürün Detayları */}
          <div className="flex-grow space-y-4 ml-4">
            <h3 className="text-lg font-bold text-gray-700">{product.name}</h3>

            <p className="font-bold text-gray-700">
              <span className="text-2xl">{formattedNumber.split(",")[0]}</span>
              <span className="text-lg">{formattedNumber.split(",")[1]} TL</span>
            </p>

            <div className="flex items-center gap-2">
              <p className="text-gray-500 font-medium">{`${product.countOfPrices} satıcı`}</p>
              <AiOutlineDoubleRight className="text-gray-500" />
            </div>

            {product.followCount !== undefined && (
              <p className="text-gray-500 font-medium">
                {`${product.followCount}+ takip`}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
