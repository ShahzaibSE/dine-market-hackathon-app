// sanity/pet.ts
// Valid types are: product, array, block, boolean, datetime, date, document,
// email, file, geopoint, image, number, object, reference, crossDatasetReference, slug, string, telephone, text and url
const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "gender",
      type: "string",
      title: "Gender"
    },
    {
      name: "price",
      type: "string",
      title: "Price",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "imageUrl",
      type: "image",
      title: "ImageUrl",
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    },
    {
      name: "previews",
      type: "array",
      title: "Previews",
      of: [{type: "image"}]
    }
  ],
};

export default product;
