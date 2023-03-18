import { useEffect, useState } from "react";
import axios from "axios";
import PageNum from "./components/PageNum";
import Cards from "./components/Cards";
  
  const Search = () => {
    const [search, setSearch] = useState("hulk");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
  
    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${search}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
      // eslint-disable-next-line
    }, [page]);
  
    return <div>
          <div className="search">
          <input type="text" placeholder='Search for a movie' onChange={(eve) => setSearch(eve.target.value)}/>
          <button type='submit'className="searchButton" onClick={fetchSearch}>Go</button>
          </div>
        <div className="trending">
        <h5 style={{textAlign:"center", color:"orange", fontSize:"1.2rem", marginBottom:"0"}}>Search results for " {search} "</h5><br/>
          {content && content.map((c) => (
              <Cards
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                original_language={c.original_language}
                vote_average={c.vote_average}
              />
            ))}
        </div>
        {numOfPages > 1 && (
          <PageNum setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
  };
  
  export default Search;
  