import * as React from 'react';
import { Modal, Button, Form, CloseButton, Row, Col, Container, FormControl, InputGroup} from 'react-bootstrap';
import './Profilen.css';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

import { io } from 'socket.io-client';
import swal from 'sweetalert';
import qs from 'qs';
import axios from 'axios';

import BearPic from './Picture/Bear.png'

import apiurl from './common/api'

var token = localStorage.getItem("accessToken");
const username = JSON.parse(localStorage.getItem('user'));
const email = JSON.parse(localStorage.getItem('email'));
const socket = io(apiurl+"/?token="+token,{ 
withCredentials: true
});
var wioall = []




function Profilen (){
  useEffect(()=>{
    socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
    });
    socket.on("update_setting",(err)=>{
      socket.emit("list_iot_id",{})
    })
    socket.on("list_iot_id",(data) =>{
      wioall = data.iot_id
    })
  })
  const handleDelete = (index) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this id!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
  if (willDelete) {
        var idindex = "id" + index
        var wio_id_delete = document.getElementById(idindex).value;
        //console.log(wio_id_delete)
        socket.emit("delete_iot_id", {"iot_id": wio_id_delete});
        swal("Your id has been deleted!", {
          icon: "success",
        });
  } 
  else {
  }
  })
  }
  const handleAdd = () => {
      var wio_id_add = document.getElementById("wioIdAdd").value;
      swal({
        title: "Are you sure?",
        text: "Add id : "+ wio_id_add,
        icon: "info",
        buttons: true,
        dangerMode: true
      }).then((willAdd) => {
    if (willAdd) {
          socket.emit("add_iot_id", {"iot_id": wio_id_add});
          document.getElementById("wioIdAdd").value = null;
          swal("Your id has been add!", {
            icon: "success",
          });
    } 
    })
    }

  const redirectLine = ()=>{
      const queryObj = {
        response_type: 'code',
        client_id: 'pYTmD4zxeWsUfbkI03jK2g',
        redirect_uri: apiurl+'/notify',
        scope:'notify',
        state: token
      };
      const url = 'https://notify-bot.line.me/oauth/authorize?' + qs.stringify(queryObj);
      console.log(url);
      window.location.assign(url);
  }
  const revokeLine = ()=>{
    var params = {
      "token" : token
    }
    const config = {
      headers: { 
        'Content-Type': 'application/json'
      }
    }
    axios.post(apiurl+'/notify/revoke', params, config)
      .then(res => {
        swal('Line disconnected.')
      }).catch(err=>{
        swal('Please connect Line first.')
      })
  };

  if (!token) {
        return <Login />
  }
  else{
  return(
    <div>
    <br />
    <Container>
     <Row className="Page">
        <Col sm={8}>
          <h1>Profile</h1>
          <br />
            <Row>
               <Col sm={4} className="Id">
               <p className="Topic">Username</p>
               </Col>
               <Col sm={6}>
               <Form.Control type="text" defaultValue={username} readOnly/>
               </Col>
            </Row>
            <br />
            <Row>
               <Col sm={4} className="Id">
               <p className="Topic">Email</p>
               </Col>
               <Col sm={6}>
               <Form.Control type="email" defaultValue={email} readOnly/>
               </Col>
            </Row>
            <br />
            <Row>
               <Col sm={4} className="Id">
               <p className="Topic">Line Notify</p>
               </Col>
               <Col sm={6}>
               <Button href="#" className="Line" onClick = {() => redirectLine()}>Connect</Button> 
               </Col>
            </Row>
            <br />
            <Row>
              <Col sm={4} className="Id">
               <p className="Topic"></p>
               </Col>
              <Col sm={6}>
               <Button href="#" className="LineDisconnect" onClick = {() => revokeLine()}>Disconnect</Button> 
               </Col>
            </Row>
            <br />
            <Row>
               <Col sm={4}  className="Id">
               <p className="Topic">Wio Terminal</p>
               </Col>
               <Col sm={6}>
                  {wioall.map((item,index)=>{  
                    var idindex = "id" + index
                    var btnindex = "del" + index
                return (
                  <li  key = {index} style = {{listStyle:'none', padding: 0,margin: 0}}>
                  <InputGroup className="mb-3"> 
                  <InputGroup.Text className="Tags" >{index+1}</InputGroup.Text>
                     <FormControl 
                      className = "wio_id"
                      id = {idindex}
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      value = {item}
                      readOnly
                    />
                    <Button variant="outline-secondary" className={btnindex} 
                    id="button-addon2"
                    onClick = {() => handleDelete(index)}
                    >Delete
                    </Button>
                  </InputGroup>
                  </li>
                    );
                  })}
                  <InputGroup className="mb-3"> 
                     <FormControl 
                      id = "wioIdAdd"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      maxLength= "6"
                    />
                    <Button variant="outline-secondary" id="button-addon2" className="DButton"
                    onClick = {handleAdd}>Add
                    </Button>
                  </InputGroup>

               </Col>
            </Row>
            <br />

        </Col >
        <Col className="MPic">
        <br />
        <img className="Pic" src={BearPic} />
        </Col>
      </Row>
    </Container>
    </div>
  );
  }
}

export default Profilen;