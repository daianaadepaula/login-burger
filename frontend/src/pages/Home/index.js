import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Burger from '../../assets/burger.svg';

import H1 from '../../components/Title';
import Container from "../../components/Container";
import Button from "../../components/Button";

import {
  Image,
  ContainerItens,
  InputLabel,
  Input,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    });
    setOrders([...orders, newOrder]);

    history.push('/pedidos')
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

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>

    </Container>

  );
}
export default App