"use client";

interface ProductCardSkeletonProps {
  count?: number; // Número de skeletons, por defecto 6
}

export default function ProductCardSkeleton({
  count = 6,
}: Readonly<ProductCardSkeletonProps>) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i + 1}
          className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 flex flex-col animate-pulse"
        >
          {/* Imagen */}
          <div className="bg-gray-200 h-40 sm:h-44 md:h-48 rounded-xl mb-4"></div>

          {/* Nombre */}
          <div className="bg-gray-200 h-5 rounded w-3/4 mb-3"></div>

          {/* Precio */}
          <div className="bg-gray-200 h-4 rounded w-1/2 mb-6"></div>

          {/* Botón */}
          <div className="bg-gray-200 h-10 rounded-lg mt-auto"></div>
        </div>
      ))}
    </div>
  );
}
