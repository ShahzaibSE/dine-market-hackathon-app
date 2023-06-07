// sanity/pet.ts
// Valid types are: product, array, block, boolean, datetime, date, document, 
// email, file, geopoint, image, number, object, reference, crossDatasetReference, slug, string, telephone, text and url
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
            type: "number",
            title: "Price"
        },
        {
            name: "category",
            type: "string",
            title: "Category"
        }
    ]
}