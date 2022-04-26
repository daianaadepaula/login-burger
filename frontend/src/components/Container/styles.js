import styled from "styled-components";

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
