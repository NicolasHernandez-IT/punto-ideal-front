"use client";

import React, { useEffect, useState } from "react";
import { mockProducts } from "../../../data/index";
import Image from "next/image";
import Button from "../../../components/ui/Button";
import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import { formatPrice } from "../../../lib/formatters";
import { hasStock } from "../../../lib/utils";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams() as { id?: string } | undefined;
  const paramsId = params?.id;
  const [rawId, setRawId] = useState<string>(paramsId || "");

  useEffect(() => {
    if (paramsId) {
      setRawId(paramsId);
      return;
    }

    // Fallback: parse location.pathname on client when params is empty
    if (typeof window !== "undefined") {
      const path = window.location.pathname || "";
      const match = path.match(/\/productos\/([^\/\\?#]+)/i);
      if (match && match[1]) {
        setRawId(decodeURIComponent(match[1]));
      }
    }
  }, [paramsId]);

  let product = mockProducts.find((p) => p.id === rawId);

  // fallback matches: strip 'prod' prefix, numeric coercion
  if (!product && rawId) {
    const stripped = rawId.replace(/^prod/i, "");
    product = mockProducts.find(
      (p) => p.id === stripped || Number(p.id) === Number(stripped),
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">Producto no encontrado</h1>
        <p className="mt-4 text-sm text-gray-600">ID consultado: {rawId}</p>
        <div className="mt-4 text-sm text-gray-600">
          Params recibidos:{" "}
          <pre className="bg-gray-100 p-2 rounded mt-2">
            {JSON.stringify(params)}
          </pre>
        </div>
        <div className="mt-6">
          <p className="text-sm">Productos disponibles:</p>
          <ul className="list-disc list-inside text-sm">
            {mockProducts.slice(0, 10).map((p) => (
              <li key={p.id}>
                <a className="text-blue-600" href={`/productos/${p.id}`}>
                  {p.id} — {p.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const inStock = hasStock(product.stock);

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product.nombre}
          </h1>
          <div className="text-sm text-gray-500 mt-1">{product.categoria}</div>
        </div>

        <style>{`
          .pdp-grid { display: block; gap: 1.5rem; }
          .pdp-image-wrap { max-width: 520px; margin: 0 auto; position: relative; }
          .pdp-aside .btn { width: 100%; }
          @media (min-width: 768px) {
            .pdp-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; align-items: start; }
            .pdp-image-wrap { max-width: 520px; }
          }
        `}</style>

        <div className="pdp-grid">
          <div>
            <Card>
              <div className="pdp-image-wrap" style={{ paddingTop: "65%" }}>
                <Image
                  src={product.imagen || "/images/products/placeholder.png"}
                  alt={product.nombre}
                  fill
                  className="absolute inset-0 object-contain"
                />
              </div>
            </Card>

            <div className="mt-6 text-gray-700 leading-relaxed">
              {product.descripcion}
            </div>
          </div>

          <aside className="pdp-aside">
            <div
              className="bg-white border rounded-lg shadow-sm p-6"
              style={{ position: "sticky", top: 24 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500">Vendido por</div>
                  <div className="text-sm font-medium text-gray-800">
                    Tienda Demo
                  </div>
                </div>
                <div>
                  {product.enOferta && (
                    <Badge variant="danger">
                      -{product.porcentajeDescuento}%
                    </Badge>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.precio)}
                </div>
                {product.enOferta && product.precioOferta && (
                  <div className="text-sm text-gray-500 line-through">
                    {formatPrice(product.precio)}
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <Button
                  variant="primary"
                  disabled={!inStock}
                  className="w-full sm:w-auto"
                >
                  {inStock ? "Comprar ahora" : "Sin Stock"}
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto">
                  Agregar al carro
                </Button>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <div className="font-medium text-gray-700">Entrega</div>
                <ul className="mt-2 space-y-1">
                  <li>Despacho estándar: Disponible</li>
                  <li>Retiro en tienda: Disponible</li>
                </ul>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                SKU: {product.id}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
