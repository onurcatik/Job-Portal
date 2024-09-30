import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserDetailsAction, updateUserAction } from '../../redux/actions/userAction'; 
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const EditUser = () => {
    const { id } = useParams();  // Get the user id from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user = {}, loading } = useSelector(state => state.userDetails || {});  // Safely access userDetails
    const [formData, setFormData] = useState({
        email: '',
        role: 0,  // Default to regular user
    });

    // Fetch user details when component mounts
  

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserAction(id, formData));  // Dispatch action to update user
        navigate('/admin/users');  // Redirect to the users list page after updating
    };

    return (
<Box sx={{ height: '100vh', display: "flex", alignItems: "center", justifyContent: "center", pt: 4, backgroundColor: 'primary.main' }}>

  <Paper sx={{ p: 4, border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ pb: 3 }}>Edit User</Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter user email"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            id="role"
            label="Role (0 for Regular User, 1 for Admin)"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter user role"
            sx={{ mb: 3 }}
          />

          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Update User
          </Button>
        </form>
      )}
    </Box>
  </Paper>
</Box>
      
    );
};

export default EditUser;
