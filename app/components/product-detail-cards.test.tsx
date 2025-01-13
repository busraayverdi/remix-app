import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductDetailCard from "./product-detail-cards";

const productMock = {
  code: "123",
  rating: "4",
  productName: "Test Product",
  badge: "New",
  imageUrl: "test-image.jpg",
  storageOptions: ["32 GB", "64 GB", "128 GB"],
  countOfPrices: 5,
  freeShipping: true,
  lastUpdate: "2023-08-04",
};

test("ürün adın yıldızlar", () => {
  render(<ProductDetailCard product={productMock} />);
  
  const productName = screen.getByText("Test Product");
  const ratingStars = screen.getAllByTestId("star-icon");
  
  expect(productName).toBeInTheDocument();
  expect(ratingStars).toHaveLength(5);
});

test("butona tıkla", () => {
  render(<ProductDetailCard product={productMock} />);
  
  const storageOptionButtons = screen.getAllByRole("button");
  
  fireEvent.click(storageOptionButtons[1]); // Click the second storage option button
  
  const selectedStorageOption = screen.getByText("64 GB");
  expect(selectedStorageOption).toBeInTheDocument();
});

