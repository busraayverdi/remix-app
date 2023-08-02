import { Link } from "@remix-run/react";

export default function ProductCard({ product }) {
  const variant = product.price;
  return (
    <section className="overflow-hidden bg-white rounded-lg shadow:md hover:shadow-lg w-80">
      <Link to={`/products/${product.code}`}>
        <img className="w-80" src={product.imageUrl} alt={product.name} />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-700 hover:underline">
            {product.name}
          </h3>
          <p className="font-semibold text-teal-600">{variant}</p>

        </div>
      </Link>
    </section>
  );
}