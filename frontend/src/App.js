import React from "react";

import Burger from './assets/burger.svg';

import { 
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from "./styles";

const App = () => {

  return (
      
    <Container>
      <Image alt="logo" src={Burger} />
      <H1>Faça seu pedido!</H1>

        <ContainerItens>
          
          <InputLabel>Pedido</InputLabel>
          <Input placeholder='Pedido' />

          <InputLabel>Nome do Cliente</InputLabel>
          <Input placeholder='Nome do cliente' />

          <Button>Novo Pedido</Button>

        </ContainerItens>

    </Container>

  );
}
export default App