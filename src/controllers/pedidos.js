const Pedido = require("../models/Pedido");

module.exports = {

    async listarPedidos (req, res) { 

        try{
            const pedidos = await Pedido.findAll();

            res.send(pedidos);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }
    },

    async adicionarPedido (req, res) {

        const  { id, cliente, protudo, quantidade } = req.body;
    
         try {
  
            let  pedidos = await  Pedido.create({ id, cliente, protudo, quantidade }); 
  
         } catch (error) {
              console.log(error);
              res.status(500).send({ error })
         }
    },


    async buscarPedido (req, res) {
        const clienteId = req.params.id;

        try {
            let pedidos = await Pedido.findByPk(clienteId, {
                attributes: ["id", "cliente", "protudo", "quantidade"]
        });

            if(!buscarCliente)
                return res.status(404).send({ erro: "Pedido não encontrado" });
                res.send(pedidos);
        
        } catch (error) {
            console.log(error);
            res.status(500).send({ error }) 
        }
    }


}