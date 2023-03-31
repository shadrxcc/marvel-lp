import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Paginate from "./paginate";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const fetchComics = async () => {
    const response = await axios
      .get(
        "https://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=3377978565cce1a5c3f87711e1427366&hash=9fa0d653760e99a8588bb5b372d12af3"
      )
      .catch((err) => {
        console.log(err);
      });
    setComics(response.data.data.results);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = comics.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="comics p-0 md:p-[7em]">
      <p className="text-2xl md:text-3xl py-4 font-semibold text-center md:text-start">
        MARVEL COMICS
      </p>
      <div className="flex flex-col">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {currentPosts.map((comic) => {
            return (
              <div key={comic.id}>
                <img
                  className="md:w-[14em] w-[20em] m-auto rounded-lg h-[25em] md:h-[20em] hover:animate-pulse comic"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <Paginate
          totalPosts={comics.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          postsPerPage={postPerPage}
        />
      </div>
    </div>
  );
};

export default Comics;
