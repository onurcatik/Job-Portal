import { Card, CardContent, Stack, Typography, Button, Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import LoadingBox from "../component/LoadingBox";
import Navbar from "../component/Navbar";
import { jobLoadSingleAction } from "../redux/actions/jobAction";
import { userApplyJobAction } from "../redux/actions/userAction";
import { motion } from "framer-motion"; // Framer Motion for animations
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useTheme } from "@emotion/react";


const SingleJob = () => {
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);
  const { id } = useParams();
  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  const theme = useTheme();
  const { palette } = theme;


  const applyForAJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob && singleJob.title,
        description: singleJob && singleJob.description,
        salary: singleJob && singleJob.salary,
        location: singleJob && singleJob.location,
      })
    );
  };

  return (
    <>
      <Box
        sx={{
          background:`white`,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1, py: "40px", borderRadius: "15px" }}>
          <Container>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              justifyContent="center"
            >
              <Box sx={{ flex: 3, p: 2 }}>
                {loading ? (
                  <LoadingBox />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "#f0f0f0",
                        borderRadius: "20px",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)", // Hafif gölgelendirme
                        overflow: "hidden",
                        padding: 3,
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h4"
                          component="h3"
                          sx={{ fontWeight: "bold", mb: 2, color: "#3c1053" }}
                        >
                          {singleJob && singleJob.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          <AttachMoneyIcon sx={{ mr: 1, color: "black" }} />
                          <Box component="span" sx={{ fontWeight: 700 }}>
                            Salary:
                          </Box>
                          &nbsp; ${singleJob && singleJob.salary}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 0,
                            fontSize: "1.1rem",
                          }}
                        >
            
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          <LocationOnIcon sx={{ mr: 1, color: "#f5576c" }} />
                          <Box component="span" sx={{ fontWeight: 700 }}>
                            Location:
                          </Box>
                          &nbsp; {singleJob && singleJob.location}
                        </Typography>
                        <Typography variant="body2" sx={{ pt: 2, fontSize: "1rem" }}>
                          <Box component="span" sx={{ fontWeight: 700 }}>
                            Description:
                          </Box>
                          &nbsp; {singleJob && singleJob.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </Box>
              <Box sx={{ flex: 1, p: 2, display: "flex", justifyContent: "center" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    onClick={applyForAJob}
                    sx={{
                      fontSize: "16px",
                      bgcolor: palette.primary.main,
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      padding: "10px 20px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#f5576c",
                      },
                    }}
                    variant="contained"
                  >
                    Apply for this Job
                  </Button>
                </motion.div>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default SingleJob;

