const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth')
const { validateRegister, validateLogin, authMiddleware } = require("../middleware/validationMiddleware");
router.post('/registration', validateRegister, auth.registeration);
router.post("/login", validateLogin, auth.login); // New login route
router.get("/me", authMiddleware, auth.getUser); // New login route

module.exports = router;