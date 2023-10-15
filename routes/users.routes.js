import express from "express";
const router = express.Router();

import {create,fetch,update,remove} from "../controller/users.controller.js";

router.get('/',fetch)
router.post('/',create)
router.put('/:id',update)
router.delete('/:id',remove)

export default router;