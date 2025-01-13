import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from 'axios';
import ProductDetailCard from "~/components/product-detail-cards";


export const loader = async ({ params }: LoaderArgs) => {
  const { productId } = params;  // productId'yi params'dan alıyoruz
  // Burada productId'yi doğru şekilde kullandığınızdan emin olun
  const nextUrl = `https://mock.akakce.dev/product${productId}.json`;

  try {
    const response = await axios.get(nextUrl);
    const data = response.data;
    return json({ data });
  } catch (error) {
    return json({ error: "Ürün bilgisi yüklenemedi. Lütfen tekrar deneyin." });
  }
};

export default function ProductRoute() {
  const { data, error } = useLoaderData(); // useLoaderData hook'undan product verisini alıyoruz

  if (error) {
    return <div>{error}</div>; // Hata mesajını göster
  }

  return (
    <div>
      <ProductDetailCard key={data.code} product={data} />
    </div>
  );
}
