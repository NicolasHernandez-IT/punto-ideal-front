import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from "../../types";
import { formatPrice, hasStock } from "../../lib/index";
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { design } from "../../lib/design";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const inStock = hasStock(product.stock);
  const precioFinal = product.enOferta && product.precioOferta 
    ? product.precioOferta 
    : product.precio;

  return (
    <Card
      className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200"
      style={{ minHeight: 460 }}
    >
      <Link href={`/productos/${product.id}`} className="block">
        <div className="relative mb-4 w-full" style={{ paddingTop: "100%" }}>
          <Image
            src={product.imagen || "/images/products/placeholder.png"}
            alt={product.nombre}
            fill
            className="absolute inset-0 object-cover rounded-lg"
          />
          {product.enOferta && (
            <div className="absolute top-2 right-2">
              <Badge variant="danger">-{product.porcentajeDescuento}%</Badge>
            </div>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
              <Badge variant="warning">Sin Stock</Badge>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <h3
            className="font-semibold text-lg mb-2"
            style={{ color: design.colors.primary }}
          >
            {product.nombre}
          </h3>

          <p
            className="text-sm mb-3"
            style={{
              color: design.colors.muted,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {product.descripcion}
          </p>
        </div>

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

          <Button variant="primary" className="w-full" disabled={!inStock}>
            {inStock ? "Agregar al Carrito" : "Sin Stock"}
          </Button>
        </div>
      </Link>
    </Card>
  );
}
