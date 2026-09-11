const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Tablet", price: 400, category: "tablets", stock: 8 },
  { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
  { id: 6, title: "Gaming Monitor", price: 300, category: "monitors", stock: 4 },
  { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 25 },
  { id: 8, title: "Wireless Mouse", price: 45, category: "accessories", stock: 30 },
  { id: 9, title: "External SSD", price: 150, category: "storage", stock: 7 },
  { id: 10, title: "Power Bank", price: 60, category: "accessories", stock: 18 },
  { id: 11, title: "Bluetooth Speaker", price: 120, category: "audio", stock: 9 },
  { id: 12, title: "Webcam 1080p", price: 75, category: "accessories", stock: 14 },
  { id: 13, title: "Microphone Condenser", price: 110, category: "audio", stock: 6 },
  { id: 14, title: "Desk Lamp", price: 35, category: "home", stock: 20 },
  { id: 15, title: "Office Chair", price: 200, category: "furniture", stock: 2 },
  { id: 16, title: "Standing Desk", price: 450, category: "furniture", stock: 4 },
  { id: 17, title: "Graphic Tablet", price: 220, category: "accessories", stock: 11 },
  { id: 18, title: "VR Headset", price: 500, category: "gaming", stock: 5 },
  { id: 19, title: "Router Wi-Fi 6", price: 130, category: "networking", stock: 16 },
  { id: 20, title: "USB-C Hub", price: 40, category: "accessories", stock: 22 },
  { id: 21, title: "HDMI Cable", price: 15, category: "accessories", stock: 50 },
  { id: 22, title: "Printer Wireless", price: 180, category: "printers", stock: 8 },
  { id: 23, title: "Projector Mini", price: 280, category: "home", stock: 3 },
  { id: 24, title: "Flashdisk 64GB", price: 20, category: "storage", stock: 40 },
  { id: 25, title: "CPU Cooler", price: 70, category: "components", stock: 13 },
  { id: 26, title: "RAM 16GB", price: 85, category: "components", stock: 19 },
  { id: 27, title: "Graphics Card", price: 750, category: "components", stock: 2 },
  { id: 28, title: "Motherboard", price: 210, category: "components", stock: 7 },
  { id: 29, title: "Power Supply 650W", price: 95, category: "components", stock: 10 },
  { id: 30, title: "Casing PC Gaming", price: 110, category: "components", stock: 6 }
];

// const products = [
//   {
//     id: 1,
//     title: "Laptop",
//     price: 1200,
//     rating: 4.5,
//     stock: 10,
//     category: "laptops",
//     tags: ["computer", "electronics", "office"],
//     dimensions: { width: 30, height: 2, depth: 20 },
//     reviews: [
//       { user: "A", rating: 5, comment: "Good product" },
//       { user: "B", rating: 4, comment: "Worth it" }
//     ]
//   },
//   {
//     id: 2,
//     title: "Smartphone",
//     price: 800,
//     rating: 4.2,
//     stock: 15,
//     category: "phones",
//     tags: ["mobile", "electronics"],
//     dimensions: { width: 7, height: 0.8, depth: 15 },
//     reviews: [
//       { user: "C", rating: 4, comment: "Nice camera" },
//       { user: "D", rating: 5, comment: "Fast" },
//       { user: "E", rating: 3, comment: "Battery so-so" }
//     ]
//   }
// ];

function bubbleSort(numbers) {
  const arr =[...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j] , arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    } 
  }
  return arr;
}

function sortProducts(products, sortBy) {
 const sorted = [...products];
 switch (sortBy) {
  case "price-asc":
    return sorted.sort((a, b) => a.price - b.price);
  case "price-desc":
    return sorted.sort((a, b) => b.price - a.price);
  case "rating":
    return sorted.sort((a, b) => b.rating - a.rating);
  case "title":
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  default:
    return sorted;
  }
 }

const angkaAcak = [5, 3, 8, 1, 2, 7];
const angkaSorted = bubbleSort(angkaAcak);
console.log("awal :", angkaAcak);
console.log("sorted :", angkaSorted);
console.log("Products sorted by price ascending:", sortProducts(products, "price-asc"));
