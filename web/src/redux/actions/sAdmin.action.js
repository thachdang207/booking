/* eslint-disable eqeqeq */
import { SADMIN_SIGN_IN, SADMIN_CHECK_AUTH } from '../actionTypes'
import { setLoading } from "./commonActions";
import axios from "axios";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const signIn = (dispatch, user, setToken, setUserId) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/super-admin/auth/sign-in`,
        headers: {
            "Content-Type": " application/json"
        },
        data: {
            email: user.email,
            password: user.password
        }
    })
        .then((response) => {
            setToken(
                response.data.success ? response.data.accessToken : null
            );
            setUserId(
                response.data.success ? response.data.user.id : null
            );
            localStorage.setItem("first_login", true);

            dispatch({
                type: SADMIN_SIGN_IN,
                payload: {
                    user: response.data.user,
                    success: response.data.success,
                    errors: response.data.errors,
                }
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            console.log(error);
        });
};
//-----------------------------------------

export const checkAuth = (dispatch, _token, userId) => {
    let token = _token;
    let user_id = userId;
    token != null && token != "null" && token != "" // eslint-disable-line
        ? dispatch({
              type: SADMIN_CHECK_AUTH,
              payload: {
                  isAuthenticated: true,
                  user_id,
                  token,
              }
          })
        : dispatch({
              type: SADMIN_CHECK_AUTH,
              payload: {
                  isAuthenticated: false,
                  user_id: null,
                  token: null,
              }
          });
};