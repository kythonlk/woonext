"use server";

export async function updateUser(formData) {
  console.log(formData);

  const { username, email, password } = formData;

  const url = `${process.env.NEXT_PUBLIC_WP_REST}/customers/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();
    console.log("Success:", data);

    return { success: true, data };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error: error.message };
  }
}
