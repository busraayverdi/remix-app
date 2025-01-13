import { AiFillStar } from "react-icons/ai";
import { useState } from "react";


const ProductDetailCard = ({ product }: any) => {

  const [productGb, setProductGb] = useState(product.storageOptions[0]);

  const activeStars = parseInt(product.rating);
  const variant = product.price;
  const formattedNumber = variant.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleVariantChange = (index: any) => {
    setProductGb(product.storageOptions[index]);
  };

  return (
    <section className="overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ">
      <div className="my-8 mx-8">
        {/* <button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button> */}
        {/* <span class="fa fa-star checked">{product.rating}</span> */}
        <div >
          <h6 className="text-s font-bold text-gray-400 my-5 ">{product.mkName}</h6>
          <div className="flex float-right" >
            {
              Array(5)
                .map((_, i) => {
                  return (
                    <AiFillStar
                      key={product.code}
                      className="star"
                      color={i < activeStars ? "#ffc107" : "#e4e5e9"}
                      size={25}
                    />
                  );
                })
            }

          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-700 hover:underline my-5">
          {product.productName}
        </h3>
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{product.badge}</span>
        <img className="rounded mx-auto d-block w-60 my-5" src={product.imageUrl} alt={product.name} />
        <hr></hr>


        <div className="grid items-center ">
          <div className="flex flex-col px-4  ">
            <p className=" flex text-center font-bold text-gray-500">Kapasite Seçenekleri</p>
            <div className="grid grid-cols-3 gap-2 mt-2 xl:grid-cols-3">
              {product.storageOptions.map((storageOption: any, index: number) => (
                <button
                  key={storageOption.id}
                  className={`w-20 px-2 py-2 text-md hover:brightness-90 ${storageOption.id === productGb
                    ? "bg-gray-700 text-gray-100"
                    : "bg-gray-300 text-gray-700"
                    }`}
                  onClick={() => handleVariantChange(index)}
                >
                  {storageOption}
                </button>
              ))}
            </div>
          </div>
          <p className="font-bold flex text-center mt-2">
            {` ${product.countOfPrices} satıcı içinde kargo dahil en ucuz fiyat seçeneği`}
          </p>
        </div>
        <div className="flex flex-col items-center mt-2 p-4">
          <p className="font-bold text-gray-700">
            <span className="text-lg">{formattedNumber.split(",")[0]}</span>
            <span className="text-sm">{formattedNumber.split(",")[1]}</span>
          </p>
          <p className="font-bold text-teal-600">{product.freeShipping ? "Ücretsiz Kargo" : ""}</p>
          <p className="font-bold  text-gray-400">{` Son güncelleme: ${product.lastUpdate}`}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailCard;