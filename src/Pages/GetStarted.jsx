import React from 'react';
import ImageOne from '../Images/4.jpeg';
import styled from 'styled-components';
import Card from '../components/Card';
import Input from '../components/Input';
import { BiSearch } from 'react-icons/bi';
import SmallInput from '../components/SmallInput';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

function GetStarted() {
  return (
    <Content>
        <Image src={ImageOne} alt="people" />

        <Card>
          <Text>
            <p>Schedule Your Pickup</p>
            <h3>Let’s Get You Started</h3>
          </Text>

          <InputAlign>
            <Input placeholder="search your location">
              <BiSearch/>
            </Input>
          </InputAlign>

          <InputAlign>
            <SmallInput placeholder="building name"/>
            <SmallInput placeholder="house no"/>
          </InputAlign>

          <Condition>
          <CheckBox /> <p>I acknowledge that the pick up prices range between KES 200.00 and KES 300.00</p>
          </Condition>

          <ButtonAlign>
            <Button>Save Schedule</Button>
          </ButtonAlign>

          <ButtonAlign>
          <MyButton>Skip For Now</MyButton>
          </ButtonAlign>

        </Card>

    </Content>
  )
}

const MyButton = styled('Button')`
  background: transparent;
  padding: 1rem 5rem;
  border-radius: 1.5rem;
  color: #57b233;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover{
      background-color: #288A00;
      color: #f8fcf7;
  }
`;

const ButtonAlign =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin: 0.3rem;
`;

const Text = styled.div`
  p{
    color: #57B133;
    font-size: 1rem;
  }
  h3{
    font-size: 1.2rem;
    color: #333333;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Condition = styled.div`
  p{
    color: #57B133;
    font-size: 0.8rem;
    color: #555555;
    margin-left: 0.5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 1.5rem 0;
`;

const Image = styled.img`
  width: 100%;
  
`;

const Content = styled.div`
  background: #f0ffea;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default GetStarted;