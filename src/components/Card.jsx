import React from 'react'
import styled from 'styled-components'

function Card(props) {
  return (
    <MyCard>
        <h1> {props.children} </h1>
    </MyCard>
  )
}

const MyCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    box-shadow: 0.01rem 0.01rem 1rem , 0.01rem 0.01rem 1rem;
    border-radius: 1rem;
    background: #f2f3f4;
    margin: -5rem 0 0 0;
    padding: 0.5rem;
`;

export default Card