"use server";

export async function updateUser(userid, formData) {
  console.log(formData);

  const { username, email, password } = formData;
  const roles = "customer";
  const adminUsername = "dev";
  const adminPassword = process.env.NEXT_PUBLIC_WP_APP;

  const endpoint = `${process.env.NEXT_PUBLIC_WP}/users`;
  const base64Credentials = Buffer.from(
    `${adminUsername}:${adminPassword}`,
  ).toString("base64");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64Credentials}`,
      },
      body: JSON.stringify({ username, email, password, roles }),
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
