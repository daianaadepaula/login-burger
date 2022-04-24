import React, { useState, useRef } from "react";

import axios from "axios";

import Burger from '../../assets/burger.svg';

import {
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
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

      </ContainerItens>

    </Container>

  );
}
export default App