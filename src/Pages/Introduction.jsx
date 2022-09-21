import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import ImageOne from '../Images/1.jpeg';
import ImageTwo from '../Images/3.jpeg';
import MTakaLogo from '../Images/M-Taka logos/2.png'

function Introduction() {
  return (
    <div>
        <BothImages>
            <ImageOnePosition>
                <Image src={ImageTwo} />
            </ImageOnePosition>
            <ImageTwoPosition>
                <Image src={ImageOne} />
            </ImageTwoPosition>
        </BothImages>

        <LogoPosition>
            <ImageLogo src={MTakaLogo} />     
        </LogoPosition>

        <Text>A platform that aims to educates, connects and empowers waste actors.</Text>

        <ButtonPosition>
            <Button>Get Started</Button>
        </ButtonPosition>
        

    </div>
  )
}

const Text = styled.div`
    text-align: center;
    margin-top: -7rem;
    margin-left: 3rem;
    margin-right: 3rem;
    color: #747171;
    font-weight: 600;
`;

const ButtonPosition = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6rem;
`;

const LogoPosition = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

const ImageLogo = styled.img`
    height: 22rem;
`;

const Image = styled.img`
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
`;

const ImageOnePosition = styled.div`
    position: absolute;
`;

const ImageTwoPosition = styled.div`
    position: relative;
    right: 4rem;    
`;
const BothImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    left: 2rem;
    top: 7.5rem;
`;

export default Introduction;