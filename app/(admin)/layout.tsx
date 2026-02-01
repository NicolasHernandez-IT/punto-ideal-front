export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-xl font-bold">Panel de Administración</h1>
      </div>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
