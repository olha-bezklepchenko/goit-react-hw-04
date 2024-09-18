import { useEffect, useState } from "react";
import { fetchPhotos } from "./services/api";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPhotos();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery photos={photos} />
      <LoadMoreBtn />
    </>
  );
}

export default App;
