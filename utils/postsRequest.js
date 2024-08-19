const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

 async function fetchPosts(){

  const res = await fetch(`${apiDomain}/posts`, { cache: "no-store" }); // server component fetch req needs the full url http://localhost:3000/api
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
}

export {fetchPosts}