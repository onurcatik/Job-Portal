

import {
  Box,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  useTheme,
  Container,
} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const theme = useTheme();

  const [progress, setProgress] = useState({
    admins: 0,
    jobs: 0,
    categories: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress({
        admins: 20,
        jobs: 34,
        categories: 11,
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const cardData = [
    {
      icon: <SupervisorAccountIcon sx={{ fontSize: 40 }} />,
      title: "Administrators",
      value: 14,
      progress: progress.admins,
      color: "#1976d2",
      
    },
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: "Jobs",
      value: 21,
      progress: progress.jobs,
      color: "#388e3c",
    },
    {
      icon: <CategoryIcon sx={{ fontSize: 40 }} />,
      title: "Job Categories",
      value: 7,
      progress: progress.categories,
      color: "#f57c00",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ p: { xs: 2, md: 3 }, minHeight: "auto" }}>
      <Typography
        variant="h4"
        sx={{ mb: { xs: 2, md: 3 }, color: "white", textAlign: "center", fontSize: { xs: "1.5rem", md: "2rem" },fontFamily:"Arial- sans serif" }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: { xs: 2, md: 3 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#fff",
                boxShadow: 2,
                borderRadius: 2,
                textAlign: "center",
                minHeight: "auto",
              }}
            >
              <Box
                sx={{
                  bgcolor: card.color,
                  borderRadius: "50%",
                  p: 1.5,
                  mb: 1.5,
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 70,
                  height: 70,
                }}
              >
                {card.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "medium", fontSize: { xs: "1rem", md: "1.25rem" } }}>
                {card.title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                {card.value}
              </Typography>
              <Box sx={{ mt: 2, width: "100%" }}>
                <CircularProgress
                  variant="determinate"
                  value={card.progress}
                  size={50}
                  thickness={4}
                  sx={{ color: card.color }}
                />
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: theme.palette.text.secondary, fontSize: { xs: "0.75rem", md: "1rem" } }}
                >
                  Progress: {card.progress}%
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default AdminDashboard;

