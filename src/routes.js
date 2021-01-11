const express = require("express");

const clienteController = require("./controllers/pedidos");
const { route } = require("./app");

const routes = express.Router();

//Configuração da rota
routes.get("/pedidos", clienteController.listarPedidos);

routes.post("/pedidos", clienteController.adicionarPedido);

routes.get("/pedidos/:id", clienteController.buscarPedido);

module.exports = routes;