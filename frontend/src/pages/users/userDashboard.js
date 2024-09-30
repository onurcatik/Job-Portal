import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import moment from 'moment';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';

const chartData = [
  { name: "Jobs", value: 6 },
  { name: "Projects", value: 3 },
  { name: "Others", value: 12 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const UserDashboard = () => {
  const { user } = useSelector(state => state.userProfile);

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        // backgroundColor: "#1e1e1e",
        minHeight: "100vh", // Sayfanın minimum yüksekliği
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // İçeriği dikeyde ortala
        fontFamily: "Arial, sans-serif",
        overflow: 'hidden', // Yatay ve dikey taşmayı önle
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%' }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            mb: { xs: 3, sm: 4, md: 5 },
            textAlign: "center",
            fontFamily:"Arial- sans serif"
          }}
        >
          Welcome to Your Dashboard
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                backgroundColor: "#2e2e2e",
                padding: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                height: 'auto', // Yüksekliği otomatik ayarla
                maxWidth: '100%', // Taşmayı önle
              }}
            >
              <CalendarMonthIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: "#00C49F" }} />
              <Typography sx={{ color: "white", mt: 2 }}>
                Member since: {user && moment(user.createdAt).format('YYYY / MM / DD')}
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                backgroundColor: "#2e2e2e",
                padding: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                height: 'auto', // Yüksekliği otomatik ayarla
                maxWidth: '100%', // Taşmayı önle
              }}
            >
              <WorkIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: "#FFBB28" }} />
              <Typography sx={{ color: "white", mt: 2 }}>
                Jobs Submitted: {user && user.jobsHistory.length}
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                backgroundColor: "#2e2e2e",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: '100%',
                maxWidth: '100%', // Taşmayı önle
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'auto',
                maxHeight: '300px', // Yüksekliği ayarla
              }}
            >
              <Typography sx={{ color: "white", mb: 2 }}>
                Jobs Overview
              </Typography>
              <PieChart width={300} height={250}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;



// import React from "react";
// import { Box, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
// import { useSelector } from "react-redux";
// import moment from "moment";
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

// const UserDashboard = () => {
//     const { user } = useSelector(state => state.userProfile);

//     const formattedDate = user ? moment(user.createdAt).format('MMM YYYY') : "N/A";
//     const jobCount = user ? user.jobsHistory.length : 0;

//     return (
//         <Box sx={{ 
//             p: 0, // Sayfa dışına taşmayı önlemek için padding'i sıfır yaptık
//             m: 0, // Margin'leri de sıfırladık
//             width: '70vw', // Ekran genişliğine tam uyumlu olacak şekilde ayarladık
//             maxWidth: '73vw', // Genişliğin aşmaması için %100 sınırladık
//             overflowX: 'hidden', // Yatay kaymayı tamamen engellemek için
//             boxSizing: 'border-box', // Padding ve margin genişlik hesaplamasına dahil edilsin
//         }}>
//             <Typography variant="h3" align="center" sx={{ 
//                 mb: 4,  
//                 color: 'white', 
//                 fontFamily: 'Arial, sans-serif',
//                 width: '100%' // Metin genişliğinin de tam olarak sayfaya uymasını sağlıyoruz
//             }}>
//                 User Dashboard
//             </Typography>
//             <Grid container spacing={4} justifyContent="center" sx={{ 
//                 width: '170%', 
//                 margin: 0, 
//                 padding: 0, 
//                 maxWidth: '190%', // Grid bileşeni de tam ekran genişliğinde olacak
//                 overflowX: 'hidden' // Yatay kaymayı burada da önlüyoruz
//             }}>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card sx={{ 
//                         minWidth: 275, 
//                         bgcolor: 'white', 
//                         boxShadow: 3, 
//                         borderRadius: "15px",
//                         width: '100%', // Kart bileşeninin taşmasını engelliyoruz
//                         maxWidth: '100%' 
//                     }}>
//                         <CardContent>
//                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                 <CalendarTodayIcon sx={{ color: '#00796b', fontSize: 40, mr: 2 }} />
//                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                     Member Since
//                                 </Typography>
//                             </Box>
//                             <Typography variant="h5" component="div" sx={{ color: '#004d40' }}>
//                                 {formattedDate}
//                             </Typography>
//                         </CardContent>
//                         <Divider />
//                         <CardContent>
//                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                 <WorkOutlineIcon sx={{ color: '#00796b', fontSize: 40, mr: 2 }} />
//                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                     Jobs Submitted
//                                 </Typography>
//                             </Box>
//                             <Typography variant="h5" component="div" sx={{ color: '#004d40' }}>
//                                 {jobCount}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

// export default UserDashboard;
