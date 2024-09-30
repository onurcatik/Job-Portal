// import { Typography } from '@mui/material'
// import { Box } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import CardElement from '../../component/CardElement'
// import { userProfileAction } from '../../redux/actions/userAction'

// const UserJobsHistory = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(userProfileAction());
//     }, []);

//     return (
//         <>
//             <Box>
//                 <Typography variant="h4" sx={{ color: "#fafafa" }}> Jobs History</Typography>
//                 <Box>
//                     {
//                         user && user.jobsHistory.map((history, i) => (
//                             <CardElement
//                                 key={i}
//                                 id={history._id}
//                                 jobTitle={history.title}
//                                 description={history.description}
//                                 category=''
//                                 location={history.location}
//                             />
//                         ))
//                     }
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default UserJobsHistory


// import { Typography, Box } from '@mui/material';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CardElement from '../../component/CardElement';
// import { userProfileAction } from '../../redux/actions/userAction';

// const UserJobsHistory = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(userProfileAction());
//     }, [dispatch]);

//     return (
//         <Box
//             sx={{
//                 padding: { xs: 2, sm: 3, md: 4 },
//                 maxWidth: '1200px',
//                 margin: '0 auto'
//             }}
//         >
//             <Typography
//                 variant="h4"
//                 sx={{
//                     color: "#fafafa",
//                     marginBottom: 2,
//                     textAlign: { xs: 'center', sm: 'left' },
//                     fontFamily:"Arial- sans serif"
//                 }}
//             >
//                 Jobs History
//             </Typography>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens, horizontally on larger screens
//                     gap: 2,
//                     flexWrap: 'wrap', // Allow items to wrap on smaller screens
//                 }}
//             >
//                 {
//                     user && user.jobsHistory && user.jobsHistory.length > 0 ? (
//                         user.jobsHistory.map((history, i) => (
//                             <CardElement
//                                 key={i}
//                                 jobTitle={history.title || 'No Title Available'}  // Default title if missing
//                                 description={history.description || 'No Description Available'}  // Default description if missing
//                                 location={history.location || 'No Location Available'}  // Default location if missing
//                             />
//                         ))
//                     ) : (
//                         <Typography
//                             variant="h6"
//                             sx={{ color: "#fafafa", textAlign: 'center', width: '100%' }}
//                         >
//                             No Job History Available
//                         </Typography>
//                     )
//                 }
//             </Box>
//         </Box>
//     );
// };

// export default UserJobsHistory;

import { Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardElement from '../../component/CardElement';
import { userProfileAction } from '../../redux/actions/userAction';

const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfileAction());
    }, [dispatch]);

    return (
        <Box
            sx={{
                padding: { xs: 2, sm: 3, md: 4 },
                maxWidth: '1200px',
                margin: '0 auto'
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: "#fafafa",
                    marginBottom: 2,
                    textAlign: { xs: 'center', sm: 'left' },
                    fontFamily: "Arial, sans-serif"
                }}
            >
                Jobs History
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack vertically on all screens
                    gap: 2,
                    flexWrap: 'wrap', // Allow wrapping if needed
                }}
            >
                {
                    user && user.jobsHistory && user.jobsHistory.length > 0 ? (
                        user.jobsHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                jobTitle={history.title || 'No Title Available'}  // Default title if missing
                                description={history.description || 'No Description Available'}  // Default description if missing
                                location={history.location || 'No Location Available'}  // Default location if missing
                            />
                        ))
                    ) : (
                        <Typography
                            variant="h6"
                            sx={{ color: "#fafafa", textAlign: 'center', width: '100%' }}
                        >
                            No Job History Available
                        </Typography>
                    )
                }
            </Box>
        </Box>
    );
};

export default UserJobsHistory;

