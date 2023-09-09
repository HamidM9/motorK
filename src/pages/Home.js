import React from "react";
import { Link } from "react-router-dom";
import Entry from "../Entry.js";
import data from "../data.js";
import SearchBar from "../components/searchBar.js";

function Home() {
  return (
    <div>
      {/* Wrap the SearchBar in a div */}
      <div className="search-bar-container">
        <SearchBar data={data} />
      </div>

      {/* Wrap the car entries in a div */}
      <div className="car-entries-container">
        {data.map((car) => (
          <Entry
            key={car.id}
            make={car.make}
            model={car.model}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
