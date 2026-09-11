const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);
const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
console.log("Rata-rata harga laptop:", avgLaptopPrice);

function getStatistics(products) {
  const totalProducts = products.length;
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  const avgPrice = totalPrice / totalProducts;
  const prices = products.map(p => p.price);
  const highestPrices = Math.max(...prices);
  const lowestPrices = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
  const avgRating = totalRating / totalProducts;

  return {
    totalProducts,
    totalPrice,
    avgPrice,
    highestPrices,
    lowestPrices,
    totalStock,
    avgRating
  };
}

console.log("Statistik produk:", getStatistics(products));