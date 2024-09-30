


import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createJobTypeAction } from '../../redux/actions/jobTypeAction';

const validationSchema = yup.object({
  jobTypeName: yup.string('Enter a Category').required('Category is required'),
});

const DashCreateCategory = () => {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user: user && user._id,
      jobTypeName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(createJobTypeAction(values));
      actions.resetForm();
    },
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 2, sm: 4, md: 8 }, // Responsive padding
         // Background color for whole form section
      }}
    >
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{
          width: { xs: '100%', sm: '90%', md: '60%', lg: '40%' }, // Responsive width
          padding: { xs: 2, sm: 3, md: 4 },
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Card shadow effect
          backgroundColor: '#ffffff', // White background for the form
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            pb: 3,
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
          }}
        >
          Create a Category
        </Typography>
        <TextField
          fullWidth
          id="jobTypeName"
          label="Category"
          name="jobTypeName"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Category name"
          value={formik.values.jobTypeName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)}
          helperText={formik.touched.jobTypeName && formik.errors.jobTypeName}
          sx={{
            mb: 3,
            '& .MuiInputBase-root': {
              backgroundColor: '#f9f9f9', // Light background inside input
              borderRadius: '4px',
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#1976d2', // Custom button color
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#115293', // Darker hover effect
            },
          }}
        >
          Create Category
        </Button>
      </Box>
    </Box>
  );
};

export default DashCreateCategory;
