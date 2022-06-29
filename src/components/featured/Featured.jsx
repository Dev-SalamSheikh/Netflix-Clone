import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.scss";
import BackgroundPic from "../../assets/back.jpg";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="reomance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thrillar">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={BackgroundPic} alt="" />
      <div className="info">
        <img
          src="https://img.freepik.com/free-vector/home-movie-banner-with-popcorn-3d-glasses_1419-2247.jpg?w=900"
          alt="description"
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure
          fugit placeat minus iusto. Aspernatur, vel voluptatibus ipsam
          repudiandae quae eum architecto nam harum vitae laborum similique
          dicta alias eligendi!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
