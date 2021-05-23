import {SET_LOADING, CONFIRM_DELETE, SET_SUCCESS, SET_ERROR} from "../actionTypes";

//-----------------------------------------
export const setLoading = (dispatch, bool) => {
    dispatch({
        type: SET_LOADING,
        payload: bool
    });
};
//-----------------------------------------
export const confirmDelete = (dispatch, i, bool) => {
    dispatch({
        type: CONFIRM_DELETE,
        payload: { i, bool }
    });
};

//-----------------------------------------
export const setSuccess = (dispatch, bool) => {
    dispatch({
        type: SET_SUCCESS,
        payload: bool
    });
};

export const setError = (dispatch, bool) => {
    dispatch({
        type: SET_ERROR,
        payload: bool
    });
}
