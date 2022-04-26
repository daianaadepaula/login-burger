import styled from 'styled-components'

export const Image = styled.img`
    margin-top: 10px;
    width: 342px;
    height: 354px;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
`

export const Order = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    margin-top: 20px;

    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    color: #FFFFFF;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    div{
        flex-direction: column;
        justify-content: space-between;
    }

    .order-name{
        font-weight: 700;
        padding-top: 10px;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`