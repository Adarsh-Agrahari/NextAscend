import React, { useState } from "react";
import "./Table.css";
import dataset from "../../assets/dev_data/data5.json";
import Card from "../card/card";
import Pagination from "../Pagination/Pagination"; 

const SearchResults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page

  // Calculate the current items to display
  const currentData = dataset.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      {currentData.length === 0
        ? "No results Found"
        : currentData.map((item, i) => (
            <Card key={i} item={item} />
          ))}
      <Pagination
        currentPage={currentPage}
        totalCount={dataset.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default SearchResults;
