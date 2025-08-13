export function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
  message,
}: Readonly<{
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}>) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-xl transform transition-all duration-300 scale-95 animate-scaleIn">
        {/* Header con icono */}
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600 dark:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Confirmar acción
            </h2>
          </div>
        </div>

        {/* Mensaje */}
        <p className="text-gray-700 dark:text-gray-200 mb-6 pl-9">{message}</p>

        {/* Acciones */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="cursor-pointer px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="cursor-pointer  px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
