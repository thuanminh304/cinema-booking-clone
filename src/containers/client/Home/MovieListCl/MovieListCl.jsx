import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchAllMovieCl } from "../module/action";
import MovieItemCl from "../MovieItemCl/MovieItemCl";

class MovieListCl extends Component {
  render() {
    const { listMovie, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="row">
        {listMovie.map((movie) => {
          return <MovieItemCl key={movie.maPhim} movie={movie} />;
        })}
      </div>
    );
  }

   componentDidMount() {
    this.props.fetchAllMovieCl()
  }
}
const mapStateToProps = (state) => ({
  listMovie: state.movieReducerCl.listMovie,
  loading: state.movieReducerCl.loading,
});

const mapToDispatchToProps = (dispatch) => ({
  fetchAllMovieCl: () => {
    dispatch(actFetchAllMovieCl());
  },
});

export default connect(mapStateToProps, mapToDispatchToProps)(MovieListCl);
