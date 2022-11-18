import React, { useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

export default function Home() {
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}`
      );
      setPhotos([...photos, ...result.data]);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        {photos.map((photos, index) => {
          return <Card key={index} photos={photos} />;
        })}
      </div>
    </div>
  );
}
