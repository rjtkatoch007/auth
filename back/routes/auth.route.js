import { Router } from "express";
import { login, logout, signup } from "../constrollers/auth.controller.js";

const router = new Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router