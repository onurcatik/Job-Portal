// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import WorkIcon from '@mui/icons-material/Work';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTheme } from '@emotion/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogoutAction } from '../redux/actions/userAction';
// import { DarkMode, LightMode } from "@mui/icons-material";
// import { toggleActionTheme } from '../redux/actions/themeAction';
// import { createTheme, ThemeProvider } from '@mui/material';



// const pages = ['Home', 'Log In'];


// const Navbar = () => {
//     //show / hide button
//     const { userInfo } = useSelector(state => state.signIn);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { palette } = useTheme();
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     // log out user
//     const logOutUser = () => {
//         dispatch(userLogoutAction());
//         window.location.reload(true);
//         setTimeout(() => {
//             navigate('/');
//         }, 500)
//     }



//     return (
//         <AppBar position="static" sx={{ bgcolor: palette.primary.main, height: '75px' }}>

//             <Container >
//                 {/* principal Menu */}
//                 <Toolbar disableGutters>
//                     <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'Arial , sans-serif',
//                             fontWeight: 700,
//                             letterSpacing: '.1rem',
//                             color: 'white',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JOB WEB SITE 
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
                                
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />

//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href=""
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.0.5rem',
//                             color: 'white',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JOB WEB
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {/* menu desktop */}

//                         <Button
//                             onClick={handleCloseNavMenu}
//                             sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'   }}>
//                             <Link to="/" style={{ color: 'white', textDecoration: "none", fontFamily: 'Arial, sans-serif', fontWeight: 'bold'  }}>
//                                 Home
//                             </Link>
//                         </Button>
//                         <Button
//                             onClick={handleCloseNavMenu}
//                             sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Arial, sans-serif', fontWeight:'bold' }}>
//                             <Link to="/register" style={{ color: 'white', textDecoration: "none", fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
//                                 Register
//                             </Link>
//                         </Button>


//                     </Box>
//                     <IconButton sx={{ mr: 4 }} onClick={() => dispatch(toggleActionTheme())}>
//                         {palette.mode === "dark" ? (
//                             <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
//                         ) : (
//                             <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
//                         )}
//                     </IconButton>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar sx={{ color: palette.primary.white }} alt="Remy Sharp" src="" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             PaperProps={{
//                                 sx: {
//                                     "& 	.MuiMenu-list": {
//                                         bgcolor: "primary.white",
//                                         color: "white"
//                                     },
//                                 }
//                             }}

//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >


//                             <MenuItem onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to="/admin/dashboard">Admin Dashboard</Link></Typography>
//                             </MenuItem>
//                             <MenuItem onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to="/user/dashboard">User Dashboard</Link></Typography>
//                             </MenuItem>

//                             {
//                                 !userInfo ?

//                                     <MenuItem onClick={handleCloseUserMenu}>
//                                         <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to="/login">Log In</Link></Typography>
//                                     </MenuItem> :

//                                     <MenuItem onClick={logOutUser}>
//                                         <Typography style={{ textDecoration: "none", color: "white" }} textAlign="center">Log Out</Typography>
//                                     </MenuItem>
//                             }


//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default Navbar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import WorkIcon from '@mui/icons-material/Work';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTheme } from '@emotion/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogoutAction } from '../redux/actions/userAction';
// import { DarkMode, LightMode } from "@mui/icons-material";
// import { toggleActionTheme } from '../redux/actions/themeAction';
// import { alpha, darken, lighten } from '@mui/system';

// const pages = ['Home', 'Log In'];

// const Navbar = () => {
//     const { userInfo } = useSelector(state => state.signIn);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { palette } = useTheme();

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const logOutUser = () => {
//         dispatch(userLogoutAction());
//         window.location.reload(true);
//         setTimeout(() => {
//             navigate('/');
//         }, 500);
//     };

//     // Gradient background for navbar
//     const gradientBackground = `linear-gradient(135deg, ${lighten(palette.secondary.main, 0.2)}, ${darken(palette.secondary.main, 0.5)})`;

//     return (
//         <AppBar position="static" sx={{ background: gradientBackground, height: '75px', boxShadow: `0 4px 20px ${alpha(palette.primary.dark, 0.3)}` }}>
//             <Container>
//                 <Toolbar disableGutters>
//                     <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: palette.primary.light }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'white',
//                             textShadow: `1px 1px 3px ${alpha(palette.secondary.dark, 0.5)}`,
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JOB PORTAL
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//                             keepMounted
//                             transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>

//                     <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: palette.primary.light }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href=""
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.2rem',
//                             color: 'white',
//                             textShadow: `1px 1px 3px ${alpha(palette.secondary.dark, 0.5)}`,
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JOB PORTAL
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{
//                                     my: 2,
//                                     color: 'white',
//                                     display: 'block',
//                                     '&:hover': {
//                                         background: `linear-gradient(90deg, ${palette.primary.light}, ${palette.primary.main})`,
//                                         boxShadow: `0 2px 10px ${alpha(palette.primary.dark, 0.5)}`,
//                                     },
//                                 }}
//                             >
//                                 <Link to={`/${page.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none' }}>
//                                     {page}
//                                 </Link>
//                             </Button>
//                         ))}
//                     </Box>

//                     <Button
//                              onClick={handleCloseNavMenu}
//                              sx={{ my: 2, color: 'white', display: 'block' }}>
//                              <Link to="/" style={{ color: 'white', textDecoration: "none" }}>
//                                  Home
//                              </Link>
//                          </Button>
//                          <Button
//                              onClick={handleCloseNavMenu}
//                              sx={{ my: 2, color: 'white', display: 'block' }}>
//                              <Link to="/register" style={{ color: 'white', textDecoration: "none" }}>
//                                  Register
//                              </Link>
//                          </Button>

                    

//                     <IconButton sx={{ mr: 4 }} onClick={() => dispatch(toggleActionTheme())}>
//                         {palette.mode === 'dark' ? (
//                             <DarkMode sx={{ color: '#ffffff', fontSize: '25px' }} />
//                         ) : (
//                             <LightMode sx={{ color: '#ffffff', fontSize: '25px' }} />
//                         )}
//                     </IconButton>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar sx={{ color: palette.primary.white, border: `2px solid ${palette.primary.light}`, boxShadow: `0 4px 10px ${alpha(palette.primary.dark, 0.5)}` }} alt="User" src="" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             PaperProps={{
//                                 sx: {
//                                     '& 	.MuiMenu-list': {
//                                         bgcolor: palette.secondary.main,
//                                         color: 'white',
//                                     },
//                                 },
//                             }}
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//                             keepMounted
//                             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             <MenuItem onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center">
//                                     <Link style={{ textDecoration: 'none', color: 'white' }} to="/admin/dashboard">Admin Dashboard</Link>
//                                 </Typography>
//                             </MenuItem>
//                             <MenuItem onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center">
//                                     <Link style={{ textDecoration: 'none', color: 'white' }} to="/user/dashboard">User Dashboard</Link>
//                                 </Typography>
//                             </MenuItem>
//                             {!userInfo ? (
//                                 <MenuItem onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center">
//                                         <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Log In</Link>
//                                     </Typography>
//                                 </MenuItem>
//                             ) : (
//                                 <MenuItem onClick={logOutUser}>
//                                     <Typography textAlign="center" sx={{ color: 'white' }}>Log Out</Typography>
//                                 </MenuItem>
//                             )}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// };

// export default Navbar;

// import * as React from 'react'; 
// import AppBar from '@mui/material/AppBar'; // Üst menü çubuğunu oluşturmak için
// import Box from '@mui/material/Box'; // Layout (düzenleme) için kullanılır
// import Toolbar from '@mui/material/Toolbar'; // AppBar içeriğini düzenler
// import IconButton from '@mui/material/IconButton'; // İkon düğmeleri için
// import Typography from '@mui/material/Typography'; // Yazı metni ve başlıklar için
// import Menu from '@mui/material/Menu'; // Menü bileşeni (mobil için)
// import MenuIcon from '@mui/icons-material/Menu'; // Menü simgesi (Hamburger menü)
// import Container from '@mui/material/Container'; // İçeriklerin düzgün hizalanması için
// import Avatar from '@mui/material/Avatar'; // Kullanıcı avatar simgesi
// import Button from '@mui/material/Button'; // Düğmeler
// import Tooltip from '@mui/material/Tooltip'; // İpuçları (hover olduğunda gösterilen bilgi)
// import MenuItem from '@mui/material/MenuItem'; // Menü öğeleri
// import WorkIcon from '@mui/icons-material/Work'; // İş simgesi
// import { Link, useNavigate } from 'react-router-dom'; // Navigasyon için
// import { useTheme } from '@emotion/react'; // Tema kullanımı için
// import { useDispatch, useSelector } from 'react-redux'; // Redux işlemleri
// import { userLogoutAction } from '../redux/actions/userAction'; // Kullanıcı çıkışı aksiyonu
// import { DarkMode, LightMode } from "@mui/icons-material"; // Tema ikonları (karanlık/açık mod)
// import { toggleActionTheme } from '../redux/actions/themeAction'; // Tema değiştirme aksiyonu

// // Menüde yer alacak sayfalar
// const pages = ['Home', 'Log In'];

// const Navbar = () => {
//     // Kullanıcı bilgisini Redux store'dan alıyoruz
//     const { userInfo } = useSelector(state => state.signIn);
    
//     // Redux aksiyonları için dispatch ve sayfa yönlendirme için navigate
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     // Temadan renk paletini kullanmak için
//     const { palette } = useTheme();
    
//     // Mobil ve kullanıcı menüsü için anchorEl (menü açılma/kapanma kontrolü)
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     // Mobil menü açma
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     // Kullanıcı menüsü açma
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     // Mobil menü kapatma
//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     // Kullanıcı menüsü kapatma
//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     // Kullanıcı çıkış fonksiyonu
//     const logOutUser = () => {
//         dispatch(userLogoutAction()); // Redux ile kullanıcı çıkışı
//         window.location.reload(true); // Sayfa yenileme
//         setTimeout(() => {
//             navigate('/'); // Ana sayfaya yönlendirme
//         }, 500);
//     };

//     return (
//         <AppBar position="static" sx={{ bgcolor: palette.primary.main, height: '75px' }}>
//             {/* Navbar içeriği için Container kullanıyoruz */}
//             <Container>
//                 {/* Navbar düzenleme için Toolbar */}
//                 <Toolbar disableGutters>
//                     {/* Büyük ekranlar için ikon ve başlık */}
//                     <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'Arial, sans-serif',
//                             fontWeight: 700,
//                             letterSpacing: '.1rem',
//                             color: 'white',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JOB WEB SITE
//                     </Typography>

                
                    
// <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//     <IconButton
//         size="large"
//         aria-label="account of current user"
//         aria-controls="menu-appbar"
//         aria-haspopup="true"
//         onClick={handleOpenNavMenu}
//         color="inherit"
//     >
//         <MenuIcon />
//     </IconButton>
//     <Menu
//         id="menu-appbar"
//         anchorEl={anchorElNav}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//         }}
//         keepMounted
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//         }}
//         open={Boolean(anchorElNav)}
//         onClose={handleCloseNavMenu}
//         sx={{
//             display: { xs: 'block', md: 'none' },
//         }}
//     >
//         {/* Mobil menüdeki sayfalar */}
//         {['Home', 'Register'].map((page) => (
//             <MenuItem
//                 key={page}
//                 onClick={() => {
//                     handleCloseNavMenu();
//                     if (page === 'Home') {
//                         navigate('/');  // Home sayfasına yönlendir
//                     } else {
//                         navigate(`/${page.toLowerCase()}`);  // Diğer sayfalara yönlendir
//                     }
//                 }}
//             >
//                 <Typography textAlign="center">{page}</Typography>
//             </MenuItem>
//         ))}
//     </Menu>
// </Box>


//                     {/* Mobil ekranlar için logo ve başlık */}
//                     <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href=""
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.0.5rem',
//                             color: 'white',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JOB WEB
//                     </Typography>
                    
//                     {/* Masaüstü menü seçenekleri */}
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         <Button
//                             onClick={handleCloseNavMenu}
//                             sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
//                             <Link to="/" style={{ color: 'white', textDecoration: "none", fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
//                                 Home
//                             </Link>
//                         </Button>
//                         <Button
//                             onClick={handleCloseNavMenu}
//                             sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
//                             <Link to="/register" style={{ color: 'white', textDecoration: "none", fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
//                                 Register
//                             </Link>
//                         </Button>
//                     </Box>
                    
//                     {/* Tema değiştirme butonu */}
//                     <IconButton sx={{ mr: 4 }} onClick={() => dispatch(toggleActionTheme())}>
//                         {palette.mode === "dark" ? (
//                             <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
//                         ) : (
//                             <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
//                         )}
//                     </IconButton>

//                     {/* Kullanıcı avatar menüsü */}
//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar sx={{ color: palette.primary.white }} alt="Remy Sharp" src="" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             PaperProps={{
//                                 sx: {
//                                     "& .MuiMenu-list": {
//                                         bgcolor: "primary.white",
//                                         color: "white"
//                                     },
//                                 }
//                             }}
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {/* Kullanıcı menüsü seçenekleri */}
//                             <MenuItem onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to="/admin/dashboard">Admin Dashboard</Link></Typography>
//                             </MenuItem>
//                             <MenuItem onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to="/user/dashboard">User Dashboard</Link></Typography>
//                             </MenuItem>

//                             {/* Kullanıcı giriş durumu kontrolü */}
//                             {
//                                 !userInfo ? (
//                                     <MenuItem onClick={handleCloseUserMenu}>
//                                         <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to="/login">Log In</Link></Typography>
//                                     </MenuItem>
//                                 ) : (
//                                     <MenuItem onClick={logOutUser}>
//                                         <Typography style={{ textDecoration: "none", color: "white" }} textAlign="center">Log Out</Typography>
//                                     </MenuItem>
//                                 )
//                             }
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

// export default Navbar;



import * as React from 'react'; 
import AppBar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box'; 
import Toolbar from '@mui/material/Toolbar'; 
import IconButton from '@mui/material/IconButton'; 
import Typography from '@mui/material/Typography'; 
import Menu from '@mui/material/Menu'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Container from '@mui/material/Container'; 
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button'; 
import Tooltip from '@mui/material/Tooltip'; 
import MenuItem from '@mui/material/MenuItem'; 
import WorkIcon from '@mui/icons-material/Work'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useTheme } from '@emotion/react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { userLogoutAction } from '../redux/actions/userAction'; 
import { DarkMode, LightMode } from "@mui/icons-material"; 
import { toggleActionTheme } from '../redux/actions/themeAction';

const pages = ['Home', 'Log In'];

const Navbar = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOutUser = () => {
        dispatch(userLogoutAction()); 
        window.location.reload(true); 
        setTimeout(() => {
            navigate('/'); 
        }, 500);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: palette.primary.main, width: '100%', overflowX: 'hidden' }}>
            <Container maxWidth="xl" sx={{ width: '100%', overflowX: 'hidden' }}>
                <Toolbar disableGutters>
                   
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.0rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        JOB PORTAL
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {['Home', 'Register'].map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        if (page === 'Home') {
                                            navigate('/'); 
                                        } else {
                                            navigate(`/${page.toLowerCase()}`);
                                        }
                                    }}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.0.5rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        JOB WEB
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                            <Link to="/" style={{ color: 'white', textDecoration: "none", fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                                Home
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                            <Link to="/register" style={{ color: 'white', textDecoration: "none", fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                                Register
                            </Link>
                        </Button>
                    </Box>

                    {/* <IconButton sx={{ mr: 4 }} onClick={() => dispatch(toggleActionTheme())}>
                        {palette.mode === "dark" ? (
                            <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
                        )}
                    </IconButton> */}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {/* palette.primary.white */}
                                <Avatar sx={{ color: "gray" , backgroundColor:"white" }} alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& .MuiMenu-list": {
                                        bgcolor: "white",
                                        color: "white"
                                    },
                                }
                            }}
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "black" }} to="/admin/dashboard">Admin Dashboard</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "black" }} to="/user/dashboard">User Dashboard</Link></Typography>
                            </MenuItem>

                            {!userInfo ? (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "black" }} to="/login">Log In</Link></Typography>
                                </MenuItem>
                            ) : (
                                <MenuItem onClick={logOutUser}>
                                    <Typography style={{ textDecoration: "none", color: "black" }} textAlign="center">Log Out</Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
