// const products = [
//   { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
//   { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
//   { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
//   { id: 4, title: "Tablet", price: 400, category: "tablets", stock: 8 },
//   { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
//   { id: 6, title: "Gaming Monitor", price: 300, category: "monitors", stock: 4 },
//   { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 25 },
//   { id: 8, title: "Wireless Mouse", price: 45, category: "accessories", stock: 30 },
//   { id: 9, title: "External SSD", price: 150, category: "storage", stock: 7 },
//   { id: 10, title: "Power Bank", price: 60, category: "accessories", stock: 18 },
//   { id: 11, title: "Bluetooth Speaker", price: 120, category: "audio", stock: 9 },
//   { id: 12, title: "Webcam 1080p", price: 75, category: "accessories", stock: 14 },
//   { id: 13, title: "Microphone Condenser", price: 110, category: "audio", stock: 6 },
//   { id: 14, title: "Desk Lamp", price: 35, category: "home", stock: 20 },
//   { id: 15, title: "Office Chair", price: 200, category: "furniture", stock: 2 },
//   { id: 16, title: "Standing Desk", price: 450, category: "furniture", stock: 4 },
//   { id: 17, title: "Graphic Tablet", price: 220, category: "accessories", stock: 11 },
//   { id: 18, title: "VR Headset", price: 500, category: "gaming", stock: 5 },
//   { id: 19, title: "Router Wi-Fi 6", price: 130, category: "networking", stock: 16 },
//   { id: 20, title: "USB-C Hub", price: 40, category: "accessories", stock: 22 },
//   { id: 21, title: "HDMI Cable", price: 15, category: "accessories", stock: 50 },
//   { id: 22, title: "Printer Wireless", price: 180, category: "printers", stock: 8 },
//   { id: 23, title: "Projector Mini", price: 280, category: "home", stock: 3 },
//   { id: 24, title: "Flashdisk 64GB", price: 20, category: "storage", stock: 40 },
//   { id: 25, title: "CPU Cooler", price: 70, category: "components", stock: 13 },
//   { id: 26, title: "RAM 16GB", price: 85, category: "components", stock: 19 },
//   { id: 27, title: "Graphics Card", price: 750, category: "components", stock: 2 },
//   { id: 28, title: "Motherboard", price: 210, category: "components", stock: 7 },
//   { id: 29, title: "Power Supply 650W", price: 95, category: "components", stock: 10 },
//   { id: 30, title: "Casing PC Gaming", price: 110, category: "components", stock: 6 }
// ];

const sampleProducts = [
  {id: 1, title: "Laptop A", category: "laptops", rating: 4.5, tags: ["computer", "office"], brand: "Apple"},
  {id: 2, title: "Laptop B", category: "laptops", rating: 3.8, tags: ["computer", "gaming"], brand: "Asus"},
  {id: 3, title: "Phone X", category: "phones", rating: 4.2, tags: ["mobile", "electronics"], brand: "Apple"},
  {id: 4, title: "Phone Y", category: "phones", rating: 4.9, tags: ["mobile", "office"], brand: "Samsung"},
  {id: 5, title: "Headphone Z", category: "audio", rating: 2.4, tags: ["electronics"], brand: "Sony"}
];

function getUniqueCategories(products) {
  return[...new Set(products.map(p => p.category))];
}

function getUniqueBrands(products) {
  return [...new Set(products.map(p => p.brand || "Unbranded"))];
}

function getUniqueTags(products) {
  return[...new Set(products.flatMap(p => p.tags || []))];
}

console.log("Unique Categories :", getUniqueCategories(sampleProducts));
console.log("Unique Brands :", getUniqueBrands(sampleProducts));
console.log("Unique Tags :", getUniqueTags(sampleProducts));