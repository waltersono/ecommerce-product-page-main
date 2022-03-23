import Product from "../models/product.model";
const PRODUCTS_DATA = [
  new Product(
    1,
    "Fall Limited Edition Sneakers",
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
    250,
    0.5,
    [
      "public/images/image-product-1.jpg",
      "public/images/image-product-2.jpg",
      "public/images/image-product-3.jpg",
      "public/images/image-product-4.jpg",
    ]
  ),
  new Product(
    2,
    "Summer Limited Edition Sneakers",
    "These medium-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
    120,
    0.3,
    [
      "public/images/image-product-1.jpg",
      "public/images/image-product-2.jpg",
      "public/images/image-product-3.jpg",
      "public/images/image-product-4.jpg",
    ]
  ),
  new Product(
    3,
    "Winter Limited Edition Sneakers",
    "These high-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
    200,
    0.1,
    [
      "public/images/image-product-1.jpg",
      "public/images/image-product-2.jpg",
      "public/images/image-product-3.jpg",
      "public/images/image-product-4.jpg",
    ]
  ),
];

export default PRODUCTS_DATA;
