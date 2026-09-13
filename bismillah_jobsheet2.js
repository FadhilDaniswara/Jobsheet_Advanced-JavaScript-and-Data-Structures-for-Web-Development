class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

//yoh testing yohh
const requestQueue = new Queue();
requestQueue.enqueue("Fetch Product 1");
requestQueue.enqueue("Fetch Product 2");
requestQueue.enqueue("Fetch Product 3");

console.log("Elemen terdepan (peek) :", requestQueue.peek());
console.log("Proses dequeue :", requestQueue.dequeue());
console.log("Elemen terdepan baru :", requestQueue.peek());