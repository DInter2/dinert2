import { ReactNode } from "react";

type Variant = "subtitle1" | "subtitle2"
type Display = "block" | "block" | "";

export function TayTypography({variant, display, children, gutterBottom}: { variant: Variant, display: Display, gutterBottom: boolean, children: ReactNode }) {
  let size;
  switch (variant) {
    case "subtitle1":
      size = "text-lg font-medium";
      break;
    case "subtitle2":
      size = "text-xs font-normal";
      break;
    default:
      size = "text-base font-normal";
      break;
  }

  const displayClass = display === "block" ? "block" : "";

  const gutterClass = gutterBottom
    ? "mb-4"
    : ""; // ajuste o valor de 4 de acordo com sua preferência

  return (
    <p className={`${size} ${displayClass} ${gutterClass}`}>
      {children}
    </p>
  );
}
