import React from "react";
import Pagination from '@mui/material/Pagination';

function PageNum({ setPage, numOfPages = 10 }) {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "99.4%",
        display: "flex",
        justifyContent: "center",
        backgroundColor:"grey",
        padding:" 5px"
      }}
    >
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton hidePrevButton />
    </div>
  );
};
export default PageNum;
