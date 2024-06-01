import { Router } from "express";
import { getAllPedidos, createPedido, updatePedidoStatus, deletePedido } from "./controllers";

const router = Router();

// Rutas para consultar, crear, actualizar y eliminar pedidos
router.get('/pedidos', getAllPedidos);
router.post('/pedidos', createPedido);
router.patch('/pedidos/:id/status', updatePedidoStatus);
router.delete('/pedidos/:id', deletePedido); // Nueva ruta para eliminar un pedido

export default router;
