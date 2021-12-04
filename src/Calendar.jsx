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

var token = localStorage.getItem("accessToken");
const username = JSON.parse(localStorage.getItem('user'));
const email = JSON.parse(localStorage.getItem('email'));

import { io } from "socket.io-client";
const socket = io("https://MeePlan101-backend.meeplan.repl.co/?token="+token,{ 
withCredentials: true
});



function Today() {
    return (
        <div>
            <Card sx={{ maxWidth: 90 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="90"
                        image="/src/Picture/IMG_4723.jpeg"
                        alt="Alarm"
                    />
                </CardActionArea>
            </Card>
        </div>

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
                        image="/src/Picture/IMG_4722.jpeg"
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
                        image="/src/Picture/IMG_4721.jpeg"
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


function Taskpopup(props) {
    var levelTask = 0;
    // var d = new Date();
    // var tzUTC = d.getTimezoneOffset()/60;
    const handleTask = () => {
      for (let i = 1; i<= 5;i++ ){
        if (document.getElementById("inline-radio-"+i).checked == true){
          levelTask = i;
        }
      }
      if (levelTask == 0){
        alert("please select level");
      }
      else{
        var newTask = {
          name: document.getElementById("taskName").value,
          description: document.getElementById("taskDescrpt").value,
          level: levelTask,
          done: false,
          date: document.getElementById("taskDate").value
        }
        var dateTime = document.getElementById("taskDate").value +"T"+ document.getElementById("taskTime").value
        //console.log(dateTime)
        // console.log(document.getElementById("taskTime").value)
        // var changeUTC = dateTime.getHours()+tzUTC
        // dateTime.setHours(changeUTC)
        var newTaskAlarm = {
          "name" :  document.getElementById("taskName").value,
          "date" : dateTime,
          "description" : document.getElementById("taskDescrpt").value
        }
        // console.log(newTaskAlarm);
        socket.emit("create_alarm",newTaskAlarm);
        socket.emit("create", newTask);
        props.onHide();
        // console.log(newTask);
        
      }
    }
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
                    <img src="./src/Picture/Taskbar.png" style={{ width: '120px', height: '50px' }} />
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control id = "taskName" type="Text" />
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Date</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>Time</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control id = "taskDate" type="Date" />
                            </Col>
                            <Col>
                                <Form.Control id = "taskTime" placeholder="Time" type="Time" />
                            </Col>
                        </Row>
                    </Form.Group>
                        <br />
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control id = "taskDescrpt" as="textarea" rows={3} />
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" className="Button-Save" onClick={handleTask}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Alarmpopup(props) {
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
                    <img src="./src/Picture/Alarmbar.png" style={{ width: '120px', height: '50px' }} />
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                         <Form.Label>Time</Form.Label>
                         <Form.Control placeholder="Time" type="Time" />
                        <br />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" className="Button-Save" onClick={props.onHide}>Save</Button>
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
        height: 100,
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
        alignItems: 'center',
    },
    text: {
        padding: '0.5em',
        textAlign: 'center',
    },
    sun: {
        color: '#FFEE58',
    },
    cloud: {
        color: '#90A4AE',
    },
    rain: {
        color: '#4FC3F7',
    },
    sunBack: {
        backgroundColor: '#FFFDE7',
    },
    cloudBack: {
        backgroundColor: '#ECEFF1',
    },
    rainBack: {
        backgroundColor: '#E1F5FE',
    },
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
            <img className="photo" style = {{filter: "invert(1) grayscale(100%) brightness(200%)"}}src="/src/Picture/Logo.png" />
        </div>
    </Toolbar.FlexibleSpace>
));

// class Demo extends React.PureComponent {
    
//     // #FOLD_BLOCK
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             appointments: {},
//         };
//         this.commitChanges = this.commitChanges.bind(this);
//         console.log(this.state)
//     }

        
//     // #FOLD_BLOCK
//     commitChanges({ added, changed, deleted }) {
//         this.setState((state) => {
//             let { data } = state;
//             if (added) {
//                 // const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//                 // data = [...data, { id: startingAddedId, ...added }];
//             }
//             if (changed) {
//                 // data = data.map(appointment => (
//                 //     changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//             }
//             if (deleted !== undefined) {
//                 data = data.filter(appointment => appointment.id !== deleted);
//                 socket.emit("delete",{"id" : deleted})
//             }
//             return { data };
//         });
//     }

//     render() {
//         const { data } = this.state;
//         const todaydate = new Date();
//         const bf2 = todaydate.getFullYear() - 2
//         const af2 = todaydate.getFullYear() + 2
        
//         socket.on("update_setting",(err)=>{
//         socket.emit("list",{
//             "lwr": bf2.toString() + "-01-01",
//             "upr": af2.toString() + "-01-01",
//             "tag" : "appointment"
//         })
//       })
//       socket.on("list",(data) =>{
//         var endDate = 0
//         var dateS = 0
//         var dateget
//       if (data.tag == "appointment"){
//          this.setState ({ appointments : data.result.map((appointment, index)=> {
//           //  console.log(appointment.date)
//            dateS = new Date(appointment.date)
//            dateget = dateS.getTime()
//            endDate = dateS.setTime((dateget+12000))
//            return({
//             "id" : appointment._id,
//             "title" : appointment.name,
//             //description : appointment.description,
//             "level": appointment.level,
//             "startDate": new Date(appointment.date),
//             "endDate": new Date(endDate)
//             })
//          })
//          })
//         //appointments = data.result
//          //console.log(appointments)
//       }
//       // appointments.sort((a, b) => (a.level < b.level) ? 1 : (a.level === b.level) ? ((a.name > b.name) ? 1 : -1) : -1 )
//         //console.log(appointments)
//       })

//         return (
//             <Paper>
//                 <Scheduler
//                     data={appointments}
//                 >
//                     <EditingState
//                          onCommitChanges={this.commitChanges}
//                     />
//                     <ViewState
//                         defaultCurrentDate={todaydate}
//                     />

//                     <MonthView
//                         timeTableCellComponent={TimeTableCell}
//                         dayScaleCellComponent={DayScaleCell}
//                     />

//                     <Appointments
//                         appointmentComponent={Appointment}
//                         appointmentContentComponent={AppointmentContent}
//                     />
//                     <Resources
//                         data={resources}
//                     />

//                     <Toolbar
//                         flexibleSpaceComponent={FlexibleSpace}
//                     />
//                     <DateNavigator />

//                     <EditRecurrenceMenu />
//                     <AppointmentTooltip
//                         showCloseButton
//                         showDeleteButton
//                         //showOpenButton
//                     />
//                     <AppointmentForm />
//                     <DragDropProvider />
//                 </Scheduler>
//             </Paper>
//         );
//     }
// }



//render(<Calendar />);

var taskAll = []

function Calendar() {
    var [appointments, setappointments] = useState([])
    const todaydate = new Date();
    var date7 = new Date();
    var s = date7.getDate()+7
    date7.setDate(s)
    useEffect(()=>{
      socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
      });
      socket.on("update_setting",(err)=>{
        socket.emit("list",{
            "lwr": new Date(),
            "upr": date7,
            "tag" : "todo"
        })
      })
      socket.on("list",(data) =>{
        if (data.tag == "todo"){
          taskAll = data.result
          taskAll.sort((a, b) => (a.level < b.level) ? 1 : (a.level === b.level) ? ((a.name > b.name) ? 1 : -1) : -1 )
          // console.log(data.result)
        }
      
      })

      socket.on("update_setting",(err)=>{
        var bf2 = todaydate.getFullYear() - 2
        var af2 = todaydate.getFullYear() + 2
        socket.emit("list",{
            "lwr": bf2.toString() + "-01-01",
            "upr": af2.toString() + "-01-01",
            "tag" : "appointment"
        })
      })
      socket.on("list",(data) =>{
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
        //appointments = data.result
         //console.log(appointments)
      }
      // appointments.sort((a, b) => (a.level < b.level) ? 1 : (a.level === b.level) ? ((a.name > b.name) ? 1 : -1) : -1 )
        //console.log(appointments)
      })      
    })
    // taskAll = appointments.slice()
    // taskAll.sort((a, b) => (a.level < b.level) ? 1 : (a.level === b.level) ? ((a.name > b.name) ? 1 : -1) : -1 )
    // console.log("task" + taskAll)

    //<Demo arg = {appointments}/>

      
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
        if (document.getElementById(`default-${index}`).checked == true ){
          socket.emit("edit",{
              "name": data.name,
              "description": data.description,
              "level": data.level,
              "date": data.date,
              "_id": data._id,
              "done": "1"
          })
          console.log(data)
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
        }
    }

     return (
        <div>
            <br />
            <Container fluid="md">
                <Row>
                    <Col sm={4}>
                        <Row  className="ListAdjust" >
                            <h2 className="Nav-todo">To Do List</h2>
                            <Form className="To-do">
                                {taskAll.map((item, index) => {
                                  if (item.done === 0){
                                  return (
                                    <div key={`default-${index}`} className="mb-3">
                                        <input type="checkbox" id={`default-${index}`} 
                                        onChange = {()=> {handleCheck(index,item) }}/> {"  "}
                                        <a>{item.name}</a>
                                    </div>)
                                  }
                                  else{
                                    return (
                                    <div key={`default-${index}`} className="mb-3">
                                        <input type="checkbox" id={`default-${index}`} 
                                        onChange = {()=> {handleCheck(index,item) }}
                                        checked /> {"  "}
                                        <a>{item.name}</a>
                                    </div>)
                                  }
                                    })}
                            </Form>
                        </Row>
                        <br />
                        <Row className="ListAdjust2">
                            <Col className="icon">
                                <AddTask />
                            </Col>
                            <Col className="icon">
                                <Alarm />
                            </Col>
                            <Col className="icon">
                                <Today />
                            </Col>
                        </Row>
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
                </Row>
            </Container>
        </div>
    );
}
export default Calendar;

