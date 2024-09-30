

import { Box, MenuItem, Typography, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import { registerAjobAction } from '../../redux/actions/jobAction';

const validationSchema = yup.object({
    title: yup.string('Enter a job title').required('Title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    salary: yup.number('Enter a salary').required('Salary is required'),
    location: yup.string('Enter a location').required('Location is required'),
    jobType: yup.string('Select a category').required('Category is required'),
});

const DashCreateJob = () => {
    const dispatch = useDispatch();

    // Load job types when component mounts
    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, [dispatch]);

    const { jobType } = useSelector((state) => state.jobTypeAll);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            jobType: '',
        },
        validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAjobAction(values));
            actions.resetForm();
        },
    });

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                p: 4,
                boxSizing: 'border-box',
                overflowX: 'hidden', // Yatay kaydırmayı engellemek için
                width: '100%',
            }}
        >
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: '#fff',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '500px', md: '600px', lg: '700px' }, // Farklı ekran boyutlarına göre genişlik
                    overflowX: 'hidden',
                }}
            >
                <Typography variant="h5" component="h2" sx={{ pb: 3, textAlign: 'center' }}>
                    Register a Job
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="salary"
                            name="salary"
                            label="Salary"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Salary"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="jobType"
                            id="jobType"
                            select
                            label="Category"
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                            helperText={formik.touched.jobType && formik.errors.jobType}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {jobType &&
                                jobType.map((cat) => (
                                    <MenuItem key={cat._id} value={cat._id}>
                                        {cat.jobTypeName}
                                    </MenuItem>
                                ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" type="submit" sx={{ py: 1.5 }}>
                            Create Job
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DashCreateJob;

