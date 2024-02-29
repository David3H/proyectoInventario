//Para el gráfico de Bodega
const nombreGraficoBodega = []
const totalGraficoBodega = []
const contadoGraficoBodega = []
const cuadraGraficoBodega = []
fetch("http://192.168.0.215:3000/ReporteBodega")
.then(response => response.json())
.then(datos => {
        //Almacenar datos del gráfico
        nombreGraficoBodega.push(datos.nombre_conteo)
        totalGraficoBodega.push(datos.total)
        contadoGraficoBodega.push(datos.contado)
        cuadraGraficoBodega.push(datos.cuadra)

  })
  let arrayComoString = nombreGraficoBodega.toString();
console.log(arrayComoString)
// Datos del gráfico
var data = {
    labels: arrayComoString,
    datasets: [{
        label: 'Datos',
        backgroundColor: 'rgba(195, 138, 241, 0.952)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: totalGraficoBodega,
    }],
};

// Configuración del gráfico
var options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

// Obtener el contexto del lienzo
var ctx = document.getElementById('graficoB').getContext('2d');

// Crear el gráfico de barras
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});