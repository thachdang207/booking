import {SET_LOADING, CONFIRM_DELETE, SET_SUCCESS, SET_ERROR} from "../actionTypes";

//-----------------------------------------
export const setLoading = (dispatch, bool) => {
    dispatch({
        type: SET_LOADING,
        payload: bool
    });
};
//-----------------------------------------
export const confirmDelete = async (dispatch, i, bool) => {
    await dispatch({
        type: CONFIRM_DELETE,
        payload: { i, bool }
    });
};

//-----------------------------------------
export const setSuccess = async (dispatch, bool) => {
    await dispatch({
        type: SET_SUCCESS,
        payload: bool
    });
};

export const setError = async (dispatch, bool) => {
    await dispatch({
        type: SET_ERROR,
        payload: bool
    });
}
