const coloniasSPS = [
    { nombre: "Barrio Guamilito", tiempo: "20 - 30 min" },
    { nombre: "Colonia Trejo", tiempo: "25 - 35 min" },
    { nombre: "Colonia Jardines del Valle", tiempo: "30 - 40 min" }
];

const coloniasProgreso = [
    { nombre: "Barrio El Centro (Progreso)", tiempo: "15 - 25 min" },
    { nombre: "Colonia Las Minitas", tiempo: "20 - 30 min" },
    { nombre: "Colonia San José", tiempo: "20 - 30 min" }
];

const productosBD = [
    { id: 1, nombre: "Desayuno Típico Hondureño", precio: 96.00, categoria: "desayunos", stock: 25, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" },
    { id: 2, nombre: "Baleada Especial Criolla", precio: 48.00, categoria: "desayunos", stock: 40, img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80" },
    { id: 6, nombre: "Café Cappuccino", precio: 55.00, categoria: "cafes", stock: 30, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" },
    { id: 8, nombre: "Latte Frío de Vainilla", precio: 65.00, categoria: "cafes", stock: 20, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 11, nombre: "Jugo Natural de Naranja", precio: 45.00, categoria: "bebidas", stock: 15, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
    { id: 16, nombre: "Cheesecake de Frutilla", precio: 75.00, categoria: "postres", stock: 12, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
    { id: 101, nombre: "Combo Desayuno Típico + Cappuccino", precio: 120.00, categoria: "ofertas", stock: 10, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" }
];

let carrito = [];
let contadorPedidos = parseInt(localStorage.getItem("contadorPedidos")) || 1;
let productoActualReponer = null;

document.addEventListener("DOMContentLoaded", () => {
    cerrarModalCompra();
    cerrarHistorial();
    cerrarFactura();
    cerrarProveedores();
    cerrarInventario();
    cerrarModalClientes();
    cerrarModalComentarios();
    cerrarModalReponer();
    actualizarColonias();
});

function navegarA(categoria) {
    const vistaInicio = document.getElementById("vista-inicio");
    const vistaProductos = document.getElementById("vista-productos");

    if (categoria === "inicio") {
        vistaInicio.classList.remove("hidden");
        vistaProductos.classList.add("hidden");
    } else {
        vistaInicio.classList.add("hidden");
        vistaProductos.classList.remove("hidden");
        filtrarCategoria(categoria);
    }
}

function filtrarCategoria(categoria, botonElemento = null) {
    if (botonElemento) {
        document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        botonElemento.classList.add('active');
    }

    const grid = document.getElementById("gridProductos");
    const titulo = document.getElementById("tituloCategoria");

    const nombresTitulos = {
        todos: "Menú Completo",
        desayunos: "Desayunos Especiales",
        cafes: "Cafés de Origen",
        bebidas: "Bebidas & Jugos",
        postres: "Postres Artesanales",
        ofertas: "Ofertas & Combos Especiales"
    };

    titulo.innerText = nombresTitulos[categoria] || "Menú Especial";

    const filtrados = (categoria === "todos") ? productosBD : productosBD.filter(p => p.categoria === categoria);

    grid.innerHTML = "";

    filtrados.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <div class="card-body">
                <div class="card-title">${prod.nombre}</div>
                <div class="card-price">L. ${prod.precio.toFixed(2)}</div>
                
                <div class="qty-control-box">
                    <button class="qty-btn" onclick="cambiarQty(${prod.id}, -1)">-</button>
                    <span id="qty-val-${prod.id}" class="qty-display">1</span>
                    <button class="qty-btn" onclick="cambiarQty(${prod.id}, 1)">+</button>
                </div>

                <button class="btn-pedir-card" onclick="agregarAlCarrito(${prod.id})">🛒 Pedir</button>
                <button class="btn-reponer-card" onclick="abrirReponerStock(${prod.id})">⊕ Reponer Stock</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function cambiarQty(id, cambio) {
    const span = document.getElementById(`qty-val-${id}`);
    if (!span) return;
    let actual = parseInt(span.innerText) + cambio;
    if (actual < 1) actual = 1;
    span.innerText = actual;
}

function agregarAlCarrito(id) {
    const prod = productosBD.find(p => p.id === id);
    const span = document.getElementById(`qty-val-${id}`);
    const cantidad = span ? parseInt(span.innerText) : 1;

    for (let i = 0; i < cantidad; i++) {
        carrito.push(prod);
    }

    document.getElementById("cartCount").innerText = carrito.length;
    mostrarToast(`✓ Agregado: ${cantidad}x ${prod.nombre}`);
}

function mostrarToast(msg) {
    const toast = document.getElementById("toastNotification");
    toast.innerText = msg;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 2500);
}

function abrirReponerStock(id) {
    productoActualReponer = productosBD.find(p => p.id === id);
    if (!productoActualReponer) return;

    document.getElementById("reponerProductoTitulo").innerText = `${productoActualReponer.nombre} (Stock: ${productoActualReponer.stock})`;
    document.getElementById("modalReponerStock").classList.remove("hidden");
}

function cerrarModalReponer() {
    document.getElementById("modalReponerStock").classList.add("hidden");
}

function confirmarReponerStock(event) {
    event.preventDefault();
    const cant = parseInt(document.getElementById("txtCantidadReponer").value) || 0;
    if (productoActualReponer) {
        productoActualReponer.stock += cant;
        mostrarToast(`✓ Stock actualizado: +${cant} unidades`);
    }
    cerrarModalReponer();
    renderizarInventario();
}

function abrirModalClientes() { document.getElementById("modalClientes").classList.remove("hidden"); }
function cerrarModalClientes() { document.getElementById("modalClientes").classList.add("hidden"); }
function abrirModalComentarios() { document.getElementById("modalComentarios").classList.remove("hidden"); }
function cerrarModalComentarios() { document.getElementById("modalComentarios").classList.add("hidden"); }

function actualizarColonias() {
    const ciudad = document.getElementById("selectCiudadFiltro").value;
    const select = document.getElementById("ddlColonia");
    select.innerHTML = "";
    const lista = (ciudad === "San Pedro Sula") ? coloniasSPS : coloniasProgreso;
    lista.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.nombre;
        opt.innerText = `${c.nombre} (${c.tiempo})`;
        opt.setAttribute("data-tiempo", c.tiempo);
        select.appendChild(opt);
    });
    calcularTiempoEstimado();
}

function calcularTiempoEstimado() {
    const select = document.getElementById("ddlColonia");
    const opt = select.options[select.selectedIndex];
    if (opt) document.getElementById("lblTiempoEstimado").innerText = opt.getAttribute("data-tiempo");
}

function evaluarTipoEntrega() {
    const tipo = document.getElementById("ddlTipoEntrega").value;
    document.getElementById("grupoEnvio").classList.toggle("hidden", tipo === "Recoger en Local");
}

function abrirModalCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    const contenedor = document.getElementById("resumenCarritoLista");
    contenedor.innerHTML = "";
    let total = 0;
    const conteo = {};

    carrito.forEach(p => {
        conteo[p.nombre] = (conteo[p.nombre] || { cantidad: 0, precio: p.precio });
        conteo[p.nombre].cantidad++;
        total += p.precio;
    });

    for (const [nombre, datos] of Object.entries(conteo)) {
        const div = document.createElement("div");
        div.innerHTML = `<span>${datos.cantidad}x ${nombre}</span> <strong>L. ${(datos.cantidad * datos.precio).toFixed(2)}</strong>`;
        contenedor.appendChild(div);
    }

    document.getElementById("lblTotalCheckout").innerText = `L. ${total.toFixed(2)}`;
    document.getElementById("modalCheckout").classList.remove("hidden");
}

function cerrarModalCompra() { document.getElementById("modalCheckout").classList.add("hidden"); }

async function confirmarPedido(event) {
    event.preventDefault();
    const cliente = document.getElementById("txtNombre").value;
    const tipoEntrega = document.getElementById("ddlTipoEntrega").value;
    const ciudad = document.getElementById("selectCiudadFiltro").value;
    const colonia = tipoEntrega === "Envío a Domicilio" ? document.getElementById("ddlColonia").value : "Retiro en local";
    const pago = document.getElementById("ddlPago").value;

    let total = carrito.reduce((sum, p) => sum + p.precio, 0);
    const numPedidoStr = `#${String(contadorPedidos).padStart(3, '0')}`;

    try {
        await fetch('https://cafeteria-backend-2rjx.onrender.com/api/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: numPedidoStr, cliente, destino: `${ciudad} - ${colonia}`, pago, productos: `${carrito.length} artículos`, total })
        });
    } catch (e) { console.error(e); }

    contadorPedidos++;
    localStorage.setItem("contadorPedidos", contadorPedidos);
    document.getElementById("facturaId").innerText = numPedidoStr;
    document.getElementById("facturaFecha").innerText = new Date().toLocaleString();
    document.getElementById("facturaCliente").innerText = cliente;
    document.getElementById("facturaEntrega").innerText = `${ciudad} (${colonia})`;
    document.getElementById("facturaPago").innerText = pago;
    document.getElementById("facturaTotal").innerText = `L. ${total.toFixed(2)}`;

    carrito = [];
    document.getElementById("cartCount").innerText = "0";
    cerrarModalCompra();
    document.getElementById("modalFactura").classList.remove("hidden");
}

function cerrarFactura() { document.getElementById("modalFactura").classList.add("hidden"); }

function pedirAccesoHistorial() {
    const clave = prompt("Contraseña de administrador:");
    if (clave === "admin123" || clave === "Messi") {
        renderizarHistorial();
        document.getElementById("modalHistorial").classList.remove("hidden");
    } else if (clave !== null) alert("Contraseña incorrecta.");
}

function cerrarHistorial() { document.getElementById("modalHistorial").classList.add("hidden"); }

async function renderizarHistorial() {
    const tbody = document.getElementById("tablaPedidosBody");
    tbody.innerHTML = "";
    let ingresos = 0;
    try {
        const res = await fetch('https://cafeteria-backend-2rjx.onrender.com/api/pedidos');
        const data = await res.json();
        data.forEach((p, index) => {
            ingresos += Number(p.total);
            tbody.innerHTML += `<tr><td>${index+1}</td><td>${p.cliente}</td><td>${p.destino}</td><td>${p.pago}</td><td>${p.productos}</td><td>L. ${Number(p.total).toFixed(2)}</td><td><button class="btn-cancel" onclick="eliminarPedido('${p.id}')">X</button></td></tr>`;
        });
        document.getElementById("lblIngresosTotales").innerText = `L. ${ingresos.toFixed(2)}`;
    } catch (e) { console.error(e); }
}

async function eliminarPedido(id) {
    if (confirm("¿Eliminar pedido?")) {
        await fetch(`https://cafeteria-backend-2rjx.onrender.com/api/pedidos/${encodeURIComponent(id)}`, { method: 'DELETE' });
        renderizarHistorial();
    }
}

function abrirModalProveedores() { document.getElementById("modalProveedores").classList.remove("hidden"); }
function cerrarProveedores() { document.getElementById("modalProveedores").classList.add("hidden"); }

function abrirModalInventario() {
    renderizarInventario();
    document.getElementById("modalInventario").classList.remove("hidden");
}
function cerrarInventario() { document.getElementById("modalInventario").classList.add("hidden"); }

function renderizarInventario() {
    const tbody = document.getElementById("tablaInventarioBody");
    tbody.innerHTML = "";
    productosBD.forEach(p => {
        tbody.innerHTML += `<tr><td>${p.id}</td><td>${p.nombre}</td><td>${p.categoria}</td><td>L. ${p.precio.toFixed(2)}</td><td>${p.stock} u.</td><td><button class="btn-reponer-card" style="padding:4px 8px;" onclick="abrirReponerStock(${p.id})">Reponer</button></td></tr>`;
    });
}
