import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/types';
import { formatPrice } from '@/app/lib/formatters';
import { hasStock } from '@/app/lib/utils';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const inStock = hasStock(product.stock);
  const precioFinal = product.enOferta && product.precioOferta 
    ? product.precioOferta 
    : product.precio;

  return (
    <Card className="flex flex-col h-full">
      <Link href={`/productos/${product.id}`} className="block">
        <div className="relative aspect-square mb-4">
          <Image
            src={product.imagen || '/images/products/placeholder.png'}
            alt={product.nombre}
            fill
            className="object-cover rounded"
          />
          {product.enOferta && (
            <div className="absolute top-2 right-2">
              <Badge variant="danger">
                -{product.porcentajeDescuento}%
              </Badge>
            </div>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
              <Badge variant="warning">Sin Stock</Badge>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.nombre}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.descripcion}
        </p>

        <div className="mt-auto">
          <div className="mb-3">
            {product.enOferta ? (
              <div>
                <span className="text-gray-500 line-through text-sm">
                  {formatPrice(product.precio)}
                </span>
                <span className="text-xl font-bold text-red-600 ml-2">
                  {formatPrice(precioFinal)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold">
                {formatPrice(product.precio)}
              </span>
            )}
          </div>

          <Button
            variant="primary"
            className="w-full"
            disabled={!inStock}
          >
            {inStock ? 'Agregar al Carrito' : 'Sin Stock'}
          </Button>
        </div>
      </Link>
    </Card>
  );
}
