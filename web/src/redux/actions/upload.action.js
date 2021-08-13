import axios from "axios";
import {
    SIGN_URL, 
    CONFIRM_UPLOAD
} from "../actionTypes";
import {setLoading} from "./commonActions";

const url = process.env.REACT_APP_API_URL;

//-----------------------------------------

export const signUrl = async (dispatch, fileData, token) => {
    setLoading(dispatch, true);
    try{
        const response = await axios.post(`${url}/signed-url-s3`,
        {
            fileName: fileData.fileName,
            type: fileData.type
        },
        {
            headers: {Authorization: `Bearer ${token}`}
        })
        dispatch({
            type: SIGN_URL,
            payload: response.data
        })
        setLoading(dispatch, false);
    }catch(e){
        console.error(e);
    }
};

export const confirmUpload = async (dispatch, uploadUrl, uploadFile) => {
    setLoading(dispatch, true);
    // const formData = new FormData();
    // formData.append("image", uploadFile);
    try{
        const response = await axios({
            method: "PUT",
            url: `${uploadUrl}`,
            data: uploadFile,
            headers: { 
                "Content-Type": [`image/jpeg`, `image/png`, `image/svg+xml`]
            }
        })
        dispatch({
            type: CONFIRM_UPLOAD,
            payload: response.data
        })
        setLoading(dispatch, false);
    }catch(e){
        console.error(e)
    }
}