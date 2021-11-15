import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { purple } from '@mui/material/colors';
import Login from './SignIn';
import swal from 'sweetalert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Liked', width: 70 },
    { field: 'subject', headerName: 'Subject', width: 130 },
    { field: 'lastName', headerName: 'Work', width: 130 },
    {
        field: 'left',
        headerName: 'Days left',
        type: 'number',
        width: 90,
    },
    
    {
        field: 'date',
        headerName: 'Date due',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    {
        field: 'time',
        headerName: 'Time',
        type: 'number',
        width: 90,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', subject: 'Jon', left: 35, date : 'Monday 10 April 2021', time : 16.00},
    { id: 2, lastName: 'Lannister', subject: 'Cersei', left: 42 },
    { id: 3, lastName: 'Lannister', subject: 'Jaime', left: 45 },
    { id: 4, lastName: 'Stark', subject: 'Arya', left: 16 },
    { id: 5, lastName: 'Targaryen', subject: 'Daenerys', left: null },
    { id: 6, lastName: 'Melisandre', subject: null, left: 150 },
    { id: 7, lastName: 'Clifford', subject: 'Ferrara', left: 44 },
    { id: 8, lastName: 'Frances', subject: 'Rossini', left: 36 },
    { id: 9, lastName: 'Roxie', subject: 'Harvey', left: 65 },
];

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return <Login />
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        window.location.href = "https://meeplanwebsite-1.meeplan.repl.co/login";
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#2E3B55' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 3 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Profile
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'block', displayPrint: 'none', m: 1 }}>
                    <br />
                </Box>
            </div>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
                    <Box gridColumn="span 5">
                        <Item>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>
                        </Item>
                    </Box>
                    <Box gridColumn="span 7">
                        <Item>xs=8</Item>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
