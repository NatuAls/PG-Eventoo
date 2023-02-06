const { Router } = require("express");
const { createTransaction } = require('../controllers/transactions');
const { verifyToken } = require("../controllers/user");

const router = Router();

router.post("/", verifyToken, createTransaction);
// router.get("/", verifyToken, );
// router.delete("/", verifyToken, );

module.exports = router;
