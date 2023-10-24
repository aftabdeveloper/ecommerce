import express from 'express'
const router = express.Router()
import {fetch, create, remove, update} from '../contoller/products.controller.js'

router.get('/',fetch)
router.post('/',create)
router.put('/:id',update)
router.delete('/:id',remove)

export default router;