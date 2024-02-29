document.addEventListener("DOMContentLoaded", function () {
    if(document.getElementById('btnResumenBodega')){
    //Para Bodega
    const btnResumenBodega = document.getElementById('btnResumenBodega')
    //const btnExportarExcelBodega = document.getElementById('btnExportarExcelBodega')

    // Agregar un listener al botón para cargar la tabla Bodega
    btnResumenBodega.addEventListener('click', function () {
        obtenerReporteBodega()
        crearGraficoBodega()
    })

    /* Agregar un listener al botón para generar el archivo excel Bodega
    btnExportarExcelBodega.addEventListener('click', function () {
        exportarExcelBodega()
    })*/
    }else if(document.getElementById('btnResumenMatriz')){

    //Para Matriz
    const btnResumenMatriz = document.getElementById('btnResumenMatriz')
    //const btnExportarExcelMatriz = document.getElementById('btnExportarExcelMatriz')

    // Agregar un listener al botón para cargar la tabla Matriz
    btnResumenMatriz.addEventListener('click', function () {
        obtenerReporteMatriz()
        crearGraficoMatriz()
    })
    
    /* Agregar un listener al botón para generar el archivo excel Matriz
    btnExportarExcelMatriz.addEventListener('click', function () {
        exportarExcelMatriz()
    })*/
    }else{
    //Para Tecpro
    const btnResumenTecpro = document.getElementById('btnResumenTecpro')

    // Agregar un listener al botón para cargar la tabla Tecpro
    btnResumenTecpro.addEventListener('click', function () {
        obtenerReporteTecpro()
        crearGraficoTecpro()
    })
    }
})
//Para el gráfico de Matriz
const nombreGraficoMatriz = []
const totalGraficoMatriz = []
const contadoGraficoMatriz = []
const cuadraGraficoMatriz = []

//Para Matriz
async function obtenerReporteMatriz() {
    try {
        const loadingMessage = document.getElementById('loading-message')
        // Mostrar el mensaje de carga
        loadingMessage.style.display = 'block'
        
        const respuesta = await fetch('http://192.168.0.215:3000/ReporteMatriz')
        const datos = await respuesta.json()
       
        // Llenar la tabla con los datos
        const tabla = document.getElementById('reporteMatriz')
        // Ocultar el mensaje de carga
        loadingMessage.style.display = 'none'
        // Limpiar la tabla antes de llenarla con nuevos datos
        tabla.innerHTML = ""
        datos.forEach((dato, index) => {
                if (index === datos.length - 1) {
                   
                }else{
                //Almacenar datos del gráfico
                totalGraficoMatriz.push(dato.total)
                contadoGraficoMatriz.push(dato.contado)
                cuadraGraficoMatriz.push(dato.cuadra)
                nombreGraficoMatriz.push(dato.nombre_conteo)
                }

                const fila = document.createElement('tr')
                
                // Verifica si es la última fila y agrega la clase
                if (index === datos.length - 1) {
                    fila.classList.add('resaltado');
                }
                fila.innerHTML = `
                    <td>${dato.nombre_conteo}</td>
                    <td>${dato.total}</td>
                    <td>${dato.contado}</td>
                    <td>${dato.cuadra}</td>
                    <td>${dato.porce_contado}%</td>
                    <td>${dato.porce_cuadra}%</td>
                `
                tabla.appendChild(fila)
            
        })

    } catch (error) {
        console.error('Error al obtener datos del Web Service:', error)
    }
}
//Para el gráfico de Bodega
const totalGBodega = []
const contadoGBodega = []
const cuadraGBodega = []
const nombreGBodega = []
//Para Bodega 2
async function obtenerReporteBodega() {
    try {
        const loadingMessage = document.getElementById('loading-message')
        // Mostrar el mensaje de carga
        loadingMessage.style.display = 'block'
        
        const respuesta = await fetch('http://192.168.0.215:3000/ReporteBodega')
        const datosB = await respuesta.json()
       
        // Llenar la tabla con los datos
        const tabla = document.getElementById('reporteBodega')
        // Ocultar el mensaje de carga
        loadingMessage.style.display = 'none'
        // Limpiar la tabla antes de llenarla con nuevos datos
        tabla.innerHTML = ""
        datosB.forEach((datos, index) => {
                if (index === datosB.length - 1) {
                   
                }else{
                //Almacenar datos del gráfico
                nombreGBodega.push(datos.nombre_conteo)
                totalGBodega.push(datos.total)
                contadoGBodega.push(datos.contado)
                cuadraGBodega.push(datos.cuadra)
                }

                const fila = document.createElement('tr')
                
                // Verifica si es la última fila y agrega la clase
                if (index === datosB.length - 1) {
                    fila.classList.add('resaltado');
                }
                fila.innerHTML = `
                    <td>${datos.nombre_conteo}</td>
                    <td>${datos.total}</td>
                    <td>${datos.contado}</td>
                    <td>${datos.cuadra}</td>
                    <td>${datos.porce_contado}%</td>
                    <td>${datos.porce_cuadra}%</td>
                `
                tabla.appendChild(fila) 
            
        })

    } catch (error) {
        console.error('Error al obtener datos del Web Service:', error)
    }
}

//Para el gráfico de Matriz
const nombreGraficoTecpro = []
const totalGraficoTecpro = []
const contadoGraficoTecpro = []
const cuadraGraficoTecpro = []

//Para Matriz
async function obtenerReporteTecpro() {
    try {
        const loadingMessage = document.getElementById('loading-message')
        // Mostrar el mensaje de carga
        loadingMessage.style.display = 'block'
        
        const respuesta = await fetch('http://192.168.0.215:3000/ReporteTecpro')
        const datos = await respuesta.json()
       
        // Llenar la tabla con los datos
        const tabla = document.getElementById('reporteTecpro')
        // Ocultar el mensaje de carga
        loadingMessage.style.display = 'none'
        // Limpiar la tabla antes de llenarla con nuevos datos
        tabla.innerHTML = ""
        datos.forEach((dato, index) => {
                if (index === datos.length - 1) {
                   
                }else{
                //Almacenar datos del gráfico
                totalGraficoTecpro.push(dato.total)
                contadoGraficoTecpro.push(dato.contado)
                cuadraGraficoTecpro.push(dato.cuadra)
                nombreGraficoTecpro.push(dato.nombre_conteo)
                }

                const fila = document.createElement('tr')
                
                // Verifica si es la última fila y agrega la clase
                if (index === datos.length - 1) {
                    fila.classList.add('resaltado');
                }
                fila.innerHTML = `
                    <td>${dato.nombre_conteo}</td>
                    <td>${dato.total}</td>
                    <td>${dato.contado}</td>
                    <td>${dato.cuadra}</td>
                    <td>${dato.porce_contado}%</td>
                    <td>${dato.porce_cuadra}%</td>
                `
                tabla.appendChild(fila)
            
        })

    } catch (error) {
        console.error('Error al obtener datos del Web Service:', error)
    }
}

//Grafico Bodega
async function crearGraficoBodega(){
    // Datos del gráfico Bodega
    const dataBodega = {
        labels: nombreGBodega,
        datasets: [{
            label: 'Total Familia',
            backgroundColor: 'rgba(103, 93, 247, 0.952)',
            borderColor: 'rgb(207, 216, 216)',
            borderWidth: 1,
            data: totalGBodega,
        },
        {
            label: 'Contado',
            backgroundColor: 'rgba(245, 176, 47, 0.952)',
            borderColor: 'rgb(207, 216, 216)',
            borderWidth: 1,
            data: contadoGBodega,
        },
        {
            label: 'Cuadra',
            backgroundColor: 'rgb(207, 216, 216)',
            borderColor: 'rgba(103, 93, 247, 0.952)',
            borderWidth: 1,
            data: cuadraGBodega,
        },
    ],
    }
    // Configuración del gráfico
    let options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }

    // Obtener el contexto del lienzo
    let ctxB = document.getElementById('graficoB').getContext('2d')
    
    // Crear el gráfico de barras
    let myChart2 = new Chart(ctxB, {
        type: 'bar',
        data: dataBodega,
        options: options,
    })
    }
//Grafico Matriz
async function crearGraficoMatriz(){
// Datos del gráfico Matriz
const dataMatriz = {
    labels: nombreGraficoMatriz,
    datasets: [{
        label: 'Total Familia',
        backgroundColor: 'rgba(195, 138, 241, 0.952)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: totalGraficoMatriz,
    },
    {
        label: 'Contado',
        backgroundColor: 'rgba(103, 93, 247, 0.952)',
        borderColor: 'rgb(207, 216, 216)',
        borderWidth: 1,
        data: contadoGraficoMatriz,
    },
    {
        label: 'Cuadra',
        backgroundColor: 'rgb(207, 216, 216)',
        borderColor: 'rgba(103, 93, 247, 0.952)',
        borderWidth: 1,
        data: cuadraGraficoMatriz,
    },
],
}

// Configuración del gráfico
let options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
}

// Obtener el contexto del lienzo
let ctx = document.getElementById('graficoM').getContext('2d')

    // Crear el gráfico de barras
    let myChart1 = new Chart(ctx, {
        type: 'bar',
        data: dataMatriz,
        options: options,
    })
}

//Grafico Tecpro
async function crearGraficoTecpro(){
    // Datos del gráfico Tecpro
    const dataTecpro = {
        labels: nombreGraficoTecpro,
        datasets: [{
            label: 'Total Familia',
            backgroundColor: 'rgba(112, 240, 161, 0.952)',
            borderColor: 'rgb(186, 192, 192)',
            borderWidth: 1,
            data: totalGraficoTecpro,
        },
        {
            label: 'Contado',
            backgroundColor: 'rgba(112, 252, 233, 0.952)',
            borderColor: 'rgb(207, 216, 216)',    
            borderWidth: 1,
            data: contadoGraficoTecpro,
        },
        {
            label: 'Cuadra',
            backgroundColor: 'rgb(74, 104, 238)',
            borderColor: 'rgba(103, 93, 247, 0.952)',
            borderWidth: 1,
            data: cuadraGraficoTecpro,
        },
    ],
    }
    
    // Configuración del gráfico
    let options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }
    
    // Obtener el contexto del lienzo
    let ctx = document.getElementById('graficoT').getContext('2d')
    
        // Crear el gráfico de barras
        let myChart1 = new Chart(ctx, {
            type: 'bar',
            data: dataTecpro,
            options: options,
        })
    }



