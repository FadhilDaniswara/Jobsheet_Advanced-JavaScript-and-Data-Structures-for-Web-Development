function printCategories(categories, depth = 0) {
    for (const category of categories) {
        console.log(" ".repeat(depth) + category.name);
        if (category.children.length > 0) {
        printCategories(category.children, depth + 1);
        }
    }
}

//yoh testi lah
const nestedCategories = [
    {
        name: "Electronics",
        children: [
            {
                name: "Laptops",
                children: [
                    { name: "Gaming Laptops", children: [] },
                    { name: "Ultrabooks", children: [] }
                ]
            },
            { name: "Phones", children: [] }
        ]
    },
{
    name: "Furniture",
    children: [{ name: "Chairs", children: [] }]
}
];

printCategories(nestedCategories);