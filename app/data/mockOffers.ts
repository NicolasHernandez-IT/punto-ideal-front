// Mock de ofertas para el home
export interface MockOffer {
  id: string;
  titulo: string;
  descripcion: string;
  productos: string[]; // ids de productos
}

export const mockOffers: MockOffer[] = [
  {
    id: 'oferta1',
    titulo: 'Ofertas de Verano',
    descripcion: 'Aprovechá los mejores precios en productos seleccionados para el verano.',
    productos: ['1', '2', '3'],
  },
  {
    id: 'oferta2',
    titulo: 'Tecnología en Oferta',
    descripcion: 'Descuentos exclusivos en tecnología y accesorios.',
    productos: ['4', '5'],
  },
];
