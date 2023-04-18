const getCharById = require("../controllers/getCharById");
const { deleteFav, postFav, getFav } =require("../controllers/handleFavorites");
const login = require("../controllers/login");
const express = require("express");
const { routes } = require("../app");
const router = express.Router();


router.get("/character/:id",getCharById);
router.get("/login",login);
router.post("/fav",postFav);
router.get("/fav",getFav)
router.delete("/fav/:id",deleteFav);

module.exports = router;

