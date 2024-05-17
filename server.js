const express = require("express");

const server = express();

server.use(express.json())

let products = [
    {id: 1, name: "ps5", price: 5000},
    {id: 2, name: "xbox", price: 3000},
    {id: 3, name: "switch", price: 2299.99} 
]

server.get("/products", (req, res) => {
    res.json({
        products
    })
})

server.post("/products", (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.json({status: "ok"})
})

server.put("/products/:id", (req, res) => {
     const id = Number(req.params.id);
     products.forEach(product => {
        if (product.id == id) {
            product.name = req.body.name
            product.price = req.body.price
        }
     })
     res.json({status: "ok"})
})

server.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    products = products.filter((product) => {
        return product.id !== id;
    })
    res.json({status: "ok"})
})

module.exports = server;