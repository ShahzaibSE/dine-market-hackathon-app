// sanity/pet.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "price",
            type: "integer",
            title: "Price"
        },
        {
            name: "category",
            type: "string",
            title: "Category"
        }
    ]
}