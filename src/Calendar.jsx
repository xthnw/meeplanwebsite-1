// import React, { Component } from 'react';
import * as React from 'react';
import {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import './Calendar.css';
import { Modal, Button, Form, CloseButton, Row, Col, Container } from 'react-bootstrap';
import './App.css';
//import { render } from 'react-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import TableCell from '@material-ui/core/TableCell';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
    Scheduler,
    MonthView,
    Appointments,
    Toolbar,
    DateNavigator,
    AppointmentTooltip,
    AppointmentForm,
    EditRecurrenceMenu,
    Resources,
    DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import FilterDrama from '@material-ui/icons/FilterDrama';
import Opacity from '@material-ui/icons/Opacity';
import ColorLens from '@material-ui/icons/ColorLens';
import { withStyles } from '@material-ui/core/styles';
import { levels } from '/src/level-color/tasks';

import AlarmBar from './Picture/Alarmbar.png';
import AddTaskPic from './Picture/addtask.jpeg';
import AddAlarmPic from './Picture/alarm.jpeg';
import MeePic from './Picture/aMee.jpeg';
import TaskBarPic from './Picture/Taskbar.png';
import Logo from './Picture/Logo.png';

import apiurl from './common/api'

var token = localStorage.getItem("accessToken");
const username = JSON.parse(localStorage.getItem('user'));
const email = JSON.parse(localStorage.getItem('email'));

import { io } from "socket.io-client";
// const socket = io(apiurl+"/?token="+token,{ 
// withCredentials: true
// });


function Today() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Card sx={{ maxWidth: 90 }}>
                <CardActionArea onClick={() => setModalShow(true)}>
                    <CardMedia
                        component="img"
                        height="90"
                        image={MeePic}
                        alt="Alarm"
                    />
                </CardActionArea>
            </Card>
            <ClothColor 
            show={modalShow}
            onHide={() => setModalShow(false)} />
        </div>
    );
}

function ClothColor(props){
      var today = new Date().getDay()
      if (today == 0) {today = "Sunday";
        var color = [
          [["Black","Black"],  ["Purple","DarkViolet"]], 
          [["Red","Red"]], 
          [["Yellow","Khaki"], ["Green","LightGreen"], ["Gray","Gray"]], 
          [["White","White"], ["Coral","NavajoWhite"]], 
          [["Blue","DodgerBlue"],["LightBlue","DeepSkyBlue"]]
        ]
      }
      else if (today == 1){ today = "Monday";
         var color = [
          [["Yellow","Khaki"], ["Orange","Salmon"]], 
          [["Pink","Pink"],["LightBlue","DeepSkyBlue"], ["Green","LightGreen"]], 
          [["Yellow","Khaki"], ["Blue","DodgerBlue"]], 
          [ ["Purple","DarkViolet"], ["Black","Black"]], 
          [["Red","Red"]]
        ]
      }
      else if (today == 2){ today = "Tuesday";
      var color =
        [
          [ ["Brown","Peru"]],
          [["Red","Red"],  ["Purple","DarkViolet"], ["Gray","Gray"]],
          [["Pink","Pink"], ["Green","LightGreen"]],
          [["Orange","Salmon"]],
          [["White","White"],["Yellow","Khaki"]]
        ]
      }
      else if (today == 3){ today = "Wednesday";
      var color =
        [
          [ ["Purple","DarkViolet"]],
          [["Blue","DodgerBlue"], ["Yellow","Khaki"], ["White","White"]],
          [["Black","Black"], ["Green","LightGreen"]],
          [["Gray","Gray"]],
          [["Orange","Salmon"],["Pink","Pink"]]
        ]
      }
      else if (today == 4){ today = "Thursday";
      var color =
        [
          [["Yellow","Khaki"], ["LightBlue","DeepSkyBlue"]],
          [["White","White"], ["Green","LightGreen"]],
          [["Gray","Gray"], ["Orange","Salmon"]],
          [["Red","Red"]],
          [ ["Purple","DarkViolet"],["Blue","DodgerBlue"], ["Black","Black"]]
        ]
      }
      else if (today == 5){ today = "Friday";
      var color =
        [
          [["LightBlue","DeepSkyBlue"], ["Blue","DodgerBlue"], ["Brown","Peru"]],
          [["Yellow","Khaki"]],
          [["Black","Black"], ["Green","LightGreen"]],
          [["Red","Red"],["Pink","Pink"]],
          [["Gray","Gray"], ["Purple","DarkViolet"]]
        ]
      }
      else{ today = "Saturday";
      var color =
        [
          [["Gray","Gray"]],
          [["Yellow","Khaki"], ["Pink","Pink"]],
          [["Black","Black"], ["Purple","DarkViolet"], ["Red","Red"]],
          [["Blue","DodgerBlue"],["LightBlue","DeepSkyBlue"]],
          [["Green","LightGreen"],["Orange","Salmon"]]
        ]
      }
      return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Main"
        >
            <Modal.Header closeButton className="Header">
                <div >
                  <h2 style={{color:"white"}}> Auspicious Shirt Color </h2>
                </div>
            </Modal.Header>
            <Modal.Body>
              <h2 className = "shirtxL">{today}</h2>
              <div>
                <label className = "shirtL">Work</label>
                {color[0].map((c,index)=>{
                  return(
                    <label key={index} className = "shirtC" style ={{color: c[1]}}><i class="fas fa-tshirt"></i>{` ${c[0]}`}</label>    
                  )
                })
                }
              </div>
              <div>
                <label className = "shirtL">Love</label>
                {color[1].map((c,index)=>{
                  return(
                    <label key={index} className = "shirtC" style ={{color: c[1]}}><i class="fas fa-tshirt"></i>{` ${c[0]}`}</label>                     
                    )
                })}
              </div>
              <div>
                <label className = "shirtL">Wealth</label>
                {color[2].map((c,index)=>{
                  return(
                    <label key={index} className = "shirtC" style ={{color: c[1]}}><i class="fas fa-tshirt"></i>{` ${c[0]}`}</label>         
                  )
                })}
              </div>
              <div>
                <label className = "shirtL" >Adore</label>
                {color[3].map((c,index)=>{
                  return(
                    <label key={index} className = "shirtC" style ={{color: c[1]}}><i class="fas fa-tshirt"></i>{` ${c[0]}`}</label>          
                  )
                })}
              </div>
              <div>
                <label className = "shirtL" >Bad Luck</label>
                {color[4].map((c,index)=>{
                  return(
                    <label key={index} className = "shirtC" style ={{color: c[1]}}><i class="fas fa-tshirt"></i>{` ${c[0]}`}</label>              
                  )
                })}
              </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" className="Button-Save" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Alarm() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div >
            <Card sx={{ maxWidth: 90 }}>
                <CardActionArea onClick={() => setModalShow(true)}>
                    <CardMedia
                        component="img"
                        height="90"
                        image={AddAlarmPic}
                        alt="Alarm"
                    />
                </CardActionArea>
            </Card>
             <Alarmpopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    );
}

function AddTask() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Card sx={{ maxWidth: 90 }}>
                <CardActionArea onClick={() => setModalShow(true)}>
                    <CardMedia
                        component="img"
                        height="90"
                        image={AddTaskPic}
                        alt="Add Task"
                    />
                </CardActionArea>
            </Card>
            <Taskpopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

function EditTask(props) {
    const [data, setData] = React.useState({});
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <span>
            <i className="far fa-edit" style = {{marginLeft : "1rem"}}
            onClick = {() => {
                setModalShow(true)
                setData(props.task)
                console.log(data)
            }}></i>
            <Taskpopup
                show={modalShow}
                onHide={
                  () => setModalShow(false)
                }
                data = {data}
            />
        </span>
    );
}


function Taskpopup(props) {
    if (props.data && props.show){
        var [data, setData] = React.useState(props.data)
        var dataSplitDate_ = new Date(data.date)
        var dataSplitDate = [dataSplitDate_.toDateString(), dataSplitDate_.toTimeString()]
        dataSplitDate[1] = dataSplitDate[1].split(" ")
        if (dataSplitDate_.getDate() < 10){
          dataSplitDate[0] = dataSplitDate_.getFullYear() + "-" + (dataSplitDate_.getMonth()+1) + "-0" + dataSplitDate_.getDate()
        }
        else{
        dataSplitDate[0] = dataSplitDate_.getFullYear() + "-" + (dataSplitDate_.getMonth()+1) + "-" + dataSplitDate_.getDate()
        }
    }
    else if(props.show){
      var [data, setData] = React.useState({
        name : null,
        date: null,
        description: null,
        done: null,
        level: null
      })
      var dataSplitDate = [0, 0]
    }
    // var d = new Date();
    // var tzUTC = d.getTimezoneOffset()/60;
    const handleTask = () => {
      var levelTask = 0;
      for (let i = 1; i<= 5;i++ ){
        if (document.getElementById("inline-radio-"+i).checked == true){
          levelTask = i;
        }
      }
      if (levelTask == 0){
        alert("please select level");
      }
      else{
        var dateTime = document.getElementById("taskDate").value +"T"+ document.getElementById("taskTime").value
        var newTask = {
          name: document.getElementById("taskName").value,
          description: document.getElementById("taskDescrpt").value,
          level: levelTask,
          done: false,
          date: dateTime
        }
          
          console.log('task sent');
          if (data.name != null){
              socket.emit("edit",  {
                "name": document.getElementById("taskName").value,
                "description": document.getElementById("taskDescrpt").value,
                "level": levelTask,
                "done": data.done,
                "date": dateTime,
                "_id": data._id
              })
          }
          else{
            socket.emit("create", newTask);
          }
          if (document.getElementById("alarm-switch").checked == true){
          var newTaskAlarm = {
            "name" :  document.getElementById("taskName").value,
            "date" : dateTime,
            "description" : document.getElementById("taskDescrpt").value
          }
          // console.log(newTaskAlarm);
              socket.emit("create_alarm",newTaskAlarm);
          }
        props.onHide();
      }
    }
    if (props.show){
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Main"
        >
            <Modal.Header closeButton variant="white"  className="Header" >
                <div >
                    <img src={TaskBarPic} style={{ width: '120px', height: '50px' }} />
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control id = "taskName" type="Text" defaultValue = {data.name} />
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Date</Form.Label>
                                <br />
                                <Form.Control id = "taskDate" type="Date"
                                defaultValue = {dataSplitDate[0]}required />
                            </Col>
                            <Col>
                                <Form.Label>Time</Form.Label>
                                <br />
                                <Form.Control id = "taskTime" placeholder="Time" type="Time" defaultValue = {dataSplitDate[1][0]} required
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                        <br />
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control id = "taskDescrpt"
                        defaultValue = {data.description} as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Label>Level</Form.Label>{" "}
                            <br />
                            <Form.Label>least important</Form.Label>{" "}
                            <Form.Check
                                inline
                                label="1"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                style={{ marginLeft: '1rem' }}
                                
                            />
                            <Form.Check
                                inline
                                label="2"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label="4"
                                name="group1"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label="5"
                                name="group1"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            <Form.Label>most  important</Form.Label>{" "}
                        </div>
                    ))}
                    <Form.Check 
                      type="switch"
                      id="alarm-switch"
                      label="Alarm on Line & Wio Terminal"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" className="Button-Save" onClick={handleTask}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
    }
    else return(<span></span>)
}

function Alarmpopup(props) {
  const [nameAlarm, setNameAlarm] = useState("")
  const [dateAlarm, setDateAlarm] = useState("")
  const [timeAlarm, setTimeAlarm] = useState("")

  var newAlarm = {
      name : nameAlarm,
      description : "",
      date : dateAlarm + "T" + timeAlarm
  }

  const handleAddAlarm = (props) => {
    socket.emit("create_alarm",props)
  }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Main"
        >
            <Modal.Header closeButton className="Header">
                <div >
                    <img src={AlarmBar} style={{ width: '120px', height: '50px' }} />
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Text" id = "nameA" onChange = {(e)=> setNameAlarm(e.target.value)} />
                    </Form.Group>
                     <Form.Group className="mb-3">
                     </Form.Group>
                        <Row>
                            <Col>
                              <Form.Group className="mb-3">
                              <Form.Label>Date</Form.Label>
                              <Form.Control id = "dateA" placeholder="Date" type="Date" onChange = {(e)=> setDateAlarm(e.target.value)} />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3">
                              <Form.Label>Time</Form.Label>
                              <Form.Control id = "timeA" placeholder="Time" type="Time" onChange = {(e)=> setTimeAlarm(e.target.value)} />
                              </Form.Group>
                            </Col>
                        </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" className="Button-Save" onClick={()=> {     props.onHide
                  handleAddAlarm(newAlarm)
                }}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

const resources = [{
    fieldName: "level",
    title: 'Level',
    instances: levels,
}];

const getBorder = theme => (`1px solid ${theme.palette.type === 'light'
    ? lighten(fade(theme.palette.divider, 1), 0.88)
    : darken(fade(theme.palette.divider, 1), 0.68)
    }`);

const DayScaleCell = props => (
    <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

const styles = theme => ({
    cell: {
        color: '#78909C!important',
        position: 'relative',
        userSelect: 'none',
        verticalAlign: 'top',
        padding: 0,
        height: 90,
        borderLeft: getBorder(theme),
        '&:first-child': {
            borderLeft: 'none',
        },
        '&:last-child': {
            paddingRight: 0,
        },
        'tr:last-child &': {
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: 'white',
        },
        '&:focus': {
            backgroundColor: fade(theme.palette.primary.main, 0.15),
            outline: 0,
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center'
    },
    text: {
        padding: '0.5em',
        textAlign: 'center',
    },
    // sun: {
    //     color: '#FFEE58',
    // },
    // cloud: {
    //     color: '#90A4AE',
    // },
    // rain: {
    //     color: '#4FC3F7',
    // },
    // sunBack: {
    //     backgroundColor: '#FFFDE7',
    // },
    // cloudBack: {
    //     backgroundColor: '#ECEFF1',
    // },
    // rainBack: {
    //     backgroundColor: '#E1F5FE',
    // },
    opacity: {
        opacity: '0.5',
    },
    appointment: {
        borderRadius: '10px',
        '&:hover': {
            opacity: 0.6,
        },
    },
    apptContent: {
        '&>div>div': {
            whiteSpace: 'normal !important',
            lineHeight: 1.2,
        },
    },
    flexibleSpace: {
        flex: 'none',
    },
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    tooltipContent: {
        padding: theme.spacing(3, 1),
        paddingTop: 0,
        backgroundColor: theme.palette.background.paper,
        boxSizing: 'border-box',
        width: '400px',
    },
    tooltipText: {
        ...theme.typography.body2,
        display: 'inline-block',
    },
    title: {
        ...theme.typography.h6,
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightBold,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    icon: {
        color: theme.palette.action.active,
        verticalAlign: 'middle',
    },
    circle: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        verticalAlign: 'super',
    },
    textCenter: {
        textAlign: 'center',
    },
    dateAndTitle: {
        lineHeight: 1.1,
    },
    titleContainer: {
        paddingBottom: theme.spacing(2),
    },
    container: {
        paddingBottom: theme.spacing(1.5),
    },
});

// const WeatherIcon = ({ classes, id }) => {
//     switch (id) {
//         case 0:
//             return <Opacity className={classes.rain} fontSize="large" />;
//         case 1:
//             return <WbSunny className={classes.sun} fontSize="large" />;
//         case 2:
//             return <FilterDrama className={classes.cloud} fontSize="large" />;
//         default:
//             return null;
//     }
// };

// #FOLD_BLOCK
const CellBase = React.memo(({
    classes,
    startDate,
    formatDate,
    otherMonth,
    // #FOLD_BLOCK
}) => {
    //const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
        ? { day: 'numeric', month: 'long' }
        : { day: 'numeric' };
    return (
        <TableCell
            tabIndex={0}
            className={classNames({
                [classes.cell]: true,
                //[classes.rainBack]: iconId === 0,
                //[classes.sunBack]: iconId === 1,
                //[classes.cloudBack]: iconId === 2,
                [classes.opacity]: otherMonth,
            })}
        >
            
            <div className={classes.text}>
                {formatDate(startDate, formatOptions)}
            </div>
        </TableCell>
    );
});

const TimeTableCell = withStyles(styles, { name: 'Cell' })(CellBase);

const Appointment = withStyles(styles, { name: 'Appointment' })(({ classes, ...restProps }) => (
    <Appointments.Appointment
        {...restProps}
        className={classes.appointment}
    />
));

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({ classes, ...restProps }) => (
    <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
));

const FlexibleSpace = withStyles(styles, { name: 'ToolbarRoot' })(({ classes, ...restProps }) => (
    <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
        <div className={classes.flexContainer}>
            <img className="photo" style = {{filter: "invert(1) grayscale(100%) brightness(200%)"}}src={Logo} />
        </div>
    </Toolbar.FlexibleSpace>
));

var taskAll = []

function Calendar() {
    var [appointments, setappointments] = useState([])
    const todaydate = new Date();
    var date7 = new Date(); 
    var s = date7.getDate()+7;//me looking at calendar full of task but only one shown
    
    var date31 = new Date();
    var s2 = date7.getDate()+31;
    date7.setDate(s)
    date31.setDate(s2)
    useEffect(()=>{
      socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
      });

      socket.on("update",(err)=>{
        console.log("update message recieved")
        var bf2 = todaydate.getFullYear() - 2
        var lwrtodo = new Date();
        lwrtodo.setHours(0, 0, 1);
        var af2 = todaydate.getFullYear() + 2
        socket.emit("list",{
            "lwr": lwrtodo,
            "upr": date31,
            "tag" : "todo"
        })
        socket.emit("list",{
            "lwr": bf2.toString() + "-01-01",
            "upr": af2.toString() + "-01-01",
            "tag" : "appointment"
        })
      })
      socket.on("list",(data) =>{
        console.log("list recieved")
        var endDate = 0
        var dateS = 0
        var dateget
      if (data.tag == "appointment"){
         setappointments ( data.result.map((appointment, index)=> {
          //  console.log(appointment.date)
           dateS = new Date(appointment.date)
           dateget = dateS.getTime()
           endDate = dateS.setTime((dateget+12000))
           return({
            "id" : appointment._id,
            "title" : appointment.name,
            //description : appointment.description,
            "level": appointment.level,
            "startDate": new Date(appointment.date),
            "endDate": new Date(endDate)
            })
         })
         )
      }else if (data.tag == "todo"){
          taskAll = data.result
          // taskAll.sort((a, b) => 
          // {
          //   if (new Date(a.date).getYear() > new Date(b.date).getYear())
          //   {
          //     return 1;
          //   }
          //   else{
          //     if (new Date(a.date).getYear() === new Date(b.date).getYear())
          //     {
          //       if (new Date(a.date).getMonth() > new Date(b.date).getMonth()){
          //         return 1;
          //       }
          //       else {
          //         if (new Date(a.date).getMonth() === new Date(b.date).getMonth()){
          //           if (new Date(a.date).getDate() > new Date(b.date).getDate())
          //           {
          //             return 1;
          //           }
          //           else{
          //             if (new Date(a.date).getMonth() === new Date(b.date).getMonth()){
          //               if (a.level < b.level){
          //                 return 1;
          //               }
          //               else return -1;
          //             }
          //           }
          //         }
          //       }
          //     }
          //     else return -1;
          //   }
              
          

          // })
          
          // (new Date(a.date).getYear() > new Date(b.date).getYear()) ? 1 : [(new Date(a.date).getMonth() > new Date(b.date).getMonth())] ? ((a.level < b.level) ? 1 : -1) : -1 )
          // console.log(data.result)
        }
      

      })
      return () => {setappointments([])}     
    },[])

      
    const commitChanges = ({ added, changed, deleted }) => {
          if (added) {
          }
          if (changed) {
                // data = data.map(appointment => (
                //     changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          }
          if (deleted !== undefined) {
              console.log(deleted)
              setappointments(appointments.filter(appointment => appointment.id !== deleted))
              socket.emit("delete",{"id" : deleted})
          }
          //return { data };
      }

    const handleCheck = (index,data) =>{
      console.log("hit handle check")
        if (data.done == 0 ){
          socket.emit("edit",{
              "name": data.name,
              "description": data.description,
              "level": data.level,
              "date": data.date,
              "_id": data._id,
              "done": "1"
          })
          document.getElementById(`default-${index}`).className = "far fa-check-square";
          data.done = 1;
          console.log(data)
          return { data }
        }
        else{
          socket.emit("edit",{
              "name": data.name,
              "description": data.description,
              "level": data.level,
              "date": data.date,
              "_id": data._id,
              "done": "0"
          })
          document.getElementById(`default-${index}`).className = "far fa-square";
          data.done = 0;
          console.log(data)
          return { data }
        }
    }

    // const handleEdit = (index, item) =>{
    //   //document.getElementById("taskName").value = item.name
    //   console.log(item)
    //   return (
    //     <div>
    //         <Taskpopup show="true"/>
    //     </div>
    //   );
    // }

     return (
        <div>
            <br />
            <Container fluid="lg">
                <div className = "row1">
                    <Col sm={4} id= "tododo">
                        <Row  className="ListAdjust" >
                            <h2 className="Nav-todo">📝 To-Do List</h2>
                            <Form className="To-do">
                                {taskAll.map((item, index) => {
                                  var dated = new Date(item.date).toLocaleDateString('en-GB')
                                  if (item.done == 0){
                                  return (
                                    <div key={`default-${index}`} className="mb-1 boxOut cbouchk">
                                    <span className = {`checkboxOut-${item.level}`}>
                                        <i className="far fa-square" id={`default-${index}`}
                                        onClick = {()=> {handleCheck(index,item) }}
                                         >
                                         </i>
                                    </span>
                                          {"  "}
                                    <div className = {`labelOut-${item.level}`}>
                                        <a>{item.name}</a>
                                        <span className = "dateEnd">{dated}
                                        <EditTask task = {item} />
                                        </span>
                                    </div>
                                    </div>)
                                  }
                                  else{
                                    return (
                                    <div key={`default-${index}`} className="mb-1 boxOut cbochk">
                                      <span className = {`checkboxOut-${item.level}`}>
                                        <i className="far fa-check-square" id={`default-${index}`}
                                        onClick = {()=> {handleCheck(index,item) }}
                                         >
                                         </i> 
                                      </span>
                                         {"  "}
                                     <div className = {`labelOut-${item.level}`}>
                                        <a>{item.name}</a>
                                        <span className = "dateEnd">{dated}
                                        <EditTask task = {item} />
                                        </span>
                                     </div>

                                    </div>)
                                  }
                                    })}
                            </Form>
                        </Row>
                        <br />
                        <div className="ListAdjust2">
                            <div className="icon">
                                <AddTask />
                            </div>
                            <div className="icon">
                                <Alarm />
                            </div>
                            <div className="icon">
                                <Today />
                            </div>
                        </div>
                        <br />
                    </Col>
                    <br />
                    <Col sm={8}>
                    <div id = "Cal">
                      <Paper>
                        <Scheduler
                            data={appointments}
                        >
                            <EditingState
                               onCommitChanges={commitChanges}
                            />
                            <ViewState
                                defaultCurrentDate={todaydate}
                            />

                            <MonthView
                                timeTableCellComponent={TimeTableCell}
                                dayScaleCellComponent={DayScaleCell}
                            />

                            <Appointments
                                appointmentComponent={Appointment}
                                appointmentContentComponent={AppointmentContent}
                            />
                            <Resources
                                data={resources}
                            />

                            <Toolbar
                                flexibleSpaceComponent={FlexibleSpace}
                            />
                            <DateNavigator />
                            <EditRecurrenceMenu />

                            <AppointmentTooltip
                              showCloseButton
                              showDeleteButton
                            />
                            <AppointmentForm />

                        </Scheduler>
                      </Paper>
                      </div>
                    </Col>
                </div>
            </Container>
        </div>
    );
}
export default Calendar;


