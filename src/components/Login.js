import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useProductContext } from "../providers/Context";
import { Sign,Register,LoginContainer,AltContainer } from '../styled';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
export default function Login() {
  const {popup,setPopup}=useProductContext()
  return (
    <div>
        <LoginContainer popup={popup}>
            <AltContainer>
            <CloseIcon fontSize="large" className="remove" onClick={()=>{setPopup(false)}}/>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="col-8"
    >
      <Tab eventKey="home" title="Login">
      <Sign>
            <Form.Control type="text" placeholder="Username" />
        <Form.Control type="password" placeholder="Password"  />
        <h6>Forgot Password?</h6>
       <NavLink to="/account">
       <Button variant="primary">Login</Button>
       </NavLink>
        </Sign>
      </Tab>
      <Tab eventKey="profile" title="Register">
      <Register>
       <Form.Control type="text" placeholder="Username" />
        <Form.Control type="email" placeholder="Email" />
        <Form.Control type="password" placeholder="Password" />
        <Form.Control type="phone" placeholder="Phone number" />
        <Button variant="primary">Register</Button>
       </Register>
      </Tab>
    </Tabs>
    </AltContainer>
       </LoginContainer>
    </div>
  );
}
