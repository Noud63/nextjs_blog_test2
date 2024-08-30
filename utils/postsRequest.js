import { revalidatePath } from "next/cache";
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

async function getPostsByUserId(id) {
  try {
    const res = await fetch(`${apiDomain}/posts/${id}`);
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

export const setLike = async (postId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    });

    const data = await res.json();
    console.log(res);
    return data
  } catch (error) {
    console.error("Error:", error);
  }

};

export { fetchPosts, getPostsByUserId, setLike };
