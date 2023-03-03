import { createuser, deleteuser, getallusers, getuser, updateuser } from "./usercontrollers.js";
import express, { Router } from "express";
const router = express.Router()

router.get("/users",getallusers);
router.post("/new",createuser);
router.get("/:id",getuser);
router.delete("/:id",deleteuser);
router.put("/:id",updateuser);
export default router