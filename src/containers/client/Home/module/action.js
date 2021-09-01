import movieApisCl from "apis/movieApisCl";
import {
  FETCH_ALL_MOVIE_CL_REQUEST,
  FETCH_ALL_MOVIE_CL_SUCCESS,
  FETCH_ALL_MOVIE_CL_FAIL,
} from "./type";
const actFetchAllMovieClRequest = () => ({
  type: FETCH_ALL_MOVIE_CL_REQUEST,
});
const actFetchAllMovieClSuccess = (listMovie) => ({
  type: FETCH_ALL_MOVIE_CL_SUCCESS,
  payload: listMovie,
});
const actFetchAllMovieClFail = (error) => ({
  type: FETCH_ALL_MOVIE_CL_FAIL,
  payload: error,
});
export const actFetchAllMovieCl = () => {
  return (dispatch) => {
    dispatch(actFetchAllMovieClRequest());
    movieApisCl
      .fetchAllMovieApiCl()
      .then((res) => {
        dispatch(actFetchAllMovieClSuccess(res.data.content));
      })
      .catch((err) => {
        dispatch(actFetchAllMovieClFail(err));
      });
  };
};
