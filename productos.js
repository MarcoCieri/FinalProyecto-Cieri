export const productos = [
    {
        id: 1,
        nombre: "Muzza",
        precio: 1800,
        categoria: "Pizzas"
    },
    {
        id: 2,
        nombre: "Especial",
        precio: 2000,
        categoria: "Pizzas"
    },
    {
        id: 3,
        nombre: "Super",
        precio: 3000,
        categoria: "Pizzas"
    },
    {
        id: 4,
        nombre: "Con Fritas",
        precio: 2000, categoria: "Pizzas"
    },
    {
        id: 5, nombre: "Napo", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 6, nombre: "Concase", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 7, nombre: "Calabresa", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 8, nombre: "Corleone", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 9, nombre: "Alemana", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 10, nombre: "Fugazza", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 11, nombre: "Roquefort", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 12, nombre: "Cuatro Quesos", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 13, nombre: "Rucula", precio: 2000, categoria: "Pizzas"
    },
    {
        id: 14, nombre: "Lomo Simple", precio: 2000, categoria: "Lomos"
    },
    {
        id: 15, nombre: "Lomo Completo", precio: 2000, categoria: "Lomos"
    },
    {
        id: 16, nombre: "Lomo Napoli", precio: 2000, categoria: "Lomos"
    },
    {
        id: 17, nombre: "Lomo Santinos", precio: 2000, categoria: "Lomos"
    },
    {
        id: 18, nombre: "Veggi", precio: 2000, categoria: "Lomos"
    },
    {
        id: 19, nombre: "Hamburlomo", precio: 2000, categoria: "Lomos"
    },
    {
        id: 20, nombre: "Mega Lomo", precio: 2000, categoria: "Lomos"
    },
    {
        id: 21, nombre: "Sandwich Mila", precio: 2000, categoria: "Sandwiches"
    },
    {
        id: 22, nombre: "Tortuguita Jamon y Queso", precio: 2000, categoria: "Sandwiches"
    },
    {
        id: 23, nombre: "Hamburguesa Simple", precio: 2000, categoria: "Hamburguesas"
    },
    {
        id: 24, nombre: "Hamburguesa Completa", precio: 2000, categoria: "Hamburguesas"
    },
    {
        id: 25, nombre: "Hamburguesa Napoli", precio: 2000, categoria: "Hamburguesas"
    },
    {
        id: 26, nombre: "Hamburguesa Santinos", precio: 2000, categoria: "Hamburguesas"
    },
    {
        id: 27, nombre: "Mega Hamburguesa", precio: 2000, categoria: "Hamburguesas"
    },
    {
        id: 28, nombre: "Empanada Arabe", precio: 2000, categoria: "Empanadas"
    },
    {
        id: 29, nombre: "Empanada Jamon y Queso", precio: 2000, categoria: "Empanadas"
    },
    {
        id: 30, nombre: "Empanada Criolla Salada", precio: 2000, categoria: "Empanadas"
    },
    {
        id: 31, nombre: "Fritas XL", precio: 2000, categoria: "Fritas"
    },
    {
        id: 32, nombre: "Fritas L", precio: 2000, categoria: "Fritas"
    },
    {
        id: 33, nombre: "Promo 1", precio: 2000, categoria: "Promos"
    },
    {
        id: 34, nombre: "Promo 2", precio: 2000, categoria: "Promos"
    },
    {
        id: 35, nombre: "Promo 3", precio: 2000, categoria: "Promos"
    },
    {
        id: 36, nombre: "Promo 4", precio: 2000, categoria: "Promos"
    },
    {
        id: 37, nombre: "Promo 5", precio: 2000, categoria: "Promos"
    },
    {
        id: 38, nombre: "Promo 6", precio: 2000, categoria: "Promos"
    },
    {
        id: 39, nombre: "Promo 7", precio: 2000, categoria: "Promos"
    },
    {
        id: 40, nombre: "Promo 8", precio: 2000, categoria: "Promos"
    },
    {
        id: 41, nombre: "Promo 9", precio: 2000, categoria: "Promos"
    },
    {
        id: 42, nombre: "Promo 10", precio: 2000, categoria: "Promos"
    },
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));