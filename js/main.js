import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { filterProducts, sortProducts } from "./algorithms.js";
import { fetchProducts } from "./api.js";

const render = () => {
    const filtered = filterProducts(state.products, state.search, state.category);
    const sorted = sortProducts(filtered, state.sortBy);
    renderProducts(sorted);
};

async function loadProducts() {
    try {
        state.status = "loading";
        const products = await fetchProducts();
        state.products = products;
        state.status = "success";
    } catch (error) {
        state.status = "error";
        console.error("Gagal memuat produk:", error);
    } finally {
        render();
    }
}

loadProducts();

document.querySelector("#search-input")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

document.querySelector("#category-select")?.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});

document.querySelector("#sort-select")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});