import { generarCardsProductos, productosDisponibles } from "./inicio.js";

const btnAgregar = document.getElementById("agregar__producto")
const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"))
const agregarProductos = document.getElementById("form__agregar")
const divProductos = document.getElementById("productos");
const btnModificar = document.getElementById("btn__modificar")

export const eliminarProducto = (id) => {

    const productoEliminar = productosDisponibles.findIndex(( producto ) => producto.id === id)
    productosDisponibles.splice(productoEliminar, 1)
    localStorage.setItem("productos", JSON.stringify(productosDisponibles))
    generarCardsProductos(JSON.parse(localStorage.getItem("productos")))  

}


class Productos {
    constructor(nombre, precio, imagen, categoria){
        this.id = generarId()
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
        this.categoria = categoria
    }
}


const generarId = () => {
    const id = productosDisponibles.map((producto) => { return producto.id })

    const max = Math.max(...id) + 1
    return max
}

usuarioLogeado?.admin === true ? (btnAgregar.style.display = "block") : (btnAgregar.style.display = "none")

usuarioLogeado?.admin === true ? (btnModificar.style.display = "block") : (btnModificar.style.display = "none")

btnAgregar.addEventListener("click", () => generarVistaAgregar())

const generarVistaAgregar =() => {
    agregarProductos.innerHTML = ""

    agregarProductos.style.display = "block"
    
    const form = document.createElement("form")

    agregarProductos.appendChild(form)

    const btnCargar = document.getElementById("cargar")
    btnCargar.addEventListener("click", (e) => {
        e.preventDefault()
        guadarProducto()
    })
    const btnCerrar = document.getElementById("cerrar")
    btnCerrar.addEventListener("click", (e) => {
        agregarProductos.style.display = "none"
    })

}

const guadarProducto = () => {
    const nombre = agregarProductos.children[0][0].value
    const precio = agregarProductos.children[0][1].value
    const imagen = agregarProductos.children[0][2].value
    const categoria = agregarProductos.children[0][3].value

    if(nombre !== "" && precio !== "" && imagen !== "" && categoria !== ""){
        const nuevoProducto = new Productos(nombre, precio, imagen, categoria)

        productosDisponibles.push(nuevoProducto)

        localStorage.setItem("productos", JSON.stringify(productosDisponibles))

        agregarProductos.style.display = "none"

        generarCardsProductos(productosDisponibles)


    }else{
        alert("algun/os valores no estan completos")
    }
}


btnModificar.addEventListener("click", () => {modificarProductosCard()})



const modificarProductos = (e, id) => {
    const productoIndice = productosDisponibles.findIndex((producto) => producto.id === id)

    const imagen = e.target.parentElement.parentElement.children[1].children[0].value
    const nombre = e.target.parentElement.parentElement.children[2].children[0].value
    const precio = e.target.parentElement.parentElement.children[3].children[0].value
    const categoria = e.target.parentElement.parentElement.children[4].children[0].value

    productosDisponibles[productoIndice].nombre = nombre
    productosDisponibles[productoIndice].precio = precio

    productosDisponibles[productoIndice].imagen = imagen
    productosDisponibles[productoIndice].categoria = categoria


    localStorage.setItem("productos", JSON.stringify(productosDisponibles))
    generarCardsProductos(productosDisponibles)

}