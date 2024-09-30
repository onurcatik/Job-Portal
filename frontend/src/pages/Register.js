

import { Avatar, Box, Grid, Typography } from "@mui/material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../redux/actions/userAction";
import { useTheme } from "@mui/material";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .min(3, "First Name should be of minimum 3 characters length")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .min(3, "Last Name should be of minimum 3 characters length")
    .required("Last Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const { palette } = useTheme();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignUpAction(values));
      actions.resetForm();
    },
  });

  

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 140px)",
          display: "flex",
          alignItems: "center",
          backgroundColor:"white",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          px: 2, // Responsive padding
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          sx={{
            backgroundColor: "#f0f0f0",
            padding: 4,
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: 480,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "white", mb: 3, width: 56, height: 56 }}>
          <LockOpenIcon sx={{ color: 'grey' }} />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ color: 'black', mb: 3 }}>
            Register
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black' }, // Style for the input label
                }}
                placeholder="First Name"
                sx={{
                  mb: 3,
                  '& input::placeholder': { color: 'black' }, // Placeholder text color
                   // Label color
                }}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black' }, // Style for the input label
                }}
                placeholder="Last Name"
                sx={{
                  mb: 3,
                  '& input::placeholder': { color: 'black' }, // Placeholder text color // Label color
                }}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black' }, // Style for the input label
                }}
                placeholder="E-mail"
                sx={{
                  '& input::placeholder': { color: 'black' }, // Style for the placeholder text
                 
                }}
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
                name="password"
                label="Password"
                type="password"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black' }, // Style for the input label
                }}
                placeholder="Password"
                sx={{
                  mb: 3,
                  '& input::placeholder': { color: 'black' }, // Placeholder text color
                }}
                
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
              backgroundColor: "palette.primary.main",

              borderRadius: "15px",
              color: "white",
              "&:hover": {
                backgroundColor: "#f5576c",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Register;
