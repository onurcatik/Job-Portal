

import { Box, MenuItem, Typography, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import { editSingleJobAction, jobLoadSingleAction } from '../../redux/actions/jobAction';
import { useNavigate, useParams } from 'react-router-dom';
import { EDIT_JOB_RESET } from '../../redux/constants/jobconstant';

const validationSchema = yup.object({
    title: yup.string('Enter a job title').required('title is required'),
    description: yup.string('Enter a description').min(6, 'Description should be of minimum 6 characters length').required('Description is required'),
    salary: yup.number('Enter a salary').required('Salary is required'),
    location: yup.string('Enter a location').required('Location is required'),
    available: yup.boolean('Add availability').required('Availability is required'),
    jobType: yup.string('Enter a Category').required('Category is required'),
});

const DashEditJob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    // Sayfa açıldığında gerekli veri yüklemeleri
    useEffect(() => {
        dispatch(jobTypeLoadAction());
        if (id) {
            dispatch(jobLoadSingleAction(id));
        }
    }, [id, dispatch]);

    const { jobType } = useSelector(state => state.jobTypeAll);
    const { singleJob } = useSelector(state => state.singleJob);
    const { success } = useSelector(state => state.updateJob || {});

    const formik = useFormik({
        initialValues: {
            _id: singleJob?._id,
            title: singleJob?.title,
            description: singleJob?.description,
            salary: singleJob?.salary,
            location: singleJob?.location,
            available: singleJob?.available,
            jobType: singleJob?.jobType?._id,
        },
        validationSchema,
        enableReinitialize: true, // Formu güncel veriyle yeniden başlatma
        onSubmit: (values, actions) => {
            dispatch(editSingleJobAction(values)); // Düzenleme işlemi
            actions.resetForm(); // Formu sıfırla
        },
    });

    // Başarılı güncelleme sonrası yönlendirme
    useEffect(() => {
        if (success === true) {
            setTimeout(() => {
                dispatch({ type: EDIT_JOB_RESET });
                navigate('/admin/jobs');
            }, 800);
        }
    }, [success, dispatch, navigate]);

    return (
        // Dış Box: Ekran ortasında merkezi yerleşim, daha küçük padding ve margin değerleri ile
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 2, px: 1 }}>
            
            {/* Formun çevreleyen kutusu */}
            <Box
                onSubmit={formik.handleSubmit}
                component="form"
                sx={{
                    p: 3, // Padding daha küçük
                    borderRadius: 2,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '400px', md: '500px', lg: '600px' }, // Genel genişlik küçültüldü
                    backgroundColor: '#fff',
                }}
            >
                {/* Başlık */}
                <Typography variant="h6" component="h2" sx={{ pb: 2, textAlign: 'center' }}>
                    Edit Job
                </Typography>

                {/* Form alanları için Grid kullanımı */}
                <Grid container spacing={1}> {/* Aradaki boşluklar daha dar */}
                    
                    {/* Job Title Alanı */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>

                    {/* Job Description Alanı */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Grid>

                    {/* Salary Alanı */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="salary"
                            name="salary"
                            label="Salary"
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Salary"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                    </Grid>

                    {/* Location Alanı */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />
                    </Grid>

                    {/* Available Alanı */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="available"
                            name="available"
                            label="Available"
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.available}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.available && Boolean(formik.errors.available)}
                            helperText={formik.touched.available && formik.errors.available}
                        />
                    </Grid>

                    {/* Job Type Seçim Alanı */}
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
                            {jobType && jobType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.jobTypeName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Submit Butonu */}
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" type="submit" sx={{ py: 1 }}>
                            Edit Job
                        </Button>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default DashEditJob;
