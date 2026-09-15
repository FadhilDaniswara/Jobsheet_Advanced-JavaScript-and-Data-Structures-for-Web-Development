export const renderProducts = (products = []) => {
    const container = document.querySelector("#product-list");
    if (!container) return;

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>Produk tidak ditemukan.</p>";
        return;
    }

    for (const product of products) {
        const { title, price, category, rating, thumbnail } = product;

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
        <img src="${thumbnail ?? 'https://dummyjson.com/image/150'}" alt="${title}">
        <h3>${title}</h3>
        <p>Kategori: ${category}</p>
        <p>Harga: $${price}</p>
        <p>Rating: ${rating}</p>
    `;
    container.append(card);
    }
};