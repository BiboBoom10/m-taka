import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return (
    <MyButton>{props.children}</MyButton>
  )
}

const MyButton = styled.button`
    background: #57b233;
    border: none;
    padding: 1rem 5rem;
    border-radius: 1.5rem;
    color: #f8fcf7;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: #288A00;
    }
`;

export default Button;