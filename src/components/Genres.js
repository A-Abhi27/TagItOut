import Chip from "@mui/material/Chip";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (gen) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== gen.id)
    );
    setGenres([...genres, gen]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="genre">
      {selectedGenres.map((gen) => (
        <Chip
          style={{ margin: 2 }}
          label={gen.name}
          key={gen.id}
          color="primary"
          clickable
          size="medium"
          onDelete={() => handleRemove(gen)}
        />
      ))}
      {genres.map((gen) => (
        <Chip
          style={{ margin: 2 }}
          label={gen.name}
          key={gen.id}
          clickable
          size="small"
          onClick={() => handleAdd(gen)}
        />
      ))}
    </div>
  );
};

export default Genres;
