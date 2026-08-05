# ecom-web-pag

Sitio web en React + TypeScript + Vite para gestión de servicios ambientales.

## Requisitos

- Node.js 18 o superior
- npm

## Clonar y ejecutar

```sh
git clone <URL_DEL_REPOSITORIO>
cd ecom-web-pag
npm install
npm run dev
```

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo
- `npm run build`: genera la versión de producción
- `npm run preview`: previsualiza la versión compilada
- `npm run lint`: ejecuta ESLint
- `npm run test`: ejecuta Vitest

## Contenido del repositorio

El repositorio incluye el código fuente, componentes, traducciones, assets, configuración de Vite, Tailwind, TypeScript, Playwright y Vitest. Las carpetas generadas localmente como `node_modules` y `dist` se excluyen mediante `.gitignore` porque se reconstruyen al instalar y compilar.

## Notas

- No se requieren variables de entorno adicionales para correr el proyecto localmente.
- Si se trabaja con otro gestor de paquetes, se puede regenerar el lockfile correspondiente, pero el proyecto está preparado para instalarse con npm.
