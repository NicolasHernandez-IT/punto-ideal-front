import { Product } from "../../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-4" style={{ maxWidth: 1400 }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}
        >
          {products.map((product) => (
            <div key={product.id} className="col-span-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
