import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
import { deleteJobReducer, jobReducer, loadJobReducer, loadJobSingleReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from '../redux/reducers/jobTypeReducer'
import { allUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/userReducer';
import UserJobsHistory from '../pages/users/UserJobsHistory';
import { modeReducer } from './reducers/themeModeReducer';





//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn:  userReducerSignIn,
    logoOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob : loadJobSingleReducer,
    userJobApplication : userApplyJobReducer,
    allUsers : allUserReducer,
    mode : modeReducer,
    deleteJob : deleteJobReducer,
    
    
});


let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};


//initial state

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;

