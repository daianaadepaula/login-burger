import React, { useState } from "react";

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

  function addNewOrder() {
    setOrders([{
      id: Math.random(), order: "1 Batata Grande, 1 X-Bacon, 2 Coca-Colas Light", name: "Maria"
    }]);
  }


  return (

    <Container>
      <Image alt="logo" src={Burger} />
      <H1>Faça seu pedido!</H1>

      <ContainerItens>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder='Pedido' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder='Nome do cliente' />

        <Button onClick={addNewOrder}>
          Novo Pedido</Button>

        <ul>
          {orders.map((demand) => (
            <Order key={demand.id}>
              <div>
                <p>{demand.order}</p>
                <p className="order-name" >{demand.name}</p>
              </div>
              <button>
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