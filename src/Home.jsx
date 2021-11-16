// import React from 'react';
// import ReactDOM from 'react-dom'
// import Navbar from "./components/Navbar/Navbar";
import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
import { Modal, Button, Form, CloseButton, Row, Col, ToggleButton } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import background from "/src/Picture/Bg.jpeg";
import { useCycle } from "framer-motion";
import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";
import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";
import TestBG from './TestBG';
import LazyShow from './LazyShow';
import LazyShowY from './LazyShowY';
// import FUNCTIONZ from './FUNCTION';


const SLIDE_CHANGE_TIME_MS = 5000;


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


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


function AddTask() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setModalShow(true)}>
                    <CardMedia
                        component="img"
                        height="400"
                        image="/src/Picture/IMG_4721.jpeg"
                        alt="Add Task"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <LazyShow>
                            Add Task
                            </LazyShow>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <LazyShow>
                            Add your work, homework,<br />assignment and more!
                            </LazyShow>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href="/Profile" size="small" color="primary">
                    <LazyShow>
                        Go to task
                        </LazyShow>
                    </Button>
                </CardActions>
            </Card>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}


function Home() {
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div /*style = {{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
        width:'1668px',
        hieht: '2224px'  }}*/>

            <h1><TestBG /><br /><Item style={{textAlign: "center"}}>_______________</Item></h1>
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', fontSize: 100, fontFamily: 'Dosis'}} >
            <LazyShowY>
            FUNCTION 
            </LazyShowY> 
            </h2> <br />
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', fontSize: 100, fontFamily: 'Dosis'}} >
            <LazyShowY>
            FUNCTION
            </LazyShowY>
            </h2> <br />
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', fontSize: 100, fontFamily: 'Dosis'}} >
            <LazyShowY>
            FUNCTION
            </LazyShowY>
            </h2> <br />
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', fontSize: 100, fontFamily: 'Dosis'}} >
            <LazyShowY>
            FUNCTION
            </LazyShowY>
            </h2><br /><Item style={{textAlign: "center"}}>_______________</Item><br />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Item>
                                    <AddTask />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Card sx={{ maxWidth: 600 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image="/src/Picture/IMG_4722.jpeg"
                                                alt="Alarm"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                <LazyShow>
                                                <h>
                                                    Alarm
                                                    </h>
                                                    </LazyShow>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                <LazyShow>
                                                    Reminders for all your work, homework,<br />and everything else you have.
                                                    </LazyShow>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button onclicksize="small" color="primary" variant="outline-primary"
                                                onClick={handleClickOpen}>
                                                <LazyShow>
                                                Coming soon
                                                </LazyShow>
                                            </Button>
                                            <Dialog
                                                open={open}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={handleClose}
                                                aria-describedby="alert-dialog-slide-description"
                                            >
                                                <DialogTitle>{"Coming soon.."}</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-slide-description">
                                                        This feature is in development and will be available in the future.
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose} variant="outline-danger" >Close</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Card sx={{ maxWidth: 600 }}>
                                        <CardActionArea href="/Calendar">
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image="/src/Picture/calendar_test.png"
                                                alt="Calendar"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                <LazyShow>
                                                    Calender
                                                    </LazyShow>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                <LazyShow>
                                                    Show your dates and tasks in a quick <br />and convenient format. And can be used more.
                                                    </LazyShow>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button href="/Calendar" size="small" color="primary" >
                                            <LazyShow>
                                                Go to calendar
                                                </LazyShow>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Card sx={{ maxWidth: 600 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image="/src/Picture/IMG_4723.jpeg"
                                                alt="Aboutus"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                <LazyShow>
                                                    About us
                                                    </LazyShow>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                <LazyShow>
                                                    Get to know us and our web development team <br /> including IoT development department.
                                                    </LazyShow>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                            <LazyShow>
                                                Read more
                                                </LazyShow>
                                            </Button>
                                        </CardActions>
                                    </Card>

                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
            <img src="./src/Picture/Bg.jpeg">
            
            
            
            </img>
            <div>
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'normal', fontSize: 50, fontFamily: 'Dosis'}} >
            <LazyShowY>
            Mee Plan | Website & IoT
            </LazyShowY> 
            </h2>
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'normal', fontSize: 50, fontFamily: 'Dosis'}} >
            <LazyShowY>
            Mee Plan | Website & IoT
            </LazyShowY> 
            </h2>
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'normal', fontSize: 50, fontFamily: 'Dosis'}} >
            <LazyShowY>
            Mee Plan | Website & IoT
            </LazyShowY> 
            </h2>
            <h2 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'normal', fontSize: 50, fontFamily: 'Dosis'}} >
            <LazyShowY>
            Mee Plan | Website & IoT
            </LazyShowY> 
            </h2>
        </div>
        </div>


    );
}
export default Home;