const express = require('express')
const cors = require('cors')
const sql = require('mssql')
const app = express()
const PORT = 3000
let conexionEstablecida = false

// Habilitar CORS
app.use(cors())

// Configuración de conexión a SQL Server
const config = {
    user: 'sa',
    password: 'Alvarado2018*',
    server: '192.168.0.214',
    database: 'WMStra',
    options: {
        encrypt: true,
        trustServerCertificate: true,
        requestTimeout: 120000,
    },
}

// Función para establecer la conexión a la base de datos
async function conectarBD() {
    try {
        // Verificar si ya se estableció la conexión
        if (!conexionEstablecida) {
            // Si no se ha establecido, conectar a la base de datos
            await sql.connect(config)
            conexionEstablecida = true
            console.log('Conexión a la base de datos establecida.')
        }
    } catch (error) {
        console.error('Error al establecer la conexión a la base de datos:', error.message)
        throw error
    }
}

// Ruta para obtener detalles del stock Tecpro
app.get('/DetalleStockTecpro', async (req, res) => {
    try {
       // Establecer la conexión a la base de datos si aún no se ha hecho
       await conectarBD()

        const result = await sql.query('EXEC jsp_Genera_reporte_conteo_soloconstockTEC')

        res.json(result.recordset)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Error al obtener los datos de la base de datos')
    }
})

// Ruta para obtener detalles del stock Bodega 2
app.get('/DetalleStockBodega', async (req, res) => {
    try {
       // Establecer la conexión a la base de datos si aún no se ha hecho
       await conectarBD()

        const result = await sql.query('EXEC jsp_Genera_reporte_conteo_soloconstockBod2')

        res.json(result.recordset)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Error al obtener los datos desde del detalle del stock')
    }
})

// Ruta para obtener detalles del stock Matriz
app.get('/DetalleStockMatriz', async (req, res) => {
    try {
       // Establecer la conexión a la base de datos si aún no se ha hecho
       await conectarBD()

        const result = await sql.query('EXEC jsp_Genera_reporte_conteo_soloconstockMat')

        res.json(result.recordset)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Error al obtener los datos desde del detalle del stock')
    }
})

// Ruta para obtener Reporte Matriz
app.get('/ReporteMatriz', async (req, res) => {
    try {
       // Establecer la conexión a la base de datos si aún no se ha hecho
       await conectarBD()

        const result = await sql.query('EXEC jsp_Genera_reporte_conteo_ResumenMat')

        res.json(result.recordset)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Error al obtener los datos desde del detalle del stock')
    }
})

// Ruta para obtener Reporte Tecpro
app.get('/ReporteTecpro', async (req, res) => {
    try {
       // Establecer la conexión a la base de datos si aún no se ha hecho
       await conectarBD()

        const result = await sql.query('EXEC jsp_Genera_reporte_conteo_ResumenTEC')

        res.json(result.recordset)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Error al obtener los datos desde la base de datos')
    }
})

// Ruta para obtener Reporte Bodega 2
app.get('/ReporteBodega', async (req, res) => {
    try {
       // Establecer la conexión a la base de datos si aún no se ha hecho
       await conectarBD()

        const result = await sql.query('EXEC jsp_Genera_reporte_conteo_ResumenBod2')

        res.json(result.recordset)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error al obtener los datos desde del detalle del stock')
    }
})

//Cierre de la aplicación
process.on('SIGINT', async () => {
    try {
        // Cerrar la conexión a la base de datos
        if (conexionEstablecida) {
            await sql.close()
            console.log('Conexión a la base de datos cerrada.')
        }
    } catch (error) {
        console.error('Error al cerrar la conexión a la base de datos:', error.message)
    } finally {
        // Finalizar la aplicación
        process.exit()
    }
})
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor activo puerto: ${PORT}`)
})
