import Image from "next/image";

const products = [
  {
    name: "Organic Cow Dung Cakes",
    description:
      "Export-quality, sun-dried, and 100% chemical-free. Ideal for religious rituals, organic farming, and eco-friendly fuel.",
    image: "/images/cow-dung-cakes.jpg",
  },
  {
    name: "Cow Dung Powder",
    description:
      "Finely ground organic cow dung for soil enrichment, natural manure, and sustainable agriculture.",
    image: "/images/cow-dung-powder.jpg",
  },
  {
    name: "Organic Compost",
    description:
      "Nutrient-rich organic compost made from pure cow dung, perfect for home gardens and large-scale farming.",
    image: "/images/organic-compost.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Premium Cow Dung Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide high-quality, 100% organic cow dung products for export,
          farming, gardening, and religious use. Sustainably sourced from
          healthy cows in Telangana.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-5 py-2 bg-green-700 text-white text-sm rounded-lg hover:bg-green-800 transition"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}