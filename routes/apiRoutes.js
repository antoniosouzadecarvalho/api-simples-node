const express = require("express");
const router = express.Router();

const objectApiController = require("../src/api/controllers/apiController");

//Rotas

router.get("/api/get-user/:id", objectApiController.controllerGetUser);
router.post("/api/create-user", objectApiController.controllerCreateUser);
router.get("/api/update-user/:id", objectApiController.controllerUpdateUser);
router.get("/api/delete-user/:id", objectApiController.controllerDeleteUser);

module.exports = router