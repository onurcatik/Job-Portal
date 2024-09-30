


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { jobTypeLoadAction, updateJobTypeAction } from '../../redux/actions/jobTypeAction';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditCategory = () => {
  const { id } = useParams(); // URL'den alınan ID
  const dispatch = useDispatch();
  
  // Redux state'inden jobType verisini çekiyoruz
  const { jobType } = useSelector(state => state.jobTypeAll);
  const [initialValues, setInitialValues] = useState({
    jobTypeName: '',
  });

  // jobType verisini yüklemek için useEffect kullanıyoruz
  useEffect(() => {
    if (jobType && jobType.length > 0) {
      const category = jobType.find(item => item._id === id); // ID'ye göre mevcut kategori bulunuyor
      if (category) {
        setInitialValues({ jobTypeName: category.jobTypeName }); // Formu mevcut kategori ile dolduruyoruz
      }
    } else {
      dispatch(jobTypeLoadAction()); // Veriler yüklenmemişse, redux aksiyonu ile yükle
    }
  }, [jobType, id, dispatch]);

  // Formik kullanarak form yönetimi
  const formik = useFormik({
    enableReinitialize: true, // Form verilerinin yeniden yüklenmesine izin ver
    initialValues: initialValues,
    validationSchema: Yup.object({
      jobTypeName: Yup.string().required('Category name is required'), // Kategori adı zorunlu alan
    }),
    onSubmit: (values) => {
      dispatch(updateJobTypeAction(id, values.jobTypeName)); // Güncelleme aksiyonu
    },
  });

  return (
    // Dış Box: Formun ortalanması ve daha küçük margin ile 
    <Box
      sx={{
        height: '100%', 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        pt: 3, // Daha küçük padding
        px: 1, // Mobil cihazlar için daha dar padding
      }}
    >
      {/* Form kutusu */}
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        className='form_style border-style'
        sx={{
          p: 3, // İç padding azaltıldı
          border: '1px solid #ddd',
          borderRadius: '8px',
          width: '100%',
          maxWidth: { xs: '95%', sm: '350px', md: '450px' },  // Genişlik daha küçültüldü
          boxShadow: { xs: 'none', md: '0px 2px 6px rgba(0, 0, 0, 0.1)' },  // Gölge daha hafif
          bgcolor: 'background.paper',
        }}
      >
        {/* Başlık */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"  // Başlık boyutu küçültüldü
            component="h2"
            sx={{
              pb: 2, // Padding küçültüldü
              textAlign: 'center',
              fontSize: { xs: '1.25rem', md: '1.5rem' },  // Daha küçük yazı boyutu
            }}
          >
            Edit Category
          </Typography>

          {/* Kategori adı için input */}
          <TextField
            sx={{ mb: 2 }}  // Alt boşluk küçültüldü
            fullWidth
            id="jobTypeName"
            label="Category"
            name='jobTypeName'
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter category name"
            value={formik.values.jobTypeName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)}
            helperText={formik.touched.jobTypeName && formik.errors.jobTypeName}
          />

          {/* Kaydet butonu */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type='submit'
            sx={{
              fontSize: { xs: '0.75rem', md: '0.875rem' },  // Buton yazı boyutu küçültüldü
              py: { xs: 1, md: 1.5 },  // Butonun yüksekliği küçültüldü
              transition: 'all 0.3s ease',
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditCategory;
