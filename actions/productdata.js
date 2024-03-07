"use server";

export default async function Productsdata(slug) {
  const url = `${process.env.NEXT_PUBLIC_WP_REST}/products/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}&slug=${slug}`;
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  return response.json();
}
