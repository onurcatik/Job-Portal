

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NavBar from "../component/Navbar";
import Header from "../component/Header";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
  useTheme,
  Pagination,
  MenuList,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { jobLoadAction } from "../redux/actions/jobAction";
import CardElement from "../component/CardElement";
import Footer from "../component/Footer";
import LoadingBox from "../component/LoadingBox";
import SelectComponent from "../component/SelectComponent";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";
import { alpha, darken } from "@mui/system";

const Home = () => {
  const { jobs, pages, loading, setUniqueLocation } = useSelector(
    (state) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  // LogIn sayfasıyla uyumlu bir gradient arka plan tanımlıyoruz
  const backgroundColor = '#F0F0F0'

  return (
    <>
      <Header />
      <Box sx={{ background: backgroundColor, minHeight: "100vh" }}>
        {" "}
        {/* Gradient arka plan */}
        <NavBar />
        <Container sx={{ maxWidth: { xs: "100%", sm: "90%", md: "80%" }, px: { xs: 2, sm: 3, md: 5 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
            <Card
  sx={{
    minWidth: 250,
    padding: 5,
    height: "300px",
    background: `white`,
    borderRadius: "16px",
    boxShadow: `0 6px 16px ${alpha(palette.common.black, 0.3)}`,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: `0 8px 20px ${alpha(palette.common.black, 0.4)}`,
    },
    // Add margin-bottom to increase space below this card
    mb: 5,
  }}
>
  <Typography
    variant="h5"
    sx={{
      color: "black",
      mb: 5,
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
      textAlign: "center",
      textTransform: "uppercase",
    }}
  >
    <strong>Filter job by category</strong>
  </Typography>
  <SelectComponent
    handleChangeCategory={handleChangeCategory}
    cat={cat}
  />
</Card>

<Card
  sx={{
    minWidth: 250,
    padding: 3,
    height: "400px",
    background: `white`,
    borderRadius: "16px",
    boxShadow: `0 6px 16px ${alpha(palette.common.black, 0.3)}`,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: `0 8px 20px ${alpha(palette.common.black, 0.4)}`,
    },
    // Add margin-top to increase space above this card
    mt: 4,
  }}
>
  <Typography
    variant="h6"
    sx={{
      color: "black",
      mb: 2,
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
      textAlign: "center",
      textTransform: "uppercase",
    }}
  >
    <strong>Filter Jobs by Location</strong>
  </Typography>
  <MenuList>
    {setUniqueLocation &&
      setUniqueLocation.map((location, i) => (
        <MenuItem
          key={i}
          sx={{
            color: "black",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: palette.action.hover,
              color: "palette.primary.main,"
            },
          }}
        >
          <ListItemIcon>
            <LocationOnIcon sx={{ color: palette.primary.main }} />
          </ListItemIcon>
          <Link
            to={`/search/location/${location}`}
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {location}
          </Link>
        </MenuItem>
      ))}
  </MenuList>
</Card>

            </Box>

            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : jobs && jobs.length === 0 ? (
                <Box
                  sx={{
                    minHeight: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" sx={{ color: "black" }}>
                    No result found!
                  </Typography>
                </Box>
              ) : (
                jobs &&
                jobs.map((job, i) => (
                  <CardElement
                    key={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={
                      job.jobType ? job.jobType.jobTypeName : "No category"
                    }
                    location={job.location}
                    sx={{
                      background: darken(palette.primary.light, 0.1),
                      color: "white",
                      borderRadius: "15px",
                      boxShadow: `0 8px 16px ${alpha(
                        palette.common.black,
                        0.3
                      )}`,
                      "&:hover": {
                        backgroundColor: darken(palette.primary.main, 0.2),
                      },
                    }}
                  />
                ))
              )}

              <Stack spacing={2} sx={{ mt: 4 }}>
                <Pagination
                  page={page}
                  variant="outlined"
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPage(value)}
                  sx={{
                    bgcolor: "#f0f0f0",
                    maxWidth: "700px",
                    borderRadius: "15px",
                    "& .MuiPaginationItem-root": {
                      borderRadius: "5px",
                      border: `1px solid ${alpha(palette.common.white, 0.3)}`,
                      "&:hover": {
                        backgroundColor: alpha(palette.common.white, 0.2),
                        borderColor: alpha(palette.common.white, 0.6),
                      },
                    },
                    "& .Mui-selected": {
                      backgroundColor: alpha(palette.common.white, 0.3),
                      borderColor: alpha(palette.common.white, 0.6),
                    },
                  }}
                />{" "}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;

