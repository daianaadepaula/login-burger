import React, { useState, useRef, useEffect } from "react";

import axios from "axios";

import Burger from './assets/burger.svg';
import Trash from './assets/trash.svg';

import {
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  Order,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    });
    setOrders([...orders, newOrder]);
  }

  useEffect(() => {

    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders");

      setOrders(newOrders);
    }

    fetchOrders()
  }, []);

  async function deleteOrder(demandId) {
    await axios.delete(`http://localhost:3001/orders/${demandId}`)
    
    const newOrders = orders.filter(demand => demand.id !== demandId)

    setOrders(newOrders);
  }

  return (

    <Container>
      <Image alt="logo" src={Burger} />
      <H1>Faça seu pedido!</H1>

      <ContainerItens>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='Pedido' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Nome do cliente' />

        <Button onClick={addNewOrder}>
          Novo Pedido</Button>

        <ul>
          {orders.map((demand) => (
            <Order key={demand.id}>
              <div>
                <p>{demand.order}</p>
                <p className="order-name" >{demand.name}</p>
              </div>
              <button onClick={() => deleteOrder(demand.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </Order>
          ))}
        </ul>

      </ContainerItens>

    </Container>

  );
}
export default App