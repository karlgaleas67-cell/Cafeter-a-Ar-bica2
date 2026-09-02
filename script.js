const productosBD = [
    { id: 1, nombre: "Desayuno Típico Hondureño", precio: 96.00, categoria: "desayunos", stock: 5, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" },
    { id: 2, nombre: "Baleada Especial Criolla", precio: 48.00, categoria: "desayunos", stock: 5, img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80" },
    { id: 3, nombre: "Pancakes con Miel & Frutas", precio: 76.00, categoria: "desayunos", stock: 5, img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80" },
    { id: 4, nombre: "Omelette de Jamón y Queso", precio: 85.00, categoria: "desayunos", stock: 5, img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=400&q=80" },
    { id: 5, nombre: "Tostadas Francesas Arábica", precio: 80.00, categoria: "desayunos", stock: 5, img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80" },

    { id: 6, nombre: "Café Cappuccino", precio: 55.00, categoria: "cafes", stock: 5, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" },
    { id: 7, nombre: "Espresso Doble", precio: 40.00, categoria: "cafes", stock: 5, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80" },
    { id: 8, nombre: "Latte Frío de Vainilla", precio: 65.00, categoria: "cafes", stock: 5, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 9, nombre: "Mocaccino Supremo", precio: 70.00, categoria: "cafes", stock: 5, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80" },
    { id: 10, nombre: "Café Americano Negro", precio: 35.00, categoria: "cafes", stock: 5, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" },

    { id: 11, nombre: "Jugo Natural de Naranja", precio: 45.00, categoria: "bebidas", stock: 5, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
    { id: 12, nombre: "Smoothie de Maracuyá", precio: 60.00, categoria: "bebidas", stock: 5, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80" },
    { id: 13, nombre: "Limonada con Menta", precio: 50.00, categoria: "bebidas", stock: 5, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
    { id: 14, nombre: "Té Frío de Durazno", precio: 45.00, categoria: "bebidas", stock: 5, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80" },
    { id: 15, nombre: "Frappé de Galleta Oreo", precio: 75.00, categoria: "bebidas", stock: 5, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80" },

    { id: 16, nombre: "Cheesecake de Frutilla", precio: 75.00, categoria: "postres", stock: 5, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
    { id: 17, nombre: "Pie de Limón Artesanal", precio: 65.00, categoria: "postres", stock: 5, img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80" },
    { id: 18, nombre: "Volcán de Chocolate", precio: 80.00, categoria: "postres", stock: 5, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" },
    { id: 19, nombre: "Torta de Tres Leches", precio: 70.00, categoria: "postres", stock: 5, img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" },
    { id: 20, nombre: "Brownie con Helado", precio: 68.00, categoria: "postres", stock: 5, img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=400&q=80" },

    { id: 101, nombre: "Combo Desayuno Típico + Cappuccino", precio: 120.00, categoria: "ofertas", stock: 5, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" },
    { id: 102, nombre: "Oferta 2x1 En Latte Frío de Vainilla", precio: 65.00, categoria: "ofertas", stock: 5, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 103, nombre: "Combo Pie de Limón + Mocaccino", precio: 110.00, categoria: "ofertas", stock: 5, img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80" },
    { id: 104, nombre: "Combo Pareja: 2 Pancakes + 2 Americanos", precio: 190.00, categoria: "ofertas", stock: 5, img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80" },
    { id: 105, nombre: "Combo Ejecutivo: Omelette + Jugo", precio: 115.00, categoria: "ofertas", stock: 5, img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=400&q=80" }
];

let clientesBD = [
    { id: 1, nombre: "Carlos Mendoza", telefono: "+504 9988-7766", ciudad: "El Progreso", pedidos: 5, correo: "carlos@ejemplo.com" },
    { id: 2, nombre: "Ana Sofía Pineda", telefono: "+504 3344-5566", ciudad: "San Pedro Sula", pedidos: 3, correo: "ana@ejemplo.com" },
    { id: 3, nombre: "Mario Roberto Paz", telefono: "+504 8877-6655", ciudad: "El Progreso", pedidos: 8, correo: "mario@ejemplo.com" }
];

let proveedoresBD = [
    { id: "01", nombre: "Café de Altura S.A.", insumo: "Granos de Café", pago: "Transferencia", contacto: "+504 2233-4455" },
    { id: "02", nombre: "Lácteos del Norte", insumo: "Queso y Crema", pago: "Efectivo", contacto: "+504 2665-7788" }
];

let carrito = [];
let contadorPedidos = parseInt(localStorage.getItem("contadorPedidos")) || 1;
let productoActualReponer = null;

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

document.addEventListener("DOMContentLoaded", () => {
    filtrarCategoria('todos');
    actualizarColonias();
    document.getElementById("totalProductosCount").innerText = productosBD.length;
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
        card.className = `product-card cat-card-${prod.categoria}`;
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <div class="card-body">
                <div class="card-title">${prod.nombre}</div>
                <div class="card-price">L. ${prod.precio.toFixed(2)}</div>
                <div style="font-size: 0.8rem; color: #666; margin-bottom: 6px;">Stock actual: <strong>${prod.stock}</strong></div>
                <div class="qty-control-box">
                    <button class="qty-btn" onclick="cambiarQty(${prod.id}, -1)">-</button>
                    <span id="qty-val-${prod.id}" class="qty-display">1</span>
                    <button class="qty-btn" onclick="cambiarQty(${prod.id}, 1)">+</button>
                </div>
                <button class="btn-pedir-card" onclick="agregarAlCarrito(${prod.id})" ${prod.stock <= 0 ? 'disabled style="background:#ccc"' : ''}>🛒 Pedir</button>
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

    if (prod.stock < cantidad) {
        alert("No hay suficiente stock disponible.");
        return;
    }

    prod.stock -= cantidad;
    for (let i = 0; i < cantidad; i++) { carrito.push(prod); }
    document.getElementById("cartCount").innerText = carrito.length;
    mostrarToast(`✓ Agregado: ${cantidad}x ${prod.nombre}`);
    
    const activoBtn = document.querySelector('.pill-btn.active');
    const catActual = activoBtn ? activoBtn.getAttribute('onclick').match(/'([^']+)'/)[1] : 'todos';
    filtrarCategoria(catActual);
}

function mostrarToast(msg) {
    const toast = document.getElementById("toastNotification");
    toast.innerText = msg;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 2500);
}

function abrirModalClientes() {
    renderizarClientes();
    document.getElementById("modalClientes").classList.remove("hidden");
}
function cerrarModalClientes() { document.getElementById("modalClientes").classList.add("hidden"); }

function renderizarClientes() {
    const tbody = document.getElementById("tablaClientesBody");
    tbody.innerHTML = "";
    clientesBD.forEach((cli, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${cli.id}</td>
                <td>${cli.nombre}</td>
                <td>${cli.telefono}</td>
                <td>${cli.ciudad}</td>
                <td>${cli.pedidos} pedidos</td>
                <td><button class="btn-cancel" style="padding:4px 8px;" onclick="eliminarCliente(${index})">Eliminar</button></td>
            </tr>`;
    });
    
    const selectCli = document.getElementById("selectClienteExistente");
    if(selectCli) {
        selectCli.innerHTML = `<option value="">-- Seleccione un cliente o escriba abajo --</option>`;
        clientesBD.forEach(c => {
            selectCli.innerHTML += `<option value="${c.nombre}">${c.nombre} (${c.telefono})</option>`;
        });
    }
}

function agregarCliente(event) {
    event.preventDefault();
    const nombre = document.getElementById("cliNombre").value.trim();
    const telefono = document.getElementById("cliTelefono").value.trim();
    const ciudad = document.getElementById("cliCiudad").value;
    const pedidos = parseInt(document.getElementById("cliPedidos").value) || 1;

    if(nombre && telefono) {
        clientesBD.push({
            id: clientesBD.length + 1,
            nombre, telefono, ciudad, pedidos, correo: `${nombre.toLowerCase().replace(/\s+/g,'')}@ejemplo.com`
        });
        document.getElementById("formAgregarCliente").reset();
        renderizarClientes();
        mostrarToast("✓ Cliente registrado correctamente");
    }
}

function eliminarCliente(index) {
    if(confirm("¿Desea eliminar este cliente de la base de datos?")) {
        clientesBD.splice(index, 1);
        renderizarClientes();
        mostrarToast("✓ Cliente eliminado");
    }
}

function seleccionarClienteExistente() {
    const select = document.getElementById("selectClienteExistente");
    const nombreSel = select.value;
    if(!nombreSel) return;
    const clienteEncontrado = clientesBD.find(c => c.nombre === nombreSel);
    if(clienteEncontrado) {
        document.getElementById("txtNombre").value = clienteEncontrado.nombre;
        document.getElementById("txtTelefono").value = clienteEncontrado.telefono;
        document.getElementById("txtCorreo").value = clienteEncontrado.correo || `${clienteEncontrado.nombre.toLowerCase().replace(/\s+/g,'')}@ejemplo.com`;
        document.getElementById("selectCiudadFiltro").value = clienteEncontrado.ciudad;
        actualizarColonias();
    }
}

function abrirReponerStock(id) {
    productoActualReponer = productosBD.find(p => p.id === id);
    if (!productoActualReponer) return;
    document.getElementById("reponerProductoTitulo").innerText = `${productoActualReponer.nombre} (Stock: ${productoActualReponer.stock})`;
    document.getElementById("modalReponerStock").classList.remove("hidden");
}

function cerrarModalReponer() { document.getElementById("modalReponerStock").classList.add("hidden"); }

function confirmarReponerStock(event) {
    event.preventDefault();
    const cant = parseInt(document.getElementById("txtCantidadReponer").value) || 0;
    if (productoActualReponer) {
        productoActualReponer.stock += cant;
        mostrarToast(`✓ Stock actualizado: +${cant}`);
    }
    cerrarModalReponer();
    const activoBtn = document.querySelector('.pill-btn.active');
    const catActual = activoBtn ? activoBtn.getAttribute('onclick').match(/'([^']+)'/)[1] : 'todos';
    filtrarCategoria(catActual);
    renderizarInventario();
}

function actualizarColonias() {
    const ciudad = document.getElementById("selectCiudadFiltro").value;
    const select = document.getElementById("ddlColonia");
    if (!select) return;
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
    if (!select) return;
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
    renderizarClientes();
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
        div.className = "receipt-item";
        div.innerHTML = `<span>${datos.cantidad}x ${nombre}</span> <strong>L. ${(datos.cantidad * datos.precio).toFixed(2)}</strong>`;
        contenedor.appendChild(div);
    }
    document.getElementById("lblTotalCheckout").innerText = `L. ${total.toFixed(2)}`;
    document.getElementById("modalCheckout").classList.remove("hidden");
}

function cerrarModalCompra() { document.getElementById("modalCheckout").classList.add("hidden"); }

function cancelarPedidoForm() {
    document.getElementById("checkoutForm").reset();
    cerrarModalCompra();
    alert("El pedido ha sido cancelado.");
}

async function confirmarPedido(event) {
    event.preventDefault();
    const cliente = document.getElementById("txtNombre").value.trim();
    const correo = document.getElementById("txtCorreo").value.trim();
    const telefono = document.getElementById("txtTelefono").value.trim();
    const tipoEntrega = document.getElementById("ddlTipoEntrega").value;
    const ciudad = document.getElementById("selectCiudadFiltro").value;
    const colonia = tipoEntrega === "Envío a Domicilio" ? document.getElementById("ddlColonia").value : "Retiro en local";
    const pago = document.getElementById("ddlPago").value;
    const sugerenciaManual = document.getElementById("txtSugerenciaCliente").value.trim();

    if (!correo.includes("@")) {
        alert("⚠️ El correo electrónico debe incluir obligatoriamente una arroba (@) para poder procesar el pago.");
        return;
    }

    let total = carrito.reduce((sum, p) => sum + p.precio, 0);
    const numPedidoStr = `#${String(contadorPedidos).padStart(3, '0')}`;

    const conteo = {};
    carrito.forEach(p => {
        conteo[p.nombre] = (conteo[p.nombre] || { cantidad: 0, precio: p.precio });
        conteo[p.nombre].cantidad++;
    });
    const listaProductosText = Object.entries(conteo).map(([nombre, d]) => `${d.cantidad}x ${nombre}`).join(", ");

    try {
        await fetch('https://cafeteria-backend-2rjx.onrender.com/api/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: numPedidoStr, cliente, destino: `${ciudad} - ${colonia}`, pago, productos: listaProductosText, total })
        });
    } catch (e) { console.error(e); }

    contadorPedidos++;
    localStorage.setItem("contadorPedidos", contadorPedidos);
    
    document.getElementById("facturaId").innerText = numPedidoStr;
    document.getElementById("facturaFecha").innerText = new Date().toLocaleString();
    document.getElementById("facturaCliente").innerText = cliente;
    document.getElementById("facturaCorreo").innerText = correo;
    document.getElementById("facturaTelefono").innerText = telefono;
    document.getElementById("facturaEntrega").innerText = `${ciudad} (${colonia})`;
    document.getElementById("facturaPago").innerText = pago;
    
    const sugBox = document.getElementById("facturaSugerenciaBox");
    if(sugerenciaManual) {
        sugBox.innerText = `Sugerencia / Comentario: "${sugerenciaManual}"`;
        sugBox.classList.remove("hidden");
    } else {
        sugBox.innerText = "";
        sugBox.classList.add("hidden");
    }

    const contenedorItems = document.getElementById("facturaItems");
    contenedorItems.innerHTML = "";
    for (const [nombre, datos] of Object.entries(conteo)) {
        const row = document.createElement("div");
        row.className = "receipt-item";
        row.innerHTML = `<span>${datos.cantidad}x ${nombre}</span> <span>L. ${(datos.cantidad * datos.precio).toFixed(2)}</span>`;
        contenedorItems.appendChild(row);
    }

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
            tbody.innerHTML += `<tr><td>${index+1}</td><td>${p.cliente}</td><td>${p.destino}</td><td>${p.pago}</td><td>${p.productos}</td><td>L. ${Number(p.total).toFixed(2)}</td><td><button class="btn-cancel" style="padding:4px 8px;" onclick="eliminarPedido('${p.id}')">X</button></td></tr>`;
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

function abrirModalProveedores() {
    renderizarProveedores();
    document.getElementById("modalProveedores").classList.remove("hidden");
}
function cerrarProveedores() { document.getElementById("modalProveedores").classList.add("hidden"); }

function renderizarProveedores() {
    const tbody = document.getElementById("tablaProveedoresBody");
    tbody.innerHTML = "";
    proveedoresBD.forEach((prov, index) => {
        tbody.innerHTML += `<tr><td>${prov.id}</td><td>${prov.nombre}</td><td>${prov.insumo}</td><td>${prov.pago}</td><td>${prov.contacto}</td><td><button class="btn-cancel" style="padding:4px 8px;" onclick="eliminarProveedor(${index})">Eliminar</button></td></tr>`;
    });
}

function agregarProveedor(event) {
    event.preventDefault();
    const nombre = document.getElementById("provNombre").value.trim();
    const insumo = document.getElementById("provInsumo").value.trim();
    const pago = document.getElementById("provPago").value;
    const contacto = document.getElementById("provContacto").value.trim();

    if (nombre && insumo) {
        proveedoresBD.push({
            id: String(proveedoresBD.length + 1).padStart(2, '0'),
            nombre, insumo, pago, contacto: contacto || "+504 0000-0000"
        });
        document.getElementById("formAgregarProveedor").reset();
        renderizarProveedores();
        mostrarToast("✓ Proveedor agregado");
    }
}

function eliminarProveedor(index) {
    if (confirm("¿Eliminar proveedor?")) {
        proveedoresBD.splice(index, 1);
        renderizarProveedores();
    }
}

function abrirModalInventario() {
    renderizarInventario();
    document.getElementById("modalInventario").classList.remove("hidden");
}
function cerrarInventario() { document.getElementById("modalInventario").classList.add("hidden"); }

function renderizarInventario() {
    const tbody = document.getElementById("tablaInventarioBody");
    tbody.innerHTML = "";
    productosBD.forEach(p => {
        tbody.innerHTML += `<tr><td>${p.id}</td><td>${p.nombre}</td><td>${p.categoria}</td><td>L. ${p.precio.toFixed(2)}</td><td><strong>${p.stock} u.</strong></td><td><button class="btn-reponer-card" style="padding:4px 8px;" onclick="abrirReponerStock(${p.id})">Reponer</button></td></tr>`;
    });
}
