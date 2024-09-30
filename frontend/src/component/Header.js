import { Box, styled, useTheme } from '@mui/material'
import React from 'react'
// import headerImage from '../images/JobPortal.webp';
import SearchInputEl from './SearchInputEl';

const Header = () => {
    const theme = useTheme(); // Tema kullanılabilir hale getirildi

    const StyleHeader = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 500,
        // backgroundImage: `url()`,
        // backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 10%", // Varsayılan ayar
        backgroundColor: theme.palette.secondary.main,

        // Ekran boyutlarına göre responsive ayarlar
        [theme.breakpoints.down('lg')]: {
            minHeight: 700, // Daha küçük ekranlarda minimum yüksekliği azalt
            backgroundPosition: "center center", // Ekran küçüldükçe görseli ortala
        },
        [theme.breakpoints.down('md')]: {
            minHeight: 600, // Daha küçük ekranlar için
            backgroundPosition: "center top", // Daha küçük ekranlar için yukarıda pozisyonla
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: 500, // Mobil cihazlar için
            backgroundPosition: "center top", // Mobil cihazlar için
            backgroundSize: "contain", // Görselin tamamı görünmesi için
        },
    }));

    return (
        <>
            <StyleHeader>
                <SearchInputEl />
            </StyleHeader>
        </>
    );
}

export default Header;
