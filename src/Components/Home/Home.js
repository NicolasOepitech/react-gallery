import React, { useEffect } from "react";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}`
      );
      setPhotos([...photos, ...result.data]);
    };
    fetchData();
  }, [page]);

  return (
    <div>
      <h1>Home</h1>
      <div className="wrapper">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>

      <InfiniteScroll
        dataLength={photos.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      />
    </div>
  );
}
