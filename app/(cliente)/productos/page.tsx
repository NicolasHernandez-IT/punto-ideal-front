import { mockProducts } from "../../data/index";
import ProductGrid from "../../components/productos/ProductGrid";

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 text-gray-800 border-b-2 border-gray-300 pb-2">
            Todos los productos
          </h1>
          <p className="text-gray-600 text-lg">
            Encontrá todo lo que necesitás para tu hogar
          </p>
        </div>
        <ProductGrid products={mockProducts} />
      </div>
    </main>
  );
}
