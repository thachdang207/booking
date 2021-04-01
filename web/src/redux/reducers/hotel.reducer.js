import {
    GET_FEATURED_HOTELS,
    GET_HOTEL_IMAGES,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    featuredHotels: [],
    images: [
        "//static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/top10/top10-da-nang-hotels/pagePropertiesImage/danang-best-hotels.jpg.jpg",
        "//cdn.cnn.com/cnnnext/dam/assets/160523150838-6--intercontinental-danang-full-169.jpg",
        "//tapchitoaan.vn/uploads/2020/06/DJI_0040.jpg",
        "//digital.ihg.com/is/image/ihg/crowne-plaza-danang-2532263612-4x3?qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0",
        "//img.theculturetrip.com/wp-content/uploads/2020/12/ca4042bf-jpg.jpg",
        "//www.whereismykiwi.com/wp-content/uploads/2020/06/landmark-81.jpg",
        "//wallpaperaccess.com/full/201088.jpg"
    ],
    errors: null,
    loading: false,
};

export default function hotel(state = initialState, action) {
    switch (action.type) {
        case GET_HOTEL_IMAGES: {
            return {
                ...state
            };
        }
        case GET_FEATURED_HOTELS: {
            return {
                ...state,
                featuredHotels: action.payload.data
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            };
        }
        case SET_SUCCESS: {
            return {
                ...state,
                success: action.payload
            };
        }
        default:
            return state;
    }
}
