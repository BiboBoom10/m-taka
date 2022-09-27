import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

function SIgnIn() {
  return (
    <Content>
        <Heading>Hello Again!</Heading>
        <Text>Sign In to your account</Text>

        <Input placeholder={'Enter Phone Number'}></Input>

        <p></p>
        
        <Button>Sign In</Button>

        <TextTwo>Don’t have an account? Sign Up Now!</TextTwo>

        <SignUp>Sign Up</SignUp>

        
    </Content>
  )
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Heading = styled.h3`
    font-size: 2.5rem;
    position: relative;
    top: 5.5rem;
`;

const Text = styled.p`
    color: #747171;
    position: relative;
    top: 2.5rem;
    padding-bottom: 3rem;
`;

const TextTwo = styled('Text')`
    padding-top: 10rem;
`;

const SignUp = styled('Button')`
    background: #ffffff;
    border: 0.1rem solid #ffffff;
    padding: 1rem 5rem;
    border-radius: 1.5rem;
    color: #57b233;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: #288A00;
        color: #fcfffb
    }
`;

export default SIgnIn;