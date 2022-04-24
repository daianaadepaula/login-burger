import styled from 'styled-components'
import Background from '../../assets/bg.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const Image = styled.img`
    margin-top: 10px;
    width: 342px;
    height: 354px;
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;    
    color: #FFFFFF;

    margin-top: 25px;
    margin-bottom: 76px;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
`

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    
    margin-bottom: 3px;
    margin-left: 20px;
`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;    

    border: none;
    outline: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;

    padding-left: 15px;
    margin-bottom: 42px;
`

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    
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
