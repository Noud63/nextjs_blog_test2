export const dynamic = "force-dynamic";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchPosts() {
  const res = await fetch(`${apiDomain}/posts`, { cache: "no-store" }); // server component fetch req needs the full url http://localhost:3000/api

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data = await res.json();

  return data;
}

async function getPostsByUserId(userId) {
  try {
    const res = await fetch(`${apiDomain}/postsByUserId/${userId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
}

async function getSinglepostById(id) {
  try {
    const res = await fetch(`${apiDomain}/singlePostById/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
}

export { fetchPosts, getPostsByUserId, getSinglepostById };
