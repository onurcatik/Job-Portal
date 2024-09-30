// import { createTheme } from "@mui/material/styles";
// import { blue, lightBlue, grey } from "@mui/material/colors"; // grey renki tanımlandı

// export const themeColors = (mode) =>
//   createTheme({

//     palette: {
//       mode,
//       ...(mode === "light"
//         ? {
//             // Light mode palette values
//             primary: {
//               main: blue[500],
//               white: "#fff",
//             },
//             secondary: {
//               main: lightBlue[800],
//               midNightBlue: "#003366",
//             },
//           }
//         : {
//             // Dark mode palette values
//             // Dark mode palette values
//             primary: {
//               main: "#003366",
//               white: "#003366",
//             },
//             secondary: {
//               main: blue[500],
//               midNightBlue: "#2196f3",
//             },
//             background: {
//               default: "#1e1e1e",
//             },
//             text: {
//               primary: "#000000", // Ana metin rengini siyah yapıyoruz
//               secondary: "#000000", // Yardımcı metin rengini de siyah yapıyoruz
//             },
//           }),
//     },
//   });


// import { createTheme } from "@mui/material/styles";
// import { blue, lightBlue, grey } from "@mui/material/colors"; // grey rengi tanımlandı

// export const themeColors = (mode) =>
//   createTheme({
//     palette: {
//       mode,
//       ...(mode === "light"
//         ? {
//             // Light mode palette values
//             primary: {
//               main: blue[500],
//               white: "#fff",
//             },
//             secondary: {
//               main: lightBlue[800],
//               midNightBlue: "#003366",
//             },
//           }
//         : {
//             // Dark mode palette values
//             primary: {
//               main: "#003366",
//               white: "#003366",
//             },
//             secondary: {
//               main: blue[500],
//               midNightBlue: "#2196f3",
//             },
//             background: {
//               default: "#1e1e1e",
//             },
//             text: {
//               primary: "#000000", // Ana metin rengini siyah yapıyoruz
//               secondary: "#000000", // Yardımcı metin rengini de siyah yapıyoruz
//             },
//           }),
//     },
//     components: {
//       MuiOutlinedInput: {
//         styleOverrides: {
//           root: {
//             borderColor: "#000000", // Input sınırlarını siyah yapıyoruz
//             color: "#000000", // Input içindeki metni siyah yapıyoruz
//           },
//         },
//       },
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             color: "#000000", // Butonların metin rengini siyah yapıyoruz
//           },
//         },
//       },
//       MuiInputBase: {
//         styleOverrides: {
//           root: {
//             color: "#000000", // Input alanlarının metin rengini siyah yapıyoruz
//           },
//         },
//       },
//     },
//   });

import { createTheme } from '@mui/material/styles';
import { blue, lightBlue} from '@mui/material/colors';

export const themeColors = (mode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: '#0d47a1'
                
            },
            secondary: {
                main: lightBlue[500],
                // Özel renkleri burada tanımlıyoruz
                midNightBlue: "#003366",
            },
        },
    });
