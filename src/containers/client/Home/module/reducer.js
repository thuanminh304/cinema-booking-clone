import {
  FETCH_ALL_MOVIE_CL_REQUEST,
  FETCH_ALL_MOVIE_CL_FAIL,
  FETCH_ALL_MOVIE_CL_SUCCESS,
} from "./type";

const initialState = {
  listMovie: [],
  loading: false,
  error: "",
};

const movieReducerCl = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_MOVIE_CL_REQUEST:
      return { ...state, loading: true };
    case FETCH_ALL_MOVIE_CL_SUCCESS:
      return { ...state, listMovie: payload, loading: false };
    case FETCH_ALL_MOVIE_CL_FAIL:
      return { ...state, error: payload,loading:false };
    default:
      return state;
  }
};
export default movieReducerCl;
