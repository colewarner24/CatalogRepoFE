import React, { useState} from "react";
import { useNavigate } from 'react-router-dom'
import './CSS/signup.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const SignUpPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SignUpPage() {
  return (
    <SignUpPageContainer>
      <AccountBox />
    </SignUpPageContainer>
  );
}

export default SignUpPage;