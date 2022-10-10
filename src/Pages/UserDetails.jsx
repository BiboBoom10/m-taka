import React from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import styled from 'styled-components';
import SmallInput from '../components/SmallInput';

function UserDetails() {
  return (
    <Content>

      <Heading>
        <h2>Hi There</h2>
        <p>Sign Up to get started</p>
      </Heading>

      <Details>
     
        <RowOne>
          <SmallInput placeholder={"First Name"} />
          <SmallInput placeholder={"Last Name"} />
        </RowOne>
        <RowOne>
          <SmallInput placeholder={"DD/MM/YYYY"} />
          <SmallInput placeholder={"Gender"} /> 
        </RowOne>
        <RowOne>
          <SmallInput placeholder={"Phone Number"} />
          <SmallInput placeholder={"Location"} />
        </RowOne>
      
      <Condition>    
      <CheckBox /><p>  I accept the <b> terms and conditions </b></p>
      </Condition>
      
      </Details>

      <DetailsTwo>
        <Button>Register</Button>

        <p>Already have an account?</p>

        <SignUp>Log in Here</SignUp>
      </DetailsTwo>

    </Content>
  )
}


const Heading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
`;

const Condition =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555555;
`;

const DetailsTwo = styled.div`
  display: flex;
  align-items: center;
  
  position: absolute;
  flex-direction: column;
  top: 27rem;
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 11rem;
`;

const RowOne = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  gap: 0.5rem;
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

export default UserDetails;