function pedirTexto(mensaje) {
    const respuesta = prompt(mensaje);
    if (respuesta === null) return null;

    const texto = respuesta.trim();
    return texto === "" ? null : texto;
}

/** Muestra cada elemento de la lista como "Posición N: valor". */
function mostrarListaNumerada(elementos) {
    elementos.forEach((elemento, indice) => {
        console.log(`Posición ${indice + 1}: ${elemento}`);
    });
}

// =====================================================
// ARREGLOS
// =====================================================

function saludarAprendices() {
    const aprendices = [
        'Cedeño', 'Rojas', 'Tinoco', 'Juan Jose',
        'Julian', 'Andres', 'Juan Diego',
        'Yen Manuelis', 'Maria Paula', 'Montoya',
        'Triviño', 'Erick', 'Erika', 'Daniel',
        'Juanfer', 'Richard', 'Guillen',
        'Juan Hoyos', 'Leandro'
    ];

    console.log("Aprendiz en la posición 3:", aprendices[2]);
    console.log("Cantidad de aprendices:", aprendices.length);

    aprendices[3] = "Angely";
    console.log("Aprendiz modificado en la posición 4:", aprendices[3]);
    console.log("Cantidad después de modificar (no cambia):", aprendices.length);

    aprendices.push("Carlos");
    console.log("Lista actualizada de aprendices:", aprendices);
}

function mostrarListaEstudiantes() {
    const estudiantes = ['Julian', 'Evelyn', 'Mariana', 'Juan Jose', 'Andres'];

    console.log("Lista de estudiantes:", estudiantes);
    console.log("Primer estudiante:", estudiantes.at(0));
    console.log("Tercer estudiante:", estudiantes.at(2));
    console.log("Último estudiante:", estudiantes.at(-1));
    console.log("Cantidad de estudiantes:", estudiantes.length);

    console.log("Estudiantes y sus posiciones:");
    mostrarListaNumerada(estudiantes);

    const nuevoEstudiante = pedirTexto("Ingrese el nombre del nuevo estudiante:");
    if (nuevoEstudiante) {
        estudiantes.push(nuevoEstudiante);
    }
    console.log("Nueva cantidad de estudiantes:", estudiantes.length);

    const nombreBuscado = pedirTexto("Ingrese el nombre del estudiante que desea buscar:");
    if (!nombreBuscado) {
        console.log("No se ingresó un nombre válido.");
    } else if (estudiantes.includes(nombreBuscado)) {
        console.log(`${nombreBuscado} sí se encuentra registrado.`);
    } else {
        console.log(`${nombreBuscado} no se encuentra registrado.`);
    }

    console.log("Lista actualizada de estudiantes:", estudiantes);
}

function administrarProductos() {
    const productos = ['Arroz', 'Leche', 'Pan', 'Huevos', 'Azúcar'];
    console.log("Productos registrados:", productos);

    productos[1] = 'Queso';
    console.log("Segundo producto modificado:", productos);

    productos.push('Aceite');
    productos.unshift('Café');
    console.log("Arreglo actualizado:", productos);

    // Buscar producto
    const productoBuscado = pedirTexto("Ingrese el producto que desea buscar:");
    const indice = productos.indexOf(productoBuscado);

    if (indice !== -1) {
        console.log("El producto sí está registrado.");
        console.log(`Posición del producto: ${indice + 1}`);
    } else {
        console.log("El producto no está registrado.");
    }

    // Modificar producto por posición
    const posicion = Number(prompt("Ingrese la posición del producto que desea modificar:"));
    const posicionValida = Number.isInteger(posicion) && posicion >= 1 && posicion <= productos.length;

    if (!posicionValida) {
        console.log("Posición no válida.");
    } else {
        const nuevoNombre = pedirTexto("Ingrese el nuevo nombre del producto:");
        if (nuevoNombre) {
            productos[posicion - 1] = nuevoNombre;
            console.log("Producto modificado correctamente.");
        }
    }

    productos.pop(); // Elimina el último producto

    console.log("Cantidad de productos:", productos.length);
    console.log("Listado final:", productos);
}

function gestionarCiudades() {
    const ciudades = [
        'Bogotá', 'tunja', 'neiva',
        'manizales', 'soacha', 'pasto'
    ];

    ciudades.pop();
    console.log("Después de eliminar la última ciudad:", ciudades);

    ciudades.shift();
    console.log("Después de eliminar la primera ciudad:", ciudades);

    ciudades.splice(3, 1); // Elimina el cuarto elemento
    console.log("Resultado final:", ciudades);

    ciudades.push('cali', 'medellin');
    console.log("Cantidad de ciudades:", ciudades.length);

    console.log("Listado de ciudades:");
    mostrarListaNumerada(ciudades);

    const ciudadBuscada = pedirTexto("Ingrese el nombre de una ciudad:");
    if (!ciudadBuscada) {
        console.log("No se ingresó un nombre válido.");
    } else if (ciudades.includes(ciudadBuscada)) {
        console.log(`La ciudad ${ciudadBuscada} sí se encuentra registrada.`);
    } else {
        console.log(`La ciudad ${ciudadBuscada} no se encuentra registrada.`);
    }
}

function gestionarEspecialidades() {
    let especialidades = [
        "Pediatría", "Cardiología", "Dermatología", "Neurología",
        "Oftalmología", "Traumatología", "Ginecología", "Medicina general"
    ];

    console.log("Especialidades registradas:", especialidades);
    console.log("Primera especialidad:", especialidades[0]);
    console.log("Cuarta especialidad:", especialidades[3]);
    console.log("Cantidad:", especialidades.length);

    console.log("Listado:");
    mostrarListaNumerada(especialidades);

    // Agregar
    especialidades.unshift("Endocrinología");
    especialidades.push("Psiquiatría");
    console.log("Después de agregar:", especialidades);

    // Modificar
    especialidades[2] = "Alergología";
    console.log("Después de modificar:", especialidades);

    // Eliminar
    especialidades.pop();
    especialidades.shift();
    especialidades.splice(1, 1);
    console.log("Después de eliminar:", especialidades);

    // Buscar
    const buscada = "Neurología";
    const posicion = especialidades.indexOf(buscada);

    if (posicion !== -1) {
        console.log(`${buscada} está registrada en la posición ${posicion + 1}.`);
    } else {
        console.log(`${buscada} no está registrada.`);
    }

    // Orden alfabético en español, sin modificar el original
    const ordenadas = [...especialidades].sort((a, b) => a.localeCompare(b, "es"));
    console.log("Especialidades ordenadas:", ordenadas);

    // Contar las que contienen una letra
    const letra = "o";
    const cantidadConLetra = especialidades.filter(e => e.toLowerCase().includes(letra)).length;

    console.log(`Especialidades que contienen la letra '${letra}':`, cantidadConLetra);
    console.log("Cantidad final:", especialidades.length);
}

function gestionarBusquedaEstudiantes() {
    const estudiantes = [
        'Julian', 'Evelyn', 'Mariana', 'Juan Jose',
        'Andres', 'Maria Paula', 'Daniel', 'Erika','YenManuelis', 'Maria Paula', 'Montoya',
        'Triviño', 'Erick', 'Erika', 'Daniel',
        'Juanfer', 'Richard', 'Guillen',
        'Juan Hoyos', 
    ];

    console.log("Estudiantes iniciales:", estudiantes);

    buscarEstudiante(estudiantes);
    buscarEstudiante(estudiantes);

    // Contar estudiantes cuyo nombre empieza por una letra
    const entrada = pedirTexto("Ingrese una letra para contar los estudiantes que empiezan por ella:");
    if (entrada) {
        const letra = entrada.toLowerCase().charAt(0);
        const contador = estudiantes.filter(e => e.toLowerCase().startsWith(letra)).length;
        console.log(`Estudiantes cuyo nombre empieza por '${letra}': ${contador}`);
    }

    console.log("Listado de estudiantes:");
    mostrarListaNumerada(estudiantes);

    console.log("Listado actualizado:", estudiantes);
    console.log("Cantidad total de estudiantes:", estudiantes.length);
}

function buscarEstudiante(estudiantes) {
    const nombre = pedirTexto("Ingrese el nombre del estudiante:");

    if (!nombre) {
        console.log("No se ingresó un nombre válido.");
        return;
    }

    // Comparación sin distinguir mayúsculas
    const posicion = estudiantes.findIndex(e => e.toLowerCase() === nombre.toLowerCase());

    if (posicion !== -1) {
        console.log(`${nombre} sí fue encontrado.`);
        console.log(`Se encuentra en la posición ${posicion + 1}.`);
    } else {
        console.log(`${nombre} no se encuentra registrado.`);

        if (confirm(`¿Desea agregar a ${nombre} a la lista?`)) {
            estudiantes.push(nombre);
            console.log(`${nombre} fue agregado.`);
        }
    }
}

function analizarNumeros() {
    const numeros = [2, -5, 10, 0, 15, -3, 8, 0, -20, 9];

    console.log("Números del arreglo:");
    mostrarListaNumerada(numeros);

    // Estadísticas básicas
    const suma = numeros.reduce((acumulado, n) => acumulado + n, 0);
    const promedio = suma / numeros.length;
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    // Clasificación
    const pares = numeros.filter(n => n % 2 === 0).length;
    const impares = numeros.length - pares;
    const positivos = numeros.filter(n => n > 0).length;
    const negativos = numeros.filter(n => n < 0).length;
    const ceros = numeros.filter(n => n === 0).length;
    const mayoresQuePromedio = numeros.filter(n => n > promedio);

    console.log("Suma:", suma);
    console.log("Promedio:", promedio);
    console.log("Pares:", pares, "| Impares:", impares);
    console.log("Mayor:", mayor, "| Menor:", menor);
    console.log("Positivos:", positivos, "| Negativos:", negativos, "| Ceros:", ceros);
    console.log("Números mayores que el promedio:", mayoresQuePromedio);

    // Buscar un número ingresado por el usuario
    const entrada = pedirTexto("Ingrese un número entero para buscarlo en el arreglo:");

    if (entrada === null || !Number.isInteger(Number(entrada))) {
        console.log("Entrada no válida.");
    } else {
        const buscado = Number(entrada);
        const posicion = numeros.indexOf(buscado);

        if (posicion !== -1) {
            console.log(`${buscado} sí se encuentra en la posición ${posicion + 1}.`);
        } else {
            console.log(`${buscado} no se encuentra en el arreglo.`);
        }
    }

    // Copias ordenadas (no modifican el original)
    const inverso = [...numeros].reverse();
    const ascendente = [...numeros].sort((a, b) => a - b);

    console.log("Orden inverso:", inverso);
    console.log("Orden de menor a mayor:", ascendente);
    console.log("Arreglo original:", numeros);
}


// OBJETOS


function mostrarEstudiante() {
    const estudiante = {
        nombre: "jairo",
        apellido: "david",
        edad: 18,
        programa: "ADSO",
        numero: 123456,
        correo: "jairoDavid123@gmail.com"
    };

    console.log("Datos registrados:", estudiante);
    console.log("Nombre:", estudiante.nombre);
    console.log("Apellido:", estudiante.apellido);
    console.log("Programa estudiado:", estudiante.programa);

    // Modificaciones
    estudiante.edad = 15;
    estudiante.ciudad = "soacha";
    delete estudiante.correo;

    for (const [propiedad, valor] of Object.entries(estudiante)) {
        console.log(`${propiedad}: ${valor}`);
    }

    console.log("Objeto actualizado:", estudiante);
}

function gestionarProducto() {
    const producto = {
        codigo: "a1",
        nombre: "papaya",
        categoria: "comida",
        precio: 200,
        cantidad: 1000,

        valorInventario() {
            return this.precio * this.cantidad;
        },

        mostrarInfo() {
            console.log("Código:", this.codigo);
            console.log("Nombre:", this.nombre);
            console.log("Categoría:", this.categoria);
            console.log("Precio:", this.precio);
            console.log("Cantidad:", this.cantidad);
            console.log("Marca:", this.marca);
            console.log("El valor total del inventario es de:", this.valorInventario());
        }
    };

    console.log("Información completa:", producto);
    console.log("El valor total del inventario es de:", producto.valorInventario());

    producto.precio = 500;
    console.log("Cantidad disponible:", producto.cantidad);

    producto.marca = "Bimbo";

    producto.mostrarInfo();
    console.log("Objeto actualizado:", producto);
}

function saludarPersona() {
    const persona = {
        nombre: "amarillo",
        edad: 18,
        genero: "Masculino",

        saludar() {
            console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
        }
    };

    persona.saludar();
}

function calcularPagoEmpleado() {
    const nombre = prompt("Ingrese nombre del trabajador");
    const cargo = prompt("Ingrese cargo del empleado");
    const salarioMensual = parseInt(prompt("Ingrese salario mensual"), 10);
    const diasTrabajados = parseInt(prompt("Ingrese días trabajados"), 10);
    const porcentajeDescuento = parseInt(prompt("Ingrese porcentaje de descuento"), 10);

    // Salario = (salario mensual / 30) × días trabajados
    const salario = Math.round((salarioMensual / 30) * diasTrabajados);

    // Descuento = porcentaje del salario ganado
    const descuento = Math.round(salario * porcentajeDescuento / 100);

    const total = salario - descuento;

    alert(
        `Empleado: ${nombre} (${cargo})\n` +
        `Salario por días trabajados: ${salario}\n` +
        `Descuento: ${descuento}\n` +
        `Total a pagar: ${total}`
    );
}