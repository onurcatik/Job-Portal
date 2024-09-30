// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { IconButton, useTheme } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Link } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';

// const CardElement = ({ jobTitle, description, category, location, id }) => {
//     const { palette } = useTheme();
//     return (
//         <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>

//             <CardContent >
//                 <Typography sx={{ fontSize: 15, color: "gray", fontWeight: 500 }} gutterBottom>
//                     <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {location}
//                 </Typography>
//                 <Typography variant="h5" component="div">
//                     {jobTitle}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     {category}
//                 </Typography>
//                 <Typography variant="body2">
//                     Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button disableElevation variant='contained' size="small" startIcon={<AddIcon />}><Link style={{ textDecoration: "none", color: "black", boxShadow: 0 }} to={`/job/${id}`}>More Details</Link></Button>
//             </CardActions>
//         </Card>
//     );
// }

// export default CardElement;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { IconButton, useTheme } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Link } from 'react-router-dom';
// import { alpha } from '@mui/system';

// const CardElement = ({ jobTitle, salary, category, location, description, id }) => {
//     const { palette } = useTheme();
//     const darkenedColor = alpha(palette.secondary.main, 0.2); // Hafif koyulaştırılmış renk
//     const cardBackground = '#f0f0f0'; // Beyaz arka plan

//     return (
//         <Card
//             sx={{
//                 minWidth: 600, // Resimdeki gibi daha dar genişlik
//                 mb: 4,
//                 mt: 5,
//                 background: cardBackground,
//                 borderRadius: '15px',
//                 boxShadow: `0 4px 20px ${alpha(palette.primary.dark, 0.1)}`, // Gölge
//                 padding: '20px',
//                 transition: 'transform 0.3s ease-in-out',
//                 '&:hover': {
//                     transform: 'translateY(-5px)', // Hover'da yukarı kaydır
//                     boxShadow: `0 6px 30px ${alpha(palette.primary.dark, 0.3)}`
//                 }
//             }}
//         >
//             <CardContent>
//                 <Typography variant="h5" sx={{ fontWeight: 'bold', color: palette.text.primary, mb: 2 }}>
//                     {jobTitle}
//                 </Typography>
//                 <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
//                     Category: <span style={{ fontWeight: 'normal' }}>{category || "No category"}</span>
//                 </Typography>
//                 <Typography sx={{ fontSize: 16, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
//                     Location: <LocationOnIcon sx={{ color: palette.secondary.main, ml: 1 }} /> <span style={{ fontWeight: 'normal' }}>{location}</span>
//                 </Typography>
//                 <Typography sx={{ mt: 2, fontStyle: 'italic', opacity: 0.8 }}>
//                     Full-Stack
//                 </Typography>
//             </CardContent>
//             <CardActions>
//             <Button
//     variant='contained'
//     size="large"
//     sx={{
//         backgroundColor: 'green',  // Yeşil arka plan
//         color: "white",
//         width: 'auto', // Genişliği otomatik ayarla
//         maxWidth: '500px', // Maksimum genişliği ayarla
//         '&:hover': {
//             backgroundColor: '#006400',
//         }
//     }}
// >
//     <Link
//         style={{
//             textDecoration: "none",
//             color: "inherit",
//             display: 'block',
//             textAlign: 'center'
//         }}
//         to={`/job/${id}`}
//     >
//         MORE DETAILS
//     </Link>
// </Button>

//             </CardActions>
//         </Card>
//     );
// }

// export default CardElement;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useTheme } from "@mui/material";
// import { Link } from "react-router-dom";

// const CustomCard = ({
//   jobTitle,
//   salary,
//   category,
//   location,
//   description,
//   id,
// }) => {
//   const { palette, breakpoints } = useTheme();
//   const cardBackground = palette.background.paper; // Temanın arka plan rengi
//   const headerBackground = palette.primary.main; // Başlık arka plan rengi

//   return (
//     <Card
//       sx={{
//         width: 700, // Adjust width to be responsive
//         maxWidth: 1500, // Max width to ensure it doesn't grow too large
//         mb: 3,
//         mt: 4,
//         background: cardBackground,
//         borderRadius: "15px",
//         boxShadow: `0 6px 15px ${palette.grey[400]}`,
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "column",
//         [breakpoints.down("md")]: {
//           width: "100%", // Full width on smaller screens
//         },
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: headerBackground,
//           color: "white",
//           p: 2,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontFamily: "Arial, sans-serif",
//           borderRadius: "0 0 450% 50%", // Alt köşeleri yuvarlayarak içbükey efekt veriyoruz
//           boxShadow: "0px -10px 15px rgba(0, 0, 0, 0.3)", // Üstten gölge ekleyerek eğrilik hissini artırıyoruz
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           <strong>Job Title:{jobTitle}</strong>
//         </Typography>
//       </Box>
//       <CardContent>
//         <Typography variant="body1" sx={{ mb: 1 }}>
//           <strong>Category:</strong> {category || "Not specified"}
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 1 }}>
//           <strong>Location:</strong> {location || "Not available"}
//         </Typography>
//         <Typography variant="body1">
//           <strong>Description</strong>:{" "}
//           {description
//             ? description.split(" ").slice(0, 30).join(" ") + "..."
//             : "No description available."}
//         </Typography>
//       </CardContent>
//       <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
//         <Button
//           variant="contained"
//           size="large"
//           sx={{
//             backgroundColor: palette.primary.dark,
//             color: "white",
//             "&:hover": {
//               backgroundColor: "#ff1493",
//             },
//           }}
//         >
//           <Link
//             to={`/job/${id}`}
//             style={{
//               textDecoration: "none",
//               color: "inherit",
//             }}
//           >
//             View Details
//           </Link>
//         </Button>
//       </Box>
//     </Card>
//   );
// };

// export default CustomCard;

import * as React from "react";
import { Card, CardContent, Typography, Button, Box, Icon } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PollIcon from "@mui/icons-material/Poll"; // İstatistik ikonu
import { useTheme } from "@emotion/react";


const AdvancedCard = ({
  jobTitle,
  salary,
  category,
  location,
  description,
  id,
  applicants, // Başvuru sayısı için yeni alan
}) => {

  const theme = useTheme();
  const { palette } = theme;
  return (
    <motion.div
      whileHover={{ scale: 1.07, rotateX: 5, rotateY: 5 }} // Hover'da 3D döndürme efekti
      transition={{ duration: 0.4 }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 850,
          margin: "20px auto",
          background: "linear-gradient(145deg, #1b1b1b, #222222)",
          borderRadius: "25px",
          boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.3)",
          position: "relative",
          overflow: "hidden",
          transformStyle: "preserve-3d", // 3D Katmanları etkinleştir
        }}
      >
        {/* Animasyonlu arka plan */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: palette.primary.main,



            zIndex: 0,
            opacity: 0.9,
            transition: "background 0.5s ease",
          }}
          className="card-bg"
        />

        {/* Üst Kenar Başlık ve Dinamik İstatistik */}
        <Box
          sx={{
            padding: 4,
            zIndex: 1,
            background: "white", // Başlık altında yarı şeffaf koyu arka plan
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomLeftRadius: "50% 20%",
            borderBottomRightRadius: "50% 20%",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "bold", zIndex: 2 }}
          >
            {jobTitle || "Job Title"}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
            <Icon component={PollIcon} sx={{ fontSize: 40, mr: 2 }} />
          
          </Box>
        </Box>

        <CardContent
          sx={{
            padding: "30px",
            color: "#ffffff",
            textAlign: "left",
            background: "white", // İç bölüm yarı şeffaf arka plan
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "black",
              letterSpacing: "1.5px",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon component={CategoryIcon} sx={{ mr: 1 }} />
            <strong>Category: </strong> {category || "Not Specified"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "#f5576c",
              fontSize: "1.1rem",
              letterSpacing: "1.5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon component={LocationOnIcon} sx={{ mr: 1 }} />
            <strong>Location: </strong> {location || "Unknown"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "black",
              fontSize: "1rem",
            }}
          >
            {description
              ? description.substring(0, 120) + "..."
              : "No description available."}
          </Typography>
        </CardContent>

        {/* Dinamik Buton ve Alt Bölüm */}
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            background: "#1b1b1b",
          }}
        >
          <Button
            component={Link}
            to={`/job/${id}`}
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              padding: "12px 25px",
              borderRadius: "30px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f5576c",
                transform: "scale(1.05)",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

export default AdvancedCard;

