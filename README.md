# Bambi Shop
## Un e-commerce en [React JS](https://reactjs.org/)
Clonar el proyecto
```sh
git clone https://github.com/lpzanibal/BambishopLopez.git
```
Instalar dependencias
```sh
npm install
```
Inicializar
```sh
npm start
```
## Rutas de la aplicación
| Ruta | Componente | Detalle |
| ------ | ------ | ------ |
| / | ItemListContainer | Ruta inicial de la aplicación. Contiene un listado con todos los productos |
| /category/:categoryId | ItemListContainer | Listado de productos filtrados por categoría |
| /detail/:productId | ItemDetailContainer | Detalle de un producto |