import styled from 'styled-components'
import Background from '../../assets/bg.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    height: auto;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center; 
`

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

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: rgba(255, 255, 255, 0.14);
    
    margin-bottom: 51px;
    margin-top: 32px;

    cursor: pointer;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
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