import Badge from '@mui/material/Badge';
import React ,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Cards = ({
  id,
  poster,
  title,
  date,
  original_language,
  vote_average,
}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)
}, [])

    const img_300 = "https://image.tmdb.org/t/p/w300";
    const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  return (
        isLoading
        ?
        <div className="media">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={600} duration={1} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${id}`} style={{textDecoration:"none"}}>
      <div className="media" style={{ cursor: "pointer" }} color="inherit">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">{original_language}
      <span className="subTitle">{date}</span>
      </span>
      </div>
      </Link>
      );
};

export default Cards;
