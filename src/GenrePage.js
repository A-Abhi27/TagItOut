import axios from "axios";
import { useEffect, useState } from "react";
import Cards from './components/Cards';
import Chip from "@mui/material/Chip";
import Genres from "./components/Genres";
import PageNum from "./components/PageNum";
import useGenre from "./components/useGenre";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [sortType,setSortType] = useState("popularity.desc");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const setSortAsc=()=>{
        setSortType("popularity.asc");
  };
  const setSortDesc=()=>{
    setSortType("popularity.desc");
};

  const url="https://image.tmdb.org/t/p/original/";

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&sort_by=${sortType}&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

const styles={marginRight:"10px",color:"black",fontSize:"20px", display:"inline-block"};

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page, sortType]);

  return (
    <div className="search">
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="genre">
          <span style={styles}>Sort By : </span>
          <Chip
          style={{ margin: 2 }}
          label={"Ascending"}
          clickable
          size="small"
          onClick={() => setSortAsc()}
        />
        <Chip
          style={{ margin: 2 }}
          label={"Decending"}
          clickable
          size="small"
          onClick={() => setSortDesc()}
        />
      </div>
        {content &&
          content.map((c) => (
            <Cards
              key={c.id}
              id={c.id}
              poster={url+c.poster_path}
              title={c.title || c.original_title}
              date={c.first_air_date || c.release_date}
              original_language={c.original_language}
              vote_average={c.vote_average}
            />
          ))}
      {numOfPages > 1 && (
        <PageNum setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default GenresPage;
