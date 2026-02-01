import { mockOffers, mockProducts} from "./data/index";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Ofertas Destacadas</h1>
      <div className="space-y-8">
        {mockOffers.map((oferta) => (
          <section key={oferta.id} className="border rounded-lg p-6 shadow bg-white">
            <h2 className="text-2xl font-semibold mb-2">{oferta.titulo}</h2>
            <p className="mb-4 text-gray-700">{oferta.descripcion}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {oferta.productos.map((prodId) => {
                const producto = mockProducts.find((p) => p.id === prodId);
                if (!producto) return null;
                return (
                  <div key={producto.id} className="border rounded p-4 flex flex-col items-center">
                    <img src={producto.imagen} alt={producto.nombre} className="w-24 h-24 object-contain mb-2" />
                    <div className="font-medium">{producto.nombre}</div>
                    <div className="text-green-600 font-bold">${producto.precio}</div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
