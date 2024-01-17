export async function getAllProduct() {
  const res = await fetch("http://localhost:8000/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch("http://localhost:8000/product/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProductImagesById(id: string) {
  const res = await fetch("http://localhost:8000/product/" + id + "/images");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProductOneImageById(id: string, index: string) {
  const res = await fetch(
    "http://localhost:8000/product/" + id + "/images/" + index
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
