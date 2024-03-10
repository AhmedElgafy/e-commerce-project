export async function getAllProduct() {
  try {
    console.log(process.env.SERVER);
    const res = await fetch(process.env.SERVER + "/allcardsitems" || "");
    if (res.ok) {
      const body = await res.json();
      // console.log(body);
      return body;
    }
  } catch (err) {
    console.log("************** Get all product problem ************");
    console.error(err);
    return 0;
  }
}

export async function getProductById(id: string) {
  const res = await fetch(process.env.SERVER + "/product/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProductImagesById(id: string) {
  const res = await fetch(process.env.SERVER + "/product/" + id + "/images");
  console.log(process.env.SERVER + "/product/" + id + "/images/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProductOneImageById(id: string, index: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/images/" + index
  );
  if (!res.ok) {
    console.log(
      process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/images/" + index
    );
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
