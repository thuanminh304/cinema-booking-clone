import movieApisCl from "apis/movieApisCl";
import {
  FETCH_MOVIE_DETAIL_CL_FAIL,
  FETCH_MOVIE_DETAIL_CL_SUCCESS,
  FETCH_MOVIE_DETAIL_CL_REQUEST,
} from "./type";

const actFetchMovieDetailClRequest = () => ({
  type: FETCH_MOVIE_DETAIL_CL_REQUEST,
});
const actFetchMovieDetailClSuccess = (movieDetail) => ({
  type: FETCH_MOVIE_DETAIL_CL_SUCCESS,
  payload: movieDetail,
});
const actFetchMovieDetailClFail = (err) => ({
  type: FETCH_MOVIE_DETAIL_CL_FAIL,
  payload: err,
});

export const actFetchMovieDetailCl = (movieDetail) => {
  return (dispatch) => {
    dispatch(actFetchMovieDetailClRequest());
    movieApisCl
      .fetchMovieDetailApiCl(movieDetail)
      .then((res) => {
        dispatch(actFetchMovieDetailClSuccess(res.data.content));
      })
      .catch((err) => {
        dispatch(actFetchMovieDetailClFail(err));
      });
  };
};
