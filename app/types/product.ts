// Tipos base para productos
export interface Product {
  id: string;
  codigo_barra: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
  imagen?: string;
  enOferta?: boolean;
  precioOferta?: number;
  porcentajeDescuento?: number;
}

export interface Category {
  id: string;
  nombre: string;
  descripcion?: string;
  imagen?: string;
}
