// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';

// import {
//     CREATE_JOB_TYPE_FAIL,
//     CREATE_JOB_TYPE_REQUEST,
//     CREATE_JOB_TYPE_SUCCESS,
//     JOB_TYPE_LOAD_FAIL,
//     JOB_TYPE_LOAD_REQUEST,
//     JOB_TYPE_LOAD_SUCCESS,
//     JOB_TYPE_DELETE_FAIL,
//     JOB_TYPE_DELETE_SUCCESS,
// } from '../constants/jobTypeConstant';


// export const jobTypeLoadAction = () => async (dispatch) => {
//     dispatch({ type: JOB_TYPE_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get('/api/type/jobs');
//         dispatch({
//             type: JOB_TYPE_LOAD_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_TYPE_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }


// // create jobs category
// export const createJobTypeAction = (jobtype) => async (dispatch) => {
//     dispatch({ type: CREATE_JOB_TYPE_REQUEST })

//     try {
//         const { data } = await axios.post("/api/type/create", jobtype)
//         dispatch({
//             type: CREATE_JOB_TYPE_SUCCESS,
//             payload: data
//         })
//         toast.success("Job type created successfully");


//     } catch (error) {
//         dispatch({
//             type: CREATE_JOB_TYPE_FAIL,
//             payload: error.response.data.error
//         })
//         toast.error(error.response.data.error);

//     }
// }

// // Kategori Silme

// export const deleteJobTypeAction = (typeId) => async (dispatch) => {
//     try {
//         await axios.delete(`/api/type/delete/${typeId}`); // API'den DELETE isteği

//         dispatch({
//             type: JOB_TYPE_DELETE_SUCCESS,
//             payload: typeId,
//         });

//         // Silme işlemi sonrası jobType listesi tekrar yüklensin
//         const { data } = await axios.delete(`/api/type/delete/${typeId}`);
//         dispatch({
//             type: JOB_TYPE_LOAD_SUCCESS,
//             payload: data,
//         });

//     } catch (error) {
//         dispatch({
//             type: JOB_TYPE_DELETE_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//         });
//     }
// };

// export const updateJobTypeAction = (id, jobTypeName) => async (dispatch) => {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         // API'ye PUT isteği yaparak iş türünü güncelliyoruz
//         const { data } = await axios.put(`/api/jobtypes/${id}`, { jobTypeName }, config);

//         // Güncelleme başarılı, SUCCESS yüküyle aksiyon dispatch ediyoruz
//         dispatch(updateJobTypeSuccess(data));

//     } catch (error) {
//         console.error('Error updating job type:', error);

//         // Güncelleme başarısız olduysa, FAILURE aksiyonu dispatch ediyoruz
//         dispatch(updateJobTypeFailure(error.message));
//     }
// };


import axios from 'axios';
import { toast } from 'react-toastify';
import {
    CREATE_JOB_TYPE_FAIL,
    CREATE_JOB_TYPE_REQUEST,
    CREATE_JOB_TYPE_SUCCESS,
    JOB_TYPE_LOAD_FAIL,
    JOB_TYPE_LOAD_REQUEST,
    JOB_TYPE_LOAD_SUCCESS,
    JOB_TYPE_DELETE_FAIL,
    JOB_TYPE_DELETE_SUCCESS,
} from '../constants/jobTypeConstant';

const updateJobTypeSuccess = (data) => ({
    type: 'UPDATE_JOB_TYPE_SUCCESS',
    payload: data,
});

const updateJobTypeFailure = (error) => ({
    type: 'UPDATE_JOB_TYPE_FAILURE',
    payload: error,
});

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get('/api/type/jobs');
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error,
        });
    }
};

export const createJobTypeAction = (jobtype) => async (dispatch) => {
    dispatch({ type: CREATE_JOB_TYPE_REQUEST });

    try {
        const { data } = await axios.post('/api/type/create', jobtype);
        dispatch({
            type: CREATE_JOB_TYPE_SUCCESS,
            payload: data,
        });
        toast.success('Job type created successfully');
    } catch (error) {
        dispatch({
            type: CREATE_JOB_TYPE_FAIL,
            payload: error.response.data.error,
        });
        toast.error(error.response.data.error);
    }
};

export const deleteJobTypeAction = (typeId) => async (dispatch) => {
    try {
        await axios.delete(`/api/type/delete/${typeId}`);

        dispatch({
            type: JOB_TYPE_DELETE_SUCCESS,
            payload: typeId,
        });

        const { data } = await axios.delete(`/api/type/delete/${typeId}`);
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_DELETE_FAIL,
            payload: error.response?.data?.message ?? error.message,
        });
    }
};

export const updateJobTypeAction = (id, jobTypeName) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.put(`/api/type/update/${id}`, { jobTypeName }, config);
        dispatch(updateJobTypeSuccess(data));
    } catch (error) {
        dispatch(updateJobTypeFailure(error.message));
    }
};
