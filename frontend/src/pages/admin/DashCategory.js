import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobTypeAction, jobTypeLoadAction } from '../../redux/actions/jobTypeAction';

import moment from 'moment'


const DashCategory = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobTypeLoadAction())
    }, []);


    const { jobType, loading } = useSelector(state => state.jobTypeAll);
    let data = [];
    data = (jobType !== undefined && jobType.length > 0) ? jobType : []

    //delete job by Id
    const deleteJobCategoryById = (e, id) => {
        dispatch(deleteJobTypeAction(id)); // Silme aksiyonunu çağırıyoruz
    };

    const columns = [

        {
            field: '_id',
            headerName: 'Category ID',
            width: 150,
            editable: true,
        },
        {
            field: 'jobTypeName',
            headerName: 'Category',
            width: 150,
        },
        {
            field: 'createdAt',
            headerName: 'Create At',
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
                    <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/category/${values.row._id}`}>Edit</Link></ Button>
                    < Button onClick={(e) => deleteJobCategoryById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
                </Box>
            )
        }
    ];


    return (
        
            <Box> {/* Sayfa yüksekliğini kısaltmak için height ayarlandı */}
            <Typography variant="h4" sx={{ color: "white", pb: 3, fontFamily:"Arial- sans serif" }}>
                Jobs Category
            </Typography>
            <Box sx={{ pb: 2, display: "flex", justifyContent: "left" }}>
                <Button variant="contained" color="success" startIcon={<AddIcon />}><Link style={{ color: "white", textDecoration: "none" }} to='/admin/category/create'>Create category</Link></ Button>
            </Box>
            <Paper sx={{ bgcolor: "secondary.midNightBlue", maxWidth:"71.5vw" }} >

                <Box sx={{ height: 500, maxWidth:"71.5vw" }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{

                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'black',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) =>
                                    // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                    theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }

                        }}
                        rows={data}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                    // components={{ Toolbar: GridToolbarExport }}
                    />
                </Box>
            </Paper>

        </Box>
    )
}

export default DashCategory