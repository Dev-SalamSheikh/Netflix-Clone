import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";

const ListItem = ({ index, image }) => {
  const [isHover, setIsHover] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={image} alt="" />
      {isHover && (
        <>
          <video src={trailer} autoPlay loop muted controls />
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch">
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">16+</span>
              <span>1999</span>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                unde. Ducimus nemo consequatur temporibus eos distinctio!
                Voluptatum omnis nobis consectetur.
              </p>
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
