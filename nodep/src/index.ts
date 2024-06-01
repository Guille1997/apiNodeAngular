// index.ts

import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();
const port = process.env.PORT || 3000;

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Usa las rutas definidas en el archivo routes.ts
app.use('/api', router);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
