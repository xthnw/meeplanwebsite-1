// import React from 'react';
// import ReactDOM from 'react-dom'
// import Navbar from "./components/Navbar/Navbar";
import './App.css';
import * as React from 'react';
import Image from 'react-bootstrap/Image';
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

            <div>
              <Container>
                <Row>
                  <Col className="columna">
                  <LazyShowY>
                   <h1>Welcome to Mee Plan</h1>
                  </LazyShowY>
                  <LazyShowY>
                   <p2>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</p2>
                  </LazyShowY>
                  </Col>
                  <Col>
                   <Image src="holder.js/171x180" rounded />
                   <Image src="./Picture/Logobar.png/171x180" rounded />
                  </Col>
                </Row>
              </Container>
            </div>
            <h1><TestBG /><br />
            <Item style={{textAlign: "center"}}>_______________</Item></h1>
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
            </h2><br /><Item style={{textAlign: "center"}}>_______________</Item>
            <br />
            <div>
            <h5 style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'normal', fontSize: 50, fontFamily: 'Dosis'}} >
            <div classNames="BottomBar">
            <LazyShowY>
            <p2>Mee Plan | Website & IoT</p2>
            </LazyShowY> 
            </div>
            </h5>
        </div>
        </div>


    );
}
export default Home;