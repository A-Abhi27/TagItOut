import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

function Upcoming(){
  const [content, setContent] = useState([]);
  const url="https://image.tmdb.org/t/p/original/";
  const fetchTrending = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&include_adult=false"
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 4,
    }
  };
  return (
    <div>
        <h5 style={{marginLeft:"3%",marginBottom:"25px",marginTop:"10px" ,color:"white",fontSize:"30px"}}>Upcoming ⏩</h5>
      <Carousel
        className="carousels"
        responsive={responsive}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        swipeable={true}
        centreMode={true}
        arrows={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {content.map((img) => <div key={img.id}><Link to={`/movie/${img.id}`} style={{textDecoration:"none"}}>
        <img className='img' src={url+img.poster_path} alt='img'/>
        <div style={{color:"white", textAlign:"center",marginTop:"10px"}}>{img?img.original_title:""}</div></Link></div>)}
      </Carousel>
    </div>
  );
};

export default Upcoming;
