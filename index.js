import express from 'express';

const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola! El servidor web en Node.js está funcionando correctamente.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
