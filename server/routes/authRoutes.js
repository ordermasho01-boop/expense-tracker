import express from "express";
import  {  getUserInfo, getUsers, loginUser, registerUser } from "../controllers/authController.js";

import { protect } from "../middlewares/authMiddleware.js";



const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser);
router.get('/:id',protect, getUserInfo);
router.get('/',protect, getUsers);




export default router;