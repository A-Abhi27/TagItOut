import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Latest from './Latest';
import TopRated from './Top_rated';
import { Link } from 'react-router-dom';
import Upcoming from './Upcoming';

function Trending(){

  const [content, setContent] = useState([]);
  const url="https://image.tmdb.org/t/p/original/";
  const fetchTrending = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=4e44d9029b1270a757cddc766a1bcb63&include_adult=false"
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    return <div>
    <div className='carousel'>
    <div className='Trend'><span>Trending Now 🔥</span></div>
    <Carousel 
         responsive={responsive}
         swipeable={true}
         draggable={false}
         showDots={false}
         infinite={true}
         autoPlay={true}
         centreMode={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         arrows={false}
         containerClass="carousel-container"
  >     
        {content.map((images) => <div key={images.id}><Link to={`/movie/${images.id}`} style={{textDecoration:"none"}}>
        <img className='images' src={url+images.poster_path} alt="https://www.movienewz.com/img/films/poster-holder.jpg"/></Link></div>)}
        
  </Carousel>
  </div>
  <Latest/>
  <TopRated/>
  <Upcoming/>
  </div>
  
};
 export default Trending;