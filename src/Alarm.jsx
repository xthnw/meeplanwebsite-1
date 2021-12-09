import React from 'react';
import {useEffect, useState} from 'react';
import './Alarm.css';
import { Row, Col, Container, Form, Button} from 'react-bootstrap';

import apiurl from './common/api'
import Alarmbar from './Picture/Alarmbar.png';


var token = localStorage.getItem("accessToken");

import { io } from "socket.io-client";
const socket = io(apiurl + "/?token="+token,{ 
withCredentials: true
});

function Alarm () {
  const [alarmTk, setAlarmTk] = useState([])
  const [nameAlarm, setNameAlarm] = useState("")
  const [dateAlarm, setDateAlarm] = useState("")
  const [timeAlarm, setTimeAlarm] = useState("")
  useEffect (()=>{
      socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`)
      });
      socket.on("update_alarm",(err) => {
        socket.emit("list_alarm",{})
      })
      socket.on("list_alarm", (data) => {
        setAlarmTk(data.sort((a, b) => (new Date(a.date) >new Date(b.date)) ? 1 : (new Date(a.date) === new Date(b.date)) ? ((a.name > b.name) ? 1 : -1) : -1 ))
      })
    }
    ,[])
  const boxstyle = {
    margin : "1rem",
    padding : "1rem",
    backgroundColor : "#ffffff",
    borderRadius : "5px",
    display : "flex",
    flexDirection: "column",
    justifyContent : "space-around",
    boxShadow : "0px 0px 10px #4f4e595b",
    width: "70%"
  }

  var newAlarm = {
      name : nameAlarm,
      description : "",
      date : dateAlarm + "T" + timeAlarm
  }

  const handleAddAlarm = (props) => {
    socket.emit("create_alarm",props)
    document.getElementById("nameA").value = null
    document.getElementById("dateA").value = null
    document.getElementById("timeA").value = null
  }

  return (
    <Container>
    <br />
      <Row>
        <div className="Bar">
            <img src={Alarmbar} style={{ width: '120px', height: '50px' }} />
        </div>
        <Col>
            <br />
            <ul>
            {alarmTk.map((item,index)=>{
                var alarmDate = new Date(item.date) .toLocaleString()
                if (item.description != ""){
                return (
                  <li  key = {index} style = {{listStyle:'none', padding: 0,margin: 0}}>
                  <div className="alarm-card" style = {boxstyle}>

                    <label style = {{ display: "flex", justifyContent:"space-between"}}>
                      {`Title :  ${item.name}`} 
                      <i className="far fa-calendar-times  delAlm" 
                      onClick = {()=>{
                       socket.emit("delete_alarm",{
                       "alarm_id" : item.alarmID
                      })
                      }
                      }
                      ></i>
                    </label>
                    <label>
                      {`Description : ${item.description}`}
                    </label>
                    <label>
                    <i className="far fa-bell"></i>
                      {` Notify : ${alarmDate}`}
                    </label>
                  </div>
                  </li>
                  );
                }
                else{
                  return (
                  <li  key = {index} style = {{listStyle:'none', padding: 0,margin: 0}}>
                  <div className="alarm-card" style = {boxstyle}>
                    <label style = {{ display: "flex", justifyContent:"space-between"}}>
                      {`Title :  ${item.name}`} 
                      <i className="far fa-calendar-times delAlm"    
                      onClick = {()=>{
                       socket.emit("delete_alarm",{
                       "alarm_id" : item.alarmID
                      })
                      }
                      }>
                      </i>
                    </label>
                    <label>
                      <i className="far fa-bell"></i>
                      {` Notify : ${alarmDate}`}
                    </label>
                  </div>
                  </li>
                  );
                }
            })}
            </ul>
        </Col>
        <Col>
        <br />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control id = "nameA" type="Text" onChange = {(e)=> setNameAlarm(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control id = "dateA" placeholder="Date" type="Date" onChange = {(e)=> setDateAlarm(e.target.value)} />
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control id = "timeA" placeholder="Time" type="Time" onChange = {(e)=> setTimeAlarm(e.target.value)} />
              <br />
            </Form.Group>
            <div className="Button-Position">
             <Button variant="outline-secondary" className="Button-Save" onClick = {()=> {handleAddAlarm(newAlarm)}}>Add</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Alarm;