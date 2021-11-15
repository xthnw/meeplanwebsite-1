// import React, { Component } from 'react';
import * as React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './Calendar.css';
import { Modal, Button, Form, CloseButton, Row, Col, Container } from 'react-bootstrap';
import './App.css';
//import { render } from 'react-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
import WbSunny from '@material-ui/icons/WbSunny';
import FilterDrama from '@material-ui/icons/FilterDrama';
import Opacity from '@material-ui/icons/Opacity';
import ColorLens from '@material-ui/icons/ColorLens';
import { withStyles } from '@material-ui/core/styles';
import { owners } from '/src/demo-data/tasks';











//เมษาาาาพวขอไอคอนใหญ่กว่านี้นิดนึงไดม้าาาแบบนิดเดียวอะให้มันบาล้านซ์หนายยยยไอ3ก้อนอ่ะ ใหญ่ขึ้นมะะเหมือนจะไม่555555อีกทีๆๆๆๆๆๆๆๆๆๆๆๆโอเคคคแต้งกิ้ว


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
    return (
        <div >
            <Card sx={{ maxWidth: 90 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="90"
                        image="/src/Picture/IMG_4722.jpeg"
                        alt="Alarm"
                    />
                </CardActionArea>
            </Card>
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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}


function MyVerticallyCenteredModal(props) {
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
                    <img src="./src/Picture/Logo.png" style={{ width: '120px', height: '48px' }} />
                </div>
                <Modal.Title id="contained-modal-title-vcenter">
                    Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Text" />
                    </Form.Group>
                    <Form>
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
                                <Form.Control type="Date" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Time" type="Time" />
                            </Col>
                        </Row>
                        <br />
                    </Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Label>Level</Form.Label><tab />
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

                        </div>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="Button-Save" onClick={props.onHide}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}


function Task() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button variant="primary" className="Button-task" onClick={() => setModalShow(true)}>
                + Task
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}
function Calendar() {
    return (
        <div>
            <br />
            <Container fluid="md">
                <Row>
                    <Col sm={4}>
                        <Row>
                            <h2 className="Nav-todo">To Do List</h2>
                            <Form className="To-do">
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check type={type} id={`default-${type}`} label={`default ${type}`} />
                                        <Form.Check type={type} id={`default-${type}`} label={`default ${type}`} />
                                    </div>))}
                            </Form>
                        </Row>
                        <br />
                        <Row>
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
                    </Col>
                    <br />
                    <Col sm={8}>
                        <h2 className="calendar"></h2>
                        <Demo />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const appointments = [
    {
        id: 0,
        title: 'Watercolor Landscape',
        startDate: new Date(2018, 6, 23, 9, 30),
        endDate: new Date(2018, 6, 23, 11, 30),
        ownerId: 1,
    }, {
        id: 1,
        title: 'Monthly Planning',
        startDate: new Date(2018, 5, 28, 9, 30),
        endDate: new Date(2018, 5, 28, 11, 30),
        ownerId: 1,
    }, {
        id: 2,
        title: 'Recruiting students',
        startDate: new Date(2018, 6, 9, 12, 0),
        endDate: new Date(2018, 6, 9, 13, 0),
        ownerId: 2,
    }, {
        id: 3,
        title: 'Oil Painting',
        startDate: new Date(2018, 6, 18, 14, 30),
        endDate: new Date(2018, 6, 18, 15, 30),
        ownerId: 2,
    }, {
        id: 4,
        title: 'Open Day',
        startDate: new Date(2018, 6, 20, 12, 0),
        endDate: new Date(2018, 6, 20, 13, 35),
        ownerId: 6,
    }, {
        id: 5,
        title: 'Watercolor Landscape',
        startDate: new Date(2018, 6, 6, 13, 0),
        endDate: new Date(2018, 6, 6, 14, 0),
        rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20180816',
        exDate: '20180713T100000Z,20180727T100000Z',
        ownerId: 2,
    }, {
        id: 6,
        title: 'Meeting of Instructors',
        startDate: new Date(2018, 5, 28, 12, 0),
        endDate: new Date(2018, 5, 28, 12, 30),
        rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
        exDate: '20180705T090000Z,20180719T090000Z',
        ownerId: 5,
    }, {
        id: 7,
        title: 'Oil Painting for Beginners',
        startDate: new Date(2018, 6, 3, 11, 0),
        endDate: new Date(2018, 6, 3, 12, 0),
        rRule: 'FREQ=WEEKLY;BYDAY=TU;UNTIL=20180801',
        exDate: '20180710T080000Z,20180724T080000Z',
        ownerId: 3,
    }, {
        id: 8,
        title: 'Watercolor Workshop',
        startDate: new Date(2018, 6, 9, 11, 0),
        endDate: new Date(2018, 6, 9, 12, 0),
        ownerId: 3,
    },
];

const resources = [{
    fieldName: 'ownerId',
    title: 'Owners',
    instances: owners,
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

const WeatherIcon = ({ classes, id }) => {
    switch (id) {
        case 0:
            return <Opacity className={classes.rain} fontSize="large" />;
        case 1:
            return <WbSunny className={classes.sun} fontSize="large" />;
        case 2:
            return <FilterDrama className={classes.cloud} fontSize="large" />;
        default:
            return null;
    }
};

// #FOLD_BLOCK
const CellBase = React.memo(({
    classes,
    startDate,
    formatDate,
    otherMonth,
    // #FOLD_BLOCK
}) => {
    const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
        ? { day: 'numeric', month: 'long' }
        : { day: 'numeric' };
    return (
        <TableCell
            tabIndex={0}
            className={classNames({
                [classes.cell]: true,
                [classes.rainBack]: iconId === 0,
                [classes.sunBack]: iconId === 1,
                [classes.cloudBack]: iconId === 2,
                [classes.opacity]: otherMonth,
            })}
        >
            <div className={classes.content}>
                <WeatherIcon classes={classes} id={iconId} />
            </div>
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
            <img className="photo" src="/src/Picture/IMG_4715.png" />
            <Typography variant="h5" style={{ marginLeft: '10px' }}>Mee Plan</Typography>
        </div>
    </Toolbar.FlexibleSpace>
));

class Demo extends React.PureComponent {
    // #FOLD_BLOCK
    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    // #FOLD_BLOCK
    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const { data } = this.state;

        return (
            <Paper>
                <Scheduler
                    data={data}
                >
                    <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                    <ViewState
                        defaultCurrentDate="2018-07-17"
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
                        showOpenButton
                    />
                    <AppointmentForm />
                    <DragDropProvider />
                </Scheduler>
            </Paper>
        );
    }
}

//render(<Calendar />);

export default Calendar;
