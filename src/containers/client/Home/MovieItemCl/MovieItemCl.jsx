import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MovieItemCl extends Component {
  render() {
    const { hinhAnh, tenPhim ,maPhim} = this.props.movie;
    return (
      <div className="col-3">
        <div className="card">
          <img className="card-img-top img-fluid" src={hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{tenPhim}</h4>
            <Link to={`/movie-detail/${maPhim}`} className="btn btn-success">VIEW DETAIL</Link>
          </div>
        </div>
      </div>
    );
  }
}
