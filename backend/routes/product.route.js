import express from "express"

import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controllers/product.controller.js"

const router = express.Router()

// get all products
router.get('/', getAllProducts)
  
// get 1 product
router.get('/:id', getOneProduct)

// create
router.post('/', createProduct)

// update
router.put('/:id', updateProduct)

// delete
router.delete('/:id', deleteProduct)

export default router