export const filterProducts = (products = [], search = "", category = "all") => {
    return products.filter(({ title = "", category: itemCategory = "" }) => {
        const matchesSearch = title
        .toLowerCase()
        .includes(search.toLowerCase().trim());

        const matchesCategory =
        category === "all" || itemCategory === category;

        return matchesSearch &&matchesCategory;
        });
    };

export const sortProducts = (products = [], sortBy = "default") => {
    if (sortBy === "default") return products;
    return [...products].sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0;
    });
};

export const getStatistics = (products = []) => {
    if (!products?.length) return { totalProducts: 0, averagePrice: 0, totalStock: 0 };

    const totalStock = products.reduce((sum, { stock = 0 }) => sum + stock, 0);
    const totalPrice = products.reduce((sum, { price = 0 }) => sum + price, 0);

    return {
        totalProducts: products.length,
        averagePrice: (totalPrice / products.length).toFixed(2),
        totalStock
    };
};