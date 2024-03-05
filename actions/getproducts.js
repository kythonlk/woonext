"use server";

const url = `${process.env.NEXT_PUBLIC_WP_REST}/products/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}`;
export default async function getProducts(searchTerm, page) {
  const response = await fetch(
    `${url}&per_page=${page}&search=${encodeURIComponent(searchTerm)}`,
  );
  return response.json();
}
