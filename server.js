// server.js
const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'topologiasclaro' // Nombre de tu base de datos
});

// Conectar a MySQL
conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar a MySQL:', error);
        return;
    }
    console.log('Conexión exitosa a MySQL');
});

// Ruta raíz, sirve el archivo HTML
app.get('/', (req, res) => {
    // Envía el archivo HTML como respuesta
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para buscar en la base de datos
app.get('/buscar', (req, res) => {
    const searchValue = req.query.q; // Recibe el valor de búsqueda desde el frontend
    const consulta = `SELECT * FROM csv_inf_topologias WHERE EquipoDestino LIKE '%${searchValue}%'`;

    conexion.query(consulta, (error, resultados) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.json(resultados); // Devuelve los resultados de la consulta al frontend
    });
});

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend iniciado en http://localhost:${PORT}`);
});
