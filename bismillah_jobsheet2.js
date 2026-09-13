function linearSearchWithSteps(arr, target) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (arr[i] === target) return { index: i, steps };
  }
  return {index: -1, steps};
}

function binarySearchWithSteps(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return { index: mid, steps };
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return {index: -1, steps};
}

function findPairsNestedLoop(products) {
  let steps = 0;
  const pairs = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      steps++;
      if (products[i].category === products[j].category) {
        pairs.push([products[i].title, products[j].title]);
      }
    }
  }
  return{pairsCount: pairs.length, steps};
}

function findPairsWithMap(products) {
  let steps = 0;
  const categoryMap = new Map();
  for (const product of products) {
    steps++;
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, []);
    }
    categoryMap.get(product.category).push(product);
  }
  return {categoriesCount: categoryMap.size, steps};
}

//yoh testing yohh
const dummyProducts = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  category: `category-${i % 20}`
}));

console.log("Nested Loop O(n²) Steps :", findPairsNestedLoop(dummyProducts).steps);
console.log("Map Grouping O(n) Steps :", findPairsWithMap(dummyProducts).steps);