import { JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_RESET, JOB_TYPE_LOAD_SUCCESS, CREATE_JOB_TYPE_REQUEST,CREATE_JOB_TYPE_SUCCESS,CREATE_JOB_TYPE_FAIL,CREATE_JOB_TYPE_RESET} from "../constants/jobTypeConstant"


export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
    switch (action.type) {
        case JOB_TYPE_LOAD_REQUEST:
            return { loading: true }
        case JOB_TYPE_LOAD_SUCCESS:
            return {
                loading: false,
                jobType: action.payload.jobT
            }
        case JOB_TYPE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_TYPE_LOAD_RESET:
            return {}
        default:
            return state;
    }
}


// create job type reducer
export const createJobTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOB_TYPE_REQUEST:
            return { loading: true }
        case CREATE_JOB_TYPE_SUCCESS:
            return {
                loading: false,
                jobType: action.payload,
            }
        case CREATE_JOB_TYPE_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_JOB_TYPE_RESET:
            return {}
        default:
            return state;
    }

}

// ----- UPDATE

const initialState = {
    jobTypes: [],
    loading: false,
    error: null,
};

export const jobTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_JOB_TYPE_SUCCESS':
            return {
                ...state,
                jobTypes: state.jobTypes.map((jobType) =>
                    jobType.id === action.payload.id ? action.payload : jobType
                ),
                loading: false,
                error: null,
            };
        case 'UPDATE_JOB_TYPE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
