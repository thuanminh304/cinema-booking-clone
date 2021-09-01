import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchMovieDetailCl } from "./module/action";

class MovieDetailCl extends Component {
  render() {
    const { detailMovie, loading } = this.props;
    if (loading) return <Loader />;
    return (
      detailMovie && (
        <div className="container">
          <h1 style={{ backgroundColor: "pink", marginBottom: "50px" }}>
            CHI TIẾT PHIM
          </h1>
          <div className="row">
            <div className="col-3">
              <img src={detailMovie.hinhAnh} width="200px" alt="" />
            </div>
            <div className="col-9">
              <h3>{detailMovie.tenPhim}</h3>
              <p>{detailMovie.moTa}</p>
            </div>
          </div>
          <div>
            <h1>LỊCH CHIẾU PHIM CHO HIEN RUBIKKK</h1>
            <div className="row">
              <div className="col-3">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {detailMovie.heThongRapChieu.map((heThongRap, idx) => {
                    return (
                      <a
                        className={`nav-link text-left && ${
                          idx === 0 ? "active" : ""
                        }`}
                        id="v-pills-home-tab"
                        data-toggle="pill"
                        href={`#${heThongRap.maHeThongRap}`}
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <img src={heThongRap.logo} width="30px" alt="" />
                        <span className="ml-2">{heThongRap.tenHeThongRap}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  {detailMovie.heThongRapChieu.map((heThongRap, idx) => {
                    return (
                      <div
                        className={`tab-pane fade show && ${
                          idx === 0 ? "active" : ""
                        }`}
                        id={heThongRap.maHeThongRap}
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        {heThongRap.cumRapChieu.map((cumRap) => {
                          return (
                            <div className="text-left mb-3">
                              <img src={cumRap.hinhAnh} width="50px" alt="" />
                              <span className="ml-2">{cumRap.tenCumRap}</span>
                              <div>
                                {cumRap.lichChieuPhim.map((lichChieu) => {
                                  return (
                                    <button className="btn btn-secondary m-1">
                                      {new Date(
                                        lichChieu.ngayChieuGioChieu
                                      ).toLocaleTimeString()}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }

  componentDidMount() {
    this.props.fetchMovieDetailCl(this.props.match.params.movieId);
  }
}

const mapStateToProps = (state) => ({
  detailMovie: state.movieDetailReducerCl.detailMovie,
  loading: state.movieDetailReducerCl.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieDetailCl: (movieDetail) => {
    dispatch(actFetchMovieDetailCl(movieDetail));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailCl);
