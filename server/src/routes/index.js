const getCharById = require("../controllers/getCharById");
// const { deleteFav } =require("../controllers/handleFavorites");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser")
const postFav = require("../controllers/postFav")
const getFav = require("../controllers/getFav")
const deleteFav = require("../controllers/deleteFav");
const express = require("express");
// const deleteFav = require("../controllers/deleteFav");
// const { routes } = require("../app");
const router = express.Router();


router.get("/character/:id",getCharById);
router.get("/login",login);
router.post("/login",postUser);
router.post("/fav",postFav);
router.get("/fav",getFav)
router.delete("/fav/:id",deleteFav);


module.exports = router;

