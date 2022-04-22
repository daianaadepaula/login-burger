const { request, response } = require('express');
const express = require('express');
const { v4 } = require('uuid');
const cors = require('cors');


const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());


const orders = []

// Middleware

const checkOrderId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(demand => demand.id === id)

    if(index < 0){
        return response.status(404).json({ error: "User not found"})
    }

    request.orderIndex = index
    request.orderId = id

    next()
}


// all orders

app.get('/orders', (request, response) => {
    return response.json(orders)
})


// add new order

app.post('/orders', (request, response) => {
    const { order, name } = request.body
    const demand = { id:v4(), order, name }

    orders.push(demand)

    return response.status(201).json(demand)
})


// change order

app.put('/orders/:id', checkOrderId, (request, response) => {    
    const { order, name } = request.body
    const index = request.orderIndex
    const id = request.orderId
    
    const updateOrder = { id, order, name }    
    orders[index] = updateOrder

    return response.json(updateOrder)
})


// delete order

app.delete('/orders/:id', checkOrderId, (request, response) => {

    const index = request.orderIndex

    orders.splice(index,1)

    return response.status(204).json({ message: "User successfully deleted" })    
})




app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
});