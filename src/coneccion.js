// const mysql = require('mysql');

// const conexion = mysql.createConnection({
//   host: "localhost",
//   database: "topologiasclaro",
//   user: "root",
//   password: ""
// });

// function buscarEnBaseDeDatos(searchValue, callback) {
//   const consulta = "SELECT * FROM `csv_inf_topologias` WHERE `EquipoDestino` LIKE '%" + searchValue + "%';";

//   conexion.query(consulta, function(error, lista) {
//       if (error) {
//           throw error;
//       } else {        
//           var llaves = [];
//           lista.forEach(function(row) {
//               llaves.push({ key: row.EquipoDestino });
//           });

//           callback(llaves); // Llamar al callback con los resultados
//       }
//   });
// }

// module.exports = { buscarEnBaseDeDatos };
