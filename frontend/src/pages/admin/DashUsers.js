
import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction, deleteSingleUserAction } from '../../redux/actions/userAction';

const DashUsers = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(allUserAction());
    }, [dispatch]);

    const { users, loading } = useSelector(state => state.allUsers);
    let data = (users !== undefined && users.length > 0) ? users : [];

    const deleteUserById = (e, id) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteSingleUserAction(id));
        }
    };

    const columns = [
        {
            field: '_id',
            headerName: 'User ID',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 150,
        },
        {
            field: 'role',
            headerName: 'User status',
            width: 150,
            renderCell: (params) => (
                params.row.role === 1 ? "Admin" : "Regular user"
            )
        },
        {
            field: 'createdAt',
            headerName: 'Creation date',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
            )
        },
        {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button variant="contained">
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link>
                    </Button>
                    <Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">Delete</Button>
                </Box>
            )
        }
    ];

    return (
        <Box sx={{ 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            width: '100%',
            maxWidth: '71.5vw', // Ekranın tamamını kapsaması için
            overflowX: 'hidden',
            boxSizing: 'border-box',
           
        }}>
            <Typography variant="h4" sx={{ color: "white", pb: 3, textAlign: 'left', width: '100%', fontFamily:"Arial- sans serif" }}>
                All users
            </Typography>
            <Box sx={{ 
                pb: 2, 
                display: "flex", 
                justifyContent: "left",
                width: '100%'
            }}>
                <Button variant='contained' color="success" startIcon={<AddIcon />}>
                    Create user
                </Button>
            </Box>
            <Paper sx={{ 
                width: '100%', 
                bgcolor: "secondary.midNightBlue",
                overflowX: 'auto', 
                maxWidth: '100%',
            }}>
                <Box sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        sx={{
                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'black',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) => theme.palette.secondary.main,
                            },
                            button: {
                                color: '#ffffff',
                            },
                            '& .MuiDataGrid-columnHeaders': {
                                bgcolor: 'primary.main',
                            },
                            '& .MuiDataGrid-cell': {
                                wordBreak: 'break-word',
                            },
                        }}
                        getRowId={(row) => row._id}
                        rows={data}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default DashUsers;
