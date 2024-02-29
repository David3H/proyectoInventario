document.addEventListener("DOMContentLoaded", function () {
    if(document.getElementById('btnDatosBodega')){
    //Para Bodega
    const btnDatosBodega = document.getElementById('btnDatosBodega')
    const btnExportarExcelBodega = document.getElementById('btnExportarExcelBodega')

    // Agregar un listener al botón para cargar la tabla Bodega
    btnDatosBodega.addEventListener('click', function () {
        obtenerDatosBodega()
    })

    // Agregar un listener al botón para generar el archivo excel Bodega
    btnExportarExcelBodega.addEventListener('click', function () {
        exportarExcelBodega()
    })
    }else if(document.getElementById('btnDatosMatriz')){

    //Para Matriz
    const btnDatosMatriz = document.getElementById('btnDatosMatriz')
    const btnExportarExcelMatriz = document.getElementById('btnExportarExcelMatriz')

    // Agregar un listener al botón para cargar la tabla Matriz
    btnDatosMatriz.addEventListener('click', function () {
        obtenerDatosMatriz()
    })
    
    // Agregar un listener al botón para generar el archivo excel Matriz
    btnExportarExcelMatriz.addEventListener('click', function () {
        exportarExcelMatriz()
    })
    }else{
    //Para Tecpro
    const btnDatosTecpro = document.getElementById('btnDatosTecpro')
    const btnExportarExcelTecpro = document.getElementById('btnExportarExcelTecpro')
    
    // Agregar un listener al botón para cargar la tabla Matriz
    btnDatosTecpro.addEventListener('click', function () {
        obtenerDatosTecpro()
    })

    // Agregar un listener al botón para generar el archivo excel Matriz
    btnExportarExcelTecpro.addEventListener('click', function () {
        exportarExcelTecpro()
    })
    }
})
//Funcion obtener datos de Tecpro
async function obtenerDatosTecpro() {
    try {
        const loadingMessage = document.getElementById('loading-message')
         // Mostrar el mensaje de carga
         loadingMessage.style.display = 'block'
        
        const respuesta = await fetch('http://192.168.0.215:3000/DetalleStockTecpro')
        const datos = await respuesta.json()
        const filtroCuadra = document.getElementById('filtroCuadra').value
        // Llenar la tabla con los datos
        const tabla = document.getElementById('tablaDatosTecpro')
        // Ocultar el mensaje de carga
        loadingMessage.style.display = 'none'
        // Limpiar la tabla antes de llenarla con nuevos datos
        tabla.innerHTML = ""
        datos.forEach(dato => {
            if(filtroCuadra == 2){
                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td>${dato.idConteo}</td>
                    <td>${dato.articulo}</td>
                    <td>${dato.original}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.cant_contada}</td>
                    <td>${dato.cant_gp}</td>
                    <td>${dato.cant_wms}</td>
                    <td>${dato.diferencia}</td>
                    <td class="ocultar">${dato.cant_reclamo}</td>
                    <td>${dato.observacion1}</td>
                    <td class="ocultar">${dato.observacion2}</td>
                    <td class="ocultar">${dato.costo_prom}</td>
                    <td class="ocultar">${dato.total_error}</td>
                    <td class="ocultar">${dato.nota}</td>
                `
                tabla.appendChild(fila)
            }
            if (dato.cuadra == filtroCuadra) {
                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td>${dato.idConteo}</td>
                    <td>${dato.articulo}</td>
                    <td>${dato.original}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.cant_contada}</td>
                    <td>${dato.cant_gp}</td>
                    <td>${dato.cant_wms}</td>
                    <td>${dato.diferencia}</td>
                    <td class="ocultar">${dato.cant_reclamo}</td>
                    <td>${dato.observacion1}</td>
                    <td class="ocultar">${dato.observacion2}</td>
                    <td class="ocultar">${dato.costo_prom}</td>
                    <td class="ocultar">${dato.total_error}</td>
                    <td class="ocultar">${dato.nota}</td>
                `
                tabla.appendChild(fila)
            }
        })
    } catch (error) {
        console.error('Error al obtener datos del Web Service:', error)
    }
}
// Funcion obtener datos de Bodega 2
async function obtenerDatosBodega() {
    try {
        const loadingMessage = document.getElementById('loading-message')
         // Mostrar el mensaje de carga
         loadingMessage.style.display = 'block'
        
        const respuesta = await fetch('http://192.168.0.215:3000/DetalleStockBodega')
        const datos = await respuesta.json()
        const filtroCuadra = document.getElementById('filtroCuadra').value
        // Llenar la tabla con los datos
        const tabla = document.getElementById('tablaDatosBodega')
        // Ocultar el mensaje de carga
        loadingMessage.style.display = 'none'
        // Limpiar la tabla antes de llenarla con nuevos datos
        tabla.innerHTML = ""
        datos.forEach(dato => {
            if(filtroCuadra == 2){
                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td>${dato.idConteo}</td>
                    <td>${dato.articulo}</td>
                    <td>${dato.original}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.cant_contada}</td>
                    <td>${dato.cant_gp}</td>
                    <td>${dato.cant_wms}</td>
                    <td>${dato.diferencia}</td>
                    <td class="ocultar">${dato.cant_reclamo}</td>
                    <td>${dato.observacion1}</td>
                    <td class="ocultar">${dato.observacion2}</td>
                    <td class="ocultar">${dato.costo_prom}</td>
                    <td class="ocultar">${dato.total_error}</td>
                    <td class="ocultar">${dato.nota}</td>
                `
                tabla.appendChild(fila)
            }
            if (dato.cuadra == filtroCuadra) {
                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td>${dato.idConteo}</td>
                    <td>${dato.articulo}</td>
                    <td>${dato.original}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.cant_contada}</td>
                    <td>${dato.cant_gp}</td>
                    <td>${dato.cant_wms}</td>
                    <td>${dato.diferencia}</td>
                    <td class="ocultar">${dato.cant_reclamo}</td>
                    <td>${dato.observacion1}</td>
                    <td class="ocultar">${dato.observacion2}</td>
                    <td class="ocultar">${dato.costo_prom}</td>
                    <td class="ocultar">${dato.total_error}</td>
                    <td class="ocultar">${dato.nota}</td>
                `
                tabla.appendChild(fila)
            } 
        })
    } catch (error) {
        console.error('Error al obtener datos del Web Service:', error)
    }
}
//Funcion obtener datos de Matriz
async function obtenerDatosMatriz() {
    try {
        const loadingMessage = document.getElementById('loading-message')
        // Mostrar el mensaje de carga
        loadingMessage.style.display = 'block'
        
        const respuesta = await fetch('http://192.168.0.215:3000/DetalleStockMatriz')
        const datos = await respuesta.json()
        const filtroCuadra = document.getElementById('filtroCuadra').value
        // Llenar la tabla con los datos
        const tabla = document.getElementById('tablaDatosMatriz')
        // Ocultar el mensaje de carga
        loadingMessage.style.display = 'none'
        // Limpiar la tabla antes de llenarla con nuevos datos
        tabla.innerHTML = ""
        datos.forEach(dato => {
            if(filtroCuadra == 2){
                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td>${dato.idConteo}</td>
                    <td>${dato.articulo}</td>
                    <td>${dato.original}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.cant_contada}</td>
                    <td>${dato.cant_gp}</td>
                    <td>${dato.cant_wms}</td>
                    <td>${dato.diferencia}</td>
                    <td class="ocultar">${dato.cant_reclamada}</td>
                    <td>${dato.observacion1}</td>
                    <td class="ocultar">${dato.observacion2}</td>
                    <td class="ocultar">${dato.costo_prom}</td>
                    <td class="ocultar">${dato.total_error}</td>
                    <td class="ocultar">${dato.nota}</td>
                `
                tabla.appendChild(fila)
            }
            if (dato.cuadra == filtroCuadra) {
                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td>${dato.idConteo}</td>
                    <td>${dato.articulo}</td>
                    <td>${dato.original}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.cant_contada}</td>
                    <td>${dato.cant_gp}</td>
                    <td>${dato.cant_wms}</td>
                    <td>${dato.diferencia}</td>
                    <td class="ocultar">${dato.cant_reclamada}</td>
                    <td>${dato.observacion1}</td>
                    <td class="ocultar">${dato.observacion2}</td>
                    <td class="ocultar">${dato.costo_prom}</td>
                    <td class="ocultar">${dato.total_error}</td>
                    <td class="ocultar">${dato.nota}</td>
                `
                tabla.appendChild(fila)
            }
        })

    } catch (error) {
        console.error('Error al obtener datos del Web Service:', error)
    }
}
//Funcion para exportar datos Tecpro a excel
function exportarExcelTecpro() {
    const tabla = document.getElementById('tablaTecpro')
    const wb = XLSX.utils.table_to_book(tabla, { sheet: "Sheet 1" })
    
    // Convertir el libro de Excel a un archivo tipo ArrayBuffer
    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'array', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

    // Crear un blob a partir del ArrayBuffer
    const blobData = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    
    // Obtener la fecha y hora actual con Luxon
    const fechaHora = luxon.DateTime.local().setZone('America/Guayaquil')

    // Formatear la fecha y hora directamente
    const fechaFormateada = fechaHora.toFormat('dd-MM-yyyy HH:mm:ss')

    // Crear un enlace de descarga
    const a = document.createElement('a')
    const url = window.URL.createObjectURL(blobData)
    a.href = url
    a.download = `ReporteStockTecpro_${fechaFormateada}.xlsx`
    document.body.appendChild(a)
    a.click()

    // Liberar el recurso del blob
    window.URL.revokeObjectURL(url)
}
//Funcion para exportar datos Bodega 2 a excel
function exportarExcelBodega() {
    const tabla = document.getElementById('tablaBodega')
    const wb = XLSX.utils.table_to_book(tabla, { sheet: "Sheet 1" })
    
    // Convertir el libro de Excel a un archivo tipo ArrayBuffer
    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'array', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

    // Crear un blob a partir del ArrayBuffer
    const blobData = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    
    // Obtener la fecha y hora actual con Luxon
    const fechaHora = luxon.DateTime.local().setZone('America/Guayaquil')

    // Formatear la fecha y hora directamente
    const fechaFormateada = fechaHora.toFormat('dd-MM-yyyy HH:mm:ss')

    // Crear un enlace de descarga
    const a = document.createElement('a')
    const url = window.URL.createObjectURL(blobData)
    a.href = url
    a.download = `ReporteStockBodega2_${fechaFormateada}.xlsx`
    document.body.appendChild(a)
    a.click()

    // Liberar el recurso del blob
    window.URL.revokeObjectURL(url)
}

//Funcion para exportar datos Matriz a excel
function exportarExcelMatriz() {
    const tabla = document.getElementById('tablaMatriz')
    const wb = XLSX.utils.table_to_book(tabla, { sheet: "Sheet 1" })
    
    // Convertir el libro de Excel a un archivo tipo ArrayBuffer
    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'array', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

    // Crear un blob a partir del ArrayBuffer
    const blobData = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    
    // Obtener la fecha y hora actual con Luxon
    const fechaHora = luxon.DateTime.local().setZone('America/Guayaquil')

    // Formatear la fecha y hora directamente
    const fechaFormateada = fechaHora.toFormat('dd-MM-yyyy HH:mm:ss')

    // Crear un enlace de descarga
    const a = document.createElement('a')
    const url = window.URL.createObjectURL(blobData)
    a.href = url
    a.download = `ReporteStockMatriz_${fechaFormateada}.xlsx`
    document.body.appendChild(a)
    a.click()

    // Liberar el recurso del blob
    window.URL.revokeObjectURL(url)
}
