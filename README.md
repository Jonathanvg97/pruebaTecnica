# Prueba técnica

Este proyecto es una aplicación web que permite a los usuarios agregar productos a un carrito teniendo en cuenta el presupuesto que ellos pueden establecer

## Tabla de Contenidos

- [Tecnologías y Herramientas Utilizadas](#tecnologías-y-herramientas-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Instalación y Configuración](#instalación-y-configuración)
- [Contribuciones y Licensia](#contribuciones-y-licensia)

## Tecnologías y Herramientas Utilizadas

### Backend

- **Node.js**: Entorno de ejecución para el código JavaScript.
- **Node.js**: v21.7.3.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **Vercel**: Plataforma para desplegar el backend y frontend.

### Frontend

- **Next**: Framework.
- **Tailwind CSS**: Framework CSS para diseñar la UI.
- **TablerIcons**: Herramienta para los iconos.

## Estructura del Proyecto

### Backend

El backend está diseñado para gestionar productos y un carrito de compras.

```plaintext
└── 📁backend
    └── 📁src
        └── 📁controllers
            ├── cartController.ts
        └── 📁routes
            ├── cart.ts
            ├── products.ts
        └── 📁types
            ├── product.ts
        └── 📁utils
            └── 📁config
                ├── enviroments.ts
            └── 📁data
                ├── product.ts
        ├── index.ts
        ├── server.ts
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
```

### Frontend

```plaintext
└── 📁frontend
    └── 📁src
    └── 📁app
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    ├── page.tsx
    └── 📁components
    └── 📁UI
    ├── ConfirmModal.tsx
    ├── ProductCardSkeleton.tsx
    ├── Cart.tsx
    ├── CartDrawer.tsx
    ├── HomePage.tsx
    ├── ProductList.tsx
    └── 📁hooks
    ├── useProducts.ts
    └── 📁services
    ├── cart.service.ts
    ├── product.service.ts
    └── 📁types
    ├── card.ts
    ├── product.ts
    └── 📁utils
    ├── enviroment.ts
    ├── .env
    ├── .gitignore
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    └── tsconfig.json
```

## Instalación y Configuración

### Clonar el Repositorio

Primero, clona el repositorio desde GitHub:

git clone https://github.com/Jonathanvg97/pruebaTecnica.git

### Instalacón del Backend

- Ir a la carpeta del backend cd tu-repositorio/backend
- npm i
- Agregar las variables de entorno como esta en el .env.template

### Instalacón del Frontend

- Ir a la carpeta del frontend cd tu-repositorio/Frontend
- npm i
- Agregar las variables de entorno como esta en el .env.template

## Contribuciones y Licensia

Jonathan Vanegas

GitHub: Jonathanvg97


