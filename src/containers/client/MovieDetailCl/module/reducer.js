import {
  FETCH_MOVIE_DETAIL_CL_FAIL,
  FETCH_MOVIE_DETAIL_CL_REQUEST,
  FETCH_MOVIE_DETAIL_CL_SUCCESS,
} from "./type";

const initialState = {
  detailMovie: [],
  loading: false,
  error: "",
};

const movieDetailReducerCl = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAIL_CL_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIE_DETAIL_CL_SUCCESS:
      return { ...state, detailMovie: payload, loading: false };
    case FETCH_MOVIE_DETAIL_CL_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default movieDetailReducerCl;
