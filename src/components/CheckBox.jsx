import React from 'react';
import styled from 'styled-components';

function CheckBox() {
  return (
    <div>
        <Box type="checkbox" />
    </div>
  )
}

const Box = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    border: 0.14rem solid #57b233;
`;



export default CheckBox;