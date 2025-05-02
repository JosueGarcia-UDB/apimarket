import Router from 'express'
import { getUsuarios, getUsuario, getproducts, postproducts, putproducts, deleteproducts, getproductsId } from '../controllers/market.controllers.js';

const router = Router()

// Ruta para consultar usuarios
router.get('/usuarios', getUsuarios);

//Ruta para consultar products
router.get('/products', getproducts);

//Ruta para consultar products ID
router.get('/products/:id', getproductsId);

// Ruta para iniciar sesión (Login)
router.post('/usuarios/login', getUsuario);

//Ruta para ingresar producto
router.post('/products', postproducts);
//Ruta para actualizar producto
router.put('/products/:id', putproducts);
//Ruta para eliminar producto
router.delete('/products/:id', deleteproducts);

export default router