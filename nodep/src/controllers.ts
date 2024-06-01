import { pool } from "./db";
import { Request, Response } from 'express';

export const getAllPedidos = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query("SELECT * FROM pedidos WHERE status = 1");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const createPedido = async (req: Request, res: Response) => {
    try {
        const { nombre, status, fecha } = req.body;
        const [result] = await pool.query('INSERT INTO pedidos (nombre, status, fecha) VALUES (?, ?, ?)', [nombre, status, fecha]);
        res.status(201).json({ Id: (result as any).insertId, nombre, status, fecha });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const updatePedidoStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.body;
        const [result] = await pool.query('UPDATE pedidos SET status = ? WHERE Id = ?', [status, req.params.id]);
        if ((result as any).affectedRows === 0) {
            res.status(404).json({ message: 'Pedido not found' });
        } else {
            res.json({ message: 'Pedido status updated' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const deletePedido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM pedidos WHERE Id = ?', [id]);
        if ((result as any).affectedRows === 0) {
            res.status(404).json({ message: 'Pedido not found' });
        } else {
            res.json({ message: 'Pedido eliminado correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
