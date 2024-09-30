

import { Avatar, Box, Typography, Button, TextField, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInAction } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { alpha, darken } from '@mui/system';
import { useTheme } from '@mui/material';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector(state => state.signIn);
  const { palette } = useTheme();

  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo.role === 1) {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    }
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignInAction(values));
      actions.resetForm();
    }
  });

  // const backgroundColor = `linear-gradient(135deg, #a8d5ba 0%, #004d00 100%)`;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: 'calc(100vh - 140px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundImage: `url('/path/to/your/image.jpg'), ${backgroundColor}`,
          backgroundColor:"white",
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
          px: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            backgroundColor: '#f0f0f0',
            padding: 4,
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            maxWidth: 480,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'white', mb: 3, width: 56, height: 56 }}>
            <LockClockOutlined sx= {{color: 'grey'}} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: 'black', mb: 3 }}>
            Log In
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black' } //
                }}
                sx={{
                  mb: 3,
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'black' },
                    '&:hover fieldset': { borderColor: '#ff1493' },
                    '&.Mui-focused fieldset': { borderColor: '#ff1493' }
                  },
                  '& input': { color: 'black' },
                  '& input::placeholder': { color: 'black' }, // Set placeholder text color to black
                }}
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  mb: 3,
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'black' },
                    '&:hover fieldset': { borderColor: '#ff1493' },
                    '&.Mui-focused fieldset': { borderColor: '#ff1493' }
                  },
                  '& input': { color: 'black' },
                  '& input::placeholder': { color: 'black' }, // Set placeholder text color to black
                }}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              mt: 3,
              backgroundColor: palette.primary.main,
              borderRadius: '15px',
              color: 'white',
              '&:hover': {
                backgroundColor: '#f5576c',
              },
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LogIn;
