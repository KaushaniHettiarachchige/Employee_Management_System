const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
    adminDashboard,
    hrDashboard
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.get("/admin", authMiddleware, authorizeRoles("admin"), adminDashboard);
router.get("/hr", authMiddleware, authorizeRoles("hr"), hrDashboard);

module.exports = router;