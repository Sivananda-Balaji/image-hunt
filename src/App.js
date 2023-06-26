import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };
  return (
    <div>
      <SearchBar formSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
