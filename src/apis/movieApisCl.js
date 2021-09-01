import { GROUP_ID } from "settings/apiConfig";

const { default: callApiCl } = require("utils/callApiCl");

const movieApisCl = {
  fetchAllMovieApiCl() {
    return callApiCl(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },
  fetchMovieDetailApiCl(movieId){
    return callApiCl(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
  }
};
export default movieApisCl;
