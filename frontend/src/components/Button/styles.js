import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: ${rest => rest.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    
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