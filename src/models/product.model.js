class Product {
  constructor(id, name, description, price, discount, images) {
    this.id = id; // on real app, ID will be automatically generated
    this.name = name;
    this.description = description;
    this.price = price.toFixed(2);
    this.discount = discount;
    this.images = images;
    this.createdAt = new Date().toUTCString();
  }
}

export default Product;
