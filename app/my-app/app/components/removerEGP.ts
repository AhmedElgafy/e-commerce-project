import React from "react";
export default function removeEGP(text: string) {
  // Use the replace function to replace "EGP" with an empty string
  const textWithoutEGP = text.replace(/EGP/gi, ""); // 'gi' flag makes it case-insensitive

  return Number(textWithoutEGP);
}
