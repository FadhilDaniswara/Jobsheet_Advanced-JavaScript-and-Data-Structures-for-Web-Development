const initialProducts = [
  {
    id: 1,
    title: "Laptop Gaming",
    price: 1200,
    category: "laptops",
    rating: 4.5,
    thumbnail: "https://dummyjson.com/image/150"
  },
  {
    id: 2,
    title: "Smartphone Pro",
    price: 800,
    category: "phones",
    rating: 4.2,
    thumbnail: "https://dummyjson.com/image/150"
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 100,
    category: "audio",
    rating: 4.0,
    thumbnail: "https://dummyjson.com/image/150"
  },
  {
    id: 4,
    title: "Smartwatch Sport",
    price: 250,
    category: "wearables",
    rating: 4.6,
    thumbnail: "https://dummyjson.com/image/150"
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 90,
    category: "accessories",
    rating: 4.3,
    thumbnail: "https://dummyjson.com/image/150"
  }
];

function renderProducts(products) {
  const container = document.querySelector("#product-list");
  if (!container) return;

  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Kategori: ${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    
    container.append(card);
  }
}

//start bagian 18, diatas tadi bagian 17
const state = {
  products: initialProducts,
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle"
};

function render() {
  let result = state.products.filter((product) => {
    const matchesSearch = product.title
    .toLowerCase()
    .includes(state.search.toLowerCase().trim());

    const matchesCategory =
      state.category === "all" || product.category === state.category;
    return matchesSearch && matchesCategory;
  });
  if (state.sortBy !== "default") {
    result = [...result].sort((a, b) => {
      if (state.sortBy === "price-asc") return a.price - b.price;
      if (state.sortBy === "price-desc") return b.price - a.price;
      if (state.sortBy === "rating") return b.rating - a.rating;
      if (state.sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  }
  renderProducts(result);
}
render();