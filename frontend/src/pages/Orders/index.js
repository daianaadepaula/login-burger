import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Package from '../../assets/package.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../components/Title'
import Container from "../../components/Container";
import Button from "../../components/Button";

import {
  Image,
  ContainerItens,
  Order,
} from "./styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory()

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

  function goBackPage() {
    history.push('/')
  }

  return (

    <Container>
      <Image alt="logo" src={Package} />
      <H1>Pedidos</H1>

      <ContainerItens>

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

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>

      </ContainerItens>

    </Container>

  );
}
export default Orders