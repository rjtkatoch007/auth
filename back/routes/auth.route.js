import { Router } from "express";
import { login, logout, signup } from "../constrollers/auth.controller.js";

const router = new Router()

router.get("/signup", signup)
router.get("/login", login)
router.get("/logout", logout)

export default router