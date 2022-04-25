import React, { useState } from "react";
import {  Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Form from "./Form";
import axios from "axios";
import Home from "./Home";
import ProfilePage from "./ProfilePage";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import { useCookies } from 'react-cookie';

import TestSignup from "./TestSignup";
import TestLogin from "./TestLogin";


function MyApp() {
  const [user, setUser] = useState({});
  const [cookies, setCookie] = useCookies(['auth_token']);

  let navigate = useNavigate(); 

  function setToken (token) {
    setCookie('auth_token', token,
      {
        maxAge: 1800,
        path: '/'
      }
    )
  }

  async function makePostCall (person) {
    try {
      const response = await axios.post('http://localhost:5000/user', person)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  function assignUser(user) {
    setUser(user);
    console.log(user)
    navigate(`/profile/${user.username}`);
  }

  async function toUser(reviewData) {
    console.log(user.reviews)
    var reviewList = user.reviews
    reviewList.push(reviewData)
    user.reviews = reviewList
    console.log(user.reviews)
    navigate(`/profile/${user.username}`);
  }

  async function toForm(user){
    navigate(`/form`, { user: user });
  }

  async function toSignedInUser(reviewData) {
    console.log(user.reviews)
    var reviewList = user.reviews
    reviewList.push(reviewData)
    user.reviews = reviewList
    console.log(user.reviews)
    navigate(`/profile/${user.username}`);
  }

  function addUser(user) {
    console.log(user)
    makePostCall(user).then((result) => {
      if (result && result.status === 201) {
        setUser(user);
        navigate(`/profile/${user.username}`);
      }
    });
}


function toReviewPage(){
  console.log("going to review page")
  navigate(`/review`);

}


return (
  <div className='container'>
      <Routes>
        <Route path='/' element={ <Navigate replace to = "/home" /> }/>

        <Route path='/form' element={<Form handleSubmit={addUser}/> }/>
  
        <Route path='/home' element={<Home handleSubmit= {assignUser}/>}/>

<<<<<<< HEAD
          <Route path='/profile/*' element = { <ProfilePage userData = {user} handleSubmit = {toReviewPage}/>}/>

          <Route path='/user/:username' element = { < UserPage handleSubmit = {toReviewPage}/>}/>
=======
        <Route path='/profile/*' element = { <ProfilePage userData = {user} handleSubmit = {toReviewPage}/>}/>
>>>>>>> login

        <Route path='/user/:username' element = { < UserPage handleSubmit = {toReviewPage}/>}/>

        <Route path='*' element={ <ErrorPage />}/>

        <Route path='/review'element={<ReviewPage userData = {user} handleSubmit= {toUser}/>}/>

        <Route path='/testingsignup' element={ <TestSignup />} handleSubmit= {toSignedInUser}/>
        
        <Route path='/testinglogin' element={ <TestLogin />} handleSubmit= {toSignedInUser}/>

      </Routes>
  </div>
);
}

export default MyApp;
