const coloniasSPS = [
    { nombre: "Barrio Guamilito", tiempo: "20 - 30 min" },
    { nombre: "Colonia Trejo", tiempo: "25 - 35 min" },
    { nombre: "Colonia Jardines del Valle", tiempo: "30 - 40 min" },
    { nombre: "Barrio El Centro (SPS)", tiempo: "20 - 30 min" },
    { nombre: "Colonia Fesitranh", tiempo: "40 - 50 min" },
    { nombre: "Sector Cofradía", tiempo: "45 - 60 min" }
];

const coloniasProgreso = [
    { nombre: "Barrio El Centro (Progreso)", tiempo: "15 - 25 min" },
    { nombre: "Colonia Las Minitas", tiempo: "20 - 30 min" },
    { nombre: "Colonia San José", tiempo: "20 - 30 min" },
    { nombre: "Colonia Berlin", tiempo: "25 - 35 min" },
    { nombre: "Barrio San Miguel", tiempo: "15 - 25 min" },
    { nombre: "Colonia Bendeck", tiempo: "25 - 35 min" }
];

// Base de datos de productos
const productosBD = [
    // Desayunos
    { id: 1, nombre: "Desayuno Típico Hondureño", precio: 96.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" },
    { id: 2, nombre: "Baleada Especial Criolla", precio: 48.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80" },
    { id: 3, nombre: "Pancakes con Miel & Frutas", precio: 76.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80" },
    { id: 4, nombre: "Omelette de Jamón y Queso", precio: 85.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=400&q=80" },
    { id: 5, nombre: "Tostadas Francesas Arábica", precio: 80.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80" },
    { id: 21, nombre: "Waffles con Frutos Rojos", precio: 88.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400&q=80" },
    { id: 22, nombre: "Sandwich de Huevo y Tocino", precio: 72.00, categoria: "desayunos", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80" },

    // Cafés
    { id: 6, nombre: "Café Cappuccino", precio: 55.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" },
    { id: 7, nombre: "Espresso Doble", precio: 40.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80" },
    { id: 8, nombre: "Latte Frío de Vainilla", precio: 65.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 9, nombre: "Mocaccino Supremo", precio: 70.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80" },
    { id: 10, nombre: "Café Americano Negro", precio: 35.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" },
    { id: 23, nombre: "Caramel Macchiato", precio: 75.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=400&q=80" },
    { id: 24, nombre: "Café Cold Brew Artesanal", precio: 60.00, categoria: "cafes", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },

    // Bebidas
    { id: 11, nombre: "Jugo Natural de Naranja", precio: 45.00, categoria: "bebidas", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
    { id: 12, nombre: "Smoothie de Maracuyá", precio: 60.00, categoria: "bebidas", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80" },
    { id: 13, nombre: "Limonada con Menta", precio: 50.00, categoria: "bebidas", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
    { id: 14, nombre: "Té Frío de Durazno", precio: 45.00, categoria: "bebidas", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80" },
    { id: 15, nombre: "Frappé de Galleta Oreo", precio: 75.00, categoria: "bebidas", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80" },
    { id: 25, nombre: "Smoothie de Fresa y Banano", precio: 65.00, categoria: "bebidas", img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80" },

    // Postres
    { id: 16, nombre: "Cheesecake de Frutilla", precio: 75.00, categoria: "postres", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
    { id: 17, nombre: "Pie de Limón Artesanal", precio: 65.00, categoria: "postres", img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80" },
    { id: 18, nombre: "Volcán de Chocolate", precio: 80.00, categoria: "postres", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" },
    { id: 19, nombre: "Torta de Tres Leches", precio: 70.00, categoria: "postres", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" },
    { id: 20, nombre: "Brownie con Helado", precio: 68.00, categoria: "postres", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=400&q=80" },
    { id: 26, nombre: "Flan de la Casa", precio: 50.00, categoria: "postres", img: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=400&q=80" },

    // Ofertas Comprables
    { id: 101, nombre: "Combo Desayuno Típico + Cappuccino", precio: 120.00, categoria: "ofertas", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" },
    { id: 102, nombre: "Oferta 2x1 En Latte Frío de Vainilla", precio: 65.00, categoria: "ofertas", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 103, nombre: "Combo Pie de Limón + Mocaccino", precio: 110.00, categoria: "ofertas", img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80" },
    { id: 104, nombre: "Combo Pareja: 2 Pancakes + 2 Americanos", precio: 190.00, categoria: "ofertas", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80" }
];

let carrito = [];
let contadorPedidos = parseInt(localStorage.getItem("contadorPedidos")) || 1;

document.addEventListener("DOMContentLoaded", () => {
    cerrarModalCompra();
    cerrarHistorial();
    cerrarFactura();
    actualizarColonias();
});

function navegarA(categoria) {
    const vistaInicio = document.getElementById("vista-inicio");
    const vistaProductos = document.getElementById("vista-productos");
    const titulo = document.getElementById("tituloCategoria");
    const grid = document.getElementById("gridProductos");

    if (categoria === "inicio") {
        vistaInicio.classList.remove("hidden");
        vistaProductos.classList.add("hidden");
    } else {
        vistaInicio.classList.add("hidden");
        vistaProductos.classList.remove("hidden");

        const nombresTitulos = {
            todos: "Menú Completo",
            desayunos: "Desayunos Especiales",
            cafes: "Cafés de Origen",
            bebidas: "Bebidas & Jugos",
            postres: "Postres Artesanales",
            ofertas: "Ofertas & Combos Especiales"
        };

        titulo.innerText = nombresTitulos[categoria] || "Menú";

        const filtrados = (categoria === "todos") 
            ? productosBD 
            : productosBD.filter(p => p.categoria === categoria);

        grid.innerHTML = "";

        filtrados.forEach((prod, index) => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <img src="${prod.img}" alt="${prod.nombre}">
                <div class="card-body">
                    <div class="card-title">${prod.nombre}</div>
                    <div class="card-price">L. ${prod.precio.toFixed(2)}</div>
                    <div class="card-actions-row">
                        <select id="qty-${prod.id}" class="qty-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button class="add-btn" onclick="agregarAlCarrito(${prod.id})">+ Agregar</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

function agregarAlCarrito(id) {
    const prod = productosBD.find(p => p.id === id);
    const cantidadInput = document.getElementById(`qty-${id}`);
    const cantidad = cantidadInput ? parseInt(cantidadInput.value) : 1;

    for (let i = 0; i < cantidad; i++) {
        carrito.push(prod);
    }

    const cartCount = document.getElementById("cartCount");
    if (cartCount) cartCount.innerText = carrito.length;

    const cartBtn = document.querySelector(".cart-trigger-btn");
    if (cartBtn) {
        cartBtn.classList.remove("cart-bump");
        void cartBtn.offsetWidth;
        cartBtn.classList.add("cart-bump");
    }

    mostrarToast(`✓ Agregado(s) ${cantidad}x ${prod.nombre}`);
}

function mostrarToast(mensaje) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.innerText = mensaje;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2500);
}

function actualizarColonias() {
    const ciudadElem = document.getElementById("selectCiudadFiltro");
    if (!ciudadElem) return;
    const ciudad = ciudadElem.value;
    const selectColonia = document.getElementById("ddlColonia");
    if (!selectColonia) return;
    selectColonia.innerHTML = "";

    const lista = (ciudad === "San Pedro Sula") ? coloniasSPS : coloniasProgreso;

    lista.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.nombre;
        opt.innerText = `${c.nombre} (${c.tiempo})`;
        opt.setAttribute("data-tiempo", c.tiempo);
        selectColonia.appendChild(opt);
    });

    calcularTiempoEstimado();
}

function calcularTiempoEstimado() {
    const select = document.getElementById("ddlColonia");
    if (!select) return;
    const optionSelected = select.options[select.selectedIndex];
    if (optionSelected) {
        const tiempo = optionSelected.getAttribute("data-tiempo");
        const lblTiempo = document.getElementById("lblTiempoEstimado");
        if (lblTiempo) lblTiempo.innerText = tiempo;
    }
}

function evaluarTipoEntrega() {
    const tipo = document.getElementById("ddlTipoEntrega").value;
    const grupoEnvio = document.getElementById("grupoEnvio");
    if (grupoEnvio) {
        if (tipo === "Recoger en Local") {
            grupoEnvio.classList.add("hidden");
        } else {
            grupoEnvio.classList.remove("hidden");
        }
    }
}

function abrirModalCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de realizar tu pedido.");
        return;
    }

    const contenedorResumen = document.getElementById("resumenCarritoLista");
    if (contenedorResumen) contenedorResumen.innerHTML = "";

    let total = 0;
    const conteo = {};

    carrito.forEach(p => {
        conteo[p.nombre] = (conteo[p.nombre] || { cantidad: 0, precio: p.precio });
        conteo[p.nombre].cantidad++;
        total += p.precio;
    });

    for (const [nombre, datos] of Object.entries(conteo)) {
        const div = document.createElement("div");
        div.className = "cart-summary-item";
        div.innerHTML = `
            <span>${datos.cantidad}x ${nombre}</span>
            <strong>L. ${(datos.cantidad * datos.precio).toFixed(2)}</strong>
        `;
        if (contenedorResumen) contenedorResumen.appendChild(div);
    }

    const lblTotal = document.getElementById("lblTotalCheckout");
    if (lblTotal) lblTotal.innerText = `L. ${total.toFixed(2)}`;
    
    const modal = document.getElementById("modalCheckout");
    if (modal) modal.classList.remove("hidden");
}

function cerrarModalCompra() {
    const modal = document.getElementById("modalCheckout");
    if (modal) modal.classList.add("hidden");
}

async function confirmarPedido(event) {
    event.preventDefault();

    const cliente = document.getElementById("txtNombre").value.trim();
    const tipoEntrega = document.getElementById("ddlTipoEntrega").value;
    const ciudad = document.getElementById("selectCiudadFiltro").value;
    const colonia = document.getElementById("ddlColonia") ? document.getElementById("ddlColonia").value : "";
    const direccion = document.getElementById("txtDireccion") ? document.getElementById("txtDireccion").value.trim() : "";
    const pago = document.getElementById("ddlPago").value;

    let destinoStr = "";
    if (tipoEntrega === "Recoger en Local") {
        destinoStr = `Retiro en Local (${ciudad})`;
    } else {
        if (!direccion) {
            alert("Por favor ingresa tu dirección exacta para el envío a domicilio.");
            return;
        }
        destinoStr = `${ciudad}, ${colonia} - ${direccion}`;
    }

    const conteo = {};
    let totalFactura = 0;
    carrito.forEach(p => {
        conteo[p.nombre] = (conteo[p.nombre] || { cantidad: 0, precio: p.precio });
        conteo[p.nombre].cantidad++;
        totalFactura += p.precio;
    });

    const listaProductosText = Object.entries(conteo)
        .map(([nombre, d]) => `${d.cantidad}x ${nombre}`)
        .join(", ");

    const numPedidoStr = `#${String(contadorPedidos).padStart(3, '0')}`;

    // 1. GUARDAR EN LA BASE DE DATOS SQLITE (BACKEND NODE.JS)
    try {
        const respuesta = await fetch('http://localhost:3000/api/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: numPedidoStr,
                cliente: cliente,
                destino: destinoStr,
                pago: pago,
                productos: listaProductosText,
                total: totalFactura
            })
        });

        if (respuesta.ok) {
            console.log("¡Pedido guardado con éxito en SQLite!");
        } else {
            console.error("Error al guardar en el servidor");
        }
    } catch (err) {
        console.error("Servidor no disponible o desligado:", err);
    }

    contadorPedidos++;
    localStorage.setItem("contadorPedidos", contadorPedidos.toString());

    // 2. RENDERIZAR FACTURA EN PANTALLA
    const fId = document.getElementById("facturaId");
    if (fId) fId.innerText = numPedidoStr;
    
    const fFecha = document.getElementById("facturaFecha");
    if (fFecha) fFecha.innerText = new Date().toLocaleString();

    const fCliente = document.getElementById("facturaCliente");
    if (fCliente) fCliente.innerText = cliente;

    const fEntrega = document.getElementById("facturaEntrega");
    if (fEntrega) fEntrega.innerText = destinoStr;

    const fPago = document.getElementById("facturaPago");
    if (fPago) fPago.innerText = pago;

    const contenedorItems = document.getElementById("facturaItems");
    if (contenedorItems) {
        contenedorItems.innerHTML = "";
        for (const [nombre, datos] of Object.entries(conteo)) {
            const row = document.createElement("div");
            row.className = "receipt-item";
            row.innerHTML = `
                <span>${datos.cantidad}x ${nombre}</span>
                <span>L. ${(datos.cantidad * datos.precio).toFixed(2)}</span>
            `;
            contenedorItems.appendChild(row);
        }
    }

    const fTotal = document.getElementById("facturaTotal");
    if (fTotal) fTotal.innerText = `L. ${totalFactura.toFixed(2)}`;

    // 3. VACIAR CARRITO Y MOSTRAR MODAL DE FACTURA
    carrito = [];
    const cartCount = document.getElementById("cartCount");
    if (cartCount) cartCount.innerText = "0";

    cerrarModalCompra();
    const modalFactura = document.getElementById("modalFactura");
    if (modalFactura) modalFactura.classList.remove("hidden");
}

function imprimirFactura() {
    window.print();
}

function cerrarFactura() {
    const modal = document.getElementById("modalFactura");
    if (modal) modal.classList.add("hidden");
}

function pedirAccesoHistorial() {
    const clave = prompt("Ingrese la contraseña de administrador para ver el historial:");
    if (clave === "admin123" || clave === "messi") {
        renderizarHistorial();
        const modal = document.getElementById("modalHistorial");
        if (modal) modal.classList.remove("hidden");
    } else if (clave !== null) {
        alert("Contraseña incorrecta.");
    }
}

function cerrarHistorial() {
    const modal = document.getElementById("modalHistorial");
    if (modal) modal.classList.add("hidden");
}

// --- CONSULTAR HISTORIAL DESDE LA BASE DE DATOS SQLITE ---
async function renderizarHistorial() {
    const tbody = document.getElementById("tablaPedidosBody");
    if (!tbody) return;

    tbody.innerHTML = "";
    let ingresosTotales = 0;

    try {
        const respuesta = await fetch('http://localhost:3000/api/pedidos');
        const pedidosRealizados = await respuesta.json();

        let numeroVisual = 1;

        pedidosRealizados.forEach(p => {
            ingresosTotales += Number(p.total);
            const tr = document.createElement("tr");
            
            tr.innerHTML = `
                <td>${numeroVisual}</td>
                <td>${p.cliente}</td>
                <td>${p.destino}</td>
                <td>${p.pago}</td>
                <td>${p.productos}</td>
                <td>L. ${Number(p.total).toFixed(2)}</td>
                <td style="text-align: center;">
                    <button class="btn-cancel" style="padding: 6px 12px; margin: 0; display: inline-block; width: auto;" onclick="eliminarPedido('${p.id}')">
                        X Eliminar
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
            
            numeroVisual++; 
        });

        const lblIngresos = document.getElementById("lblIngresosTotales");
        if (lblIngresos) {
            lblIngresos.innerText = `L. ${ingresosTotales.toFixed(2)}`;
        }
    } catch (error) {
        console.error("Error al obtener los pedidos de la Base de Datos:", error);
    }
}

// --- FUNCIÓN PARA ELIMINAR UN PEDIDO EN SQLITE ---
async function eliminarPedido(idOriginalBaseDatos) {
    const confirmar = confirm("¿Estás seguro que deseas eliminar este pedido?");
    
    if (confirmar) {
        try {
            const idCodificado = encodeURIComponent(idOriginalBaseDatos);
            
            const respuesta = await fetch(`http://localhost:3000/api/pedidos/${idCodificado}`, {
                method: 'DELETE'
            });

            if (respuesta.ok) {
                renderizarHistorial();
            } else {
                alert("Hubo un error al intentar eliminar el pedido del servidor.");
            }
        } catch (error) {
            console.error("Error eliminando el pedido:", error);
            alert("Asegúrate de que tu servidor Node (server.js) esté encendido corriendo en la terminal.");
        }
    }
}