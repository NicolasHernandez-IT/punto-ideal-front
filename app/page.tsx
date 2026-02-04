import { mockProducts } from '@/app/data/mockProducts';
import ProductGrid from '@/app/components/productos/ProductGrid';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 text-gray-900">Nuestros Productos</h1>
                <p className="text-gray-600">
                    Encontrá todo lo que necesitás para tu hogar al mejor precio.
                </p>
            </div>

            <ProductGrid products={mockProducts} />
        </div>
    );
}
