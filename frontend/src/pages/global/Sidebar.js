

import React, { useEffect } from 'react';
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from 'react-pro-sidebar'; // ProSidebar bileşenleri
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box, Avatar, useTheme, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Person3Icon from '@mui/icons-material/Person3';
import logoDashboard from '../../images/portal.webp'; // Logo resmini içeri aktarıyoruz
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const SidebarAdm = () => {
    const { userInfo } = useSelector(state => state.signIn); // Giriş yapmış kullanıcı bilgileri
    const { palette } = useTheme(); // Material-UI tema renkleri
    const { collapsed, toggleSidebar } = useProSidebar();  // Sidebar'ın açılıp kapanması için hook
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Kullanıcı profili yükleniyor
    useEffect(() => {
        dispatch(userProfileAction());
    }, [dispatch]);

    // Kullanıcı çıkış fonksiyonu
    const logOut = () => {
        dispatch(userLogoutAction()); // Çıkış işlemi
        window.location.reload(true); // Sayfa yenileniyor
        setTimeout(() => {
            navigate('/'); // Ana sayfaya yönlendirme
        }, 500);
    };

    return (
        <>
            {/* Sidebar Yapısı */}
            <Sidebar
                backgroundColor="#003366"  // Arka plan rengi
                style={{ borderRightStyle: "none" }}  // Sağ kenar çizgisi kaldırıldı
                sx={{
                    display: { xs: 'none', sm: 'block' },  // Küçük ekranlarda gizleniyor
                    width: { xs: '60px', sm: '250px' },  // Küçük ekranlarda dar, büyük ekranlarda geniş sidebar
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                    <Box>
                        {/* Logo alanı */}
                        <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>
                            {
                                collapsed ?
                                    <Avatar alt="logo dashboard" src={logoDashboard} /> :  // Sidebar kapalıysa sadece logo
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img
                                            style={{
                                                width: "100px",  // Logo genişliği
                                                height: "100px",  // Logo yüksekliği
                                                textAlign: "center",
                                                transition: "all ease-out .5s"  // Geçiş animasyonu
                                            }}
                                            src={logoDashboard}  // Logo resmi
                                            alt="logo dashboard"
                                        />
                                    </Box>
                            }
                        </Box>

                        {/* Menü Elemanları */}
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",  // Buton metin rengi
                                    },
                                    '&:hover': {
                                        backgroundColor: "rgba(23,105,170, 1)",  // Üzerine gelindiğinde arka plan rengi
                                        color: "#fafafa",  // Üzerine gelindiğinde metin rengi
                                    },
                                },
                            }}
                        >
                            {/* Admin menüsü */}
                            {
                                userInfo && userInfo.role === 1 ?
                                    <>
                                        <MenuItem component={<Link to="/admin/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/admin/users" />} icon={<GroupAddIcon />}> Users </MenuItem>
                                        <MenuItem component={<Link to="/admin/jobs" />} icon={<WorkIcon />}> Jobs </MenuItem>
                                        <MenuItem component={<Link to="/admin/category" />} icon={<CategoryIcon />}> Category </MenuItem>
                                    </> :
                                    <>
                                        {/* Kullanıcı menüsü */}
                                        <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/user/jobs" />} icon={<WorkHistoryIcon />}> Applied Jobs </MenuItem>
                                        <MenuItem component={<Link to="/user/info" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                    </>
                            }
                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        {/* Çıkış butonu */}
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",  // Çıkış butonu rengi
                                    },
                                    '&:hover': {
                                        backgroundColor: "rgba(23,105,170, 1)",  // Üzerine gelindiğinde arka plan rengi
                                        color: "#fafafa",  // Üzerine gelindiğinde metin rengi
                                    },
                                },
                            }}
                        >
                            <MenuItem onClick={logOut} icon={<LoginIcon />}> Log out </MenuItem>  {/* Çıkış işlemi */}
                        </Menu>
                    </Box>
                </Box>
            </Sidebar>

            {/* Küçük ekranlarda sidebar açma/kapama butonu */}
            <Box sx={{ display: { xs: 'block', sm: 'none' }, position: 'fixed', top: 10, left: 10 }}>
                <Button variant="contained" onClick={toggleSidebar}>
                   
                </Button>
            </Box>
        </>
    );
};

export default SidebarAdm;

