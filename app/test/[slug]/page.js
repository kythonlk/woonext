// export async function generateStaticVParams() {
//   const url = `${process.env.NEXT_PUBLIC_WP_REST}/products/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}`;
//   const posts = await fetch(url).then((res) => res.json());
//
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
//
// export default function Page({ params }) {
//   console.log(params);
//   const { slug } = params;
//   return <h1>{slug}</h1>;
// }
