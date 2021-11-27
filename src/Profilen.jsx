import * as React from 'react';
import { Modal, Button, Form, CloseButton, Row, Col, Container, FormControl, InputGroup} from 'react-bootstrap';
import './Profilen.css';
import ReactDOM from 'react-dom';
import { useState } from "react";

import { io } from "socket.io-client";
import swal from 'sweetalert';

var token = localStorage.getItem("accessToken");
const username = JSON.parse(localStorage.getItem('user'));
const email = JSON.parse(localStorage.getItem('email'));
const socket = io("https://MeePlan101-backend.meeplan.repl.co/?token="+token,{ 
withCredentials: true
});
var wioall = []




function Profilen (){
  socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
  });
  socket.on("update_setting",(err)=>{
    socket.emit("list_iot_id",{})
  })
  socket.on("list_iot_id",(data) =>{
    //console.log(data.data.toString())
    wioall = data.iot_id
    //document.getElementById('wio_1').value = wioall[0].toString() + "";
    //console.log(wioall)
  })
  //change current wio box to display all id
  //then add another input with add button or delete button as it might be easier
  
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
    swal("cancel");
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
    else {
      swal("cancel");
    }
    })
    }

  

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
               <p className="Topic">Line Notification</p>
               </Col>
               <Col sm={6}>
               <Button href="#" className="Line" disabled >💬</Button> 
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
                  <form>
                  <InputGroup className="mb-3"> 
                  <InputGroup.Text className="Tags" >{index+1}</InputGroup.Text>
                     <FormControl 
                      keys = {index}
                      className = "wio_id"
                      id = {idindex}
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      value = {item}
                      readOnly
                    />
                    <Button variant="outline-secondary" className={btnindex} 
                    id="button-addon2"
                    keys = {index}
                    onClick = {() => handleDelete(index)}
                    >Delete
                    </Button>
                  </InputGroup>
                  </form>
                    );
                  })}
                  <InputGroup className="mb-3"> 
                     <FormControl 
                      id = "wioIdAdd"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
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
        <img src='../src/Picture/Bear.png' />
        </Col>
      </Row>
    </Container>
    </div>
  );
  }
}

export default Profilen;