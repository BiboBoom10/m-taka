import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function UserDetails() {
  return (
    <div>
        <Input placeholder={"First Name"} />
        <Input placeholder={"Last Name"} />
        <Input placeholder={"DD/MM/YYYY"} />
        <Input placeholder={"Gender"} />
        <Input placeholder={"Enter Phone Number"} />
        <Input placeholder={"Search Your Location"} />
        
    </div>
  )
}

export default UserDetails;