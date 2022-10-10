import React from 'react';
import ImageOne from '../Images/4.jpeg';
import styled from 'styled-components';
import Card from '../components/Card';
import Input from '../components/Input';
import { BiSearch } from 'react-icons/bi';
import SmallInput from '../components/SmallInput';

function GetStarted() {
  return (
    <Content>
        <Image src={ImageOne} alt="people" />

        <Card>
          <Text>
            <p>Schedule Your Pickup</p>
            <h3>Let’s Get You Started</h3>
          </Text>

          <Input placeholder="search your location">
            <BiSearch/>
          </Input>

          <SmallInput placeholder="building name"/>
          <SmallInput placeholder="house no"/>

        </Card>

    </Content>
  )
}

const Text = styled.div`
  p{
    color: #57B133;
    font-size: 1rem;
  }
  h3{
    font-size: 1.2rem;
  }
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