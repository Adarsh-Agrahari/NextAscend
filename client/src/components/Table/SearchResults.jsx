import React, { useState, useEffect } from "react";
import "./Table.css";
import Card from "../card/card";
import Pagination from "../Pagination/Pagination";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageSize = 5; // Number of items per page

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/opportunities'); // Update with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Calculate the current items to display
  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {currentData.length === 0
        ? "No results Found"
        : currentData.map((item, i) => (
            <Card key={i} item={item} />
          ))}
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default SearchResults;
