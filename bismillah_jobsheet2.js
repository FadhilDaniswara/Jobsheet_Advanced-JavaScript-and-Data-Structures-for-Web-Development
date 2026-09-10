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

// const allTags = products.map(p=> p.tags).flat();
// console.log("All Tags: ", allTags);

// function findProductByTag(product, tag) {
//   return products.filter(p => p.tags.includes(tag));
// }
// console.log("Products tag 'mobile': ", findProductByTag(products, "mobile"));

// function getProductReviewCounts(products) {
//   return products.map(p => ({
//     id: p.id,
//     title: p.title,
//     totalReviews: p.reviews.length
//   }));
// }
// console.log(getProductReviewCounts(products));

// const fiveStarReviews = products.flatMap(p => p.reviews).filter(r => r.rating === 5);
// console.log("Review dengan rating 5:", fiveStarReviews);

// function calculateManualAverageRatings(products) {
//   return products.map(p => {
//     if (p.reviews.length === 0) return { title: p.title, averageRating: 0 };
    
//     const sum = p.reviews.reduce((total, review) => total + review.rating, 0);
//     const average = sum / p.reviews.length;
    
//     return {
//       title: p.title,
//       averageRating: average
//     };
//   });
// }
// console.log(calculateManualAverageRatings(products));

// function findProductWithMostReviews(products) {
//   return products.reduce((max, current) => 
//     current.reviews.length > max.reviews.length ? current : max
//   );
// }
// console.log("Produk review terbanyak:", findProductWithMostReviews(products));

// const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));
// console.log("Seluruh nilai rating:", allRatings);

const allTags = products.flatMap(p => p.tags);
console.log("Semua Tags:", allTags);

const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
console.log("Semua Komentar:", allComments);