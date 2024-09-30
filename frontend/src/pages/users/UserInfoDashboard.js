// import { useTheme } from '@mui/material';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { useSelector } from 'react-redux';



// const UserInfoDashboard = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const { palette } = useTheme();
//     return (
//         <>
//             <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
//                 <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
//                     <CardContent>
//                         <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
//                             Personal Info
//                         </Typography>
//                         <hr style={{ marginBottom: "30px" }} />
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             First name: {user && user.firstName}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             Last name: {user && user.lastName}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             E-mail:  {user && user.email}
//                         </Typography>
//                         <Typography sx={{ mb: 1.5, color: "white", pt: 2 }} color="text.secondary">
//                             Status: {user && user.role === 0 ? "Regular user" : "Admin"}
//                         </Typography>

//                     </CardContent>
//                 </Card>
//             </Box>
//         </>
//     )
// }

// export default UserInfoDashboard

// import { useTheme } from '@mui/material';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import { useSelector } from 'react-redux';

// const UserInfoDashboard = () => {
//     const { user } = useSelector((state) => state.userProfile);
//     const { palette } = useTheme();

//     return (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//             <Grid container spacing={4} sx={{ maxWidth: '900px', p: 4 }}>
//                 <Grid item xs={12}>
//                     <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 'bold', color: "white"}}>
//                         User Dashboard
//                     </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                     <Paper elevation={6} sx={{
//                         p: 4, 
//                         borderRadius: 3, 
//                         bgcolor: "white", 
//                         color: "black", 
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.05)' },
//                         boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
//                     }}>
//                         <Typography variant="h6" gutterBottom>
//                             First Name:
//                         </Typography>
//                         <Typography variant="body1">{user && user.firstName}</Typography>
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                     <Paper elevation={6} sx={{
//                         p: 4, 
//                         borderRadius: 3, 
//                         bgcolor: "white", 
//                         color: "black", 
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.05)' },
//                         boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
//                     }}>
//                         <Typography variant="h6" gutterBottom>
//                             Last Name:
//                         </Typography>
//                         <Typography variant="body1">{user && user.lastName}</Typography>
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                     <Paper elevation={6} sx={{
//                         p: 4, 
//                         borderRadius: 3, 
//                         bgcolor: "white", 
//                         color: "black", 
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.05)' },
//                         boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
//                     }}>
//                         <Typography variant="h6" gutterBottom>
//                             E-mail:
//                         </Typography>
//                         <Typography variant="body1">{user && user.email}</Typography>
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                     <Paper elevation={6} sx={{
//                         p: 4, 
//                         borderRadius: 3, 
//                         bgcolor: "white", 
//                         color: "black", 
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.05)' },
//                         boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
//                     }}>
//                         <Typography variant="h6" gutterBottom>
//                             Status:
//                         </Typography>
//                         <Typography variant="body1">
//                             {user && user.role === 0 ? "Regular User" : "Admin"}
//                         </Typography>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default UserInfoDashboard;


import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const UserInfoDashboard = () => {
    const { user } = useSelector((state) => state.userProfile);
    const { palette } = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100vh', padding: 4 }}>
            <Grid container spacing={4} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="left" sx={{ mb: 2, color: "white", fontFamily:"Arial- sans serif" }}>
                         Personal Info
                    </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Paper elevation={6} sx={{
                        p: 3, 
                        borderRadius: "15px", 
                        bgcolor: "white", 
                        color: "black", 
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                        boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
                    }}>
                        <Typography variant="h6" gutterBottom>
                            First Name:
                        </Typography>
                        <Typography variant="body1">{user && user.firstName}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={6} sx={{
                        p: 4, 
                        borderRadius: "15px", 
                        bgcolor: "white", 
                        color: "black", 
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                        boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Last Name:
                        </Typography>
                        <Typography variant="body1">{user && user.lastName}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={6} sx={{
                        p: 4, 
                        borderRadius: "15px", 
                        bgcolor: "white", 
                        color: "black", 
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                        boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
                    }}>
                        <Typography variant="h6" gutterBottom>
                            E-mail:
                        </Typography>
                        <Typography variant="body1">{user && user.email}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={6} sx={{
                        p: 4, 
                        borderRadius: "15px", 
                        bgcolor: "white", 
                        color: "black", 
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                        boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.2)`
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Status:
                        </Typography>
                        <Typography variant="body1">
                            {user && user.role === 0 ? "Regular User" : "Admin"}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserInfoDashboard;
